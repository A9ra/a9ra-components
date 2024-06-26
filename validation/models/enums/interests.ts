import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const interestsMap: Record<interestsEnumT, EnumsDetailsI<interestsEnumT>> = {
	Reading: {
		id: 'Reading',
		name: 'Reading',
		icon: 'icon-[mdi--book]',
	},
	Traveling: {
		id: 'Traveling',
		name: 'Traveling',
		icon: 'icon-[mdi--airplane]',
	},
	Photography: {
		id: 'Photography',
		name: 'Photography',
		icon: 'icon-[mdi--camera]',
	},
	Writing: {
		id: 'Writing',
		name: 'Writing',
		icon: 'icon-[mdi--pencil]',
	},
	Drawing: {
		id: 'Drawing',
		name: 'Drawing',
		icon: 'icon-[mdi--pencil]',
	},
	Singing: {
		id: 'Singing',
		name: 'Singing',
		icon: 'icon-[mdi--microphone]',
	},
	Dancing: {
		id: 'Dancing',
		name: 'Dancing',
		icon: 'icon-[mdi--dance-ballroom]',
	},
	Cooking: {
		id: 'Cooking',
		name: 'Cooking',
		icon: 'icon-[mdi--silverware-fork-knife]',
	},
	Baking: {
		id: 'Baking',
		name: 'Baking',
		icon: 'icon-[mdi--oven]',
	},
	Gardening: {
		id: 'Gardening',
		name: 'Gardening',
		icon: 'icon-[mdi--flower]',
	},
	Fishing: {
		id: 'Fishing',
		name: 'Fishing',
		icon: 'icon-[mdi--fish]',
	},
	Hiking: {
		id: 'Hiking',
		name: 'Hiking',
		icon: 'icon-[mdi--hiking]',
	},
	Camping: {
		id: 'Camping',
		name: 'Camping',
		icon: 'icon-[mdi--campfire]',
	},
	Videography: {
		id: 'Videography',
		name: 'Videography',
		icon: 'icon-[mdi--video]',
	},
	Music: {
		id: 'Music',
		name: 'Music',
		icon: 'icon-[mdi--music]',
	},
	Movies: {
		id: 'Movies',
		name: 'Movies',
		icon: 'icon-[mdi--movie]',
	},
	'TV Series': {
		id: 'TV Series',
		name: 'TV Series',
		icon: 'icon-[mdi--television]',
	},
	Anime: {
		id: 'Anime',
		name: 'Anime',
		icon: 'icon-[mdi--animation]',
	},
	Manga: {
		id: 'Manga',
		name: 'Manga',
		icon: 'icon-[mdi--book-open-page-variant]',
	},
	Comics: {
		id: 'Comics',
		name: 'Comics',
		icon: 'icon-[mdi--comic-strip]',
	},
	'Video Games': {
		id: 'Video Games',
		name: 'Video Games',
		icon: 'icon-[mdi--gamepad-variant]',
	},
	'Board Games': {
		id: 'Board Games',
		name: 'Board Games',
		icon: 'icon-[mdi--chess-queen]',
	},
	'Card Games': {
		id: 'Card Games',
		name: 'Card Games',
		icon: 'icon-[mdi--cards]',
	},
	Sports: {
		id: 'Sports',
		name: 'Sports',
		icon: 'icon-[mdi--soccer]',
	},
	Exercise: {
		id: 'Exercise',
		name: 'Exercise',
		icon: 'icon-[mdi--dumbbell]',
	},
	Yoga: {
		id: 'Yoga',
		name: 'Yoga',
		icon: 'icon-[mdi--yoga]',
	},
	Meditation: {
		id: 'Meditation',
		name: 'Meditation',
		icon: 'icon-[mdi--meditation]',
	},
	Mindfulness: {
		id: 'Mindfulness',
		name: 'Mindfulness',
		icon: 'icon-[mdi--brain]',
	},
	Spirituality: {
		id: 'Spirituality',
		name: 'Spirituality',
		icon: 'icon-[mdi--leaf]',
	},
	Religion: {
		id: 'Religion',
		name: 'Religion',
		icon: 'icon-[mdi--church]',
	},
	Philosophy: {
		id: 'Philosophy',
		name: 'Philosophy',
		icon: 'icon-[mdi--thought-bubble]',
	},
	Psychology: {
		id: 'Psychology',
		name: 'Psychology',
		icon: 'icon-[mdi--brain]',
	},
	Sociology: {
		id: 'Sociology',
		name: 'Sociology',
		icon: 'icon-[mdi--account-group]',
	},
	History: {
		id: 'History',
		name: 'History',
		icon: 'icon-[mdi--history]',
	},
	Science: {
		id: 'Science',
		name: 'Science',
		icon: 'icon-[mdi--flask]',
	},
	Technology: {
		id: 'Technology',
		name: 'Technology',
		icon: 'icon-[mdi--robot-industrial]',
	},
	Engineering: {
		id: 'Engineering',
		name: 'Engineering',
		icon: 'icon-[mdi--hammer-wrench]',
	},
	Mathematics: {
		id: 'Mathematics',
		name: 'Mathematics',
		icon: 'icon-[mdi--calculator]',
	},
	Literature: {
		id: 'Literature',
		name: 'Literature',
		icon: 'icon-[mdi--book-open]',
	},
	Poetry: {
		id: 'Poetry',
		name: 'Poetry',
		icon: 'icon-[mdi--feather]',
	},
	Art: {
		id: 'Art',
		name: 'Art',
		icon: 'icon-[mdi--palette]',
	},
	Design: {
		id: 'Design',
		name: 'Design',
		icon: 'icon-[mdi--palette]',
	},
	Fashion: {
		id: 'Fashion',
		name: 'Fashion',
		icon: 'icon-[mdi--hanger]',
	},
	Beauty: {
		id: 'Beauty',
		name: 'Beauty',
		icon: 'icon-[mdi--face]',
	},
	Health: {
		id: 'Health',
		name: 'Health',
		icon: 'icon-[mdi--heart-pulse]',
	},
	Nutrition: {
		id: 'Nutrition',
		name: 'Nutrition',
		icon: 'icon-[mdi--food-apple]',
	},
	Dieting: {
		id: 'Dieting',
		name: 'Dieting',
		icon: 'icon-[mdi--weight-lifter]',
	},
	Weightlifting: {
		id: 'Weightlifting',
		name: 'Weightlifting',
		icon: 'icon-[mdi--weight-lifter]',
	},
	Bodybuilding: {
		id: 'Bodybuilding',
		name: 'Bodybuilding',
		icon: 'icon-[mdi--weight-lifter]',
	},
	Crossfit: {
		id: 'Crossfit',
		name: 'Crossfit',
		icon: 'icon-[mdi--weight-lifter]',
	},
	Running: {
		id: 'Running',
		name: 'Running',
		icon: 'icon-[mdi--run]',
	},
	Cycling: {
		id: 'Cycling',
		name: 'Cycling',
		icon: 'icon-[mdi--bike]',
	},
	Swimming: {
		id: 'Swimming',
		name: 'Swimming',
		icon: 'icon-[mdi--swim]',
	},
	Surfing: {
		id: 'Surfing',
		name: 'Surfing',
		icon: 'icon-[mdi--surf]',
	},
	Skateboarding: {
		id: 'Skateboarding',
		name: 'Skateboarding',
		icon: 'icon-[mdi--skateboard]',
	},
	Skiing: {
		id: 'Skiing',
		name: 'Skiing',
		icon: 'icon-[mdi--ski]',
	},
	Snowboarding: {
		id: 'Snowboarding',
		name: 'Snowboarding',
		icon: 'icon-[mdi--snowboard]',
	},
	Skating: {
		id: 'Skating',
		name: 'Skating',
		icon: 'icon-[mdi--skate]',
	},
	Golf: {
		id: 'Golf',
		name: 'Golf',
		icon: 'icon-[mdi--golf]',
	},
	Tennis: {
		id: 'Tennis',
		name: 'Tennis',
		icon: 'icon-[mdi--tennis]',
	},
	Badminton: {
		id: 'Badminton',
		name: 'Badminton',
		icon: 'icon-[mdi--badminton]',
	},
	'Table Tennis': {
		id: 'Table Tennis',
		name: 'Table Tennis',
		icon: 'icon-[mdi--table-tennis]',
	},
	Basketball: {
		id: 'Basketball',
		name: 'Basketball',
		icon: 'icon-[mdi--basketball]',
	},
	Volleyball: {
		id: 'Volleyball',
		name: 'Volleyball',
		icon: 'icon-[mdi--volleyball]',
	},
	Football: {
		id: 'Football',
		name: 'Football',
		icon: 'icon-[mdi--football]',
	},
	Soccer: {
		id: 'Soccer',
		name: 'Soccer',
		icon: 'icon-[mdi--soccer]',
	},
	Rugby: {
		id: 'Rugby',
		name: 'Rugby',
		icon: 'icon-[mdi--rugby]',
	},
	Hockey: {
		id: 'Hockey',
		name: 'Hockey',
		icon: 'icon-[mdi--hockey-sticks]',
	},
	Cricket: {
		id: 'Cricket',
		name: 'Cricket',
		icon: 'icon-[mdi--cricket]',
	},
	Baseball: {
		id: 'Baseball',
		name: 'Baseball',
		icon: 'icon-[mdi--baseball]',
	},
	Softball: {
		id: 'Softball',
		name: 'Softball',
		icon: 'icon-[mdi--baseball]',
	},
	Bowling: {
		id: 'Bowling',
		name: 'Bowling',
		icon: 'icon-[mdi--bowling]',
	},
	Billiards: {
		id: 'Billiards',
		name: 'Billiards',
		icon: 'icon-[mdi--billiards]',
	},
	Darts: {
		id: 'Darts',
		name: 'Darts',
		icon: 'icon-[mdi--darts]',
	},
	Boxing: {
		id: 'Boxing',
		name: 'Boxing',
		icon: 'icon-[mdi--boxing-glove]',
	},
	'Martial Arts': {
		id: 'Martial Arts',
		name: 'Martial Arts',
		icon: 'icon-[mdi--karate]',
	},
	Wrestling: {
		id: 'Wrestling',
		name: 'Wrestling',
		icon: 'icon-[mdi--wrestling]',
	},
	Gymnastics: {
		id: 'Gymnastics',
		name: 'Gymnastics',
		icon: 'icon-[mdi--gymnastics]',
	},
	Cheerleading: {
		id: 'Cheerleading',
		name: 'Cheerleading',
		icon: 'icon-[mdi--cheerleading]',
	},
	Dance: {
		id: 'Dance',
		name: 'Dance',
		icon: 'icon-[mdi--dance-ballroom]',
	},
	Ballet: {
		id: 'Ballet',
		name: 'Ballet',
		icon: 'icon-[mdi--ballet]',
	},
	Tap: {
		id: 'Tap',
		name: 'Tap',
		icon: 'icon-[mdi--dance-tap]',
	},
	Jazz: {
		id: 'Jazz',
		name: 'Jazz',
		icon: 'icon-[mdi--dance-jazz]',
	},
	'Hip Hop': {
		id: 'Hip Hop',
		name: 'Hip Hop',
		icon: 'icon-[mdi--dance-hiphop]',
	},
	Breakdance: {
		id: 'Breakdance',
		name: 'Breakdance',
		icon: 'icon-[mdi--dance-breakdance]',
	},
	Ballroom: {
		id: 'Ballroom',
		name: 'Ballroom',
		icon: 'icon-[mdi--dance-ballroom]',
	},
	Latin: {
		id: 'Latin',
		name: 'Latin',
		icon: 'icon-[mdi--dance-salsa]',
	},
	Swing: {
		id: 'Swing',
		name: 'Swing',
		icon: 'icon-[mdi--dance-swing]',
	},
	Country: {
		id: 'Country',
		name: 'Country',
		icon: 'icon-[mdi--dance-country]',
	},
	Folk: {
		id: 'Folk',
		name: 'Folk',
		icon: 'icon-[mdi--dance-folk]',
	},
	Line: {
		id: 'Line',
		name: 'Line',
		icon: 'icon-[mdi--dance-line]',
	},
	Square: {
		id: 'Square',
		name: 'Square',
		icon: 'icon-[mdi--dance-square]',
	},
	Contra: {
		id: 'Contra',
		name: 'Contra',
		icon: 'icon-[mdi--dance-contra]',
	},
	Social: {
		id: 'Social',
		name: 'Social',
		icon: 'icon-[mdi--dance-social]',
	},
	Modern: {
		id: 'Modern',
		name: 'Modern',
		icon: 'icon-[mdi--dance-modern]',
	},
	Contemporary: {
		id: 'Contemporary',
		name: 'Contemporary',
		icon: 'icon-[mdi--dance-contemporary]',
	},
	Lyrical: {
		id: 'Lyrical',
		name: 'Lyrical',
		icon: 'icon-[mdi--dance-lyrical]',
	},
	Acrobatic: {
		id: 'Acrobatic',
		name: 'Acrobatic',
		icon: 'icon-[mdi--dance-acrobatic]',
	},
	Aerial: {
		id: 'Aerial',
		name: 'Aerial',
		icon: 'icon-[mdi--dance-aerial]',
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
