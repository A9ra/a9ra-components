import { model, Schema, Types } from 'mongoose';

import {
	MajorInstanceMethods,
	MajorModel,
	MajorQueryHelpers,
	MajorSchemaOptions,
	MajorStaticMethods,
	MajorVirtual,
} from '!common/models/major';

import { languageContentSchema } from './generals/languageContent';
const required = true;
/* --------------------- Schema --------------------- */
const majorSchema = new Schema<
	MajorI<Types.ObjectId>,
	MajorModel,
	MajorInstanceMethods,
	MajorQueryHelpers,
	MajorVirtual,
	MajorStaticMethods,
	MajorSchemaOptions
>(
	{
		name: { type: languageContentSchema, required },
		description: { type: languageContentSchema, required },
		cover: { type: String },
		article: { type: Types.ObjectId, ref: 'Article' },
		characters: [{ type: String }],
		uuid: { type: String, required, unique: true },
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* majorSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
majorSchema.methods.toOptimizedObject = function () {
	return {
		id: this._id.toString(),
		uuid: this.uuid,
		name: this.name,
		description: this.description,
		cover: this.cover,
		characters: this.characters,
		article: this.article?.toString(),
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const majorModel = model<MajorI<Types.ObjectId>, MajorModel, MajorQueryHelpers>('Major', majorSchema);
export default majorModel;
