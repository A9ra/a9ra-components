import { model, Schema } from 'mongoose';

import {
	ArticleInstanceMethods,
	ArticleModel,
	ArticleQueryHelpers,
	ArticleSchemaOptions,
	ArticleStaticMethods,
	ArticleVirtual,
} from '!common/models/article';

import { languageContentSchema } from './generals/languageContent';
const required = true;
/* --------------------- Schema --------------------- */
const articleSchema = new Schema<
	ArticleI,
	ArticleModel,
	ArticleInstanceMethods,
	ArticleQueryHelpers,
	ArticleVirtual,
	ArticleStaticMethods,
	ArticleSchemaOptions
>(
	{
		content: { type: languageContentSchema, required },
		cover: { type: String },
		images: [{ type: String }],
	},
	{ timestamps: true }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */
/* articleSchema.pre('save', async function (next) {
	
}); */

/* --------------------- Methods ---------------------  */
articleSchema.methods.toOptimizedObject = function () {
	return {
		id: this._id.toString(),
		content: this.content,
		cover: this.cover,
		images: this.images,
	};
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
const articleModel = model<ArticleI, ArticleModel, ArticleQueryHelpers>('Article', articleSchema);
export default articleModel;
