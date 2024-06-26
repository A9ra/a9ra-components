import { MyZodType, z } from '../defaultZod';
import {
	A9raAppsSchema,
	booleanSchema,
	emailSchema,
	mongoIDSchema,
	passwordSchema,
	phoneSchema,
	stringDateSchema,
	urlSchema,
	usernameSchema,
} from '../elements';

import { levelsEnumSchema, secondarySpecialtiesSchema } from './enums/levels';
import { ContactInformationSchema } from './generals.ts/ContactInformation';
import { PersonalInformationSchema } from './generals.ts/PersonalInformation';
import { InterestsSchema, PreferencesSchema } from './profiles/students';

/* --------------------------------- User Login Schema --------------------------------- */
export const userLoginSchema = ({
	email,
	password,
	username,
	stay,
}: Partial<Record<keyof UserLogInI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<UserLogInI>>(
			{
				username: z.union([usernameSchema(username), emailSchema(email)]),
				password: passwordSchema(password),
				stay: booleanSchema(stay).optional(),
			},
			{
				description: 'User Login Schema',
				invalid_type_error: 'Invalid User Login Schema',
				required_error: 'User Login Schema is required',
			}
		)
		.openapi('User_Login_Request', { description: 'User Login Schema' });

export const oauthRequestQuerySchema = z.object<MyZodType<OAuthRequestQueryI>>({
	issFor: A9raAppsSchema().optional(),
});
export const LoginOAuthRequestSchema = z.object<MyZodType<UserOAuthI>>({
	token: z.string({
		description: 'The token received from the OAuth provider',
		invalid_type_error: 'Invalid token',
		required_error: 'Token is required',
	}),
});

/* --------------------------------- User Apps Schema --------------------------------- */
export const UserAppsSchema = () =>
	z.object<MyZodType<UserAppsI>>({
		google: z.string({
			description: 'Google ID',
			invalid_type_error: 'Invalid Google ID',
			required_error: 'Google ID is required',
		}),
	});

/* --------------------------------- User Document Schema --------------------------------- */

export const UserDocumentSchema = (
	{
		email,
		phone,
		password,
		username,
		lastLogin,
		enabled,
	}: Partial<Record<keyof UserDocumentI, ErrorsSchemaMsgI>> = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<UserDocumentI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				personalInformation: PersonalInformationSchema(),
				password: passwordSchema(password),
				phone: phoneSchema(phone).optional(),
				enabled: booleanSchema(enabled),
				lastLogin: stringDateSchema(lastLogin),
				apps: UserAppsSchema(),
				contactInformation: ContactInformationSchema(),
				profilePicture: urlSchema().optional(),
			},
			{
				description: DocumentUserMsg.description || 'User document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid User Schema',
				required_error: DocumentUserMsg.required || 'User document Schema is required',
			}
		)
		.openapi('User_Document', { description: 'User document Schema' });
};
/* --------------------------------- User Schema --------------------------------- */

export const GeneralUserSchema = ({
	email,
	phone,
	username,
	password,
}: Partial<Record<Exclude<keyof UserI, 'personalInformation'>, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<UserI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				phone: phoneSchema(phone).optional(),
				personalInformation: PersonalInformationSchema(),
				password: passwordSchema(password),
				profilePicture: urlSchema().optional(),
			},
			{
				description: 'General User Schema',
				invalid_type_error: 'Invalid User Schema',
				required_error: 'User Schema is required',
			}
		)
		.openapi('Public_User', { description: 'Public User Schema' });
export const PublicUserSchema = ({
	id,
	email,
	phone,
	username,
}: Partial<Record<keyof PublicUserI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<PublicUserI>>(
			{
				username: usernameSchema(username),
				email: emailSchema(email),
				phone: phoneSchema(phone).optional(),
				id: mongoIDSchema(id),
				personalInformation: PersonalInformationSchema(),
				emailValidated: booleanSchema(),
				profilePicture: urlSchema().optional(),
			},
			{
				description: 'Public User Schema',
				invalid_type_error: 'Invalid User Schema',
				required_error: 'User Schema is required',
			}
		)
		.openapi('Public_User', { description: 'Public User Schema' });

export const AuthUserSchema = (userMsgs: Partial<Record<keyof UserI, ErrorsSchemaMsgI>> = {}) =>
	z
		.object<MyZodType<UserAuthI>>(
			{
				user: PublicUserSchema(userMsgs),
				token: z
					.string({
						description: 'User token',
						invalid_type_error: 'Invalid token',
						required_error: 'Token is required',
					})
					.optional(),
				new: booleanSchema({
					description: 'If the user is new',
					invalid: 'Invalid new',
					required: 'New is required',
				}).optional(),
			},
			{
				description: 'User Auth Response Schema',
				invalid_type_error: 'Invalid User Auth Response Schema',
				required_error: 'User Auth Response Schema is required',
			}
		)
		.openapi('User_Auth_Response', { description: 'User Auth Response Schema' });

export const NecessaryUserSchema = (
	{ email, id, username, phone }: Partial<Record<keyof NecessaryUserI, ErrorsSchemaMsgI>> = {},
	NecessaryUserMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<NecessaryUserI>>(
			{
				...PublicUserSchema({ email, id, username, phone }).shape,
			},
			{
				description: NecessaryUserMsg.description || 'Necessary User Schema',
				invalid_type_error: NecessaryUserMsg.invalid || 'Invalid Necessary User Schema',
				required_error: NecessaryUserMsg.required || 'Necessary User Schema is required',
			}
		)
		.openapi('Necessary_User', { description: 'Necessary User Schema' });
/* --------------------------------- User Register Schema --------------------------------- */
export const userRegisterSchema = ({
	username,
	email,
	password,
	phone,
	/* confirmPassword: confirmPasswordMsg = { description: 'The password confirmation' }, */
}: Partial<Record<Exclude<keyof UserRegistrationI, 'personalInformation'>, ErrorsSchemaMsgI>> = {}) => {
	const schema = z
		.object<MyZodType<UserRegistrationI>>(
			{
				...GeneralUserSchema({ username, email, phone, password }).shape,
				interests: InterestsSchema(),
				preferences: PreferencesSchema(),
				level: levelsEnumSchema(),
				specialty: secondarySpecialtiesSchema().optional(),
			},
			{
				description: 'User Registration Schema',
				invalid_type_error: 'Invalid User Registration Schema',
				required_error: 'User Registration Schema is required',
			}
		)
		.openapi('User_Registration_Request', { description: 'User Registration Schema' });
	/* schema.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: confirmPasswordMsg?.invalid || 'The passwords did not match',
			});
		}
	}); */
	return schema;
};
