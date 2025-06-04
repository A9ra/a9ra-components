import { Schema } from 'mongoose';

import {
	FocusedChoiceInstanceMethods,
	FocusedChoiceModel,
	FocusedChoiceQueryHelpers,
	FocusedChoiceSchemaOptions,
	FocusedChoiceStaticMethods,
	FocusedChoiceVirtual,
} from '!common/models/generals/FocusedChoice';

const required = true;
/* --------------------- Schema --------------------- */
export function generateFocusedChoiceSchema<T extends string = string>(enums: MyEnum<T>) {
	const focusedChoiceSchema = new Schema<
		FocusedChoiceI<T>,
		FocusedChoiceModel<T>,
		FocusedChoiceInstanceMethods<T>,
		FocusedChoiceQueryHelpers,
		FocusedChoiceVirtual,
		FocusedChoiceStaticMethods,
		FocusedChoiceSchemaOptions
	>(
		{
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			main: { type: Schema.Types.String, required, enum: enums },
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			others: { type: [{ type: Schema.Types.String, required, enum: enums }], default: [] },
		},
		{ timestamps: false, _id: false }
	);
	/* --------------------- Virtual ---------------------  */

	/* --------------------- Hooks ---------------------  */

	/* --------------------- Methods ---------------------  */
	focusedChoiceSchema.methods.toOptimizedObject = function <T extends string = string>() {
		return this.toObject() as FocusedChoiceI<T>;
	};

	/* --------------------- Query Helpers --------------------- */

	/* --------------------- static methods --------------------- */

	/* --------------------- Generate Model --------------------- */
	return focusedChoiceSchema;
}
