import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const interestsMap: Record<interestsEnumT, EnumsDetailsI<interestsEnumT>> = {
	Reading: {
		id: 'Reading',
		name: {
			EN: 'Reading',
			AR: 'قراءة',
			FR: 'Lecture',
		},
		icon: 'icon-[mdi--book]',
	},
	Traveling: {
		id: 'Traveling',
		name: {
			EN: 'Traveling',
			AR: 'السفر',
			FR: 'Voyage',
		},
		icon: 'icon-[mdi--airplane]',
	},
	Photography: {
		id: 'Photography',
		name: {
			EN: 'Photography',
			AR: 'تصوير',
			FR: 'Photographie',
		},
		icon: 'icon-[mdi--camera]',
	},
	Writing: {
		id: 'Writing',
		name: {
			EN: 'Writing',
			AR: 'كتابة',
			FR: 'Écriture',
		},
		icon: 'icon-[mdi--pencil]',
	},
	Drawing: {
		id: 'Drawing',
		name: {
			EN: 'Drawing',
			AR: 'رسم',
			FR: 'Dessin',
		},
		icon: 'icon-[mdi--pencil]',
	},
	Singing: {
		id: 'Singing',
		name: {
			EN: 'Singing',
			AR: 'الغناء',
			FR: 'Chant',
		},
		icon: 'icon-[mdi--microphone]',
	},

	Cooking: {
		id: 'Cooking',
		name: {
			EN: 'Cooking',
			AR: 'الطبخ',
			FR: 'Cuisine',
		},
		icon: 'icon-[mdi--silverware-fork-knife]',
	},
	Baking: {
		id: 'Baking',
		name: {
			EN: 'Baking',
			AR: 'الخبز',
			FR: 'Pâtisserie',
		},
		icon: 'icon-[mdi--oven]',
	},
	Gardening: {
		id: 'Gardening',
		name: {
			EN: 'Gardening',
			AR: 'الزراعة',
			FR: 'Jardinage',
		},
		icon: 'icon-[mdi--flower]',
	},
	Fishing: {
		id: 'Fishing',
		name: {
			EN: 'Fishing',
			AR: 'الصيد',
			FR: 'Pêche',
		},
		icon: 'icon-[mdi--fish]',
	},
	Hiking: {
		id: 'Hiking',
		name: {
			EN: 'Hiking',
			AR: 'المشي لمسافات طويلة',
			FR: 'Randonnée',
		},
		icon: 'icon-[mdi--hiking]',
	},
	Camping: {
		id: 'Camping',
		name: {
			EN: 'Camping',
			AR: 'التخييم',
			FR: 'Camping',
		},
		icon: 'icon-[mdi--campfire]',
	},
	Videography: {
		id: 'Videography',
		name: {
			EN: 'Videography',
			AR: 'تصوير فيديو',
			FR: 'Vidéographie',
		},
		icon: 'icon-[mdi--video]',
	},
	Music: {
		id: 'Music',
		name: {
			EN: 'Music',
			AR: 'الموسيقى',
			FR: 'Musique',
		},
		icon: 'icon-[mdi--music]',
	},
	Movies: {
		id: 'Movies',
		name: {
			EN: 'Movies',
			AR: 'الأفلام',
			FR: 'Films',
		},
		icon: 'icon-[mdi--movie]',
	},
	'TV Series': {
		id: 'TV Series',
		name: {
			EN: 'TV Series',
			AR: 'المسلسلات',
			FR: 'Séries télévisées',
		},
		icon: 'icon-[mdi--television]',
	},
	Anime: {
		id: 'Anime',
		name: {
			EN: 'Anime',
			AR: 'الأنمي',
			FR: 'Anime',
		},
		icon: 'icon-[mdi--animation]',
	},
	Manga: {
		id: 'Manga',
		name: {
			EN: 'Manga',
			AR: 'المانجا',
			FR: 'Manga',
		},
		icon: 'icon-[mdi--book-open-page-variant]',
	},
	Comics: {
		id: 'Comics',
		name: {
			EN: 'Comics',
			AR: 'الكوميكس',
			FR: 'Bandes dessinées',
		},
		icon: 'icon-[mdi--comic-bubble]',
	},
	'Video Games': {
		id: 'Video Games',
		name: {
			EN: 'Video Games',
			AR: 'ألعاب الفيديو',
			FR: 'Jeux vidéo',
		},
		icon: 'icon-[mdi--gamepad-variant]',
	},
	'Board Games': {
		id: 'Board Games',
		name: {
			EN: 'Board Games',
			AR: 'ألعاب الطاولة',
			FR: 'Jeux de société',
		},
		icon: 'icon-[mdi--chess-queen]',
	},
	'Card Games': {
		id: 'Card Games',
		name: {
			EN: 'Card Games',
			AR: 'ألعاب الورق',
			FR: 'Jeux de cartes',
		},
		icon: 'icon-[mdi--cards]',
	},
	Sports: {
		id: 'Sports',
		name: {
			EN: 'Sports',
			AR: 'الرياضة',
			FR: 'Sports',
		},
		icon: 'icon-[mdi--soccer]',
	},

	Yoga: {
		id: 'Yoga',
		name: {
			EN: 'Yoga',
			AR: 'اليوغا',
			FR: 'Yoga',
		},
		icon: 'icon-[mdi--yoga]',
	},
	Religion: {
		id: 'Religion',
		name: {
			EN: 'Religion',
			AR: 'الدين',
			FR: 'Religion',
		},
		icon: 'icon-[mdi--church]',
	},
	Philosophy: {
		id: 'Philosophy',
		name: {
			EN: 'Philosophy',
			AR: 'الفلسفة',
			FR: 'Philosophie',
		},
		icon: 'icon-[mdi--thought-bubble]',
	},
	Psychology: {
		id: 'Psychology',
		name: {
			EN: 'Psychology',
			AR: 'علم النفس',
			FR: 'Psychologie',
		},
		icon: 'icon-[mdi--brain]',
	},
	Sociology: {
		id: 'Sociology',
		name: {
			EN: 'Sociology',
			AR: 'علم الاجتماع',
			FR: 'Sociologie',
		},
		icon: 'icon-[mdi--account-group]',
	},
	History: {
		id: 'History',
		name: {
			EN: 'History',
			AR: 'التاريخ',
			FR: 'Histoire',
		},
		icon: 'icon-[mdi--history]',
	},
	Science: {
		id: 'Science',
		name: {
			EN: 'Science',
			AR: 'العلوم',
			FR: 'Science',
		},
		icon: 'icon-[mdi--flask]',
	},
	Technology: {
		id: 'Technology',
		name: {
			EN: 'Technology',
			AR: 'التكنولوجيا',
			FR: 'Technologie',
		},
		icon: 'icon-[mdi--robot-industrial]',
	},
	Engineering: {
		id: 'Engineering',
		name: {
			EN: 'Engineering',
			AR: 'الهندسة',
			FR: 'Ingénierie',
		},
		icon: 'icon-[mdi--hammer-wrench]',
	},
	Mathematics: {
		id: 'Mathematics',
		name: {
			EN: 'Mathematics',
			AR: 'الرياضيات',
			FR: 'Mathématiques',
		},
		icon: 'icon-[mdi--calculator]',
	},
	Literature: {
		id: 'Literature',
		name: {
			EN: 'Literature',
			AR: 'الأدب',
			FR: 'Littérature',
		},
		icon: 'icon-[mdi--book-open]',
	},
	Poetry: {
		id: 'Poetry',
		name: {
			EN: 'Poetry',
			AR: 'الشعر',
			FR: 'Poésie',
		},
		icon: 'icon-[mdi--feather]',
	},
	Art: {
		id: 'Art',
		name: {
			EN: 'Art',
			AR: 'الفن',
			FR: 'Art',
		},
		icon: 'icon-[mdi--palette]',
	},
	Design: {
		id: 'Design',
		name: {
			EN: 'Design',
			AR: 'التصميم',
			FR: 'Design',
		},
		icon: 'icon-[mdi--palette]',
	},
	Fashion: {
		id: 'Fashion',
		name: {
			EN: 'Fashion',
			AR: 'الأزياء',
			FR: 'Mode',
		},
		icon: 'icon-[mdi--hanger]',
	},
	Beauty: {
		id: 'Beauty',
		name: {
			EN: 'Beauty',
			AR: 'الجمال',
			FR: 'Beauté',
		},
		icon: 'icon-[mdi--face]',
	},
	Health: {
		id: 'Health',
		name: {
			EN: 'Health',
			AR: 'الصحة',
			FR: 'Santé',
		},
		icon: 'icon-[mdi--heart-pulse]',
	},
	Nutrition: {
		id: 'Nutrition',
		name: {
			EN: 'Nutrition',
			AR: 'التغذية',
			FR: 'Nutrition',
		},
		icon: 'icon-[mdi--food-apple]',
	},
	Dieting: {
		id: 'Dieting',
		name: {
			EN: 'Dieting',
			AR: 'الرجيم',
			FR: 'Régime',
		},
		icon: 'icon-[mdi--weight-lifter]',
	},
	Weightlifting: {
		id: 'Weightlifting',
		name: {
			EN: 'Weightlifting',
			AR: 'رفع الأثقال',
			FR: 'Haltérophilie',
		},
		icon: 'icon-[mdi--weight-lifter]',
	},
	Bodybuilding: {
		id: 'Bodybuilding',
		name: {
			EN: 'Bodybuilding',
			AR: 'كمال الأجسام',
			FR: 'Culturisme',
		},
		icon: 'icon-[mdi--weight-lifter]',
	},
	Crossfit: {
		id: 'Crossfit',
		name: {
			EN: 'Crossfit',
			AR: 'كروسفت',
			FR: 'Crossfit',
		},
		icon: 'icon-[mdi--weight-lifter]',
	},
	Running: {
		id: 'Running',
		name: {
			EN: 'Running',
			AR: 'الجري',
			FR: 'Course à pied',
		},
		icon: 'icon-[mdi--run]',
	},
	Cycling: {
		id: 'Cycling',
		name: {
			EN: 'Cycling',
			AR: 'ركوب الدراجة',
			FR: 'Cyclisme',
		},
		icon: 'icon-[mdi--bike]',
	},
	Swimming: {
		id: 'Swimming',
		name: {
			EN: 'Swimming',
			AR: 'السباحة',
			FR: 'Natation',
		},
		icon: 'icon-[mdi--swim]',
	},
	Surfing: {
		id: 'Surfing',
		name: {
			EN: 'Surfing',
			AR: 'ركوب الأمواج',
			FR: 'Surf',
		},
		icon: 'icon-[mdi--surfing]',
	},
	Skateboarding: {
		id: 'Skateboarding',
		name: {
			EN: 'Skateboarding',
			AR: 'ركوب السكيت',
			FR: 'Skateboard',
		},
		icon: 'icon-[mdi--skateboard]',
	},
	Skiing: {
		id: 'Skiing',
		name: {
			EN: 'Skiing',
			AR: 'التزلج',
			FR: 'Ski',
		},
		icon: 'icon-[mdi--ski]',
	},

	Skating: {
		id: 'Skating',
		name: {
			EN: 'Skating',
			AR: 'التزحلق',
			FR: 'Patinage',
		},
		icon: 'icon-[mdi--skate]',
	},
	Golf: {
		id: 'Golf',
		name: {
			EN: 'Golf',
			AR: 'الجولف',
			FR: 'Golf',
		},
		icon: 'icon-[mdi--golf]',
	},
	Tennis: {
		id: 'Tennis',
		name: {
			EN: 'Tennis',
			AR: 'التنس',
			FR: 'Tennis',
		},
		icon: 'icon-[mdi--tennis]',
	},
	Badminton: {
		id: 'Badminton',
		name: {
			EN: 'Badminton',
			AR: 'الريشة الطائرة',
			FR: 'Badminton',
		},
		icon: 'icon-[mdi--badminton]',
	},
	'Table Tennis': {
		id: 'Table Tennis',
		name: {
			EN: 'Table Tennis',
			AR: 'تنس الطاولة',
			FR: 'Tennis de table',
		},
		icon: 'icon-[mdi--table-tennis]',
	},
	Basketball: {
		id: 'Basketball',
		name: {
			EN: 'Basketball',
			AR: 'كرة السلة',
			FR: 'Basketball',
		},
		icon: 'icon-[mdi--basketball]',
	},
	Volleyball: {
		id: 'Volleyball',
		name: {
			EN: 'Volleyball',
			AR: 'كرة الطائرة',
			FR: 'Volleyball',
		},
		icon: 'icon-[mdi--volleyball]',
	},
	Football: {
		id: 'Football',
		name: {
			EN: 'Football',
			AR: 'كرة القدم',
			FR: 'Football',
		},
		icon: 'icon-[mdi--football]',
	},

	Rugby: {
		id: 'Rugby',
		name: {
			EN: 'Rugby',
			AR: 'الرجبي',
			FR: 'Rugby',
		},
		icon: 'icon-[mdi--rugby]',
	},
	Hockey: {
		id: 'Hockey',
		name: {
			EN: 'Hockey',
			AR: 'الهوكي',
			FR: 'Hockey',
		},
		icon: 'icon-[mdi--hockey-sticks]',
	},

	Baseball: {
		id: 'Baseball',
		name: {
			EN: 'Baseball',
			AR: 'البيسبول',
			FR: 'Baseball',
		},
		icon: 'icon-[mdi--baseball]',
	},
	Softball: {
		id: 'Softball',
		name: {
			EN: 'Softball',
			AR: 'السوفتبول',
			FR: 'Softball',
		},
		icon: 'icon-[mdi--baseball]',
	},
	Bowling: {
		id: 'Bowling',
		name: {
			EN: 'Bowling',
			AR: 'البولينغ',
			FR: 'Bowling',
		},
		icon: 'icon-[mdi--bowling]',
	},
	Billiards: {
		id: 'Billiards',
		name: {
			EN: 'Billiards',
			AR: 'البلياردو',
			FR: 'Billard',
		},
		icon: 'icon-[mdi--billiards]',
	},
	Darts: {
		id: 'Darts',
		name: {
			EN: 'Darts',
			AR: 'لعبة السهام',
			FR: 'Fléchettes',
		},
		icon: 'icon-[mdi--target]',
	},
	Boxing: {
		id: 'Boxing',
		name: {
			EN: 'Boxing',
			AR: 'الملاكمة',
			FR: 'Boxe',
		},
		icon: 'icon-[mdi--boxing-glove]',
	},
	'Martial Arts': {
		id: 'Martial Arts',
		name: {
			EN: 'Martial Arts',
			AR: 'فنون القتال',
			FR: 'Arts martiaux',
		},
		icon: 'icon-[mdi--karate]',
	},
	Wrestling: {
		id: 'Wrestling',
		name: {
			EN: 'Wrestling',
			AR: 'المصارعة',
			FR: 'Lutte',
		},
		icon: 'icon-[mdi--wrestling]',
	},
	Gymnastics: {
		id: 'Gymnastics',
		name: {
			EN: 'Gymnastics',
			AR: 'الجمباز',
			FR: 'Gymnastique',
		},
		icon: 'icon-[mdi--gymnastics]',
	},
	Cheerleading: {
		id: 'Cheerleading',
		name: {
			EN: 'Cheerleading',
			AR: 'التشجيع',
			FR: 'Cheerleading',
		},
		icon: 'icon-[mdi--megaphone]',
	},
	Dance: {
		id: 'Dance',
		name: {
			EN: 'Dance',
			AR: 'الرقص',
			FR: 'Danse',
		},
		icon: 'icon-[mdi--dance-ballroom]',
	},
	Ballet: {
		id: 'Ballet',
		name: {
			EN: 'Ballet',
			AR: 'الباليه',
			FR: 'Ballet',
		},
		icon: 'icon-[mdi--ballet]',
	},
};
export const interestsList = Object.keys(interestsMap) as unknown as MyEnum<interestsEnumT>;
export const interestsMapWithColor: Record<
	interestsEnumT,
	EnumsDetailsWithColorI<interestsEnumT>
> = interestsList.reduce(
	(acc, key, i) => {
		acc[key] = { ...interestsMap[key], color: generateRandomColor(i) };
		return acc;
	},
	{} as Record<interestsEnumT, EnumsDetailsWithColorI<interestsEnumT>>
);
export const interestsMapWithColorList = Object.values(interestsMapWithColor);
export const interestsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<interestsEnumT, MyEnum<interestsEnumT>>(interestsList, error)
		.openapi('interestsEnum', { description: 'interests Enum' });
