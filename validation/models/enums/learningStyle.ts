import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const learningStyleMap: Record<learningStyleEnumT, EnumsDetailsI<learningStyleEnumT>> = {
	Visual: {
		id: 'Visual',
		name: 'Visual',
		icon: 'icon-[mdi--eye]',
	},
	Auditory: {
		id: 'Auditory',
		name: 'Auditory',
		icon: 'icon-[mdi--ear]',
	},
	'R/W': {
		id: 'R/W',
		name: 'Reading/Writing',
		icon: 'icon-[mdi--book]',
	},
	Kinesthetic: {
		id: 'Kinesthetic',
		name: 'Kinesthetic',
		icon: 'icon-[mdi--run]',
	},
};
export const learningStyleList = Object.keys(learningStyleMap) as unknown as MyEnum<learningStyleEnumT>;
export const learningStyleWithColorsList = learningStyleList.map((id, i) => ({
	...learningStyleMap[id],
	color: generateRandomColor(i),
}));

export const learningStyleEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningStyleEnumT, MyEnum<learningStyleEnumT>>(learningStyleList, error)
		.openapi('Learning_Style_Enum', { description: 'Learning Style Enum' });

export const learningTimesMap: Record<learningTimesEnumT, EnumsDetailsI<learningTimesEnumT>> = {
	M: {
		id: 'M',
		name: 'Morning',
		icon: 'icon-[mdi--sunrise]',
	},
	A: {
		id: 'A',
		name: 'Afternoon',
		icon: 'icon-[mdi--sun]',
	},
	E: {
		id: 'E',
		name: 'Evening',
		icon: 'icon-[mdi--sunset]',
	},
	N: {
		id: 'N',
		name: 'Night',
		icon: 'icon-[mdi--moon]',
	},
};

export const learningTimesList = Object.keys(learningTimesMap) as unknown as MyEnum<learningTimesEnumT>;

export const learningTimesEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningTimesEnumT, MyEnum<learningTimesEnumT>>(learningTimesList, error)
		.openapi('Learning_Times_Enum', { description: 'Learning Times Enum' });

export const learningDurationMap: Record<learningDurationEnumT, EnumsDetailsI<learningDurationEnumT>> = {
	'<1': {
		id: '<1',
		name: 'Less than 1 hour',
		icon: 'icon-[mdi--timer-sand-empty]',
	},
	'1-3': {
		id: '1-3',
		name: 'Between 1 and 3 hours',
		icon: 'icon-[mdi--timer-sand]',
	},
	'>3': {
		id: '>3',
		name: 'More than 3 hours',
		icon: 'icon-[mdi--timer-sand-complete]',
	},
};
export const learningDurationList = Object.keys(learningDurationMap) as unknown as MyEnum<learningDurationEnumT>;

export const learningDurationEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningDurationEnumT, MyEnum<learningDurationEnumT>>(learningDurationList, error)
		.openapi('Learning_Duration_Enum', { description: 'Learning Duration Enum' });
