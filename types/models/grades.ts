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

export interface GradesVirtual {}

export interface GradesInstanceMethods {
	toOptimizedObject(): GradesI;
	toGrades(): StudentGradesI;
}
/* QueryWithHelpers<GradesHydratedDocument | null, GradesHydratedDocument, GradesQueryHelpers, GradesI<Types.ObjectId>,'findOne' >; */
export interface GradesQueryHelpers {}
export interface GradesDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<GradesDocument, GradesI<Types.ObjectId>, ResolveSchemaOptions<GradesSchemaOptions>>,
		ResolveSchemaOptions<GradesSchemaOptions>
	> {}
export interface GradesHydratedDocument
	extends HydratedDocument<FlatRecord<GradesDocument>, GradesInstanceMethods & GradesVirtual, GradesQueryHelpers> {}

export interface GradesStaticMethods {}
export interface GradesSchemaOptions {
	timestamps: true;
}
export interface GradesModel
	extends Model<
			GradesI<Types.ObjectId>,
			GradesQueryHelpers,
			GradesInstanceMethods,
			GradesVirtual,
			GradesHydratedDocument
		>,
		GradesStaticMethods {}
