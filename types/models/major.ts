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
export interface MajorDocumentI extends MajorI<Types.ObjectId> {
	likes: Types.ObjectId[];
	dislikes: Types.ObjectId[];
}

export interface MajorInstanceMethods {
	toOptimizedObject(id?: Types.ObjectId | string): PublicMajorI;
}
/* QueryWithHelpers<MajorHydratedDocument | null, MajorHydratedDocument, MajorQueryHelpers, MajorDocumentI,'findOne' >; */
export interface MajorQueryHelpers {}
export interface MajorDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<MajorDocument, MajorDocumentI, ResolveSchemaOptions<MajorSchemaOptions>>,
		ResolveSchemaOptions<MajorSchemaOptions>
	> {}
export interface MajorHydratedDocument
	extends HydratedDocument<FlatRecord<MajorDocument>, MajorInstanceMethods & MajorVirtual, MajorQueryHelpers> {}

export interface MajorStaticMethods {}
export interface MajorSchemaOptions {
	timestamps: true;
}
export interface MajorModel
	extends Model<MajorDocumentI, MajorQueryHelpers, MajorInstanceMethods, MajorVirtual, MajorHydratedDocument>,
		MajorStaticMethods {}
