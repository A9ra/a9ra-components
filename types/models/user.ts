import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
	Types,
} from 'mongoose';

export interface UserVirtual {}

export interface UserInstanceMethods {
	comparePassword: (this: UserHydratedDocument, password: string) => Promise<boolean>;
	comparePublicKey: (this: UserHydratedDocument, publicKey: string) => Promise<boolean>;
	generatePublicKey: (this: UserHydratedDocument) => Promise<string>;
	generateAuthToken: (this: UserHydratedDocument) => Promise<string>;
	generateOAuthToken: (this: UserHydratedDocument, issFor?: A9raAppsI) => Promise<string>;
	toOptimizedObject: (this: UserHydratedDocument) => PublicUserI;
	toNecessaryUser: (this: UserHydratedDocument, replace?: boolean) => NecessaryUserI;
}
/* QueryWithHelpers<UserHydratedDocument | null, UserHydratedDocument, UserQueryHelpers, UserDocumentI<ValidationHydratedDocument>,'findOne' >; */
export interface UserQueryHelpers {}
export interface UserDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<UserDocument, UserDocumentI, ResolveSchemaOptions<UserSchemaOptions>>,
		ResolveSchemaOptions<UserSchemaOptions>
	> {}
export interface UserHydratedDocument
	extends HydratedDocument<FlatRecord<UserDocument>, UserInstanceMethods & UserVirtual, UserQueryHelpers> {}

export interface UserStaticMethods {
	// custom static methods here
	createUser: (this: UserModel, user: UserI) => Promise<UserHydratedDocument>;
	findByCredentials: (this: UserModel, email: string, password: string) => Promise<UserHydratedDocument>;
	registerGoogleUser: (
		this: UserModel,
		userId: string | Types.ObjectId,
		user: UserGoogleRegistrationI
	) => Promise<UserHydratedDocument>;
	loginGoogleUser: (this: UserModel, googleId: string) => Promise<UserHydratedDocument>;
	findByUsername: (this: UserModel, username: string) => Promise<UserHydratedDocument | null>;
	findByEmail: (this: UserModel, email: string) => Promise<UserHydratedDocument | null>;
	findUnique: (this: UserModel, username: string) => Promise<UserHydratedDocument>;
	getUserFromToken: (this: UserModel, payload: A9RA_JWT_Payload) => Promise<UserHydratedDocument>;
}
export interface UserSchemaOptions {
	timestamps: true;
}
export interface UserModel
	extends Model<UserDocumentI, UserQueryHelpers, UserInstanceMethods, UserVirtual, UserHydratedDocument>,
		UserStaticMethods {}
