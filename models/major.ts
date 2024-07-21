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
		article: { type: Schema.Types.ObjectId, ref: 'Article', required },
		characters: [{ type: String }],
		uuid: { type: String, required, unique: true },
	},
	{ timestamps: true }
);
/* --------------------- Indexs ---------------------  */
majorSchema.index(
	{
		uuid: 'text',
		'name.AR': 'text',
		'name.FR': 'text',
		'name.EN': 'text',
		'description.AR': 'text',
		'description.FR': 'text',
		'description.EN': 'text',
	},
	{
		weights: {
			uuid: 5,
			'name.AR': 4,
			'name.FR': 3,
			'name.EN': 2,
			'description.AR': 4,
			'description.FR': 3,
			'description.EN': 2,
		},
		name: 'major_search_index',
	}
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
		article: this.article.toString(),
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const majorModel = model<MajorI<Types.ObjectId>, MajorModel, MajorQueryHelpers>('Major', majorSchema);
export default majorModel;
