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

export interface MajorChoiceVirtual {}

export interface MajorChoiceInstanceMethods {
	toOptimizedObject(): PublicMajorChoiceI;
}
/* QueryWithHelpers<MajorChoiceHydratedDocument | null, MajorChoiceHydratedDocument, MajorChoiceQueryHelpers, MajorChoiceI<Types.ObjectId>,'findOne' >; */
export interface MajorChoiceQueryHelpers {}
export interface MajorChoiceDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<
			MajorChoiceDocument,
			MajorChoiceI<Types.ObjectId>,
			ResolveSchemaOptions<MajorChoiceSchemaOptions>
		>,
		ResolveSchemaOptions<MajorChoiceSchemaOptions>
	> {}
export interface MajorChoiceHydratedDocument
	extends HydratedDocument<
		FlatRecord<MajorChoiceDocument>,
		MajorChoiceInstanceMethods & MajorChoiceVirtual,
		MajorChoiceQueryHelpers
	> {}

export interface MajorChoiceStaticMethods {}
export interface MajorChoiceSchemaOptions {
	timestamps: true;
}
export interface MajorChoiceModel
	extends Model<
			MajorChoiceI<Types.ObjectId>,
			MajorChoiceQueryHelpers,
			MajorChoiceInstanceMethods,
			MajorChoiceVirtual,
			MajorChoiceHydratedDocument
		>,
		MajorChoiceStaticMethods {}
