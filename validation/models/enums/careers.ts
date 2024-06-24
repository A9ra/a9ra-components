import { z } from '^common/defaultZod';

export const careersMap: Record<careersEnumT, EnumsDetailsI> = {
	Engineer: {
		name: 'Engineer',
		icon: 'Engineer',
	},
	Doctor: {
		name: 'Doctor',
		icon: 'Doctor',
	},
	Teacher: {
		name: 'Teacher',
		icon: 'Teacher',
	},
	Pilot: {
		name: 'Pilot',
		icon: 'Pilot',
	},
	Soldier: {
		name: 'Soldier',
		icon: 'Soldier',
	},
	Police: {
		name: 'Police',
		icon: 'Police',
	},
	Firefighter: {
		name: 'Firefighter',
		icon: 'Firefighter',
	},
	Nurse: {
		name: 'Nurse',
		icon: 'Nurse',
	},
	Farmer: {
		name: 'Farmer',
		icon: 'Farmer',
	},
	Artist: {
		name: 'Artist',
		icon: 'Artist',
	},
	Musician: {
		name: 'Musician',
		icon: 'Musician',
	},
	Actor: {
		name: 'Actor',
		icon: 'Actor',
	},
	Athlete: {
		name: 'Athlete',
		icon: 'Athlete',
	},
	Scientist: {
		name: 'Scientist',
		icon: 'Scientist',
	},
	Programmer: {
		name: 'Programmer',
		icon: 'Programmer',
	},
	Designer: {
		name: 'Designer',
		icon: 'Designer',
	},
	Writer: {
		name: 'Writer',
		icon: 'Writer',
	},
	Journalist: {
		name: 'Journalist',
		icon: 'Journalist',
	},
	Photographer: {
		name: 'Photographer',
		icon: 'Photographer',
	},
	Chef: {
		name: 'Chef',
		icon: 'Chef',
	},
	Businessman: {
		name: 'Businessman',
		icon: 'Businessman',
	},
	Lawyer: {
		name: 'Lawyer',
		icon: 'Lawyer',
	},
	Politician: {
		name: 'Politician',
		icon: 'Politician',
	},
	Economist: {
		name: 'Economist',
		icon: 'Economist',
	},
	Psychologist: {
		name: 'Psychologist',
		icon: 'Psychologist',
	},
	Sociologist: {
		name: 'Sociologist',
		icon: 'Sociologist',
	},
	Philosopher: {
		name: 'Philosopher',
		icon: 'Philosopher',
	},
	Historian: {
		name: 'Historian',
		icon: 'Historian',
	},
	Geographer: {
		name: 'Geographer',
		icon: 'Geographer',
	},
	Mathematician: {
		name: 'Mathematician',
		icon: 'Mathematician',
	},
	Physicist: {
		name: 'Physicist',
		icon: 'Physicist',
	},
	Chemist: {
		name: 'Chemist',
		icon: 'Chemist',
	},
	Biologist: {
		name: 'Biologist',
		icon: 'Biologist',
	},
	Astronomer: {
		name: 'Astronomer',
		icon: 'Astronomer',
	},
	Psychiatrist: {
		name: 'Psychiatrist',
		icon: 'Psychiatrist',
	},
	Dentist: {
		name: 'Dentist',
		icon: 'Dentist',
	},
	Pharmacist: {
		name: 'Pharmacist',
		icon: 'Pharmacist',
	},
	Veterinarian: {
		name: 'Veterinarian',
		icon: 'Veterinarian',
	},
};
export const careersList = Object.keys(careersMap) as unknown as MyEnum<careersEnumT>;

export const careersEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<careersEnumT, MyEnum<careersEnumT>>(careersList, error)
		.openapi('Careers_Enum', { description: 'Careers Enum' });
