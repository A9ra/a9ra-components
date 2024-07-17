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

export interface ProfileVirtual {}

export interface ProfileInstanceMethods {
	toOptimizedObject(): ProfileI;
}
/* QueryWithHelpers<ProfileHydratedDocument | null, ProfileHydratedDocument, ProfileQueryHelpers, ProfileI<Types.ObjectId>,'findOne' >; */
export interface ProfileQueryHelpers {}
export interface ProfileDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<ProfileDocument, ProfileI<Types.ObjectId>, ResolveSchemaOptions<ProfileSchemaOptions>>,
		ResolveSchemaOptions<ProfileSchemaOptions>
	> {}
export interface ProfileHydratedDocument
	extends HydratedDocument<
		FlatRecord<ProfileDocument>,
		ProfileInstanceMethods & ProfileVirtual,
		ProfileQueryHelpers
	> {}

export interface ProfileStaticMethods {}
export interface ProfileSchemaOptions {
	timestamps: true;
}
export interface ProfileModel
	extends Model<
			ProfileI<Types.ObjectId>,
			ProfileQueryHelpers,
			ProfileInstanceMethods,
			ProfileVirtual,
			ProfileHydratedDocument
		>,
		ProfileStaticMethods {}
