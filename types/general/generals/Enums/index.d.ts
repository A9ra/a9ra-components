declare interface EnumsDetailsI<ID, ICON = string> {
	id: ID;
	name: string;
	icon: ICON;
	description?: string;
}
declare interface EnumsDetailsWithColorI<ID, ICON = string> extends EnumsDetailsI<ID, ICON> {
	color: string; // hex color
}
declare interface LevelDetailsI<ICON = string> extends EnumsDetailsI<levelsEnumT, ICON> {
	school: string;
	year: number;
}
declare interface SpecialtyDetailsI<ICON = string> extends EnumsDetailsI<SecondarySpecialtiesT, ICON> {
	levels: SecondarySchoolLevelsT[];
}
