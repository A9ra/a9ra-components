import { z } from '^common/defaultZod';

import { generateRandomColor } from './tools';

export const learningStyleMap: Record<learningStyleEnumT, EnumsDetailsI<learningStyleEnumT>> = {
	Visual: {
		id: 'Visual',
		name: {
			EN: 'Visual',
			AR: 'بصري',
			FR: 'Visuel',
		},
		icon: 'icon-[mdi--eye]',
	},
	Auditory: {
		id: 'Auditory',
		name: {
			EN: 'Auditory',
			AR: 'سمعي',
			FR: 'Auditif',
		},
		icon: 'icon-[mdi--ear-hearing]',
	},
	'R/W': {
		id: 'R/W',
		name: {
			EN: 'Reading/Writing',
			AR: 'قراءة/كتابة',
			FR: 'Lecture/Écriture',
		},
		icon: 'icon-[mdi--book]',
	},
	Kinesthetic: {
		id: 'Kinesthetic',
		name: {
			EN: 'Kinesthetic',
			AR: 'حركي',
			FR: 'Kinesthésique',
		},
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
		name: {
			EN: 'Morning',
			AR: 'صباحاً',
			FR: 'Matin',
		},
		icon: 'icon-[mdi--sunrise]',
	},
	A: {
		id: 'A',
		name: {
			EN: 'Afternoon',
			AR: 'بعد الظهر',
			FR: 'Après-midi',
		},
		icon: 'icon-[mdi--white-balance-sunny]',
	},
	E: {
		id: 'E',
		name: {
			EN: 'Evening',
			AR: 'مساءً',
			FR: 'Soirée',
		},
		icon: 'icon-[mdi--weather-sunset]',
	},
	N: {
		id: 'N',
		name: {
			EN: 'Night',
			AR: 'ليلاً',
			FR: 'Nuit',
		},
		icon: 'icon-[mdi--moon-and-stars]',
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
		name: {
			EN: 'Less than 1 hour',
			AR: 'أقل من ساعة',
			FR: "Moins d'une heure",
		},
		icon: 'icon-[mdi--timer-sand-empty]',
	},
	'1-3': {
		id: '1-3',
		name: { EN: 'Between 1 and 3 hours', AR: 'بين 1 و 3 ساعات', FR: 'Entre 1 et 3 heures' },
		icon: 'icon-[mdi--timer-sand]',
	},
	'>3': {
		id: '>3',
		name: {
			EN: 'More than 3 hours',
			AR: 'أكثر من 3 ساعات',
			FR: 'Plus de 3 heures',
		},
		icon: 'icon-[mdi--timer-sand-complete]',
	},
};
export const learningDurationList = Object.keys(learningDurationMap) as unknown as MyEnum<learningDurationEnumT>;

export const learningDurationEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<learningDurationEnumT, MyEnum<learningDurationEnumT>>(learningDurationList, error)
		.openapi('Learning_Duration_Enum', { description: 'Learning Duration Enum' });
