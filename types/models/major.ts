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

export interface MajorVirtual {}

export interface MajorInstanceMethods {
	toOptimizedObject(): PublicMajorI;
}
/* QueryWithHelpers<MajorHydratedDocument | null, MajorHydratedDocument, MajorQueryHelpers, MajorI<Types.ObjectId>,'findOne' >; */
export interface MajorQueryHelpers {}
export interface MajorDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<MajorDocument, MajorI<Types.ObjectId>, ResolveSchemaOptions<MajorSchemaOptions>>,
		ResolveSchemaOptions<MajorSchemaOptions>
	> {}
export interface MajorHydratedDocument
	extends HydratedDocument<FlatRecord<MajorDocument>, MajorInstanceMethods & MajorVirtual, MajorQueryHelpers> {}

export interface MajorStaticMethods {}
export interface MajorSchemaOptions {
	timestamps: true;
}
export interface MajorModel
	extends Model<MajorI<Types.ObjectId>, MajorQueryHelpers, MajorInstanceMethods, MajorVirtual, MajorHydratedDocument>,
		MajorStaticMethods {}
