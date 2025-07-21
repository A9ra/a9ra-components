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
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410866/interests/Reading_ch9hb0.png',
	},
	Traveling: {
		id: 'Traveling',
		name: {
			EN: 'Traveling',
			AR: 'السفر',
			FR: 'Voyage',
		},
		icon: 'icon-[mdi--airplane]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410867/interests/Traveling_inrg6e.png',
	},
	Photography: {
		id: 'Photography',
		name: {
			EN: 'Photography',
			AR: 'تصوير',
			FR: 'Photographie',
		},
		icon: 'icon-[mdi--camera]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410867/interests/Photography_hx12ht.png',
	},
	Writing: {
		id: 'Writing',
		name: {
			EN: 'Writing',
			AR: 'كتابة',
			FR: 'Écriture',
		},
		icon: 'icon-[mdi--pencil]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410867/interests/Writing_u5ph3x.png',
	},
	Drawing: {
		id: 'Drawing',
		name: {
			EN: 'Drawing',
			AR: 'رسم',
			FR: 'Dessin',
		},
		icon: 'icon-[mdi--pencil]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410867/interests/Drawing_aajm1h.png',
	},
	Singing: {
		id: 'Singing',
		name: {
			EN: 'Singing',
			AR: 'الغناء',
			FR: 'Chant',
		},
		icon: 'icon-[mdi--microphone]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410869/interests/Singing_df2y9u.png',
	},
	Cooking: {
		id: 'Cooking',
		name: {
			EN: 'Cooking',
			AR: 'الطبخ',
			FR: 'Cuisine',
		},
		icon: 'icon-[mdi--silverware-fork-knife]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410869/interests/Cooking_eribjs.png',
	},
	Baking: {
		id: 'Baking',
		name: {
			EN: 'Baking',
			AR: 'الخبز',
			FR: 'Pâtisserie',
		},
		icon: 'icon-[mdi--oven]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410869/interests/Baking_vlakrf.png',
	},
	Gardening: {
		id: 'Gardening',
		name: {
			EN: 'Gardening',
			AR: 'الزراعة',
			FR: 'Jardinage',
		},
		icon: 'icon-[mdi--flower]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410869/interests/Gardening_rjqemv.png',
	},
	Fishing: {
		id: 'Fishing',
		name: {
			EN: 'Fishing',
			AR: 'الصيد',
			FR: 'Pêche',
		},
		icon: 'icon-[mdi--fish]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410869/interests/Fishing_ihvlme.png',
	},
	Hiking: {
		id: 'Hiking',
		name: {
			EN: 'Hiking',
			AR: 'المشي لمسافات طويلة',
			FR: 'Randonnée',
		},
		icon: 'icon-[mdi--hiking]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410872/interests/Hiking_zixlez.png',
	},
	Camping: {
		id: 'Camping',
		name: {
			EN: 'Camping',
			AR: 'التخييم',
			FR: 'Camping',
		},
		icon: 'icon-[mdi--campfire]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410872/interests/Camping_cgcqd6.png',
	},
	Videography: {
		id: 'Videography',
		name: {
			EN: 'Videography',
			AR: 'تصوير فيديو',
			FR: 'Vidéographie',
		},
		icon: 'icon-[mdi--video]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410872/interests/Videography_jqljfy.png',
	},
	Music: {
		id: 'Music',
		name: {
			EN: 'Music',
			AR: 'الموسيقى',
			FR: 'Musique',
		},
		icon: 'icon-[mdi--music]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410872/interests/Music_qngb5v.png',
	},
	Movies: {
		id: 'Movies',
		name: {
			EN: 'Movies',
			AR: 'الأفلام',
			FR: 'Films',
		},
		icon: 'icon-[mdi--movie]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410872/interests/Movies_znusxo.png',
	},
	'TV Series': {
		id: 'TV Series',
		name: {
			EN: 'TV Series',
			AR: 'المسلسلات',
			FR: 'Séries télévisées',
		},
		icon: 'icon-[mdi--television]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410875/interests/TV_Series_yevdhu.png',
	},
	Anime: {
		id: 'Anime',
		name: {
			EN: 'Anime',
			AR: 'الأنمي',
			FR: 'Anime',
		},
		icon: 'icon-[mdi--animation]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410875/interests/Anime_swdbci.png',
	},
	Manga: {
		id: 'Manga',
		name: {
			EN: 'Manga',
			AR: 'المانجا',
			FR: 'Manga',
		},
		icon: 'icon-[mdi--book-open-page-variant]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410875/interests/Manga_hil4w3.png',
	},
	Comics: {
		id: 'Comics',
		name: {
			EN: 'Comics',
			AR: 'الكوميكس',
			FR: 'Bandes dessinées',
		},
		icon: 'icon-[mdi--comic-bubble]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410875/interests/Comics_uwozc3.png',
	},
	'Video Games': {
		id: 'Video Games',
		name: {
			EN: 'Video Games',
			AR: 'ألعاب الفيديو',
			FR: 'Jeux vidéo',
		},
		icon: 'icon-[mdi--gamepad-variant]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410875/interests/Video_Games_doe2yx.png',
	},
	'Board Games': {
		id: 'Board Games',
		name: {
			EN: 'Board Games',
			AR: 'ألعاب الطاولة',
			FR: 'Jeux de société',
		},
		icon: 'icon-[mdi--chess-queen]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410878/interests/Board_Games_zujztk.png',
	},
	'Card Games': {
		id: 'Card Games',
		name: {
			EN: 'Card Games',
			AR: 'ألعاب الورق',
			FR: 'Jeux de cartes',
		},
		icon: 'icon-[mdi--cards]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410878/interests/Card_Games_fefga9.png',
	},
	Sports: {
		id: 'Sports',
		name: {
			EN: 'Sports',
			AR: 'الرياضة',
			FR: 'Sports',
		},
		icon: 'icon-[mdi--soccer]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410878/interests/Sports_sb6nxg.png',
	},
	Yoga: {
		id: 'Yoga',
		name: {
			EN: 'Yoga',
			AR: 'اليوغا',
			FR: 'Yoga',
		},
		icon: 'icon-[mdi--yoga]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410878/interests/Yoga_jkjifo.png',
	},
	Religion: {
		id: 'Religion',
		name: {
			EN: 'Religion',
			AR: 'الدين',
			FR: 'Religion',
		},
		icon: 'icon-[mdi--church]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410878/interests/Religion_qpgf3w.png',
	},
	Philosophy: {
		id: 'Philosophy',
		name: {
			EN: 'Philosophy',
			AR: 'الفلسفة',
			FR: 'Philosophie',
		},
		icon: 'icon-[mdi--thought-bubble]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410880/interests/Philosophy_qg0fkj.png',
	},
	Psychology: {
		id: 'Psychology',
		name: {
			EN: 'Psychology',
			AR: 'علم النفس',
			FR: 'Psychologie',
		},
		icon: 'icon-[mdi--brain]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410880/interests/Psychology_kzpl89.png',
	},
	Sociology: {
		id: 'Sociology',
		name: {
			EN: 'Sociology',
			AR: 'علم الاجتماع',
			FR: 'Sociologie',
		},
		icon: 'icon-[mdi--account-group]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410880/interests/Sociology_uxknj0.png',
	},
	History: {
		id: 'History',
		name: {
			EN: 'History',
			AR: 'التاريخ',
			FR: 'Histoire',
		},
		icon: 'icon-[mdi--history]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410880/interests/History_srdmjb.png',
	},
	Science: {
		id: 'Science',
		name: {
			EN: 'Science',
			AR: 'العلوم',
			FR: 'Science',
		},
		icon: 'icon-[mdi--flask]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410880/interests/Science_huajmf.png',
	},
	Technology: {
		id: 'Technology',
		name: {
			EN: 'Technology',
			AR: 'التكنولوجيا',
			FR: 'Technologie',
		},
		icon: 'icon-[mdi--robot-industrial]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410882/interests/Technology_wksbf1.png',
	},
	Engineering: {
		id: 'Engineering',
		name: {
			EN: 'Engineering',
			AR: 'الهندسة',
			FR: 'Ingénierie',
		},
		icon: 'icon-[mdi--hammer-wrench]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410883/interests/Engineering_qayfiq.png',
	},
	Mathematics: {
		id: 'Mathematics',
		name: {
			EN: 'Mathematics',
			AR: 'الرياضيات',
			FR: 'Mathématiques',
		},
		icon: 'icon-[mdi--calculator]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410882/interests/Mathematics_ggbb6z.png',
	},
	Literature: {
		id: 'Literature',
		name: {
			EN: 'Literature',
			AR: 'الأدب',
			FR: 'Littérature',
		},
		icon: 'icon-[mdi--book-open]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410882/interests/Literature_gjeesm.png',
	},
	Poetry: {
		id: 'Poetry',
		name: {
			EN: 'Poetry',
			AR: 'الشعر',
			FR: 'Poésie',
		},
		icon: 'icon-[mdi--feather]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410882/interests/Poetry_of4r0k.png',
	},
	Art: {
		id: 'Art',
		name: {
			EN: 'Art',
			AR: 'الفن',
			FR: 'Art',
		},
		icon: 'icon-[mdi--palette]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410885/interests/Art_gwm54d.png',
	},
	Design: {
		id: 'Design',
		name: {
			EN: 'Design',
			AR: 'التصميم',
			FR: 'Design',
		},
		icon: 'icon-[mdi--palette]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410885/interests/Design_ju7wip.png',
	},
	Fashion: {
		id: 'Fashion',
		name: {
			EN: 'Fashion',
			AR: 'الأزياء',
			FR: 'Mode',
		},
		icon: 'icon-[mdi--hanger]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410885/interests/Fashion_ehz41m.png',
	},
	Beauty: {
		id: 'Beauty',
		name: {
			EN: 'Beauty',
			AR: 'الجمال',
			FR: 'Beauté',
		},
		icon: 'icon-[mdi--face]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410885/interests/Beauty_khtbly.png',
	},
	Health: {
		id: 'Health',
		name: {
			EN: 'Health',
			AR: 'الصحة',
			FR: 'Santé',
		},
		icon: 'icon-[mdi--heart-pulse]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410885/interests/Health_ublu2n.png',
	},
	Nutrition: {
		id: 'Nutrition',
		name: {
			EN: 'Nutrition',
			AR: 'التغذية',
			FR: 'Nutrition',
		},
		icon: 'icon-[mdi--food-apple]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410888/interests/Nutrition_mfnqun.png',
	},
	Dieting: {
		id: 'Dieting',
		name: {
			EN: 'Dieting',
			AR: 'الرجيم',
			FR: 'Régime',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410887/interests/Dieting_q9dihx.png',
	},
	Weightlifting: {
		id: 'Weightlifting',
		name: {
			EN: 'Weightlifting',
			AR: 'رفع الأثقال',
			FR: 'Haltérophilie',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410887/interests/Weightlifting_l4gv63.png',
	},
	Bodybuilding: {
		id: 'Bodybuilding',
		name: {
			EN: 'Bodybuilding',
			AR: 'كمال الأجسام',
			FR: 'Culturisme',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410887/interests/Bodybuilding_u5zdic.png',
	},
	Crossfit: {
		id: 'Crossfit',
		name: {
			EN: 'Crossfit',
			AR: 'كروسفت',
			FR: 'Crossfit',
		},
		icon: 'icon-[mdi--weight-lifter]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410887/interests/Crossfit_oialkq.png',
	},
	Running: {
		id: 'Running',
		name: {
			EN: 'Running',
			AR: 'الجري',
			FR: 'Course à pied',
		},
		icon: 'icon-[mdi--run]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410890/interests/Running_lz68st.png',
	},
	Cycling: {
		id: 'Cycling',
		name: {
			EN: 'Cycling',
			AR: 'ركوب الدراجة',
			FR: 'Cyclisme',
		},
		icon: 'icon-[mdi--bike]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410890/interests/Cycling_zjuu03.png',
	},
	Swimming: {
		id: 'Swimming',
		name: {
			EN: 'Swimming',
			AR: 'السباحة',
			FR: 'Natation',
		},
		icon: 'icon-[mdi--swim]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410890/interests/Swimming_gl60d6.png',
	},
	Surfing: {
		id: 'Surfing',
		name: {
			EN: 'Surfing',
			AR: 'ركوب الأمواج',
			FR: 'Surf',
		},
		icon: 'icon-[mdi--surfing]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410890/interests/Surfing_xg7nyn.png',
	},
	Skateboarding: {
		id: 'Skateboarding',
		name: {
			EN: 'Skateboarding',
			AR: 'ركوب السكيت',
			FR: 'Skateboard',
		},
		icon: 'icon-[mdi--skateboard]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410890/interests/Skateboarding_uinymv.png',
	},
	Skiing: {
		id: 'Skiing',
		name: {
			EN: 'Skiing',
			AR: 'التزلج',
			FR: 'Ski',
		},
		icon: 'icon-[mdi--ski]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410892/interests/Skiing_oygkrk.png',
	},
	Skating: {
		id: 'Skating',
		name: {
			EN: 'Skating',
			AR: 'التزحلق',
			FR: 'Patinage',
		},
		icon: 'icon-[mdi--skate]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410892/interests/Skating_m9wjbu.png',
	},
	Golf: {
		id: 'Golf',
		name: {
			EN: 'Golf',
			AR: 'الجولف',
			FR: 'Golf',
		},
		icon: 'icon-[mdi--golf]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410892/interests/Golf_zf2qzp.png',
	},
	Tennis: {
		id: 'Tennis',
		name: {
			EN: 'Tennis',
			AR: 'التنس',
			FR: 'Tennis',
		},
		icon: 'icon-[mdi--tennis]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410892/interests/Tennis_fmkxet.png',
	},
	Badminton: {
		id: 'Badminton',
		name: {
			EN: 'Badminton',
			AR: 'الريشة الطائرة',
			FR: 'Badminton',
		},
		icon: 'icon-[mdi--badminton]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410892/interests/Badminton_t0rhoe.png',
	},
	'Table Tennis': {
		id: 'Table Tennis',
		name: {
			EN: 'Table Tennis',
			AR: 'تنس الطاولة',
			FR: 'Tennis de table',
		},
		icon: 'icon-[mdi--table-tennis]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410894/interests/Table_Tennis_fjfncx.png',
	},
	Basketball: {
		id: 'Basketball',
		name: {
			EN: 'Basketball',
			AR: 'كرة السلة',
			FR: 'Basketball',
		},
		icon: 'icon-[mdi--basketball]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410895/interests/Basketball_bqrbrq.png',
	},
	Volleyball: {
		id: 'Volleyball',
		name: {
			EN: 'Volleyball',
			AR: 'كرة الطائرة',
			FR: 'Volleyball',
		},
		icon: 'icon-[mdi--volleyball]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410894/interests/Volleyball_rd8iiy.png',
	},
	Football: {
		id: 'Football',
		name: {
			EN: 'Football',
			AR: 'كرة القدم',
			FR: 'Football',
		},
		icon: 'icon-[mdi--football]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410894/interests/Football_kar6nh.png',
	},
	Rugby: {
		id: 'Rugby',
		name: {
			EN: 'Rugby',
			AR: 'الرجبي',
			FR: 'Rugby',
		},
		icon: 'icon-[mdi--rugby]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410895/interests/Rugby_s69vtn.png',
	},
	Hockey: {
		id: 'Hockey',
		name: {
			EN: 'Hockey',
			AR: 'الهوكي',
			FR: 'Hockey',
		},
		icon: 'icon-[mdi--hockey-sticks]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410897/interests/Hockey_iphcgm.png',
	},
	Baseball: {
		id: 'Baseball',
		name: {
			EN: 'Baseball',
			AR: 'البيسبول',
			FR: 'Baseball',
		},
		icon: 'icon-[mdi--baseball]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410897/interests/Baseball_m5iufy.png',
	},
	Softball: {
		id: 'Softball',
		name: {
			EN: 'Softball',
			AR: 'السوفتبول',
			FR: 'Softball',
		},
		icon: 'icon-[mdi--baseball]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410897/interests/Softball_f8vmej.png',
	},
	Bowling: {
		id: 'Bowling',
		name: {
			EN: 'Bowling',
			AR: 'البولينغ',
			FR: 'Bowling',
		},
		icon: 'icon-[mdi--bowling]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410897/interests/Bowling_ifwuoo.png',
	},
	Billiards: {
		id: 'Billiards',
		name: {
			EN: 'Billiards',
			AR: 'البلياردو',
			FR: 'Billard',
		},
		icon: 'icon-[mdi--billiards]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410897/interests/Billiards_qgtctf.png',
	},
	Darts: {
		id: 'Darts',
		name: {
			EN: 'Darts',
			AR: 'لعبة السهام',
			FR: 'Fléchettes',
		},
		icon: 'icon-[mdi--target]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410899/interests/Darts_fzunbh.png',
	},
	Boxing: {
		id: 'Boxing',
		name: {
			EN: 'Boxing',
			AR: 'الملاكمة',
			FR: 'Boxe',
		},
		icon: 'icon-[mdi--boxing-glove]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410899/interests/Boxing_pzzs3w.png',
	},
	'Martial Arts': {
		id: 'Martial Arts',
		name: {
			EN: 'Martial Arts',
			AR: 'فنون القتال',
			FR: 'Arts martiaux',
		},
		icon: 'icon-[mdi--karate]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410899/interests/Martial_Arts_bgnh5q.png',
	},
	Wrestling: {
		id: 'Wrestling',
		name: {
			EN: 'Wrestling',
			AR: 'المصارعة',
			FR: 'Lutte',
		},
		icon: 'icon-[mdi--wrestling]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410899/interests/Wrestling_flaqfe.png',
	},
	Gymnastics: {
		id: 'Gymnastics',
		name: {
			EN: 'Gymnastics',
			AR: 'الجمباز',
			FR: 'Gymnastique',
		},
		icon: 'icon-[mdi--gymnastics]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410899/interests/Gymnastics_fnytvd.png',
	},
	Cheerleading: {
		id: 'Cheerleading',
		name: {
			EN: 'Cheerleading',
			AR: 'التشجيع',
			FR: 'Cheerleading',
		},
		icon: 'icon-[mdi--megaphone]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410901/interests/Cheerleading_merczu.png',
	},
	Dance: {
		id: 'Dance',
		name: {
			EN: 'Dance',
			AR: 'الرقص',
			FR: 'Danse',
		},
		icon: 'icon-[mdi--dance-ballroom]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410901/interests/Dance_balcit.png',
	},
	Ballet: {
		id: 'Ballet',
		name: {
			EN: 'Ballet',
			AR: 'الباليه',
			FR: 'Ballet',
		},
		icon: 'icon-[mdi--ballet]',
		image: 'https://res.cloudinary.com/depjzgfzp/image/upload/v1749410901/interests/Ballet_uxhrix.png',
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
