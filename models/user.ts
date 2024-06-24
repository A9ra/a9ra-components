import { replaceEmail, replacePhone } from '@server/utils';
import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';

import {
	UserInstanceMethods,
	UserModel,
	UserQueryHelpers,
	UserSchemaOptions,
	UserStaticMethods,
	UserVirtual,
} from '!common/models/user';
import { Jwt, JwtOAuth, tokenExpirationTime } from '&server/jwt';
import { passwordSchema } from '^common/elements';

import { contactInformationSchema } from './generals/ContactInformation';
import { personalInformationSchema } from './generals/PersonalInformation';

const required = true;
const unique = true;
/* --------------------- Schema --------------------- */
const userSchema = new Schema<
	UserDocumentI,
	UserModel,
	UserInstanceMethods,
	UserQueryHelpers,
	UserVirtual,
	UserStaticMethods,
	UserSchemaOptions
>(
	{
		username: { type: String, required, unique },
		email: { type: String, required, unique },
		password: { type: String, required },
		personalInformation: { type: personalInformationSchema },
		phone: { type: String },
		lastLogin: { type: Date, default: Date.now },
		enabled: { type: Boolean, default: true },
		contactInformation: {
			type: contactInformationSchema,
		},
		apps: {
			google: { type: String },
		},
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
userSchema.pre('save', async function (next) {
	try {
		if (this.isNew || this.isModified('password')) {
			passwordSchema().parse(this.password);
			this.password = await bcrypt.hash(this.password, 10);
		}
		if (this.isNew) {
			if (!this.contactInformation) {
				this.contactInformation = {
					phones: this.phone
						? [
								{
									number: this.phone,
								},
							]
						: [],
					emails: [this.email],
					validatedEmails: [],
					socialMediaUrls: {},
				};
			}
		}
		next();
	} catch (err) {
		next(err as Error);
	}
});

/* --------------------- Methods ---------------------  */
userSchema.methods.toOptimizedObject = function () {
	return {
		email: this.email,
		username: this.username,
		personalInformation: this.personalInformation,
		phone: this.phone,
		id: this._id.toString(),
		emailValidated: this.contactInformation.validatedEmails.includes(this.email),
	};
};
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.methods.comparePublicKey = async function (publicKey) {
	const user = this.toObject();
	return await bcrypt.compare(`${user.username}/pk/${user.createdAt}`, publicKey);
};
userSchema.methods.generatePublicKey = async function () {
	const user = this.toObject();
	return bcrypt.hash(`${user.username}/pk/${user.createdAt}`, 10);
};
userSchema.methods.generateAuthToken = async function () {
	const nowDate = Math.floor(Date.now() / 1000);
	return Jwt.sign({
		id: this._id.toString(),
		exp: nowDate + tokenExpirationTime,
		issAt: nowDate,
		issBy: 'a9ra',
		pk: await this.generatePublicKey(),
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
		pk: await this.generatePublicKey(),
	});
};

userSchema.methods.toNecessaryUser = function (replace = true) {
	const user = this.toOptimizedObject();
	return {
		...user,
		email: replace ? replaceEmail(user.email) : user.email,
		phone: replace ? (user.phone ? replacePhone(user.phone) : undefined) : user.phone,
	};
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
userSchema.statics.createUser = async function (user) {
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

userSchema.statics.registerGoogleUser = async function (userID, user) {
	const existingUser = await this.findById(userID);
	if (!existingUser) throw new Error('User not found');
	if (existingUser.apps.google) throw new Error('Google account already linked');
	existingUser.apps.google = user.googleId;
	await existingUser.save();
	return existingUser;
};
userSchema.statics.getUserFromToken = async function (payload) {
	// check if Date.now() is greater than the expiration date "payload.exp"
	if (Date.now() > payload.exp * 1000) throw new Error('Token expired');
	const user = await userModel.findById(payload.id);
	// verify if user exists and the public key is correct
	if (!user) throw new Error('User not found');
	if (!(await user.comparePublicKey(payload.pk))) throw new Error('Invalid Public Key');
	return user;
};

/* --------------------- Generate Model --------------------- */
const userModel = model<UserDocumentI, UserModel, UserQueryHelpers>('User', userSchema);
export default userModel;