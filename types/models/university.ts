import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
} from 'mongoose';

export interface UniversityVirtual {}

export interface UniversityInstanceMethods {
	toOptimizedObject(): PublicUniversityI;
}
/* QueryWithHelpers<UniversityHydratedDocument | null, UniversityHydratedDocument, UniversityQueryHelpers, UniversityI<Types.ObjectId>,'findOne' >; */
export interface UniversityQueryHelpers {}
export interface UniversityDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<UniversityDocument, UniversityI, ResolveSchemaOptions<UniversitySchemaOptions>>,
		ResolveSchemaOptions<UniversitySchemaOptions>
	> {}
export interface UniversityHydratedDocument
	extends HydratedDocument<
		FlatRecord<UniversityDocument>,
		UniversityInstanceMethods & UniversityVirtual,
		UniversityQueryHelpers
	> {}

export interface UniversityStaticMethods {}
export interface UniversitySchemaOptions {
	timestamps: true;
}
export interface UniversityModel
	extends Model<
			UniversityI,
			UniversityQueryHelpers,
			UniversityInstanceMethods,
			UniversityVirtual,
			UniversityHydratedDocument
		>,
		UniversityStaticMethods {}
