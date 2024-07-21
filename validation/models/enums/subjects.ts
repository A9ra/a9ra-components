import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const basicSubjectsMap: Record<
	basicSubjectsEnumT,
	ForLevelsDetailsI<basicSubjectsEnumT, K12LevelsT> & { color: string }
> = {
	M: {
		id: 'M',
		name: { EN: 'Math', FR: 'Mathématiques', AR: 'رياضيات' },
		icon: 'icon-[mynaui--math-square]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#3B82F6',
	},
	P: {
		id: 'P',
		name: {
			EN: 'Physics',
			FR: 'Physique',
			AR: 'فيزياء',
		},
		icon: 'icon-[hugeicons--physics]',
		levels: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#A855F7',
	},
	S: {
		id: 'S',
		name: {
			EN: 'Science',
			FR: 'Science',
			AR: 'علوم',
		},
		icon: 'icon-[streamline--ecology-science-dna-biology-experiment-lab-science]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#22C55E',
	},

	HG: {
		id: 'HG',
		name: {
			EN: 'History and Geography',
			FR: 'Histoire et géographie',
			AR: 'تاريخ وجغرافيا',
		},
		icon: 'icon-[ion--earth]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#EC4899',
	},
	I: {
		id: 'I',
		name: {
			EN: 'Islamic Studies',
			FR: 'Études islamiques',
			AR: 'دراسات إسلامية',
		},
		icon: 'icon-[streamline--islam-solid]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#22C55E',
	},
	A: {
		id: 'A',
		name: {
			EN: 'Art',
			FR: 'Art',
			AR: 'فن',
		},
		icon: 'icon-[material-symbols--wall-art-outline]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#EC4899',
	},
	Mu: {
		id: 'Mu',
		name: {
			EN: 'Music',
			FR: 'Musique',
			AR: 'موسيقى',
		},
		icon: 'icon-[mingcute--music-fill]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#F97316',
	},
	Pe: {
		id: 'Pe',
		name: {
			EN: 'Physical Education',
			FR: 'Éducation physique',
			AR: 'تربية رياضية',
		},
		icon: 'icon-[icon-park-solid--sport]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#3B82F6',
	},
	Cs: {
		id: 'Cs',
		name: {
			EN: 'Computer Science',
			FR: 'Informatique',
			AR: 'علوم الحاسوب',
		},
		icon: 'icon-[material-symbols--computer-outline]',
		levels: ['M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#3B82F6',
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
		color: '#3B82F6',
	},

	Ph: {
		id: 'Ph',
		name: {
			EN: 'Philosophy',
			FR: 'Philosophie',
			AR: 'فلسفة',
		},
		icon: 'icon-[mdi--yin-yang]',
		levels: ['S2', 'S3'],
		color: '#A855F7',
	},
	Ar: {
		id: 'Ar',
		name: {
			EN: 'Arabic',
			FR: 'Arabe',
			AR: 'العربية',
		},
		icon: 'icon-[twemoji--flag-algeria]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#6B7280',
	},
	Am: {
		id: 'Am',
		name: {
			EN: 'Amazight',
			FR: 'Amazight',
			AR: 'الأمازيغية',
		},
		icon: 'icon-[openmoji--berber-flag]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#3B82F6',
	},
	Fr: {
		id: 'Fr',
		name: {
			EN: 'French',
			FR: 'Français',
			AR: 'الفرنسية',
		},
		icon: 'icon-[twemoji--flag-france]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#0EA5E9',
	},
	En: {
		id: 'En',
		name: {
			EN: 'English',
			FR: 'Anglais',
			AR: 'الإنجليزية',
		},
		icon: 'icon-[twemoji--flag-united-kingdom]',
		levels: ['P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		color: '#EAB308',
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
		color: '#6B7280',
	},
	Mg: {
		id: 'Mg',
		name: {
			EN: 'Accounting and Financial Management',
			FR: 'Gestion Comptable et Financière',
			AR: 'تسيير المحاسبي والمالي',
		},
		icon: 'icon-[tdesign--money]',
		levels: ['S2', 'S3'],
		color: '#EAB308',
	},
	Eco: {
		id: 'Eco',
		name: {
			EN: 'Economics and Management',
			FR: 'Économie et Management',
			AR: 'الإقتصاد و الماناجمنت',
		},
		icon: 'icon-[solar--case-bold]',
		levels: ['S2', 'S3'],
		color: '#6B7280',
	},
	La: {
		id: 'La',
		name: {
			EN: 'Law',
			FR: 'Droit',
			AR: 'قانون',
		},
		icon: 'icon-[octicon--law-24]',
		levels: ['S2', 'S3'],
		color: '#6B7280',
	},
	Tec: {
		id: 'Tec',
		name: {
			EN: 'Technology',
			FR: 'Technologie',
			AR: 'تكنولوجيا',
		},
		icon: 'icon-[hugeicons--nano-technology]',
		levels: ['S1', 'S2', 'S3'],
		color: '#0EA5E9',
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
		color: '#F97316',
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
		color: '#EC4899',
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
		color: '#EC4899',
	},
};
export const basicSubjectsList = Object.keys(basicSubjectsMap) as unknown as MyEnum<basicSubjectsEnumT>;
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
export const subjectsMap: Record<
	subjectsEnumT,
	ForLevelsDetailsWithCommonSubjectsI<subjectsEnumT, K12LevelsT> & { color: string }
> = {
	...Object.entries(restSubjects)
		.map(([, elm]) => ({ ...elm, mainSubject: elm.id }))
		.reduce(
			(acc, elm) => ({ ...acc, [elm.id]: elm }),
			{} as Record<
				Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'>,
				ForLevelsDetailsWithCommonSubjectsI<
					Exclude<basicSubjectsEnumT, 'A1' | 'A2' | 'Tec' | 'Fl'>,
					K12LevelsT
				> & { color: string }
			>
		),
	Ge: {
		id: 'Ge',
		name: {
			EN: 'German',
			FR: 'Allemand',
			AR: 'الألمانية',
		},
		icon: 'icon-[twemoji--flag-germany]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
		mainSubject: 'Fl',
		color: '#F97316',
	},
	Sp: {
		id: 'Sp',
		name: {
			EN: 'Spanish',
			FR: 'Espagnol',
			AR: 'الإسبانية',
		},
		icon: 'icon-[twemoji--flag-spain]',
		levels: ['S2', 'S3'],
		mainSubject: 'Fl',
		color: '#F97316',
	},
	It: {
		id: 'It',
		name: {
			EN: 'Italian',
			FR: 'Italien',
			AR: 'الإيطالية',
		},
		icon: 'icon-[twemoji--flag-italy]',
		levels: ['S2', 'S3'],
		mainSubject: 'Fl',
		color: '#22C55E',
	},
	/* Technology */
	Ce: {
		id: 'Ce',
		name: {
			EN: 'Civil Engineering',
			FR: 'Génie civil',
			AR: 'هندسة مدنية',
		},
		icon: 'icon-[mdi--construction]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
		color: '#0EA5E9',
	},
	Mc: {
		id: 'Mc',
		name: {
			EN: 'Mechanical Engineering',
			FR: 'Génie mécanique',
			AR: 'هندسة ميكانيكية',
		},
		icon: 'icon-[ion--cog]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
		color: '#0EA5E9',
	},
	Ee: {
		id: 'Ee',
		name: {
			EN: 'Electrical Engineering',
			FR: 'Génie électrique',
			AR: 'هندسة كهربائية',
		},
		icon: 'icon-[ic--baseline-electric-bolt]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
		color: '#0EA5E9',
	},
	Me: {
		id: 'Me',
		name: {
			EN: 'Methods Engineering',
			FR: 'Génie des méthodes',
			AR: 'هندسة الطرائق',
		},
		icon: 'icon-[ph--nuclear-plant]',
		levels: ['S1', 'S2', 'S3'],
		mainSubject: 'Tec',
		color: '#0EA5E9',
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
		color: '#6B7280',
	},
	Ade: {
		id: 'Ade',
		name: {
			EN: 'Design',
			FR: 'Design',
			AR: 'تصميم',
		},
		icon: 'icon-[iconoir--design-nib-solid]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
		color: '#EAB308',
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
		color: '#3B82F6',
	},
	Ami: {
		id: 'Ami',
		name: {
			EN: 'Music instrument',
			FR: 'Instrument de musique',
			AR: 'آلة موسيقية',
		},
		icon: 'icon-[fxemoji--musicalkeyboard]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
		color: '#F97316',
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
		color: '#A855F7',
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
		color: '#0EA5E9',
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
		color: '#A855F7',
	},
	Acc: {
		id: 'Acc',
		name: {
			EN: 'cinematographic culture',
			FR: 'Culture cinématographique',
			AR: 'ثقافة سينمائية',
		},
		icon: 'icon-[icon-park-outline--movie]',
		levels: ['S2', 'S3'],
		mainSubject: 'A2',
		color: '#6B7280',
	},
};

export const subjectsList = Object.keys(subjectsMap) as unknown as MyEnum<subjectsEnumT>;
export const subjectsWithColorsList = subjectsList.map((elm, i) => ({
	...subjectsMap[elm],
	color: generateRandomColor(i),
}));
export const subjectsWithColors = subjectsWithColorsList.reduce(
	(prev, curr) => ({ ...prev, [curr.id]: curr }),
	{} as Record<subjectsEnumT, ForLevelsDetailsWithCommonSubjectsI<subjectsEnumT, K12LevelsT> & { color: string }>
);

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

export const genericSubjects: GenericSubjectsEnum[] = ['A1', 'A2', 'Fl', 'Tec'];
export const expandedSpecialties: ExpendedSpecialtiesT[] = [
	'TCe', // Technical Math civil engineering
	'TEe', // Technical Math electrical engineering
	'TMc', // Technical Math mechanical engineering
	'TMe', // Technical Math Methods engineering
	/* foreign languages */
	'Fs', // Foreign language (spanish)
	'Fg', // Foreign language (german)
	'Fi', // Foreign language (italian)
	/* foreign languages */
	'Av', // Arts (audio visual)
	'At', // Arts (Theater and Performing)
	'Am', // Arts (music)
	'Af', // Arts (Fine Arts)
];

export const getActualSubject = (subject: basicSubjectsEnumT, specialty: SecondarySpecialtiesT): subjectsEnumT => {
	if (
		genericSubjects.includes(subject as GenericSubjectsEnum) &&
		expandedSpecialties.includes(specialty as ExpendedSpecialtiesT)
	) {
		return specialtyToGlobalSubjects[subject as GenericSubjectsEnum][specialty as ExpendedSpecialtiesT]!;
	}
	return subject as subjectsEnumT;
};
