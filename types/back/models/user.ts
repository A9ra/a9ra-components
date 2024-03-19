import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
} from 'mongoose';

import { ValidationHydratedDocument } from './validation';

export interface UserVirtuals {
	fullName: string;
}
export interface UserInstanceMethods {
	comparePassword: (this: UserHydratedDocument, password: string) => Promise<boolean>;
	comparePublicKey: (this: UserHydratedDocument, publicKey: string, issAt: number) => Promise<boolean>;
	generatePublicKey: (this: UserHydratedDocument, dateInSeconds: number) => Promise<string>;
	generateAuthToken: (this: UserHydratedDocument) => Promise<string>;
	generateOAuthToken: (this: UserHydratedDocument, issFor?: A9raAppsI) => Promise<string>;
	toOptimizedObject: <T extends false | true = false>(
		this: UserHydratedDocument,
		convertDate?: T
	) => UserI<string, TimeType<T>>;
	toNecessaryUser: (this: UserHydratedDocument, replace?: boolean) => NecessaryUserI;
	validateUser: (this: UserHydratedDocument, value: string, path?: ValidationKeysI) => Promise<UserHydratedDocument>;
	generateValidationToken: (this: UserHydratedDocument, path?: ValidationKeysI) => Promise<string>;
}
/* QueryWithHelpers<UserHydratedDocument | null, UserHydratedDocument, UserQueryHelpers, UserDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface UserQueryHelpers {}
export interface UserDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<
			UserDocument,
			UserDocumentI<ValidationHydratedDocument>,
			ResolveSchemaOptions<UserSchemaOptions>
		>,
		ResolveSchemaOptions<UserSchemaOptions>
	> {}
export interface UserHydratedDocument
	extends HydratedDocument<FlatRecord<UserDocument>, UserInstanceMethods & UserVirtuals, UserQueryHelpers> {}
type TimeType<T extends true | false> = T extends true ? Date : string;

export interface UserStaticMethods {
	// custom static methods here
	createUser: (this: UserModel, user: UserRegistrationI) => Promise<UserHydratedDocument>;
	findByCredentials: (this: UserModel, username: string, password: string) => Promise<UserHydratedDocument>;
	registerGoogleUser: (this: UserModel, user: UserGoogleRegistrationI) => Promise<[UserHydratedDocument, boolean]>;
	findByUsername: (this: UserModel, username: string) => Promise<UserHydratedDocument | null>;
	findByEmail: (this: UserModel, email: string) => Promise<UserHydratedDocument | null>;
	findUnique: (this: UserModel, username: string) => Promise<UserHydratedDocument>;
	getUserFromToken: (this: UserModel, payload: A9RA_JWT_Payload) => Promise<UserHydratedDocument>;
}
export interface UserSchemaOptions {
	timestamps: true;
}
export interface UserModel
	extends Model<
			UserDocumentI<ValidationHydratedDocument>,
			UserQueryHelpers,
			UserInstanceMethods,
			UserVirtuals,
			UserHydratedDocument
		>,
		UserStaticMethods {}
