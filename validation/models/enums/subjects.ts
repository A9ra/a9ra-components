import { z } from '^common/defaultZod';

export const subjectsMap: Record<subjectsEnumT, EnumsDetailsI<subjectsEnumT>> = {
	Math: {
		id: 'Math',
		name: 'Math',
		icon: 'Math',
	},
	Science: {
		id: 'Science',
		name: 'Science',
		icon: 'Science',
	},
	English: {
		id: 'English',
		name: 'English',
		icon: 'English',
	},
	History: {
		id: 'History',
		name: 'History',
		icon: 'History',
	},
	'Islamic Studies': {
		id: 'Islamic Studies',
		name: 'Islamic Studies',
		icon: 'Islamic Studies',
	},
	Art: {
		id: 'Art',
		name: 'Art',
		icon: 'Art',
	},
	Music: {
		id: 'Music',
		name: 'Music',
		icon: 'Music',
	},
	'Physical Education': {
		id: 'Physical Education',
		name: 'Physical Education',
		icon: 'Physical Education',
	},
	'Computer Science': {
		id: 'Computer Science',
		name: 'Computer Science',
		icon: 'Computer Science',
	},
	'Social Studies': {
		id: 'Social Studies',
		name: 'Social Studies',
		icon: 'Social Studies',
	},
	Arabic: {
		id: 'Arabic',
		name: 'Arabic',
		icon: 'Arabic',
	},
	French: {
		id: 'French',
		name: 'French',
		icon: 'French',
	},
	German: {
		id: 'German',
		name: 'German',
		icon: 'German',
	},
	Spanish: {
		id: 'Spanish',
		name: 'Spanish',
		icon: 'Spanish',
	},
};
export const subjectsList = Object.keys(subjectsMap) as unknown as MyEnum<subjectsEnumT>;

export const subjectsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<subjectsEnumT, MyEnum<subjectsEnumT>>(subjectsList, error)
		.openapi('Subjects_Enum', { description: 'Subjects  Enum' });
