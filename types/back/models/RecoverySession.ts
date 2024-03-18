import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObjectId,
	ObtainDocumentType,
	ResolveSchemaOptions,
} from 'mongoose';

import { UserHydratedDocument } from './user';

export interface RecoverySessionDocumentI {
	email: string;
	phone: string;
	userId: ObjectId;
	uuid: string;
}

export interface RecoverySessionVirtuals {}
export interface RecoverySessionInstanceMethods {
	compareUuid: (this: RecoverySessionDocument, uuid: string) => boolean;
}
export interface RecoverySessionQueryHelpers {}
export interface RecoverySessionDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<
			RecoverySessionDocument,
			RecoverySessionDocumentI,
			ResolveSchemaOptions<RecoverySessionSchemaOptions>
		>,
		ResolveSchemaOptions<RecoverySessionSchemaOptions>
	> {}
export interface RecoverySessionHydratedDocument
	extends HydratedDocument<
		FlatRecord<RecoverySessionDocument>,
		RecoverySessionInstanceMethods & RecoverySessionVirtuals,
		RecoverySessionQueryHelpers
	> {}

export interface RecoverySessionStaticMethods {
	// custom static methods here
	createRecoverySession: (
		this: RecoverySessionModel,
		username: string,
		replaceUser?: boolean
	) => Promise<[RecoverySessionHydratedDocument, NecessaryUserI]>;
	getNecessarySession: (
		this: RecoverySessionModel,
		sessionId: string,
		replaceUser?: boolean
	) => Promise<[RecoverySessionHydratedDocument, NecessaryUserI]>;
	getSession: (
		this: RecoverySessionModel,
		sessionId: string
	) => Promise<[RecoverySessionHydratedDocument, UserHydratedDocument]>;
	resetPassword: (
		this: RecoverySessionModel,
		sessionId: string,
		password: string,
		secretKey: string
	) => Promise<void>;
}
export interface RecoverySessionSchemaOptions {
	timestamps: true;
}
export interface RecoverySessionModel
	extends Model<
			RecoverySessionDocumentI,
			RecoverySessionQueryHelpers,
			RecoverySessionInstanceMethods,
			RecoverySessionVirtuals,
			RecoverySessionHydratedDocument
		>,
		RecoverySessionStaticMethods {}
