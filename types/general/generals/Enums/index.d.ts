declare interface EnumsDetailsI<ID, ICON = string> {
	id: ID;
	name: LanguagesContentI;
	icon: ICON;
	image?: string;
	description?: LanguagesContentI;
}
declare interface EnumsDetailsWithColorI<ID, ICON = string> extends EnumsDetailsI<ID, ICON> {
	color: string; // hex color
}
declare interface LevelDetailsI<ICON = string> extends EnumsDetailsI<levelsEnumT, ICON> {
	school: LanguagesContentI;
	year: number;
}

declare interface ForLevelsDetailsI<ID, Levels extends K12LevelsT, ICON = string> extends EnumsDetailsI<ID, ICON> {
	levels: Levels[];
}

declare interface ForLevelsDetailsWithCommonSubjectsI<ID, Levels extends K12LevelsT, ICON = string>
	extends ForLevelsDetailsI<ID, Levels, ICON> {
	mainSubject: basicSubjectsEnumT;
}
declare interface ForLevelsDetailsWithCommonSpecialtyI<ID, Levels extends K12LevelsT, ICON = string>
	extends ForLevelsDetailsI<ID, Levels, ICON> {
	mainSpecialty: SecondaryBasicSpecialtiesT | SecondaryCommonSpecialtiesT;
	commonSpecialty: SecondaryCommonSpecialtiesT;
}

declare interface SpecialtyDetailsI<
	Subjects extends basicSubjectsEnumT = basicSubjectsEnumT,
	OptionalSubjects extends basicSubjectsEnumT = basicSubjectsEnumT,
> {
	subjects: Subjects[]; // subjects that are taught in this specialty
	optionalSubjects: OptionalSubjects[]; // subjects that are optional in this specialty
	subjectsCof: SubjectsCof<Subjects, OptionalSubjects>;
}

declare interface SubjectsCof<Subjects extends basicSubjectsEnumT, OptionalSubjects extends basicSubjectsEnumT = 'Pe'> {
	optionals: Optional<Record<OptionalSubjects, number>>;
	mandatory: Optional<Record<Subjects, number>>;
}

declare interface SpecialtyDetailsWithLevelsI<
	Subjects extends subjectsEnumT,
	OptionalSubjects extends subjectsEnumT = 'Pe',
	Levels = SecondarySchoolLevelsT,
> {
	id: { level: Levels; specialty: SecondarySpecialtiesT };
	details: SpecialtyDetailsI<Subjects, OptionalSubjects>;
}

declare interface LevelDetailsWithSpecialtiesI extends ForLevelsDetailsI, SpecialtyDetailsI {}
