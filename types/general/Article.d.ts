declare interface ArticleI {
	cover: string;
	images: string[];
	content: LanguagesContentI;
}
declare interface PublicArticleI<IDS = string> extends ArticleI {
	id: IDS;
}
