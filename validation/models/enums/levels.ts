import { MyZodType, z } from '^common/defaultZod';

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
export const secondaryBasicWithoutChangeableSpecialties: Record<
	Exclude<SecondaryBasicSpecialtiesT, 'Tec' | 'Fl' | 'A'>,
	ForLevelsDetailsWithCommonSpecialtyI<
		Exclude<SecondaryBasicSpecialtiesT, 'Tec' | 'Fl' | 'A'>,
		SecondarySchoolLevelsT
	>
> = {
	M: {
		id: 'M',
		name: {
			EN: 'Mathematics',
			FR: 'Mathématiques',
			AR: 'رياضيات',
		},
		icon: 'icon-[mdi--math-integral]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'M',
	},
	S: {
		id: 'S',
		name: {
			AR: 'علوم الطبيعة و الحياة',
			EN: 'Science of nature and life',
			FR: 'Science de la nature et de la vie',
		},
		icon: 'icon-[mdi--leaf]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'S',
	},
	F: {
		id: 'F',
		name: { EN: 'Management and economics', FR: 'Gestion et économie', AR: 'تسيير واقتصاد' },
		icon: 'icon-[mdi--finance]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'F',
	},
	P: {
		id: 'P',
		name: {
			EN: 'Philosophy and literature',
			AR: 'فلسفة وأداب',
			FR: 'Philosophie et littérature',
		},
		icon: 'icon-[mdi--brain]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'P',
	},
	Km: {
		id: 'Km',
		name: {
			EN: 'Kouba secondary school of math',
			AR: 'ثانوية الرياضيات القبة',
			FR: 'Lycée des mathématiques de Kouba',
		},
		icon: 'icon-[mdi--math-compass]',
		levels: ['S1', 'S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Km',
	},
};
export const secondaryBasicSpecialties: Record<
	SecondaryBasicSpecialtiesT,
	ForLevelsDetailsWithCommonSpecialtyI<SecondaryBasicSpecialtiesT, SecondarySchoolLevelsT>
> = {
	...secondaryBasicWithoutChangeableSpecialties,
	A: {
		id: 'A',
		name: {
			EN: 'Arts',
			AR: 'فنون',
			FR: 'Arts',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'A',
	},
	Fl: {
		id: 'Fl',
		name: {
			EN: 'Foreign languages',
			AR: 'لغات أجنبية',
			FR: 'Langues étrangères',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'Fl',
	},
	Tec: {
		id: 'Tec',
		name: {
			EN: 'Technology',
			AR: 'تكنولوجيا',
			FR: 'Technologie',
		},
		icon: 'icon-[mdi--cog]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Tec',
	},
};
export const secondaryBasicSpecialtiesList = Object.keys(
	secondaryBasicSpecialties
) as unknown as MyEnum<SecondaryBasicSpecialtiesT>;
export const secondarySpecialties: Record<
	SecondarySpecialtiesT,
	ForLevelsDetailsWithCommonSpecialtyI<SecondarySpecialtiesT, SecondarySchoolLevelsT>
> = {
	...secondaryBasicWithoutChangeableSpecialties,
	TCe: {
		id: 'TCe',
		name: {
			EN: 'Technical Mathematics (civil engineering)',
			AR: 'تقني رياضي (هندسة مدنية)',
			FR: 'Mathématiques techniques (génie civil)',
		},
		icon: 'icon-[mdi--building]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Tec',
	},
	TMc: {
		id: 'TMc',
		name: {
			EN: 'Technical Mathematics (mechanical engineering)',
			AR: 'تقني رياضي (هندسة ميكانيكية)',
			FR: 'Mathématiques techniques (génie mécanique)',
		},
		icon: 'icon-[mdi--mechanic]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Tec',
	},
	TEe: {
		id: 'TEe',
		name: {
			EN: 'Technical Mathematics (electrical engineering)',
			AR: 'تقني رياضي (هندسة كهربائية)',
			FR: 'Mathématiques techniques (génie électrique)',
		},
		icon: 'icon-[mdi--electricity]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Tec',
	},
	TMe: {
		id: 'TMe',
		name: {
			EN: 'Technical Mathematics (Methods engineering)',
			AR: 'تقني رياضي (هندسة الطرائق)',
			FR: 'Mathématiques techniques (génie des méthodes)',
		},
		icon: 'icon-[mdi--chemical-weapon]',
		levels: ['S2', 'S3'],
		commonSpecialty: 's',
		mainSpecialty: 'Tec',
	},
	s: {
		id: 's',
		name: {
			EN: 'Science and technology',
			AR: 'علوم و تكنولوجيا',
			FR: 'Science et technologie',
		},
		icon: 'icon-[mdi--atom]',
		levels: ['S1'],
		commonSpecialty: 's',
		mainSpecialty: 's',
	},

	Af: {
		id: 'Af',
		name: {
			EN: 'Arts (Fine Arts)',
			AR: 'فنون (فنون التشكيل)',
			FR: 'Arts (Beaux-arts)',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'A',
	},
	Am: {
		id: 'Am',
		name: {
			EN: 'Arts (Music)',
			AR: 'فنون (موسيقى)',
			FR: 'Arts (Musique)',
		},
		icon: 'icon-[mdi--music-note]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'A',
	},
	At: {
		id: 'At',
		name: {
			EN: 'Arts (Theater and Performing)',
			AR: 'فنون (مسرح و تمثيل)',
			FR: 'Arts (Théâtre et spectacle)',
		},
		icon: 'icon-[mdi--theater]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'A',
	},
	Av: {
		id: 'Av',
		name: {
			EN: 'Arts (audio visual)',
			AR: 'فنون (سمعي بصري)',
			FR: 'Arts (audiovisuel)',
		},
		icon: 'icon-[mdi--video]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'A',
	},
	l: {
		id: 'l',
		name: {
			EN: 'Literature',
			AR: 'أداب',
			FR: 'Littérature',
		},
		icon: 'icon-[mdi--book-open]',
		levels: ['S1'],
		commonSpecialty: 'l',
		mainSpecialty: 'l',
	},

	Fs: {
		id: 'Fs',
		name: {
			EN: 'Foreign language (Spanish)',
			AR: 'لغة أجنبية (إسبانية)',
			FR: 'Langue étrangère (espagnol)',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'Fl',
	},
	Fg: {
		id: 'Fg',
		name: { EN: 'Foreign language (German)', AR: 'لغة أجنبية (ألمانية)', FR: 'Langue étrangère (allemande)' },
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'Fl',
	},
	Fi: {
		id: 'Fi',
		name: {
			EN: 'Foreign language (Italian)',
			AR: 'لغة أجنبية (إيطالية)',
			FR: 'Langue étrangère (italienne)',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		commonSpecialty: 'l',
		mainSpecialty: 'Fl',
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
export const optionalsSubjectsSchema = () =>
	z.object<MyZodType<OptionalSubjectsI>>({
		sports: z.boolean().optional(),
		amazight: z.boolean().optional(),
		/* music: z.boolean(), */
	});
export const secondarySpecialtiesSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<SecondarySpecialtiesT, MyEnum<SecondarySpecialtiesT>>(secondarySpecialtiesList, error)
		.openapi('SecondarySpecialtiesEnum', { description: 'Secondary Specialties Enum' });

export const institutionLevelChoices: InstitutionLevelI[] = [
	{
		label: {
			EN: 'Kindergarten school',
			FR: 'École maternelle',
			AR: 'روضة',
		},
		value: 'K',
		maxYears: 3,
	},
	{
		label: {
			EN: 'Elementary school',
			FR: 'École primaire',
			AR: 'ابتدائي',
		},
		value: 'P',
		maxYears: 5,
	},
	{
		label: {
			EN: 'Middle school',
			FR: 'Collège',
			AR: 'متوسط',
		},
		value: 'M',
		maxYears: 4,
	},
	{
		label: {
			EN: 'Secondary school',
			FR: 'Lycée',
			AR: 'ثانوي',
		},
		value: 'S',
		maxYears: 3,
	},
];
export const institutionMap: Record<string, InstitutionLevelI> = institutionLevelChoices.reduce(
	(acc, curr) => {
		acc[curr.value] = curr;
		return acc;
	},
	{} as Record<string, InstitutionLevelI>
);
