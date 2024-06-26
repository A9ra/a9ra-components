import { z } from '^common/defaultZod';

export const kindergartenLevels: Record<KindergartenLevelsT, LevelDetailsI> = {
	K1: {
		name: 'Kindergarten 1',
		icon: 'K1',
		school: 'Kindergarten',
		year: 1,
	},
	K2: {
		name: 'Kindergarten 2',
		icon: 'K2',
		school: 'Kindergarten',
		year: 2,
	},
	K3: {
		name: 'Kindergarten 3',
		icon: 'K3',
		school: 'Kindergarten',
		year: 3,
	},
};
export const kindergartenLevelsList = Object.keys(kindergartenLevels) as unknown as MyEnum<KindergartenLevelsT>;
export const elementaryLevels: Record<ElementaryLevelsT, LevelDetailsI> = {
	P1: {
		name: 'Primary 1',
		icon: 'P1',
		school: 'Primary',
		year: 1,
	},
	P2: {
		name: 'Primary 2',
		icon: 'P2',
		school: 'Primary',
		year: 2,
	},
	P3: {
		name: 'Primary 3',
		icon: 'P3',
		school: 'Primary',
		year: 3,
	},
	P4: {
		name: 'Primary 4',
		icon: 'P4',
		school: 'Primary',
		year: 4,
	},
	P5: {
		name: 'Primary 5',
		icon: 'P5',
		school: 'Primary',
		year: 5,
	},
};
export const elementaryLevelsList = Object.keys(elementaryLevels) as unknown as MyEnum<ElementaryLevelsT>;
export const middleSchoolLevels: Record<MiddleSchoolLevelsT, LevelDetailsI> = {
	M1: {
		name: 'Middle 1',
		icon: 'M1',
		school: 'Middle',
		year: 1,
	},
	M2: {
		name: 'Middle 2',
		icon: 'M2',
		school: 'Middle',
		year: 2,
	},
	M3: {
		name: 'Middle 3',
		icon: 'M3',
		school: 'Middle',
		year: 3,
	},
	M4: {
		name: 'Middle 4',
		icon: 'M4',
		school: 'Middle',
		year: 4,
	},
};
export const middleSchoolLevelsList = Object.keys(middleSchoolLevels) as unknown as MyEnum<MiddleSchoolLevelsT>;
export const secondarySchoolLevels: Record<SecondarySchoolLevelsT, LevelDetailsI> = {
	S1: {
		name: 'Secondary 1',
		icon: 'S1',
		school: 'Secondary',
		year: 1,
	},
	S2: {
		name: 'Secondary 2',
		icon: 'S2',
		school: 'Secondary',
		year: 2,
	},
	S3: {
		name: 'Secondary 3',
		icon: 'S3',
		school: 'Secondary',
		year: 3,
	},
};
export const secondarySchoolLevelsList = Object.keys(
	secondarySchoolLevels
) as unknown as MyEnum<SecondarySchoolLevelsT>;
export const secondarySpecialties: Record<SecondarySpecialtiesT, SpecialtyDetailsI> = {
	M: {
		id: 'M',
		name: 'Mathematic',
		icon: 'M',
		levels: ['S2', 'S3'],
	},
	T: {
		id: 'T',
		name: 'Technical Math',
		icon: 'T',
		levels: ['S2', 'S3'],
	},
	S: {
		id: 'S',
		name: 'Science',
		icon: 'S',
		levels: ['S1', 'S2', 'S3'],
	},
	F: {
		id: 'F',
		name: 'Finance',
		icon: 'F',
		levels: ['S2', 'S3'],
	},
	A: {
		id: 'A',
		name: 'Arts',
		icon: 'A',
		levels: ['S2', 'S3'],
	},
	L: {
		id: 'L',
		name: 'Literature',
		icon: 'L',
		levels: ['S1'],
	},
	P: {
		id: 'P',
		name: 'Philosophy',
		icon: 'P',
		levels: ['S2', 'S3'],
	},
	Fs: {
		id: 'Fs',
		name: 'Foreign language (spanish)',
		icon: 'Fs',
		levels: ['S2', 'S3'],
	},
	Fg: {
		id: 'Fg',
		name: 'Foreign language (german)',
		icon: 'Fg',
		levels: ['S2', 'S3'],
	},
	Fi: {
		id: 'Fi',
		name: 'Foreign language (italian)',
		icon: 'Fi',
		levels: ['S2', 'S3'],
	},
};
export const secondarySpecialtiesList = Object.keys(secondarySpecialties) as unknown as MyEnum<SecondarySpecialtiesT>;
export const secondarySpecialtiesByLevel: Record<SecondarySchoolLevelsT, SpecialtyDetailsI[]> = Object.values(
	secondarySpecialties
).reduce(
	(acc, curr) => {
		curr.levels.forEach((level) => {
			if (!acc[level]) acc[level] = [];
			acc[level].push(curr);
		});
		return acc;
	},
	{} as Record<SecondarySchoolLevelsT, SpecialtyDetailsI[]>
);

export const universityLevels: Record<University_levelsT, LevelDetailsI> = {
	L1: {
		name: 'License 1',
		icon: 'L1',
		school: 'License',
		year: 1,
	},
	L2: {
		name: 'License 2',
		icon: 'L2',
		school: 'License',
		year: 2,
	},
	L3: {
		name: 'License 3',
		icon: 'L3',
		school: 'License',
		year: 3,
	},
	M1: {
		name: 'Master 1',
		icon: 'M1',
		school: 'Master',
		year: 1,
	},
	M2: {
		name: 'Master 2',
		icon: 'M2',
		school: 'Master',
		year: 2,
	},
	D1: {
		name: 'Doctorate 1',
		icon: 'D1',
		school: 'Doctorate',
		year: 1,
	},
	D2: {
		name: 'Doctorate 2',
		icon: 'D2',
		school: 'Doctorate',
		year: 2,
	},
	D3: {
		name: 'Doctorate 3',
		icon: 'D3',
		school: 'Doctorate',
		year: 3,
	},
};
export const universityLevelsList = Object.keys(universityLevels) as unknown as MyEnum<University_levelsT>;
export const highEducationLevels: Record<HighEducation_levelsT, LevelDetailsI> = {
	E1: {
		name: 'Engineer 1',
		icon: 'E1',
		school: 'Engineer',
		year: 1,
	},
	E2: {
		name: 'Engineer 2',
		icon: 'E2',
		school: 'Engineer',
		year: 2,
	},
	E3: {
		name: 'Engineer 3',
		icon: 'E3',
		school: 'Engineer',
		year: 3,
	},
	E4: {
		name: 'Engineer 4',
		icon: 'E4',
		school: 'Engineer',
		year: 4,
	},
	E5: {
		name: 'Engineer 5',
		icon: 'E5',
		school: 'Engineer',
		year: 5,
	},
};
export const highEducationLevelsList = Object.keys(highEducationLevels) as unknown as MyEnum<HighEducation_levelsT>;
export const professionalLevels: Record<Professional_levels, LevelDetailsI> = {
	PI: {
		name: 'Professional',
		icon: 'PI',
		school: 'Professional',
		year: 1,
	},
};
export const professionalLevelsList = Object.keys(professionalLevels) as unknown as MyEnum<Professional_levels>;

export const levelsMap: Record<levelsEnumT, LevelDetailsI> = {
	/* k12 */
	...kindergartenLevels,
	...elementaryLevels,
	...middleSchoolLevels,
	...secondarySchoolLevels,
	/* university */
	...universityLevels,
	/* high education */
	...highEducationLevels,
	/* professional */
	...professionalLevels,
};
export const levelsList = Object.keys(levelsMap) as unknown as MyEnum<levelsEnumT>;

export const levelsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z.enum<levelsEnumT, MyEnum<levelsEnumT>>(levelsList, error).openapi('LevelsEnum', { description: 'Levels Enum' });
