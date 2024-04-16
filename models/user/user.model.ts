import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';

import {
	UserInstanceMethods,
	UserModel,
	UserQueryHelpers,
	UserSchemaOptions,
	UserStaticMethods,
	UserVirtuals,
} from '!common/models/user';
import { ValidationHydratedDocument } from '!common/models/validation';
import { passwordSchema } from '^common/elements';

import { replaceEmail, replacePhone } from '@server/utils';
import { Jwt, JwtOAuth, tokenExpirationTime } from '&server/jwt';

import { ValidationMongooseSchema } from './validation.model';

const required = true;
const unique = true;
/* --------------------- Schema --------------------- */
const userSchema = new Schema<
	UserDocumentI<ValidationHydratedDocument>,
	UserModel,
	UserInstanceMethods,
	UserQueryHelpers,
	UserVirtuals,
	UserStaticMethods,
	UserSchemaOptions
>(
	{
		username: { type: String, required, unique },
		email: { type: String, required, unique },
		password: { type: String, required },
		enabled: { type: Boolean, default: true },
		firstName: { type: String, required },
		lastName: { type: String, required },
		phone: { type: String },
		profilePicture: { type: String },
		lastLogin: { type: Date },
		validated: {
			email: {
				type: ValidationMongooseSchema,
				default: {
					value: false,
				},
			},
			phone: {
				type: ValidationMongooseSchema,
				default: {
					value: false,
				},
			},
		},
		apps: {
			google: {
				id: { type: String },
			},
		},
	},
	{ timestamps: true }
);
/* --------------------- Virtuals ---------------------  */
userSchema
	.virtual('fullName')
	.get(function () {
		return `${this.firstName} ${this.lastName}`;
	})
	.set(function () {
		throw new Error('Cannot set fullName');
	});
/* --------------------- Hooks ---------------------  */
userSchema.pre('save', async function (next) {
	try {
		if (this.isNew || this.isModified('password')) {
			passwordSchema().parse(this.password);
			this.password = await bcrypt.hash(this.password, 10);
		}
		next();
	} catch (err) {
		next(err as Error);
	}
});

/* --------------------- Methods ---------------------  */
userSchema.methods.toOptimizedObject = function (convertDate = false) {
	return {
		email: this.email,
		username: this.username,
		phone: this.phone,
		firstName: this.firstName,
		lastName: this.lastName,
		profilePicture: this.profilePicture,
		id: this._id.toString(),
		fullName: this.fullName,
		validated: {
			email: this.validated.email.toOptimizedObject(),
			phone: this.validated.phone.toOptimizedObject(),
		},
		createdAt: convertDate ? this.createdAt.toISOString() : this.createdAt,
		updatedAt: convertDate ? this.updatedAt.toISOString() : this.updatedAt,
	};
};
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};
userSchema.methods.comparePublicKey = async function (publicKey, issAt) {
	const user = this.toObject();
	return await bcrypt.compare(`${user.username}/pk/${issAt}`, publicKey);
};
userSchema.methods.generatePublicKey = async function (date) {
	const user = this.toObject();
	return bcrypt.hash(`${user.username}/pk/${date}`, 10);
};
userSchema.methods.generateAuthToken = async function () {
	const nowDate = Math.floor(Date.now() / 1000);
	return Jwt.sign({
		id: this._id.toString(),
		exp: nowDate + tokenExpirationTime,
		issAt: nowDate,
		issBy: 'a9ra',
		pk: await this.generatePublicKey(nowDate),
	});
};
userSchema.methods.generateOAuthToken = async function (issFor = 'AF') {
	const nowDate = Math.floor(Date.now() / 1000);
	return JwtOAuth.sign({
		id: this._id.toString(),
		exp: nowDate + 60000, // 1 minute
		issAt: nowDate,
		issBy: 'a9ra',
		issFor,
		pk: await this.generatePublicKey(nowDate),
	});
};

userSchema.methods.toNecessaryUser = function (replace = true) {
	const user = this.toOptimizedObject();
	return {
		fullName: user.fullName,
		firstName: user.firstName,
		lastName: user.lastName,
		profilePicture: user.profilePicture,
		// convert Phone from full number to 00*********00 leaving only the first 2 and last 2 digits /* /(\d{2})(\d+)(\d{2})/ */
		phone: user.phone ? (replace ? replacePhone(user.phone) : user.phone) : /* istanbul ignore next */ undefined,
		// convert Email from usertest@mail.com to user****@****.com
		email: replace ? replaceEmail(user.email) : user.email,
	};
}; /* istanbul ignore next */
userSchema.methods.validateUser = async function (key, path = 'email') {
	const validationDocument = this.validated[path];
	const valid = await validationDocument.checkKey(key, this[path]);
	if (!valid) throw new Error('Invalid validation key');
	this.validated[path].value = true;
	this.validated[path].updatedAt = new Date();

	await this.save();
	return this;
};
userSchema.methods.generateValidationToken = async function (path = 'email') {
	const validationDocument = this.validated[path];
	const date = new Date();
	const key = await validationDocument.generateKey(this.email, date, path);
	this.validated[path].updatedAt = date;
	await this.save();
	return key;
};
/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

userSchema.statics.findByUsername = function (username) {
	return this.findOne({ username });
};
userSchema.statics.findByEmail = function (email) {
	return this.findOne({ email });
};
userSchema.statics.findUnique = async function (username) {
	const user = await this.findOne({
		// or between username or email using username variable
		$or: [{ username }, { email: username }],
	});
	if (!user) throw new Error('User not found');
	if (!user.enabled) throw new Error('User is not enabled');
	return user;
};
userSchema.statics.createUser = async function (user: UserRegistrationI) {
	if (user.terms !== true) throw new Error('You must accept the terms and conditions');
	if (user.password !== user.confirmPassword) throw new Error('Passwords do not match');

	const newUser = new this(user);
	await newUser.save();
	return newUser;
};

userSchema.statics.findByCredentials = async function (username, password) {
	const user = await this.findUnique(username);
	const isMatch = await user.comparePassword(password);
	if (!isMatch) throw new Error('Invalid credentials');
	return user;
};

userSchema.statics.registerGoogleUser = async function (user: UserGoogleRegistrationI) {
	const existingUser = await this.findOne({
		apps: { google: { id: user.googleId } },
	});
	if (existingUser) return [existingUser, false];
	const userRegistration: UserDocumentI = {
		username: user.username,
		email: user.email,
		apps: { google: { id: user.googleId } },
		enabled: true,
		firstName: user.firstName,
		lastName: user.lastName,
		phone: user.phone,
		profilePicture: user.profilePicture,
		password: user.password,
		validated: {
			email: { value: true },
			phone: { value: false },
		},
	};

	const newUser = new this(userRegistration);
	await newUser.save();
	return [newUser, true];
};
userSchema.statics.getUserFromToken = async function (payload) {
	// check if Date.now() is greater than the expiration date "payload.exp"
	if (Date.now() > payload.exp * 1000) throw new Error('Token expired');
	const user = await userModel.findById(payload.id);
	// verify if user exists and the public key is correct
	if (!user) throw new Error('User not found');
	if (!(await user.comparePublicKey(payload.pk, payload.issAt))) throw new Error('Invalid Public Key');
	return user;
};

/* --------------------- Generate Model --------------------- */
const userModel = model<UserDocumentI<ValidationHydratedDocument>, UserModel, UserQueryHelpers>('User', userSchema);
export default userModel;
