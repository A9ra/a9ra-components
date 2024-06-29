import { z } from '^common/defaultZod';

export const careersMap: Record<careersEnumT, EnumsDetailsI<careersEnumT>> = {
	Engineer: {
		id: 'Engineer',
		name: 'Engineer',
		icon: 'icon-[mdi--wrench]',
	},
	Doctor: {
		id: 'Doctor',
		name: 'Doctor',
		icon: 'icon-[mdi--doctor]',
	},
	Teacher: {
		id: 'Teacher',
		name: 'Teacher',
		icon: 'icon-[mdi--teacher]',
	},
	Pilot: {
		id: 'Pilot',
		name: 'Pilot',
		icon: 'icon-[mdi--airplane]',
	},
	Soldier: {
		id: 'Soldier',
		name: 'Soldier',
		icon: 'icon-[mdi--shield]',
	},
	Police: {
		id: 'Police',
		name: 'Police',
		icon: 'icon-[mdi--police-badge]',
	},
	Firefighter: {
		id: 'Firefighter',
		name: 'Firefighter',
		icon: 'icon-[mdi--fire-truck]',
	},
	Nurse: {
		id: 'Nurse',
		name: 'Nurse',
		icon: 'icon-[mdi--mother-nurse]',
	},
	Farmer: {
		id: 'Farmer',
		name: 'Farmer',
		icon: 'icon-[mdi--tractor]',
	},
	Artist: {
		id: 'Artist',
		name: 'Artist',
		icon: 'icon-[mdi--palette]',
	},
	Musician: {
		id: 'Musician',
		name: 'Musician',
		icon: 'icon-[mdi--guitar-electric]',
	},
	Actor: {
		id: 'Actor',
		name: 'Actor',
		icon: 'icon-[mdi--theater]',
	},
	Athlete: {
		id: 'Athlete',
		name: 'Athlete',
		icon: 'icon-[mdi--dumbbell]',
	},
	Scientist: {
		id: 'Scientist',
		name: 'Scientist',
		icon: 'icon-[mdi--beaker]',
	},
	Programmer: {
		id: 'Programmer',
		name: 'Programmer',
		icon: 'icon-[mdi--code-braces]',
	},
	Designer: {
		id: 'Designer',
		name: 'Designer',
		icon: 'icon-[mdi--palette-swatch]',
	},
	Writer: {
		id: 'Writer',
		name: 'Writer',
		icon: 'icon-[mdi--pencil]',
	},
	Journalist: {
		id: 'Journalist',
		name: 'Journalist',
		icon: 'icon-[mdi--newspaper]',
	},
	Photographer: {
		id: 'Photographer',
		name: 'Photographer',
		icon: 'icon-[mdi--camera]',
	},
	Chef: {
		id: 'Chef',
		name: 'Chef',
		icon: 'icon-[mdi--chef-hat]',
	},
	Businessman: {
		id: 'Businessman',
		name: 'Businessman',
		icon: 'icon-[mdi--briefcase]',
	},
	Lawyer: {
		id: 'Lawyer',
		name: 'Lawyer',
		icon: 'icon-[mdi--gavel]',
	},
	Politician: {
		id: 'Politician',
		name: 'Politician',
		icon: 'icon-[mdi--account-group]',
	},
	Economist: {
		id: 'Economist',
		name: 'Economist',
		icon: 'icon-[mdi--chart-line]',
	},
	Psychologist: {
		id: 'Psychologist',
		name: 'Psychologist',
		icon: 'icon-[mdi--brain]',
	},
	Sociologist: {
		id: 'Sociologist',
		name: 'Sociologist',
		icon: 'icon-[mdi--account-group-outline]',
	},
	Philosopher: {
		id: 'Philosopher',
		name: 'Philosopher',
		icon: 'icon-[mdi--book]',
	},
	Historian: {
		id: 'Historian',
		name: 'Historian',
		icon: 'icon-[mdi--book-open]',
	},
	Geographer: {
		id: 'Geographer',
		name: 'Geographer',
		icon: 'icon-[mdi--earth]',
	},
	Mathematician: {
		id: 'Mathematician',
		name: 'Mathematician',
		icon: 'icon-[mdi--calculator]',
	},
	Physicist: {
		id: 'Physicist',
		name: 'Physicist',
		icon: 'icon-[mdi--atom]',
	},
	Chemist: {
		id: 'Chemist',
		name: 'Chemist',
		icon: 'icon-[mdi--flask]',
	},
	Biologist: {
		id: 'Biologist',
		name: 'Biologist',
		icon: 'icon-[mdi--microscope]',
	},
	Astronomer: {
		id: 'Astronomer',
		name: 'Astronomer',
		icon: 'icon-[mdi--telescope]',
	},
	Psychiatrist: {
		id: 'Psychiatrist',
		name: 'Psychiatrist',
		icon: 'icon-[mdi--brain]',
	},
	Dentist: {
		id: 'Dentist',
		name: 'Dentist',
		icon: 'icon-[mdi--tooth]',
	},
	Pharmacist: {
		id: 'Pharmacist',
		name: 'Pharmacist',
		icon: 'icon-[mdi--pill]',
	},
	Veterinarian: {
		id: 'Veterinarian',
		name: 'Veterinarian',
		icon: 'icon-[mdi--paw]',
	},
};
export const careersList = Object.keys(careersMap) as unknown as MyEnum<careersEnumT>;

export const careersEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<careersEnumT, MyEnum<careersEnumT>>(careersList, error)
		.openapi('Careers_Enum', { description: 'Careers Enum' });
