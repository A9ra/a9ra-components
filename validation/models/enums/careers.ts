import { z } from '^common/defaultZod';

export const careersMap: Record<careersEnumT, EnumsDetailsI<careersEnumT>> = {
	Engineer: {
		id: 'Engineer',
		name: {
			EN: 'Engineer',
			AR: 'مهندس',
			FR: 'Ingénieur',
		},
		icon: 'icon-[mdi--wrench]',
	},
	Doctor: {
		id: 'Doctor',
		name: {
			EN: 'Doctor',
			AR: 'طبيب',
			FR: 'Médecin',
		},
		icon: 'icon-[mdi--doctor]',
	},
	Teacher: {
		id: 'Teacher',
		name: {
			EN: 'Teacher',
			AR: 'معلم',
			FR: 'Enseignant',
		},
		icon: 'icon-[mdi--teacher]',
	},
	Pilot: {
		id: 'Pilot',
		name: {
			EN: 'Pilot',
			AR: 'طيار',
			FR: 'Pilote',
		},
		icon: 'icon-[mdi--airplane]',
	},
	Soldier: {
		id: 'Soldier',
		name: {
			EN: 'Soldier',
			AR: 'جندي',
			FR: 'Soldat',
		},
		icon: 'icon-[mdi--shield]',
	},
	Police: {
		id: 'Police',
		name: {
			EN: 'Police',
			AR: 'شرطي',
			FR: 'Police',
		},
		icon: 'icon-[mdi--police-badge]',
	},
	Firefighter: {
		id: 'Firefighter',
		name: {
			EN: 'Firefighter',
			AR: 'رجل إطفاء',
			FR: 'Pompier',
		},
		icon: 'icon-[mdi--fire-truck]',
	},
	Nurse: {
		id: 'Nurse',
		name: {
			EN: 'Nurse',
			AR: 'ممرضة',
			FR: 'Infirmière',
		},
		icon: 'icon-[mdi--mother-nurse]',
	},
	Farmer: {
		id: 'Farmer',
		name: {
			EN: 'Farmer',
			AR: 'مزارع',
			FR: 'Agriculteur',
		},
		icon: 'icon-[mdi--tractor]',
	},
	Artist: {
		id: 'Artist',
		name: {
			EN: 'Artist',
			AR: 'فنان',
			FR: 'Artiste',
		},
		icon: 'icon-[mdi--palette]',
	},
	Musician: {
		id: 'Musician',
		name: {
			EN: 'Musician',
			AR: 'موسيقي',
			FR: 'Musicien',
		},
		icon: 'icon-[mdi--guitar-electric]',
	},
	Actor: {
		id: 'Actor',
		name: {
			EN: 'Actor',
			AR: 'ممثل',
			FR: 'Acteur',
		},
		icon: 'icon-[mdi--theater]',
	},
	Athlete: {
		id: 'Athlete',
		name: {
			EN: 'Athlete',
			AR: 'رياضي',
			FR: 'Athlète',
		},
		icon: 'icon-[mdi--dumbbell]',
	},
	Scientist: {
		id: 'Scientist',
		name: {
			EN: 'Scientist',
			AR: 'عالم',
			FR: 'Scientifique',
		},
		icon: 'icon-[mdi--beaker]',
	},
	Programmer: {
		id: 'Programmer',
		name: {
			EN: 'Programmer',
			AR: 'مبرمج',
			FR: 'Programmeur',
		},
		icon: 'icon-[mdi--code-braces]',
	},
	Designer: {
		id: 'Designer',
		name: {
			EN: 'Designer',
			AR: 'مصمم',
			FR: 'Designer',
		},
		icon: 'icon-[mdi--palette-swatch]',
	},
	Writer: {
		id: 'Writer',
		name: {
			EN: 'Writer',
			AR: 'كاتب',
			FR: 'Écrivain',
		},
		icon: 'icon-[mdi--pencil]',
	},
	Journalist: {
		id: 'Journalist',
		name: {
			EN: 'Journalist',
			AR: 'صحفي',
			FR: 'Journaliste',
		},
		icon: 'icon-[mdi--newspaper]',
	},
	Photographer: {
		id: 'Photographer',
		name: {
			EN: 'Photographer',
			AR: 'مصور',
			FR: 'Photographe',
		},
		icon: 'icon-[mdi--camera]',
	},
	Chef: {
		id: 'Chef',
		name: {
			EN: 'Chef',
			AR: 'طاهي',
			FR: 'Chef',
		},
		icon: 'icon-[mdi--chef-hat]',
	},
	Businessman: {
		id: 'Businessman',
		name: {
			EN: 'Businessman',
			AR: 'رجل أعمال',
			FR: "Homme d'affaires",
		},
		icon: 'icon-[mdi--briefcase]',
	},
	Lawyer: {
		id: 'Lawyer',
		name: {
			EN: 'Lawyer',
			AR: 'محامي',
			FR: 'Avocat',
		},
		icon: 'icon-[mdi--gavel]',
	},
	Politician: {
		id: 'Politician',
		name: {
			EN: 'Politician',
			AR: 'سياسي',
			FR: 'Politicien',
		},
		icon: 'icon-[mdi--account-group]',
	},
	Economist: {
		id: 'Economist',
		name: {
			EN: 'Economist',
			AR: 'اقتصادي',
			FR: 'Économiste',
		},
		icon: 'icon-[mdi--chart-line]',
	},
	Psychologist: {
		id: 'Psychologist',
		name: {
			EN: 'Psychologist',
			AR: 'عالم نفس',
			FR: 'Psychologue',
		},
		icon: 'icon-[mdi--brain]',
	},
	Sociologist: {
		id: 'Sociologist',
		name: {
			EN: 'Sociologist',
			AR: 'عالم اجتماع',
			FR: 'Sociologue',
		},
		icon: 'icon-[mdi--account-group-outline]',
	},
	Philosopher: {
		id: 'Philosopher',
		name: {
			EN: 'Philosopher',
			AR: 'فيلسوف',
			FR: 'Philosophe',
		},
		icon: 'icon-[mdi--book]',
	},
	Historian: {
		id: 'Historian',
		name: {
			EN: 'Historian',
			AR: 'مؤرخ',
			FR: 'Historien',
		},
		icon: 'icon-[mdi--book-open]',
	},
	Geographer: {
		id: 'Geographer',
		name: {
			EN: 'Geographer',
			AR: 'جغرافي',
			FR: 'Géographe',
		},
		icon: 'icon-[mdi--earth]',
	},
	Mathematician: {
		id: 'Mathematician',
		name: {
			EN: 'Mathematician',
			AR: 'عالم رياضيات',
			FR: 'Mathématicien',
		},
		icon: 'icon-[mdi--calculator]',
	},
	Physicist: {
		id: 'Physicist',
		name: {
			EN: 'Physicist',
			AR: 'عالم فيزياء',
			FR: 'Physicien',
		},
		icon: 'icon-[mdi--atom]',
	},
	Chemist: {
		id: 'Chemist',
		name: {
			EN: 'Chemist',
			AR: 'كيميائي',
			FR: 'Chimiste',
		},
		icon: 'icon-[mdi--flask]',
	},
	Biologist: {
		id: 'Biologist',
		name: {
			EN: 'Biologist',
			AR: 'عالم أحياء',
			FR: 'Biologiste',
		},
		icon: 'icon-[mdi--microscope]',
	},
	Astronomer: {
		id: 'Astronomer',
		name: {
			EN: 'Astronomer',
			AR: 'عالم فلك',
			FR: 'Astronome',
		},
		icon: 'icon-[mdi--telescope]',
	},
	Psychiatrist: {
		id: 'Psychiatrist',
		name: {
			EN: 'Psychiatrist',
			AR: 'طبيب نفسي',
			FR: 'Psychiatre',
		},
		icon: 'icon-[mdi--brain]',
	},
	Dentist: {
		id: 'Dentist',
		name: {
			EN: 'Dentist',
			AR: 'طبيب أسنان',
			FR: 'Dentiste',
		},
		icon: 'icon-[mdi--tooth]',
	},
	Pharmacist: {
		id: 'Pharmacist',
		name: {
			EN: 'Pharmacist',
			AR: 'صيدلي',
			FR: 'Pharmacien',
		},
		icon: 'icon-[mdi--pill]',
	},
	Veterinarian: {
		id: 'Veterinarian',
		name: {
			EN: 'Veterinarian',
			AR: 'طبيب بيطري',
			FR: 'Vétérinaire',
		},
		icon: 'icon-[mdi--paw]',
	},
};
export const careersList = Object.keys(careersMap) as unknown as MyEnum<careersEnumT>;

export const careersEnumSchema = (error?: ErrorsSchemaMsgI) =>
	z
		.enum<careersEnumT, MyEnum<careersEnumT>>(careersList, error)
		.openapi('Careers_Enum', { description: 'Careers Enum' });
