import { model, Schema, type Types } from 'mongoose';

import type {
	MajorChoiceInstanceMethods,
	MajorChoiceModel,
	MajorChoiceQueryHelpers,
	MajorChoiceSchemaOptions,
	MajorChoiceStaticMethods,
	MajorChoiceVirtual,
} from '!common/models/majorChoice';

const required = true;
/* --------------------- Schema --------------------- */
const acceptanceSchema = new Schema<PriorityMinimumI>(
	{
		priority: { type: Number, required },
		average: { type: Number, required },
	},
	{ _id: false }
);
const priorityAcceptanceSchema = new Schema<PriorityAcceptanceI>(
	{
		M: { type: acceptanceSchema },
		A: { type: acceptanceSchema },
		F: { type: acceptanceSchema },
		Fl: { type: acceptanceSchema },
		P: { type: acceptanceSchema },
		Km: { type: acceptanceSchema },
		S: { type: acceptanceSchema },
		Tec: { type: acceptanceSchema },
	},
	{ _id: false }
);
const majorChoiceSchema = new Schema<
	MajorChoiceI<Types.ObjectId>,
	MajorChoiceModel,
	MajorChoiceInstanceMethods,
	MajorChoiceQueryHelpers,
	MajorChoiceVirtual,
	MajorChoiceStaticMethods,
	MajorChoiceSchemaOptions
>(
	{
		major: { type: Schema.Types.ObjectId, ref: 'Major', required },
		university: { type: Schema.Types.ObjectId, ref: 'University', required },
		priorities: { type: priorityAcceptanceSchema, required },
		undetermined: { type: Boolean },
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* majorSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
majorChoiceSchema.methods.toOptimizedObject = function () {
	return {
		id: this._id.toString(),
		major: this.major.toString(),
		university: this.university.toString(),
		priorities: this.priorities,
		undetermined: this.undetermined,
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const majorChoiceModel = model<MajorChoiceI<Types.ObjectId>, MajorChoiceModel, MajorChoiceQueryHelpers>(
	'MajorChoice',
	majorChoiceSchema
);
export default majorChoiceModel;
