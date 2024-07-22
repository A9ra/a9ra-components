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
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651365/interests/Reading_duat8g.png',
	},
	Traveling: {
		id: 'Traveling',
		name: {
			EN: 'Traveling',
			AR: 'السفر',
			FR: 'Voyage',
		},
		icon: 'icon-[mdi--airplane]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651366/interests/Traveling_y7sgqw.png',
	},
	Photography: {
		id: 'Photography',
		name: {
			EN: 'Photography',
			AR: 'تصوير',
			FR: 'Photographie',
		},
		icon: 'icon-[mdi--camera]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651366/interests/Photography_yzwrih.png',
	},
	Writing: {
		id: 'Writing',
		name: {
			EN: 'Writing',
			AR: 'كتابة',
			FR: 'Écriture',
		},
		icon: 'icon-[mdi--pencil]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651366/interests/Writing_lwmmdo.png',
	},
	Drawing: {
		id: 'Drawing',
		name: {
			EN: 'Drawing',
			AR: 'رسم',
			FR: 'Dessin',
		},
		icon: 'icon-[mdi--pencil]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651366/interests/Drawing_ihbgrg.png',
	},
	Singing: {
		id: 'Singing',
		name: {
			EN: 'Singing',
			AR: 'الغناء',
			FR: 'Chant',
		},
		icon: 'icon-[mdi--microphone]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651368/interests/Singing_h1vosl.png',
	},
	Cooking: {
		id: 'Cooking',
		name: {
			EN: 'Cooking',
			AR: 'الطبخ',
			FR: 'Cuisine',
		},
		icon: 'icon-[mdi--silverware-fork-knife]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651368/interests/Cooking_p3ixhh.png',
	},
	Baking: {
		id: 'Baking',
		name: {
			EN: 'Baking',
			AR: 'الخبز',
			FR: 'Pâtisserie',
		},
		icon: 'icon-[mdi--oven]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651368/interests/Baking_yzfzjt.png',
	},
	Gardening: {
		id: 'Gardening',
		name: {
			EN: 'Gardening',
			AR: 'الزراعة',
			FR: 'Jardinage',
		},
		icon: 'icon-[mdi--flower]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651368/interests/Gardening_ignqtk.png',
	},
	Fishing: {
		id: 'Fishing',
		name: {
			EN: 'Fishing',
			AR: 'الصيد',
			FR: 'Pêche',
		},
		icon: 'icon-[mdi--fish]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651368/interests/Fishing_xwkhp2.png',
	},
	Hiking: {
		id: 'Hiking',
		name: {
			EN: 'Hiking',
			AR: 'المشي لمسافات طويلة',
			FR: 'Randonnée',
		},
		icon: 'icon-[mdi--hiking]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651371/interests/Hiking_u1pl0e.png',
	},
	Camping: {
		id: 'Camping',
		name: {
			EN: 'Camping',
			AR: 'التخييم',
			FR: 'Camping',
		},
		icon: 'icon-[mdi--campfire]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651371/interests/Camping_dublag.png',
	},
	Videography: {
		id: 'Videography',
		name: {
			EN: 'Videography',
			AR: 'تصوير فيديو',
			FR: 'Vidéographie',
		},
		icon: 'icon-[mdi--video]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651371/interests/Videography_et8mog.png',
	},
	Music: {
		id: 'Music',
		name: {
			EN: 'Music',
			AR: 'الموسيقى',
			FR: 'Musique',
		},
		icon: 'icon-[mdi--music]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651371/interests/Music_qcrymr.png',
	},
	Movies: {
		id: 'Movies',
		name: {
			EN: 'Movies',
			AR: 'الأفلام',
			FR: 'Films',
		},
		icon: 'icon-[mdi--movie]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651371/interests/Movies_garf1c.png',
	},
	'TV Series': {
		id: 'TV Series',
		name: {
			EN: 'TV Series',
			AR: 'المسلسلات',
			FR: 'Séries télévisées',
		},
		icon: 'icon-[mdi--television]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651374/interests/TV_Series_vl1ujy.png',
	},
	Anime: {
		id: 'Anime',
		name: {
			EN: 'Anime',
			AR: 'الأنمي',
			FR: 'Anime',
		},
		icon: 'icon-[mdi--animation]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651374/interests/Anime_ue61ag.png',
	},
	Manga: {
		id: 'Manga',
		name: {
			EN: 'Manga',
			AR: 'المانجا',
			FR: 'Manga',
		},
		icon: 'icon-[mdi--book-open-page-variant]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651374/interests/Manga_qeapae.png',
	},
	Comics: {
		id: 'Comics',
		name: {
			EN: 'Comics',
			AR: 'الكوميكس',
			FR: 'Bandes dessinées',
		},
		icon: 'icon-[mdi--comic-bubble]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651374/interests/Comics_d000vc.png',
	},
	'Video Games': {
		id: 'Video Games',
		name: {
			EN: 'Video Games',
			AR: 'ألعاب الفيديو',
			FR: 'Jeux vidéo',
		},
		icon: 'icon-[mdi--gamepad-variant]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651374/interests/Video_Games_gmyxd9.png',
	},
	'Board Games': {
		id: 'Board Games',
		name: {
			EN: 'Board Games',
			AR: 'ألعاب الطاولة',
			FR: 'Jeux de société',
		},
		icon: 'icon-[mdi--chess-queen]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651377/interests/Board_Games_rutssi.png',
	},
	'Card Games': {
		id: 'Card Games',
		name: {
			EN: 'Card Games',
			AR: 'ألعاب الورق',
			FR: 'Jeux de cartes',
		},
		icon: 'icon-[mdi--cards]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651377/interests/Card_Games_ctm1g7.png',
	},
	Sports: {
		id: 'Sports',
		name: {
			EN: 'Sports',
			AR: 'الرياضة',
			FR: 'Sports',
		},
		icon: 'icon-[mdi--soccer]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651377/interests/Sports_c8sleu.png',
	},
	Yoga: {
		id: 'Yoga',
		name: {
			EN: 'Yoga',
			AR: 'اليوغا',
			FR: 'Yoga',
		},
		icon: 'icon-[mdi--yoga]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651377/interests/Yoga_dgasuo.png',
	},
	Religion: {
		id: 'Religion',
		name: {
			EN: 'Religion',
			AR: 'الدين',
			FR: 'Religion',
		},
		icon: 'icon-[mdi--church]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651377/interests/Religion_zcmudd.png',
	},
	Philosophy: {
		id: 'Philosophy',
		name: {
			EN: 'Philosophy',
			AR: 'الفلسفة',
			FR: 'Philosophie',
		},
		icon: 'icon-[mdi--thought-bubble]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651380/interests/Philosophy_s6x98a.png',
	},
	Psychology: {
		id: 'Psychology',
		name: {
			EN: 'Psychology',
			AR: 'علم النفس',
			FR: 'Psychologie',
		},
		icon: 'icon-[mdi--brain]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651380/interests/Psychology_cbu1d2.png',
	},
	Sociology: {
		id: 'Sociology',
		name: {
			EN: 'Sociology',
			AR: 'علم الاجتماع',
			FR: 'Sociologie',
		},
		icon: 'icon-[mdi--account-group]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651380/interests/Sociology_t6qgms.png',
	},
	History: {
		id: 'History',
		name: {
			EN: 'History',
			AR: 'التاريخ',
			FR: 'Histoire',
		},
		icon: 'icon-[mdi--history]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651380/interests/History_xfbkfk.png',
	},
	Science: {
		id: 'Science',
		name: {
			EN: 'Science',
			AR: 'العلوم',
			FR: 'Science',
		},
		icon: 'icon-[mdi--flask]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651380/interests/Science_zw04ap.png',
	},
	Technology: {
		id: 'Technology',
		name: {
			EN: 'Technology',
			AR: 'التكنولوجيا',
			FR: 'Technologie',
		},
		icon: 'icon-[mdi--robot-industrial]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651383/interests/Technology_mqagof.png',
	},
	Engineering: {
		id: 'Engineering',
		name: {
			EN: 'Engineering',
			AR: 'الهندسة',
			FR: 'Ingénierie',
		},
		icon: 'icon-[mdi--hammer-wrench]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651383/interests/Engineering_yefcjr.png',
	},
	Mathematics: {
		id: 'Mathematics',
		name: {
			EN: 'Mathematics',
			AR: 'الرياضيات',
			FR: 'Mathématiques',
		},
		icon: 'icon-[mdi--calculator]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651383/interests/Mathematics_a71mqq.png',
	},
	Literature: {
		id: 'Literature',
		name: {
			EN: 'Literature',
			AR: 'الأدب',
			FR: 'Littérature',
		},
		icon: 'icon-[mdi--book-open]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651383/interests/Literature_rmhufv.png',
	},
	Poetry: {
		id: 'Poetry',
		name: {
			EN: 'Poetry',
			AR: 'الشعر',
			FR: 'Poésie',
		},
		icon: 'icon-[mdi--feather]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651383/interests/Poetry_lq1x9l.png',
	},
	Art: {
		id: 'Art',
		name: {
			EN: 'Art',
			AR: 'الفن',
			FR: 'Art',
		},
		icon: 'icon-[mdi--palette]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651386/interests/Art_nklmyb.png',
	},
	Design: {
		id: 'Design',
		name: {
			EN: 'Design',
			AR: 'التصميم',
			FR: 'Design',
		},
		icon: 'icon-[mdi--palette]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651386/interests/Design_pisnhg.png',
	},
	Fashion: {
		id: 'Fashion',
		name: {
			EN: 'Fashion',
			AR: 'الأزياء',
			FR: 'Mode',
		},
		icon: 'icon-[mdi--hanger]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651386/interests/Fashion_ryfn44.png',
	},
	Beauty: {
		id: 'Beauty',
		name: {
			EN: 'Beauty',
			AR: 'الجمال',
			FR: 'Beauté',
		},
		icon: 'icon-[mdi--face]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651386/interests/Beauty_gpoebc.png',
	},
	Health: {
		id: 'Health',
		name: {
			EN: 'Health',
			AR: 'الصحة',
			FR: 'Santé',
		},
		icon: 'icon-[mdi--heart-pulse]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651386/interests/Health_nlupnr.png',
	},
	Nutrition: {
		id: 'Nutrition',
		name: {
			EN: 'Nutrition',
			AR: 'التغذية',
			FR: 'Nutrition',
		},
		icon: 'icon-[mdi--food-apple]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651389/interests/Nutrition_dnnnlw.png',
	},
	Dieting: {
		id: 'Dieting',
		name: {
			EN: 'Dieting',
			AR: 'الرجيم',
			FR: 'Régime',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651389/interests/Dieting_wppgpe.png',
	},
	Weightlifting: {
		id: 'Weightlifting',
		name: {
			EN: 'Weightlifting',
			AR: 'رفع الأثقال',
			FR: 'Haltérophilie',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651389/interests/Weightlifting_ow90hl.png',
	},
	Bodybuilding: {
		id: 'Bodybuilding',
		name: {
			EN: 'Bodybuilding',
			AR: 'كمال الأجسام',
			FR: 'Culturisme',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651389/interests/Bodybuilding_rnz2fz.png',
	},
	Crossfit: {
		id: 'Crossfit',
		name: {
			EN: 'Crossfit',
			AR: 'كروسفت',
			FR: 'Crossfit',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651389/interests/Crossfit_f9j5uo.png',
	},
	Running: {
		id: 'Running',
		name: {
			EN: 'Running',
			AR: 'الجري',
			FR: 'Course à pied',
		},
		icon: 'icon-[mdi--run]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651392/interests/Running_vc0udx.png',
	},
	Cycling: {
		id: 'Cycling',
		name: {
			EN: 'Cycling',
			AR: 'ركوب الدراجة',
			FR: 'Cyclisme',
		},
		icon: 'icon-[mdi--bike]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651391/interests/Cycling_nlpytu.png',
	},
	Swimming: {
		id: 'Swimming',
		name: {
			EN: 'Swimming',
			AR: 'السباحة',
			FR: 'Natation',
		},
		icon: 'icon-[mdi--swim]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651391/interests/Swimming_ajtk4n.png',
	},
	Surfing: {
		id: 'Surfing',
		name: {
			EN: 'Surfing',
			AR: 'ركوب الأمواج',
			FR: 'Surf',
		},
		icon: 'icon-[mdi--surfing]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651391/interests/Surfing_xv0xpw.png',
	},
	Skateboarding: {
		id: 'Skateboarding',
		name: {
			EN: 'Skateboarding',
			AR: 'ركوب السكيت',
			FR: 'Skateboard',
		},
		icon: 'icon-[mdi--skateboard]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651392/interests/Skateboarding_jthc6u.png',
	},
	Skiing: {
		id: 'Skiing',
		name: {
			EN: 'Skiing',
			AR: 'التزلج',
			FR: 'Ski',
		},
		icon: 'icon-[mdi--ski]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651395/interests/Skiing_ckcdrt.png',
	},
	Skating: {
		id: 'Skating',
		name: {
			EN: 'Skating',
			AR: 'التزحلق',
			FR: 'Patinage',
		},
		icon: 'icon-[mdi--skate]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651395/interests/Skating_dd8g3g.png',
	},
	Golf: {
		id: 'Golf',
		name: {
			EN: 'Golf',
			AR: 'الجولف',
			FR: 'Golf',
		},
		icon: 'icon-[mdi--golf]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651395/interests/Golf_ycmldd.png',
	},
	Tennis: {
		id: 'Tennis',
		name: {
			EN: 'Tennis',
			AR: 'التنس',
			FR: 'Tennis',
		},
		icon: 'icon-[mdi--tennis]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651395/interests/Tennis_i4ep2p.png',
	},
	Badminton: {
		id: 'Badminton',
		name: {
			EN: 'Badminton',
			AR: 'الريشة الطائرة',
			FR: 'Badminton',
		},
		icon: 'icon-[mdi--badminton]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651395/interests/Badminton_cidsor.png',
	},
	'Table Tennis': {
		id: 'Table Tennis',
		name: {
			EN: 'Table Tennis',
			AR: 'تنس الطاولة',
			FR: 'Tennis de table',
		},
		icon: 'icon-[mdi--table-tennis]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651398/interests/Table_Tennis_cugqdd.png',
	},
	Basketball: {
		id: 'Basketball',
		name: {
			EN: 'Basketball',
			AR: 'كرة السلة',
			FR: 'Basketball',
		},
		icon: 'icon-[mdi--basketball]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651398/interests/Basketball_h578so.png',
	},
	Volleyball: {
		id: 'Volleyball',
		name: {
			EN: 'Volleyball',
			AR: 'كرة الطائرة',
			FR: 'Volleyball',
		},
		icon: 'icon-[mdi--volleyball]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651398/interests/Volleyball_xvaygw.png',
	},
	Football: {
		id: 'Football',
		name: {
			EN: 'Football',
			AR: 'كرة القدم',
			FR: 'Football',
		},
		icon: 'icon-[mdi--football]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651398/interests/Football_pezpku.png',
	},
	Rugby: {
		id: 'Rugby',
		name: {
			EN: 'Rugby',
			AR: 'الرجبي',
			FR: 'Rugby',
		},
		icon: 'icon-[mdi--rugby]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651398/interests/Rugby_g6frlq.png',
	},
	Hockey: {
		id: 'Hockey',
		name: {
			EN: 'Hockey',
			AR: 'الهوكي',
			FR: 'Hockey',
		},
		icon: 'icon-[mdi--hockey-sticks]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651400/interests/Hockey_flobjh.png',
	},
	Baseball: {
		id: 'Baseball',
		name: {
			EN: 'Baseball',
			AR: 'البيسبول',
			FR: 'Baseball',
		},
		icon: 'icon-[mdi--baseball]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651400/interests/Baseball_piid84.png',
	},
	Softball: {
		id: 'Softball',
		name: {
			EN: 'Softball',
			AR: 'السوفتبول',
			FR: 'Softball',
		},
		icon: 'icon-[mdi--baseball]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651400/interests/Softball_r2zdf7.png',
	},
	Bowling: {
		id: 'Bowling',
		name: {
			EN: 'Bowling',
			AR: 'البولينغ',
			FR: 'Bowling',
		},
		icon: 'icon-[mdi--bowling]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651400/interests/Bowling_d5orts.png',
	},
	Billiards: {
		id: 'Billiards',
		name: {
			EN: 'Billiards',
			AR: 'البلياردو',
			FR: 'Billard',
		},
		icon: 'icon-[mdi--billiards]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651400/interests/Billiards_me6nle.png',
	},
	Darts: {
		id: 'Darts',
		name: {
			EN: 'Darts',
			AR: 'لعبة السهام',
			FR: 'Fléchettes',
		},
		icon: 'icon-[mdi--target]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651403/interests/Darts_uciwcr.png',
	},
	Boxing: {
		id: 'Boxing',
		name: {
			EN: 'Boxing',
			AR: 'الملاكمة',
			FR: 'Boxe',
		},
		icon: 'icon-[mdi--boxing-glove]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651403/interests/Boxing_hmmfab.png',
	},
	'Martial Arts': {
		id: 'Martial Arts',
		name: {
			EN: 'Martial Arts',
			AR: 'فنون القتال',
			FR: 'Arts martiaux',
		},
		icon: 'icon-[mdi--karate]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651403/interests/Martial_Arts_tayihh.png',
	},
	Wrestling: {
		id: 'Wrestling',
		name: {
			EN: 'Wrestling',
			AR: 'المصارعة',
			FR: 'Lutte',
		},
		icon: 'icon-[mdi--wrestling]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651403/interests/Wrestling_uugd3g.png',
	},
	Gymnastics: {
		id: 'Gymnastics',
		name: {
			EN: 'Gymnastics',
			AR: 'الجمباز',
			FR: 'Gymnastique',
		},
		icon: 'icon-[mdi--gymnastics]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651403/interests/Gymnastics_khartu.png',
	},
	Cheerleading: {
		id: 'Cheerleading',
		name: {
			EN: 'Cheerleading',
			AR: 'التشجيع',
			FR: 'Cheerleading',
		},
		icon: 'icon-[mdi--megaphone]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651406/interests/Cheerleading_ouhrr8.png',
	},
	Dance: {
		id: 'Dance',
		name: {
			EN: 'Dance',
			AR: 'الرقص',
			FR: 'Danse',
		},
		icon: 'icon-[mdi--dance-ballroom]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651406/interests/Dance_iflixe.png',
	},
	Ballet: {
		id: 'Ballet',
		name: {
			EN: 'Ballet',
			AR: 'الباليه',
			FR: 'Ballet',
		},
		icon: 'icon-[mdi--ballet]',
		image: 'https://res.cloudinary.com/a9ra/image/upload/v1721651406/interests/Ballet_vztqzj.png',
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
