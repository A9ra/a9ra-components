import {
	ApplySchemaOptions,
	FlatRecord,
	HydratedDocument,
	Model,
	ObtainDocumentType,
	/* QueryWithHelpers, */
	ResolveSchemaOptions,
} from 'mongoose';

export interface ArticleVirtual {}

export interface ArticleInstanceMethods {
	toOptimizedObject(): PublicArticleI;
}
/* QueryWithHelpers<ArticleHydratedDocument | null, ArticleHydratedDocument, ArticleQueryHelpers, ArticleI<Types.ObjectId>,'findOne' >; */
export interface ArticleQueryHelpers {}
export interface ArticleDocument
	extends ApplySchemaOptions<
		ObtainDocumentType<ArticleDocument, ArticleI, ResolveSchemaOptions<ArticleSchemaOptions>>,
		ResolveSchemaOptions<ArticleSchemaOptions>
	> {}
export interface ArticleHydratedDocument
	extends HydratedDocument<
		FlatRecord<ArticleDocument>,
		ArticleInstanceMethods & ArticleVirtual,
		ArticleQueryHelpers
	> {}

export interface ArticleStaticMethods {}
export interface ArticleSchemaOptions {
	timestamps: true;
}
export interface ArticleModel
	extends Model<ArticleI, ArticleQueryHelpers, ArticleInstanceMethods, ArticleVirtual, ArticleHydratedDocument>,
		ArticleStaticMethods {}
