declare interface EnumsDetailsI<ID, ICON = string> {
	id: ID;

	name: string;
	icon: ICON;
	description?: string;
}
declare interface LevelDetailsI extends EnumsDetailsI {
	school: string;
	year: number;
}
declare interface SpecialtyDetailsI extends EnumsDetailsI {
	levels: SecondarySchoolLevelsT[];
}
