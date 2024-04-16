import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
} from 'mongoose';

export interface ValidationVirtuals {}
export interface ValidationInstanceMethods {
	// custom instance methods here
	toOptimizedObject: (this: ValidationHydratedDocument) => Omit<ValidationI, 'updatedAt'>;
	generateKey: (
		this: ValidationHydratedDocument,
		value: string,
		date: Date,
		path?: ValidationKeysI
	) => Promise<string>;
	checkKey: (this: ValidationHydratedDocument, key: string, value?: string) => Promise<boolean>;
}
/* QueryWithHelpers<ValidationHydratedDocument | null, ValidationHydratedDocument, ValidationQueryHelpers, ValidationI,'findOne' >; */
export interface ValidationQueryHelpers {}
export interface ValidationDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<ValidationDocument, ValidationI, ResolveSchemaOptions<ValidationSchemaOptions>>,
		ResolveSchemaOptions<ValidationSchemaOptions>
	> {}
export interface ValidationHydratedDocument
	extends HydratedDocument<
		FlatRecord<ValidationDocument>,
		ValidationInstanceMethods & ValidationVirtuals,
		ValidationQueryHelpers
	> {}

export interface ValidationStaticMethods {
	// custom static methods here
}
export interface ValidationSchemaOptions {
	_id: false;
}
export interface ValidationModel
	extends Model<
			ValidationI,
			ValidationQueryHelpers,
			ValidationInstanceMethods,
			ValidationVirtuals,
			ValidationHydratedDocument
		>,
		ValidationStaticMethods {}
