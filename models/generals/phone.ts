import { /*  model, */ Schema } from 'mongoose';

import {
	PhoneInstanceMethods,
	PhoneModel,
	PhoneQueryHelpers,
	PhoneSchemaOptions,
	PhoneStaticMethods,
	PhoneVirtual,
} from '!common/models/generals/Phone';

const required = true;
/* --------------------- Schema --------------------- */
const phoneSchema = new Schema<
	PhoneI,
	PhoneModel,
	PhoneInstanceMethods,
	PhoneQueryHelpers,
	PhoneVirtual,
	PhoneStaticMethods,
	PhoneSchemaOptions
>(
	{
		number: {
			type: String,
			required,
		},
		code: {
			type: String,
		},
	},
	{ timestamps: true, _id: false }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */

/* --------------------- Methods ---------------------  */
phoneSchema.methods.toOptimizedObject = function () {
	return this.toObject();
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
/* const phoneModel = model<PhoneI, PhoneModel, PhoneQueryHelpers>('Phone', phoneSchema);
export default phoneModel; */
export { phoneSchema };
