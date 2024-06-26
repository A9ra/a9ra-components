import { z } from '^common/defaultZod';

export const learningStyleMap: Record<learningStyleEnumT, EnumsDetailsI> = {
	Visual: {
		name: 'Visual',
		icon: 'Visual',
	},
	Auditory: {
		name: 'Auditory',
		icon: 'Auditory',
	},
	'R/W': {
		name: 'Reading/Writing',
		icon: 'Reading/Writing',
	},
	Kinesthetic: {
		name: 'Kinesthetic',
		icon: 'Kinesthetic',
	},
};
export const learningStyleList = Object.keys(learningStyleMap) as unknown as MyEnum<learningStyleEnumT>;

export const learningStyleEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningStyleEnumT, MyEnum<learningStyleEnumT>>(learningStyleList, error)
		.openapi('Learning_Style_Enum', { description: 'Learning Style Enum' });

export const learningTimesMap: Record<learningTimesEnumT, EnumsDetailsI> = {
	M: {
		name: 'Morning',
		icon: 'Morning',
	},
	A: {
		name: 'Afternoon',
		icon: 'Afternoon',
	},
	E: {
		name: 'Evening',
		icon: 'Evening',
	},
	N: {
		name: 'Night',
		icon: 'Night',
	},
};
export const learningTimesList = Object.keys(learningTimesMap) as unknown as MyEnum<learningTimesEnumT>;
export const learningTimesEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningTimesEnumT, MyEnum<learningTimesEnumT>>(learningTimesList, error)
		.openapi('Learning_Times_Enum', { description: 'Learning Times Enum' });

export const learningDurationMap: Record<learningDurationEnumT, EnumsDetailsI> = {
	'<1': {
		name: 'Less than 1 hour',
		icon: 'Short',
	},
	'1-3': {
		name: 'Between 1 and 3 hours',
		icon: 'Medium',
	},
	'>3': {
		name: 'More than 3 hours',
		icon: 'Long',
	},
};
export const learningDurationList = Object.keys(learningDurationMap) as unknown as MyEnum<learningDurationEnumT>;
export const learningDurationEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningDurationEnumT, MyEnum<learningDurationEnumT>>(learningDurationList, error)
		.openapi('Learning_Duration_Enum', { description: 'Learning Duration Enum' });
