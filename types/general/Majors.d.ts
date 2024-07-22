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
	likes: number;
	you?: {
		liked: boolean;
		disliked: boolean;
	};
}
declare interface MajorWithArticleI<IDS = string> extends PublicMajorI<IDS> {
	article: PublicArticleI<IDS>;
	universitiesThatAdapts: number;
}
