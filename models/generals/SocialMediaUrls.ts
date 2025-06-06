import { /* model, */ Schema } from 'mongoose';

import {
	SocialMediaUrlsInstanceMethods,
	SocialMediaUrlsModel,
	SocialMediaUrlsQueryHelpers,
	SocialMediaUrlsSchemaOptions,
	SocialMediaUrlsStaticMethods,
	SocialMediaUrlsVirtual,
} from '!common/models/generals/SocialMediaUrls';

/* --------------------- Schema --------------------- */
const socialMediaUrlsSchema = new Schema<
	SocialMediaUrlsI,
	SocialMediaUrlsModel,
	SocialMediaUrlsInstanceMethods,
	SocialMediaUrlsQueryHelpers,
	SocialMediaUrlsVirtual,
	SocialMediaUrlsStaticMethods,
	SocialMediaUrlsSchemaOptions
>(
	{
		facebook: { type: String },
		x: { type: String },
		youtube: { type: String },
		instagram: { type: String },
		linkedin: { type: String },
	},
	{ timestamps: false, _id: false }
);
/* --------------------- Virtual ---------------------  */

/* --------------------- Hooks ---------------------  */

/* --------------------- Methods ---------------------  */
socialMediaUrlsSchema.methods.toOptimizedObject = function () {
	return this.toObject();
};

/* --------------------- Query Helpers --------------------- */

/* --------------------- static methods --------------------- */

/* --------------------- Generate Model --------------------- */
/* const socialMediaUrlsModel = model<SocialMediaUrlsI, SocialMediaUrlsModel, SocialMediaUrlsQueryHelpers>(
	'SocialMediaUrls',
	socialMediaUrlsSchema
);
export default socialMediaUrlsModel; */
export { socialMediaUrlsSchema };
