import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const subjectsMap: Record<subjectsEnumT, EnumsDetailsI<subjectsEnumT>> = {
	Math: {
		id: 'Math',
		name: 'Math',
		icon: 'icon-[mdi--book]',
	},
	Science: {
		id: 'Science',
		name: 'Science',
		icon: 'icon-[mdi--flask]',
	},
	English: {
		id: 'English',
		name: 'English',
		icon: 'icon-[mdi--translate]',
	},
	History: {
		id: 'History',
		name: 'History',
		icon: 'icon-[mdi--history]',
	},
	'Islamic Studies': {
		id: 'Islamic Studies',
		name: 'Islamic Studies',
		icon: 'icon-[mdi--moon-and-stars]',
	},
	Art: {
		id: 'Art',
		name: 'Art',
		icon: 'icon-[mdi--palette]',
	},
	Music: {
		id: 'Music',
		name: 'Music',
		icon: 'icon-[mdi--music]',
	},
	'Physical Education': {
		id: 'Physical Education',
		name: 'Physical Education',
		icon: 'icon-[mdi--dumbbell]',
	},
	'Computer Science': {
		id: 'Computer Science',
		name: 'Computer Science',
		icon: 'icon-[mdi--laptop]',
	},
	'Social Studies': {
		id: 'Social Studies',
		name: 'Social Studies',
		icon: 'icon-[mdi--earth]',
	},
	Arabic: {
		id: 'Arabic',
		name: 'Arabic',
		icon: 'icon-[mdi--translate]',
	},
	French: {
		id: 'French',
		name: 'French',
		icon: 'icon-[mdi--translate]',
	},
	German: {
		id: 'German',
		name: 'German',
		icon: 'icon-[mdi--translate]',
	},
	Spanish: {
		id: 'Spanish',
		name: 'Spanish',
		icon: 'icon-[mdi--translate]',
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
