import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';

import {
	ValidationInstanceMethods,
	ValidationModel,
	ValidationQueryHelpers,
	ValidationSchemaOptions,
	ValidationStaticMethods,
	ValidationVirtuals,
} from '!common/back/models/validation';

/* --------------------- Schema --------------------- */
const ValidationSchema = new Schema<
	ValidationI,
	ValidationModel,
	ValidationInstanceMethods,
	ValidationQueryHelpers,
	ValidationVirtuals,
	ValidationStaticMethods,
	ValidationSchemaOptions
>(
	{
		value: { type: Boolean, default: false },
		updatedAt: { type: Date, default: Date.now },
	},
	{ _id: false }
);

/* --------------------- Virtuals ---------------------  */

/* --------------------- Hooks ---------------------  */

/* --------------------- Methods ---------------------  */
ValidationSchema.methods.generateKey = async function (value, date, path = 'email') {
	if (this.value) throw new Error(`${path} already validated`);
	const unencrypted = `${date.toISOString()}-${value}`;
	const hash = await bcrypt.hash(unencrypted, 10).catch(() => {
		throw new Error("Couldn't generate validation key");
	});

	return hash;
};
ValidationSchema.methods.checkKey = async function (key, value) {
	const unencrypted = `${this.updatedAt.toISOString()}-${value}`;
	return bcrypt.compare(unencrypted, key).catch(() => {
		throw new Error("Couldn't check validation key");
	});
};
ValidationSchema.methods.toOptimizedObject = function () {
	const validation = this.toObject();
	return { value: validation.value };
};
/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
/* const ValidationModel = model<ValidationI, ValidationModel, ValidationQueryHelpers>('Validation', ValidationSchema);
export default ValidationModel; */

/* exports */
export const ValidationMongooseSchema = ValidationSchema;

const ValidationModel = model<ValidationI, ValidationModel, ValidationQueryHelpers>('Validation', ValidationSchema);

export default ValidationModel;
