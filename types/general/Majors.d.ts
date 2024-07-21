declare interface MajorI<IDS = string> {
	uuid: string;
	name: LanguagesContentI;
	description: LanguagesContentI;
	cover: string;
	article: IDS;
	characters: string[];
}
declare interface PublicMajorI<IDS = string> extends MajorI<IDS> {
	id: IDS;
}
declare interface MajorWithArticleI<IDS = string> extends PublicMajorI<IDS> {
	article: PublicArticleI<IDS>;
}
