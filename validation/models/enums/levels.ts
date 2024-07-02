import { z } from '^common/defaultZod';

export const kindergartenLevels: Record<KindergartenLevelsT, LevelDetailsI> = {
	K1: {
		id: 'K1',
		name: {
			EN: 'Kindergarten 1',
			FR: 'Maternelle 1',
			AR: 'روضة 1',
		},
		icon: 'K1',
		school: {
			EN: 'Kindergarten',
			FR: 'Maternelle',
			AR: 'روضة',
		},
		year: 1,
	},
	K2: {
		id: 'K2',
		name: {
			EN: 'Kindergarten 2',
			FR: 'Maternelle 2',
			AR: 'روضة 2',
		},
		icon: 'K2',
		school: {
			EN: 'Kindergarten',
			FR: 'Maternelle',
			AR: 'روضة',
		},
		year: 2,
	},
	K3: {
		id: 'K3',
		name: { EN: 'Kindergarten 3', FR: 'Maternelle 3', AR: 'روضة 3' },
		icon: 'K3',
		school: {
			EN: 'Kindergarten',
			FR: 'Maternelle',
			AR: 'روضة',
		},
		year: 3,
	},
};
export const kindergartenLevelsList = Object.keys(kindergartenLevels) as unknown as MyEnum<KindergartenLevelsT>;
export const elementaryLevels: Record<ElementaryLevelsT, LevelDetailsI> = {
	P1: {
		id: 'P1',
		name: {
			EN: 'Primary 1',
			FR: 'Primaire 1',
			AR: 'ابتدائي 1',
		},
		icon: 'P1',
		school: {
			EN: 'Primary',
			FR: 'Primaire',
			AR: 'ابتدائي',
		},
		year: 1,
	},
	P2: {
		id: 'P2',
		name: {
			EN: 'Primary 2',
			FR: 'Primaire 2',
			AR: 'ابتدائي 2',
		},
		icon: 'P2',
		school: {
			EN: 'Primary',
			FR: 'Primaire',
			AR: 'ابتدائي',
		},
		year: 2,
	},
	P3: {
		id: 'P3',
		name: {
			EN: 'Primary 3',
			FR: 'Primaire 3',
			AR: 'ابتدائي 3',
		},
		icon: 'P3',
		school: {
			EN: 'Primary',
			FR: 'Primaire',
			AR: 'ابتدائي',
		},
		year: 3,
	},
	P4: {
		id: 'P4',
		name: {
			EN: 'Primary 4',
			FR: 'Primaire 4',
			AR: 'ابتدائي 4',
		},
		icon: 'P4',
		school: {
			EN: 'Primary',
			FR: 'Primaire',
			AR: 'ابتدائي',
		},
		year: 4,
	},
	P5: {
		id: 'P5',
		name: {
			EN: 'Primary 5',
			FR: 'Primaire 5',
			AR: 'ابتدائي 5',
		},
		icon: 'P5',
		school: {
			EN: 'Primary',
			FR: 'Primaire',
			AR: 'ابتدائي',
		},
		year: 5,
	},
};
export const elementaryLevelsList = Object.keys(elementaryLevels) as unknown as MyEnum<ElementaryLevelsT>;
export const middleSchoolLevels: Record<MiddleSchoolLevelsT, LevelDetailsI> = {
	M1: {
		id: 'M1',
		name: {
			EN: 'Middle 1',
			FR: 'Collège 1',
			AR: 'متوسط 1',
		},
		icon: 'M1',
		school: {
			EN: 'Middle',
			FR: 'Collège',
			AR: 'متوسط',
		},
		year: 1,
	},
	M2: {
		id: 'M2',
		name: {
			EN: 'Middle 2',
			FR: 'Collège 2',
			AR: 'متوسط 2',
		},
		icon: 'M2',
		school: {
			EN: 'Middle',
			FR: 'Collège',
			AR: 'متوسط',
		},
		year: 2,
	},
	M3: {
		id: 'M3',
		name: {
			EN: 'Middle 3',
			FR: 'Collège 3',
			AR: 'متوسط 3',
		},
		icon: 'M3',
		school: {
			EN: 'Middle',
			FR: 'Collège',
			AR: 'متوسط',
		},
		year: 3,
	},
	M4: {
		id: 'M4',
		name: {
			EN: 'Middle 4',
			FR: 'Collège 4',
			AR: 'متوسط 4',
		},
		icon: 'M4',
		school: {
			EN: 'Middle',
			FR: 'Collège',
			AR: 'متوسط',
		},
		year: 4,
	},
};
export const middleSchoolLevelsList = Object.keys(middleSchoolLevels) as unknown as MyEnum<MiddleSchoolLevelsT>;
export const secondarySchoolLevels: Record<SecondarySchoolLevelsT, LevelDetailsI> = {
	S1: {
		id: 'S1',
		name: {
			EN: 'Secondary 1',
			FR: 'Secondaire 1',
			AR: 'ثانوي 1',
		},
		icon: 'S1',
		school: {
			EN: 'Secondary',
			FR: 'Secondaire',
			AR: 'ثانوي',
		},
		year: 1,
	},
	S2: {
		id: 'S2',
		name: {
			EN: 'Secondary 2',
			FR: 'Secondaire 2',
			AR: 'ثانوي 2',
		},
		icon: 'S2',
		school: {
			EN: 'Secondary',
			FR: 'Secondaire',
			AR: 'ثانوي',
		},
		year: 2,
	},
	S3: {
		id: 'S3',
		name: {
			EN: 'Secondary 3',
			FR: 'Secondaire 3',
			AR: 'ثانوي 3',
		},
		icon: 'S3',
		school: {
			EN: 'Secondary',
			FR: 'Secondaire',
			AR: 'ثانوي',
		},
		year: 3,
	},
};
export const secondarySchoolLevelsList = Object.keys(
	secondarySchoolLevels
) as unknown as MyEnum<SecondarySchoolLevelsT>;
export const secondarySpecialties: Record<
	SecondarySpecialtiesT,
	ForLevelsDetailsI<SecondarySpecialtiesT, SecondarySchoolLevelsT>
> = {
	M: {
		id: 'M',
		name: {
			EN: 'Mathematics',
			FR: 'Mathématiques',
			AR: 'رياضيات',
		},
		icon: 'M',
		levels: ['S2', 'S3'],
	},
	T: {
		id: 'T',
		name: {
			AR: 'تقني رياضي',
			EN: 'Technical Mathematics',
			FR: 'Mathématiques techniques',
		},
		icon: 'T',
		levels: ['S2', 'S3'],
	},
	s: {
		id: 's',
		name: {
			EN: 'Science and technology',
			AR: 'علوم و تكنولوجيا',
			FR: 'Science et technologie',
		},
		icon: 'S',
		levels: ['S1'],
	},
	S: {
		id: 'S',
		name: {
			AR: 'علوم الطبيعة و الحياة',
			EN: 'Science of nature and life',
			FR: 'Science de la nature et de la vie',
		},
		icon: 'S',
		levels: ['S2', 'S3'],
	},
	F: {
		id: 'F',
		name: { EN: 'Management and economics', FR: 'Gestion et économie', AR: 'تسيير واقتصاد' },
		icon: 'F',
		levels: ['S2', 'S3'],
	},
	A: {
		id: 'A',
		name: {
			EN: 'Arts',
			AR: 'فنون',
			FR: 'Arts',
		},
		icon: 'A',
		levels: ['S2', 'S3'],
	},
	l: {
		id: 'l',
		name: {
			EN: 'Literature',
			AR: 'أداب',
			FR: 'Littérature',
		},
		icon: 'L',
		levels: ['S1'],
	},
	P: {
		id: 'P',
		name: {
			EN: 'Philosophy',
			AR: 'فلسفة',
			FR: 'Philosophie',
		},
		icon: 'P',
		levels: ['S2', 'S3'],
	},
	Fs: {
		id: 'Fs',
		name: {
			EN: 'Foreign language (spanish)',
			AR: 'لغة أجنبية (إسبانية)',
			FR: 'Langue étrangère (espagnol)',
		},
		icon: 'Fs',
		levels: ['S2', 'S3'],
	},
	Fg: {
		id: 'Fg',
		name: { EN: 'Foreign language (german)', AR: 'لغة أجنبية (ألمانية)', FR: 'Langue étrangère (allemande)' },
		icon: 'Fg',
		levels: ['S2', 'S3'],
	},
	Fi: {
		id: 'Fi',
		name: {
			EN: 'Foreign language (italian)',
			AR: 'لغة أجنبية (إيطالية)',
			FR: 'Langu étrangère (italienne)',
		},
		icon: 'Fi',
		levels: ['S2', 'S3'],
	},
};
export const secondarySpecialtiesList = Object.keys(secondarySpecialties) as unknown as MyEnum<SecondarySpecialtiesT>;
export const secondarySpecialtiesByLevel: Record<
	SecondarySchoolLevelsT,
	ForLevelsDetailsI<SecondarySpecialtiesT, SecondarySchoolLevelsT>[]
> = Object.values(secondarySpecialties).reduce(
	(acc, curr) => {
		curr.levels.forEach((level) => {
			if (!acc[level]) acc[level] = [];
			acc[level].push(curr);
		});
		return acc;
	},
	{} as Record<SecondarySchoolLevelsT, ForLevelsDetailsI<SecondarySpecialtiesT, SecondarySchoolLevelsT>[]>
);

export const universityLevels: Record<University_levelsT, LevelDetailsI> = {
	L1: {
		id: 'L1',
		name: { EN: 'License 1', FR: 'Licence 1', AR: 'ليسنس 1' },
		icon: 'L1',
		school: { EN: 'License', FR: 'Licence', AR: 'ليسنس' },
		year: 1,
	},
	L2: {
		id: 'L2',
		name: { EN: 'License 2', FR: 'Licence 2', AR: 'ليسنس 2' },
		icon: 'L2',
		school: { EN: 'License', FR: 'Licence', AR: 'ليسنس' },
		year: 2,
	},
	L3: {
		id: 'L3',
		name: { EN: 'License 3', FR: 'Licence 3', AR: 'ليسنس 3' },
		icon: 'L3',
		school: { EN: 'License', FR: 'Licence', AR: 'ليسنس' },
		year: 3,
	},
	M1: {
		id: 'M1',
		name: { EN: 'Master 1', FR: 'Master 1', AR: 'ماستر 1' },
		icon: 'M1',
		school: { EN: 'Master', FR: 'Master', AR: 'ماستر' },
		year: 1,
	},
	M2: {
		id: 'M2',
		name: { EN: 'Master 2', FR: 'Master 2', AR: 'ماستر 2' },
		icon: 'M2',
		school: { EN: 'Master', FR: 'Master', AR: 'ماستر' },
		year: 2,
	},
	D1: {
		id: 'D1',
		name: {
			EN: 'Doctorate 1',
			FR: 'Doctorat 1',
			AR: 'دكتوراه 1',
		},
		icon: 'D1',
		school: { EN: 'Doctorate', FR: 'Doctorat', AR: 'دكتوراه' },
		year: 1,
	},
	D2: {
		id: 'D2',
		name: {
			EN: 'Doctorate 2',
			FR: 'Doctorat 2',
			AR: 'دكتوراه 2',
		},
		icon: 'D2',
		school: { EN: 'Doctorate', FR: 'Doctorat', AR: 'دكتوراه' },
		year: 2,
	},
	D3: {
		id: 'D3',
		name: {
			EN: 'Doctorate 3',
			FR: 'Doctorat 3',
			AR: 'دكتوراه 3',
		},
		icon: 'D3',
		school: { EN: 'Doctorate', FR: 'Doctorat', AR: 'دكتوراه' },
		year: 3,
	},
};
export const universityLevelsList = Object.keys(universityLevels) as unknown as MyEnum<University_levelsT>;
export const highEducationLevels: Record<HighEducation_levelsT, LevelDetailsI> = {
	E1: {
		id: 'E1',
		name: { EN: 'Engineer 1', FR: 'Ingénieur 1', AR: 'مهندس 1' },
		icon: 'E1',
		school: { EN: 'Engineer', FR: 'Ingénieur', AR: 'مهندس' },
		year: 1,
	},
	E2: {
		id: 'E2',
		name: { EN: 'Engineer 2', FR: 'Ingénieur 2', AR: 'مهندس 2' },
		icon: 'E2',
		school: { EN: 'Engineer', FR: 'Ingénieur', AR: 'مهندس' },
		year: 2,
	},
	E3: {
		id: 'E3',
		name: {
			EN: 'Engineer 3',
			FR: 'Ingénieur 3',
			AR: 'مهندس 3',
		},
		icon: 'E3',
		school: { EN: 'Engineer', FR: 'Ingénieur', AR: 'مهندس' },
		year: 3,
	},
	E4: {
		id: 'E4',
		name: {
			EN: 'Engineer 4',
			FR: 'Ingénieur 4',
			AR: 'مهندس 4',
		},
		icon: 'E4',
		school: { EN: 'Engineer', FR: 'Ingénieur', AR: 'مهندس' },
		year: 4,
	},
	E5: {
		id: 'E5',
		name: {
			EN: 'Engineer 5',
			FR: 'Ingénieur 5',
			AR: 'مهندس 5',
		},
		icon: 'E5',
		school: { EN: 'Engineer', FR: 'Ingénieur', AR: 'مهندس' },
		year: 5,
	},
};
export const highEducationLevelsList = Object.keys(highEducationLevels) as unknown as MyEnum<HighEducation_levelsT>;
export const professionalLevels: Record<Professional_levels, LevelDetailsI> = {
	PI: {
		id: 'PI',
		name: {
			EN: 'Professional',
			FR: 'Professionnel',
			AR: 'مهني',
		},
		icon: 'PI',
		school: {
			EN: 'Professional',
			FR: 'Professionnel',
			AR: 'مهني',
		},
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
export const secondarySpecialtiesSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<SecondarySpecialtiesT, MyEnum<SecondarySpecialtiesT>>(secondarySpecialtiesList, error)
		.openapi('SecondarySpecialtiesEnum', { description: 'Secondary Specialties Enum' });
