declare interface EnumsDetailsI<ID, ICON = string> {
	id: ID;
	name: LanguagesContentI;
	icon: ICON;
	description?: LanguagesContentI;
}
declare interface EnumsDetailsWithColorI<ID, ICON = string> extends EnumsDetailsI<ID, ICON> {
	color: string; // hex color
}
declare interface LevelDetailsI<ICON = string> extends EnumsDetailsI<levelsEnumT, ICON> {
	school: LanguagesContentI;
	year: number;
}

declare interface ForLevelsDetailsI<ID, Levels = K12LevelsT, ICON = string> extends EnumsDetailsI<ID, ICON> {
	levels: Levels[];
}
