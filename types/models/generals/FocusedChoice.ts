import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	ResolveSchemaOptions,
} from 'mongoose';

export interface FocusedChoiceVirtual {}

export interface FocusedChoiceInstanceMethods<T extends string = string> {
	toOptimizedObject: (this: FocusedChoiceHydratedDocument<T>) => FocusedChoiceI<T>;
}
export interface FocusedChoiceQueryHelpers {}
export interface FocusedChoiceDocument<T extends string = string>
	extends ApplySchemaOptions<
		ObtainDocumentType<
			FocusedChoiceDocument<T>,
			FocusedChoiceI<T>,
			ResolveSchemaOptions<FocusedChoiceSchemaOptions>
		>,
		ResolveSchemaOptions<FocusedChoiceSchemaOptions>
	> {}
export interface FocusedChoiceHydratedDocument<T extends string = string>
	extends HydratedDocument<
		FlatRecord<FocusedChoiceDocument<T>>,
		FocusedChoiceInstanceMethods & FocusedChoiceVirtual,
		FocusedChoiceQueryHelpers
	> {}

export interface FocusedChoiceStaticMethods /* <T extends string = string> */ {
	// custom static methods here
}
export interface FocusedChoiceSchemaOptions {
	timestamps: false;
	_id: false;
}
export interface FocusedChoiceModel<T extends string = string>
	extends Model<
			FocusedChoiceI<T>,
			FocusedChoiceQueryHelpers,
			FocusedChoiceInstanceMethods<T>,
			FocusedChoiceVirtual,
			FocusedChoiceHydratedDocument<T>
		>,
		FocusedChoiceStaticMethods {}
