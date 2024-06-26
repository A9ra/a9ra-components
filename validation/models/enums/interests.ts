import { z } from '^common/defaultZod';

export const interestsMap: Record<interestsEnumT, EnumsDetailsI<interestsEnumT>> = {
	Reading: {
		id: 'Reading',
		name: 'Reading',
		icon: 'Reading',
	},
	Traveling: {
		id: 'Traveling',
		name: 'Traveling',
		icon: 'Traveling',
	},
	Photography: {
		id: 'Photography',
		name: 'Photography',
		icon: 'Photography',
	},
	Writing: {
		id: 'Writing',
		name: 'Writing',
		icon: 'Writing',
	},
	Drawing: {
		id: 'Drawing',
		name: 'Drawing',
		icon: 'Drawing',
	},
	Singing: {
		id: 'Singing',
		name: 'Singing',
		icon: 'Singing',
	},
	Dancing: {
		id: 'Dancing',
		name: 'Dancing',
		icon: 'Dancing',
	},
	Cooking: {
		id: 'Cooking',
		name: 'Cooking',
		icon: 'Cooking',
	},
	Baking: {
		id: 'Baking',
		name: 'Baking',
		icon: 'Baking',
	},
	Gardening: {
		id: 'Gardening',
		name: 'Gardening',
		icon: 'Gardening',
	},
	Fishing: {
		id: 'Fishing',
		name: 'Fishing',
		icon: 'Fishing',
	},
	Hiking: {
		id: 'Hiking',
		name: 'Hiking',
		icon: 'Hiking',
	},
	Camping: {
		id: 'Camping',
		name: 'Camping',
		icon: 'Camping',
	},
	Videography: {
		id: 'Videography',
		name: 'Videography',
		icon: 'Videography',
	},
	Music: {
		id: 'Music',
		name: 'Music',
		icon: 'Music',
	},
	Movies: {
		id: 'Movies',
		name: 'Movies',
		icon: 'Movies',
	},
	'TV Series': {
		id: 'TV Series',
		name: 'TV Series',
		icon: 'TV Series',
	},
	Anime: {
		id: 'Anime',
		name: 'Anime',
		icon: 'Anime',
	},
	Manga: {
		id: 'Manga',
		name: 'Manga',
		icon: 'Manga',
	},
	Comics: {
		id: 'Comics',
		name: 'Comics',
		icon: 'Comics',
	},
	'Video Games': {
		id: 'Video Games',
		name: 'Video Games',
		icon: 'Video Games',
	},
	'Board Games': {
		id: 'Board Games',
		name: 'Board Games',
		icon: 'Board Games',
	},
	'Card Games': {
		id: 'Card Games',
		name: 'Card Games',
		icon: 'Card Games',
	},
	Sports: {
		id: 'Sports',
		name: 'Sports',
		icon: 'Sports',
	},
	Exercise: {
		id: 'Exercise',
		name: 'Exercise',
		icon: 'Exercise',
	},
	Yoga: {
		id: 'Yoga',
		name: 'Yoga',
		icon: 'Yoga',
	},
	Meditation: {
		id: 'Meditation',
		name: 'Meditation',
		icon: 'Meditation',
	},
	Mindfulness: {
		id: 'Mindfulness',
		name: 'Mindfulness',
		icon: 'Mindfulness',
	},
	Spirituality: {
		id: 'Spirituality',
		name: 'Spirituality',
		icon: 'Spirituality',
	},
	Religion: {
		id: 'Religion',
		name: 'Religion',
		icon: 'Religion',
	},
	Philosophy: {
		id: 'Philosophy',
		name: 'Philosophy',
		icon: 'Philosophy',
	},
	Psychology: {
		id: 'Psychology',
		name: 'Psychology',
		icon: 'Psychology',
	},
	Sociology: {
		id: 'Sociology',
		name: 'Sociology',
		icon: 'Sociology',
	},
	History: {
		id: 'History',
		name: 'History',
		icon: 'History',
	},
	Science: {
		id: 'Science',
		name: 'Science',
		icon: 'Science',
	},
	Technology: {
		id: 'Technology',
		name: 'Technology',
		icon: 'Technology',
	},
	Engineering: {
		id: 'Engineering',
		name: 'Engineering',
		icon: 'Engineering',
	},
	Mathematics: {
		id: 'Mathematics',
		name: 'Mathematics',
		icon: 'Mathematics',
	},
	Literature: {
		id: 'Literature',
		name: 'Literature',
		icon: 'Literature',
	},
	Poetry: {
		id: 'Poetry',
		name: 'Poetry',
		icon: 'Poetry',
	},
	Art: {
		id: 'Art',
		name: 'Art',
		icon: 'Art',
	},
	Design: {
		id: 'Design',
		name: 'Design',
		icon: 'Design',
	},
	Fashion: {
		id: 'Fashion',
		name: 'Fashion',
		icon: 'Fashion',
	},
	Beauty: {
		id: 'Beauty',
		name: 'Beauty',
		icon: 'Beauty',
	},
	Health: {
		id: 'Health',
		name: 'Health',
		icon: 'Health',
	},
	Nutrition: {
		id: 'Nutrition',
		name: 'Nutrition',
		icon: 'Nutrition',
	},
	Dieting: {
		id: 'Dieting',
		name: 'Dieting',
		icon: 'Dieting',
	},
	Weightlifting: {
		id: 'Weightlifting',
		name: 'Weightlifting',
		icon: 'Weightlifting',
	},
	Bodybuilding: {
		id: 'Bodybuilding',
		name: 'Bodybuilding',
		icon: 'Bodybuilding',
	},
	Crossfit: {
		id: 'Crossfit',
		name: 'Crossfit',
		icon: 'Crossfit',
	},
	Running: {
		id: 'Running',
		name: 'Running',
		icon: 'Running',
	},
	Cycling: {
		id: 'Cycling',
		name: 'Cycling',
		icon: 'Cycling',
	},
	Swimming: {
		id: 'Swimming',
		name: 'Swimming',
		icon: 'Swimming',
	},
	Surfing: {
		id: 'Surfing',
		name: 'Surfing',
		icon: 'Surfing',
	},
	Skateboarding: {
		id: 'Skateboarding',
		name: 'Skateboarding',
		icon: 'Skateboarding',
	},
	Skiing: {
		id: 'Skiing',
		name: 'Skiing',
		icon: 'Skiing',
	},
	Snowboarding: {
		id: 'Snowboarding',
		name: 'Snowboarding',
		icon: 'Snowboarding',
	},
	Skating: {
		id: 'Skating',
		name: 'Skating',
		icon: 'Skating',
	},
	Golf: {
		id: 'Golf',
		name: 'Golf',
		icon: 'Golf',
	},
	Tennis: {
		id: 'Tennis',
		name: 'Tennis',
		icon: 'Tennis',
	},
	Badminton: {
		id: 'Badminton',
		name: 'Badminton',
		icon: 'Badminton',
	},
	'Table Tennis': {
		id: 'Table Tennis',
		name: 'Table Tennis',
		icon: 'Table Tennis',
	},
	Basketball: {
		id: 'Basketball',
		name: 'Basketball',
		icon: 'Basketball',
	},
	Volleyball: {
		id: 'Volleyball',
		name: 'Volleyball',
		icon: 'Volleyball',
	},
	Football: {
		id: 'Football',
		name: 'Football',
		icon: 'Football',
	},
	Soccer: {
		id: 'Soccer',
		name: 'Soccer',
		icon: 'Soccer',
	},
	Rugby: {
		id: 'Rugby',
		name: 'Rugby',
		icon: 'Rugby',
	},
	Hockey: {
		id: 'Hockey',
		name: 'Hockey',
		icon: 'Hockey',
	},
	Cricket: {
		id: 'Cricket',
		name: 'Cricket',
		icon: 'Cricket',
	},
	Baseball: {
		id: 'Baseball',
		name: 'Baseball',
		icon: 'Baseball',
	},
	Softball: {
		id: 'Softball',
		name: 'Softball',
		icon: 'Softball',
	},
	Bowling: {
		id: 'Bowling',
		name: 'Bowling',
		icon: 'Bowling',
	},
	Billiards: {
		id: 'Billiards',
		name: 'Billiards',
		icon: 'Billiards',
	},
	Darts: {
		id: 'Darts',
		name: 'Darts',
		icon: 'Darts',
	},
	Boxing: {
		id: 'Boxing',
		name: 'Boxing',
		icon: 'Boxing',
	},
	'Martial Arts': {
		id: 'Martial Arts',
		name: 'Martial Arts',
		icon: 'Martial Arts',
	},
	Wrestling: {
		id: 'Wrestling',
		name: 'Wrestling',
		icon: 'Wrestling',
	},
	Gymnastics: {
		id: 'Gymnastics',
		name: 'Gymnastics',
		icon: 'Gymnastics',
	},
	Cheerleading: {
		id: 'Cheerleading',
		name: 'Cheerleading',
		icon: 'Cheerleading',
	},
	Dance: {
		id: 'Dance',
		name: 'Dance',
		icon: 'Dance',
	},
	Ballet: {
		id: 'Ballet',
		name: 'Ballet',
		icon: 'Ballet',
	},
	Tap: {
		id: 'Tap',
		name: 'Tap',
		icon: 'Tap',
	},
	Jazz: {
		id: 'Jazz',
		name: 'Jazz',
		icon: 'Jazz',
	},
	'Hip Hop': {
		id: 'Hip Hop',
		name: 'Hip Hop',
		icon: 'Hip Hop',
	},
	Breakdance: {
		id: 'Breakdance',
		name: 'Breakdance',
		icon: 'Breakdance',
	},
	Ballroom: {
		id: 'Ballroom',
		name: 'Ballroom',
		icon: 'Ballroom',
	},
	Latin: {
		id: 'Latin',
		name: 'Latin',
		icon: 'Latin',
	},
	Swing: {
		id: 'Swing',
		name: 'Swing',
		icon: 'Swing',
	},
	Country: {
		id: 'Country',
		name: 'Country',
		icon: 'Country',
	},
	Folk: {
		id: 'Folk',
		name: 'Folk',
		icon: 'Folk',
	},
	Line: {
		id: 'Line',
		name: 'Line',
		icon: 'Line',
	},
	Square: {
		id: 'Square',
		name: 'Square',
		icon: 'Square',
	},
	Contra: {
		id: 'Contra',
		name: 'Contra',
		icon: 'Contra',
	},
	Social: {
		id: 'Social',
		name: 'Social',
		icon: 'Social',
	},
	Modern: {
		id: 'Modern',
		name: 'Modern',
		icon: 'Modern',
	},
	Contemporary: {
		id: 'Contemporary',
		name: 'Contemporary',
		icon: 'Contemporary',
	},
	Lyrical: {
		id: 'Lyrical',
		name: 'Lyrical',
		icon: 'Lyrical',
	},
	Acrobatic: {
		id: 'Acrobatic',
		name: 'Acrobatic',
		icon: 'Acrobatic',
	},
	Aerial: {
		id: 'Aerial',
		name: 'Aerial',
		icon: 'Aerial',
	},
};
export const interestsList = Object.keys(interestsMap) as unknown as MyEnum<interestsEnumT>;

export const interestsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<interestsEnumT, MyEnum<interestsEnumT>>(interestsList, error)
		.openapi('interestsEnum', { description: 'interests Enum' });
