import { z } from '^common/defaultZod';

export const subjectsMap: Record<subjectsEnumT, EnumsDetailsI> = {
	Math: {
		name: 'Math',
		icon: 'Math',
	},
	Science: {
		name: 'Science',
		icon: 'Science',
	},
	English: {
		name: 'English',
		icon: 'English',
	},
	History: {
		name: 'History',
		icon: 'History',
	},
	'Islamic Studies': {
		name: 'Islamic Studies',
		icon: 'Islamic Studies',
	},
	Art: {
		name: 'Art',
		icon: 'Art',
	},
	Music: {
		name: 'Music',
		icon: 'Music',
	},
	'Physical Education': {
		name: 'Physical Education',
		icon: 'Physical Education',
	},
	'Computer Science': {
		name: 'Computer Science',
		icon: 'Computer Science',
	},
	'Social Studies': {
		name: 'Social Studies',
		icon: 'Social Studies',
	},
	Arabic: {
		name: 'Arabic',
		icon: 'Arabic',
	},
	French: {
		name: 'French',
		icon: 'French',
	},
	German: {
		name: 'German',
		icon: 'German',
	},
	Spanish: {
		name: 'Spanish',
		icon: 'Spanish',
	},
};
export const subjectsList = Object.keys(subjectsMap) as unknown as MyEnum<subjectsEnumT>;

export const subjectsEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<subjectsEnumT, MyEnum<subjectsEnumT>>(subjectsList, error)
		.openapi('Subjects_Enum', { description: 'Subjects  Enum' });
