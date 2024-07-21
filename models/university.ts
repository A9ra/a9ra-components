import { model, Schema } from 'mongoose';

import {
	UniversityInstanceMethods,
	UniversityModel,
	UniversityQueryHelpers,
	UniversitySchemaOptions,
	UniversityStaticMethods,
	UniversityVirtual,
} from '!common/models/university';

import { languageContentSchema } from './generals/languageContent';
const required = true;
/* --------------------- Schema --------------------- */
const universitySchema = new Schema<
	UniversityI,
	UniversityModel,
	UniversityInstanceMethods,
	UniversityQueryHelpers,
	UniversityVirtual,
	UniversityStaticMethods,
	UniversitySchemaOptions
>(
	{
		code: { type: String, required, unique: true },
		name: { type: languageContentSchema, required },
		website: { type: String },
		logo: { type: String },
		article: { type: Schema.Types.ObjectId, ref: 'Article' },
		isNational: { type: Boolean, default: false },
		province: { type: Number },
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* universitySchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
universitySchema.methods.toOptimizedObject = function () {
	return {
		id: this._id.toString(),
		code: this.code,
		name: this.name,
		logo: this.logo,
		isNational: this.isNational,
		province: this.province,
		website: this.website,
		article: this.article?.toString(),
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const universityModel = model<UniversityI, UniversityModel, UniversityQueryHelpers>('University', universitySchema);
export default universityModel;
