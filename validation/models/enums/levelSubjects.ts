export const levelsSubjects: Record<
	SecondarySchoolLevelsT,
	Optional<Record<SecondaryBasicSpecialtiesT | SecondaryCommonSpecialtiesT, SpecialtyDetailsI>>
> = {
	S1: {
		l: {
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Cs'],
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 5,
					Fr: 3,
					En: 3,
					M: 2,
					HG: 3,
					S: 2,
					P: 2,
					I: 2,
					Cs: 2,
				},
			},
		},
		s: {
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Cs', 'Tec'],
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					Fr: 2,
					En: 2,
					M: 5,
					HG: 2,
					S: 4,
					P: 4,
					I: 2,
					Cs: 2,
					Tec: 2,
				},
			},
		},
	},
	S2: {
		/* Scientific fields */
		S: {
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 2,
					En: 2,
					Fr: 2,
					M: 5,
					S: 6,
					P: 5,
					HG: 2,
					I: 2,
				},
			},
		},
		M: {
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 2,
					En: 2,
					Fr: 2,
					M: 7,
					S: 2,
					P: 6,
					HG: 2,
					I: 2,
				},
			},
		},
		Tec: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'P', 'I', 'Tec'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 2,
					En: 2,
					Fr: 2,
					M: 6,
					P: 5,
					HG: 2,
					I: 2,
					Tec: 6,
				},
			},
		},

		F: {
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'I', 'Eco', 'La', 'Mg'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 2,
					En: 2,
					Fr: 2,
					M: 3,
					HG: 3,
					I: 2,
					Eco: 4,
					La: 2,
					Mg: 5,
				},
			},
		},
		/*  Literary fields */
		A: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Cs', 'A1', 'A2'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					Fr: 2,
					En: 2,
					HG: 2,
					M: 2,
					S: 2,
					P: 2,
					I: 2,
					A1: 5,
					A2: 5,
				},
			},
		},
		P: {
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 5,
					Fr: 3,
					En: 3,
					HG: 4,
					Ph: 5,
					I: 2,
					M: 2,
					P: 2,
					S: 2,
				},
			},
		},
		Fl: {
			optionalSubjects: ['Pe', 'A', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Fl'],
			subjectsCof: {
				optionals: { Pe: 1, A: 1, Am: 2 },
				mandatory: {
					Ar: 4,
					Fr: 4,
					En: 4,
					Fl: 4,
					HG: 4,
					I: 2,
					M: 2,
				},
			},
		},
	},
	S3: {
		/* Scientific fields */
		S: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					En: 2,
					Fr: 2,
					M: 5,
					S: 6,
					P: 5,
					HG: 2,
					I: 2,
					Ph: 2,
				},
			},
		},
		M: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					En: 2,
					Fr: 2,
					M: 7,
					S: 2,
					P: 6,
					HG: 2,
					I: 2,
					Ph: 2,
				},
			},
		},
		Tec: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'P', 'I', 'Tec', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					En: 2,
					Fr: 2,
					M: 6,
					P: 6,
					HG: 2,
					I: 2,
					Tec: 7,
					Ph: 2,
				},
			},
		},

		F: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'I', 'Eco', 'La', 'Mg', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					En: 2,
					Fr: 2,
					M: 5,
					HG: 4,
					I: 2,
					Eco: 5,
					La: 2,
					Mg: 6,
					Ph: 2,
				},
			},
		},
		/*  Literary fields */
		A: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Cs', 'A1', 'A2', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 3,
					Fr: 2,
					En: 2,
					HG: 2,
					M: 2,
					S: 2,
					P: 2,
					I: 2,
					A1: 5,
					A2: 5,
					Ph: 2,
				},
			},
		},
		P: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'I', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 6,
					Fr: 3,
					En: 3,
					HG: 4,
					Ph: 6,
					I: 2,
					M: 2,
				},
			},
		},
		Fl: {
			optionalSubjects: ['Pe', 'Am'],
			subjects: ['Ar', 'Fr', 'En', 'M', 'HG', 'S', 'P', 'I', 'Fl', 'Ph'],
			subjectsCof: {
				optionals: { Pe: 1, Am: 2 },
				mandatory: {
					Ar: 5,
					Fr: 5,
					En: 5,
					Fl: 4,
					HG: 2,
					I: 2,
					M: 2,
					Ph: 2,
				},
			},
		},
	},
};
