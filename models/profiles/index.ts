import { model, Schema, Types } from 'mongoose';

import {
	ProfileInstanceMethods,
	ProfileModel,
	ProfileQueryHelpers,
	ProfileSchemaOptions,
	ProfileStaticMethods,
	ProfileVirtual,
} from '!common/models/profiles';
export const profileOptions = { discriminatorKey: 'kind' };
const required = true;
/* --------------------- Schema --------------------- */
const profileSchema = new Schema<
	ProfileI<Types.ObjectId>,
	ProfileModel,
	ProfileInstanceMethods,
	ProfileQueryHelpers,
	ProfileVirtual,
	ProfileStaticMethods,
	ProfileSchemaOptions
>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required },
		kind: { type: String, required },
	},
	{ timestamps: true, ...profileOptions }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* profileSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
profileSchema.methods.toOptimizedObject = function () {
	return {
		user: this.user.toString(),
		kind: this.kind,
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const profileModel = model<ProfileI<Types.ObjectId>, ProfileModel, ProfileQueryHelpers>('Profile', profileSchema);
export default profileModel;
