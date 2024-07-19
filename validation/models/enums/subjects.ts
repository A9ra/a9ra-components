import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const basicSubjectsMap: Record<basicSubjectsEnumT, ForLevelsDetailsI<basicSubjectsEnumT, K12LevelsT>> = {
	M: {
		id: 'M',
		name: { EN: 'Math', FR: 'Mathématiques', AR: 'رياضيات' },
		icon: 'icon-[mdi--book]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	P: {
		id: 'P',
		name: {
			EN: 'Physics',
			FR: 'Physique',
			AR: 'فيزياء',
		},
		icon: 'icon-[mdi--atom]',
		levels: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	S: {
		id: 'S',
		name: {
			EN: 'Science',
			FR: 'Science',
			AR: 'علوم',
		},
		icon: 'icon-[mdi--flask]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},

	HG: {
		id: 'HG',
		name: {
			EN: 'History and Geography',
			FR: 'Histoire et géographie',
			AR: 'تاريخ وجغرافيا',
		},
		icon: 'icon-[mdi--history]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	I: {
		id: 'I',
		name: {
			EN: 'Islamic Studies',
			FR: 'Études islamiques',
			AR: 'دراسات إسلامية',
		},
		icon: 'icon-[mdi--moon-and-stars]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	A: {
		id: 'A',
		name: {
			EN: 'Art',
			FR: 'Art',
			AR: 'فن',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Mu: {
		id: 'Mu',
		name: {
			EN: 'Music',
			FR: 'Musique',
			AR: 'موسيقى',
		},
		icon: 'icon-[mdi--music]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Pe: {
		id: 'Pe',
		name: {
			EN: 'Physical Education',
			FR: 'Éducation physique',
			AR: 'تربية رياضية',
		},
		icon: 'icon-[mdi--dumbbell]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Cs: {
		id: 'Cs',
		name: {
			EN: 'Computer Science',
			FR: 'Informatique',
			AR: 'علوم الحاسوب',
		},
		icon: 'icon-[mdi--laptop]',
		levels: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Ss: {
		id: 'Ss',
		name: {
			EN: 'Social Studies',
			FR: 'Études sociales',
			AR: 'دراسات اجتماعية',
		},
		icon: 'icon-[mdi--earth]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4'],
	},

	Ph: {
		id: 'Ph',
		name: {
			EN: 'Philosophy',
			FR: 'Philosophie',
			AR: 'فلسفة',
		},
		icon: 'icon-[mdi--book]',
		levels: ['S2', 'S3'],
	},
	Ar: {
		id: 'Ar',
		name: {
			EN: 'Arabic',
			FR: 'Arabe',
			AR: 'العربية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Am: {
		id: 'Am',
		name: {
			EN: 'Amazight',
			FR: 'Amazight',
			AR: 'الأمازيغية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	Fr: {
		id: 'Fr',
		name: {
			EN: 'French',
			FR: 'Français',
			AR: 'الفرنسية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},
	En: {
		id: 'En',
		name: {
			EN: 'English',
			FR: 'Anglais',
			AR: 'الإنجليزية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
	},

	Em: {
		id: 'Em',
		name: {
			EN: 'Economy and Management',
			FR: 'Économie et gestion',
			AR: 'تسيير واقتصاد',
		},
		icon: 'icon-[mdi--account-cash]',
		levels: ['S1'],
	},
	Mg: {
		id: 'Mg',
		name: {
			EN: 'Management',
			FR: 'Gestion',
			AR: 'تسيير',
		},
		icon: 'icon-[mdi--account-cash]',
		levels: ['S2', 'S3'],
	},
	Eco: {
		id: 'Eco',
		name: {
			EN: 'Economy',
			FR: 'Économie',
			AR: 'اقتصاد',
		},
		icon: 'icon-[mdi--account-cash]',
		levels: ['S2', 'S3'],
	},
	La: {
		id: 'La',
		name: {
			EN: 'Law',
			FR: 'Droit',
			AR: 'قانون',
		},
		icon: 'icon-[mdi--account-cash]',
		levels: ['S2', 'S3'],
	},
	Tec: {
		id: 'Tec',
		name: {
			EN: 'Technology',
			FR: 'Technologie',
			AR: 'تكنولوجيا',
		},
		icon: 'icon-[mdi--engine]',
		levels: ['S1', 'S2', 'S3'],
	},
	Fl: {
		id: 'Fl',
		name: {
			EN: 'Third Foreign languages',
			FR: 'Troisième langue étrangère',
			AR: 'اللغة الأجنبية الثالثة',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
	},
	A1: {
		id: 'A1',
		name: {
			EN: 'Art 1',
			FR: 'Art 1',
			AR: 'فن 1',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
	},
	A2: {
		id: 'A2',
		name: {
			EN: 'Art 2',
			FR: 'Art 2',
			AR: 'فن 2',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
	},
};
const {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	A1,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	A2,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Fl,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Tec,
	...restSubjects
} = basicSubjectsMap;
export const subjectsMap: Record<subjectsEnumT, ForLevelsDetailsWithCommonSubjectsI<subjectsEnumT, K12LevelsT>> = {
	...Object.entries(restSubjects)
		.map(([, elm]) => ({ ...elm, mainSubject: elm.id }))
		.reduce(
			(acc, elm) => ({ ...acc, [elm.id]: elm }),
			{} as Record<
				Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'>,
				ForLevelsDetailsWithCommonSubjectsI<Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'>, K12LevelsT>
			>
		),
	Ge: {
		id: 'Ge',
		name: {
			EN: 'German',
			FR: 'Allemand',
			AR: 'الألمانية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		mainSubject: 'Fl',
	},
	Sp: {
		id: 'Sp',
		name: {
			EN: 'Spanish',
			FR: 'Espagnol',
			AR: 'الإسبانية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		mainSubject: 'Fl',
	},
	It: {
		id: 'It',
		name: {
			EN: 'Italian',
			FR: 'Italien',
			AR: 'الإيطالية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['S2', 'S3'],
		mainSubject: 'Fl',
	},
	/* Technology */
	Ce: {
		id: 'Ce',
		name: {
			EN: 'Civil Engineering',
			FR: 'Génie civil',
			AR: 'هندسة مدنية',
		},
		icon: 'icon-[mdi--engine]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
	},
	Mc: {
		id: 'Mc',
		name: {
			EN: 'Mechanical Engineering',
			FR: 'Génie mécanique',
			AR: 'هندسة ميكانيكية',
		},
		icon: 'icon-[mdi--engine]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
	},
	Ee: {
		id: 'Ee',
		name: {
			EN: 'Electrical Engineering',
			FR: 'Génie électrique',
			AR: 'هندسة كهربائية',
		},
		icon: 'icon-[mdi--engine]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
	},
	Me: {
		id: 'Me',
		name: {
			EN: 'Methods Engineering',
			FR: 'Génie des méthodes',
			AR: 'هندسة الطرائق',
		},
		icon: 'icon-[mdi--engine]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
	},
	/* Arts */
	Adf: {
		id: 'Adf',
		name: {
			EN: 'Drawing and fine expression',
			FR: 'Dessin et expression plastique',
			AR: 'رسم وتعبير التشكيلي',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
		mainSubject: 'A1',
	},
	Ade: {
		id: 'Ade',
		name: {
			EN: 'Design',
			FR: 'Design',
			AR: 'تصميم',
		},
		icon: 'icon-[mdi--palette]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
	},
	Amt: {
		id: 'Amt',
		name: {
			EN: 'Music theory',
			FR: 'Théorie musicale',
			AR: 'نظرية الموسيقى',
		},
		icon: 'icon-[mdi--music]',
		levels: ['S2', 'S3'],
		mainSubject: 'A1',
	},
	Ami: {
		id: 'Ami',
		name: {
			EN: 'Music instrument',
			FR: 'Instrument de musique',
			AR: 'آلة موسيقية',
		},
		icon: 'icon-[mdi--music]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
	},
	Aac: {
		id: 'Aac',
		name: {
			EN: 'Art of acting',
			FR: 'Art dramatique',
			AR: 'فن التمثيل',
		},
		icon: 'icon-[mdi--theater]',
		levels: ['S2', 'S3'],
		mainSubject: 'A1',
	},
	Apr: {
		id: 'Apr',
		name: {
			EN: 'Art of performing',
			FR: 'Art de la scène',
			AR: 'فن الأداء',
		},
		icon: 'icon-[mdi--theater]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
	},
	Avt: {
		id: 'Avt',
		name: {
			EN: 'audio visual technics',
			FR: 'Techniques audiovisuelles',
			AR: 'تقنيات سمعية بصرية',
		},
		icon: 'icon-[mdi--camera]',
		levels: ['S2', 'S3'],
		mainSubject: 'A1',
	},
	Acc: {
		id: 'Acc',
		name: {
			EN: 'cinematographic culture',
			FR: 'Culture cinématographique',
			AR: 'ثقافة سينمائية',
		},
		icon: 'icon-[mdi--camera]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
	},
};

export const subjectsList = Object.keys(subjectsMap) as unknown as MyEnum<subjectsEnumT>;
export const subjectsWithColorsList = subjectsList.map((elm, i) => ({
	...subjectsMap[elm],
	color: generateRandomColor(i),
}));

export const subjectsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<subjectsEnumT, MyEnum<subjectsEnumT>>(subjectsList, error)
		.openapi('Subjects_Enum', { description: 'Subjects  Enum' });

export const specialtyToGlobalSubjects: Record<
	GenericSubjectsEnum,
	Optional<Record<ExpendedSpecialtiesT, detailedSubjectsEnumT>>
> = {
	Tec: {
		TCe: 'Ce',
		TEe: 'Ee',
		TMc: 'Mc',
		TMe: 'Me',
	},
	A1: {
		Af: 'Adf',
		Am: 'Amt',
		At: 'Aac',
		Av: 'Avt',
	},
	A2: {
		Af: 'Ade',
		Am: 'Ami',
		At: 'Apr',
		Av: 'Acc',
	},
	Fl: {
		Fg: 'Ge',
		Fi: 'It',
		Fs: 'Sp',
	},
};
