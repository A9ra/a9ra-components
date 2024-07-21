declare interface UniversityI<IDS = string> {
	code: string; // Algerian university code (id)
	name: LanguagesContentI;
	isNational: boolean;
	province?: number;
	website?: string;
	logo?: string;
	article?: IDS;
}
declare interface PublicUniversityI<IDS = string> extends UniversityI<IDS> {
	id: IDS;
}
