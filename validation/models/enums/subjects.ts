import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const subjectsMap: Record<subjectsEnumT, ForLevelsDetailsI<subjectsEnumT>> = {
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
	Ge: {
		id: 'Ge',
		name: {
			EN: 'German',
			FR: 'Allemand',
			AR: 'الألمانية',
		},
		icon: 'icon-[mdi--translate]',
		levels: ['P1', 'P2', 'P3', 'P4', 'P5', 'M1', 'M2', 'M3', 'M4', 'S1', 'S2', 'S3'],
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
