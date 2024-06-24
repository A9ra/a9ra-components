import { z } from '^common/defaultZod';

export const elementaryLevels: Record<ElementaryLevelsT, EnumsDetailsI> = {
	K1: {
		name: 'Kindergarten 1',
		icon: 'K1',
	},
	K2: {
		name: 'Kindergarten 2',
		icon: 'K2',
	},
	P1: {
		name: 'Primary 1',
		icon: 'P1',
	},
	P2: {
		name: 'Primary 2',
		icon: 'P2',
	},
	P3: {
		name: 'Primary 3',
		icon: 'P3',
	},
	P4: {
		name: 'Primary 4',
		icon: 'P4',
	},
	P5: {
		name: 'Primary 5',
		icon: 'P5',
	},
};
export const elementaryLevelsList = Object.keys(elementaryLevels) as unknown as MyEnum<ElementaryLevelsT>;
export const middleSchoolLevels: Record<MiddleSchoolLevelsT, EnumsDetailsI> = {
	M1: {
		name: 'Middle 1',
		icon: 'M1',
	},
	M2: {
		name: 'Middle 2',
		icon: 'M2',
	},
	M3: {
		name: 'Middle 3',
		icon: 'M3',
	},
	M4: {
		name: 'Middle 4',
		icon: 'M4',
	},
};
export const middleSchoolLevelsList = Object.keys(middleSchoolLevels) as unknown as MyEnum<MiddleSchoolLevelsT>;
export const secondarySchoolLevels: Record<SecondarySchoolLevelsT, EnumsDetailsI> = {
	S1: {
		name: 'Secondary 1',
		icon: 'S1',
	},
	S2: {
		name: 'Secondary 2',
		icon: 'S2',
	},
	S3: {
		name: 'Secondary 3',
		icon: 'S3',
	},
};
export const secondarySchoolLevelsList = Object.keys(
	secondarySchoolLevels
) as unknown as MyEnum<SecondarySchoolLevelsT>;
export const universityLevels: Record<University_levelsT, EnumsDetailsI> = {
	L1: {
		name: 'License 1',
		icon: 'L1',
	},
	L2: {
		name: 'License 2',
		icon: 'L2',
	},
	L3: {
		name: 'License 3',
		icon: 'L3',
	},
	M1: {
		name: 'Master 1',
		icon: 'M1',
	},
	M2: {
		name: 'Master 2',
		icon: 'M2',
	},
	D1: {
		name: 'Doctorate 1',
		icon: 'D1',
	},
	D2: {
		name: 'Doctorate 2',
		icon: 'D2',
	},
	D3: {
		name: 'Doctorate 3',
		icon: 'D3',
	},
};
export const universityLevelsList = Object.keys(universityLevels) as unknown as MyEnum<University_levelsT>;
export const highEducationLevels: Record<HighEducation_levelsT, EnumsDetailsI> = {
	E1: {
		name: 'Engineer 1',
		icon: 'E1',
	},
	E2: {
		name: 'Engineer 2',
		icon: 'E2',
	},
	E3: {
		name: 'Engineer 3',
		icon: 'E3',
	},
	E4: {
		name: 'Engineer 4',
		icon: 'E4',
	},
	E5: {
		name: 'Engineer 5',
		icon: 'E5',
	},
};
export const highEducationLevelsList = Object.keys(highEducationLevels) as unknown as MyEnum<HighEducation_levelsT>;
export const professionalLevels: Record<Professional_levels, EnumsDetailsI> = {
	PI: {
		name: 'Professional',
		icon: 'PI',
	},
};
export const professionalLevelsList = Object.keys(professionalLevels) as unknown as MyEnum<Professional_levels>;

export const levelsMap: Record<levelsEnumT, EnumsDetailsI> = {
	/* k12 */
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
