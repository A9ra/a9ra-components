import { useMemo } from 'react';

import { secondarySpecialties } from '^common/models/enums/levels';
import { levelsSubjects } from '^common/models/enums/levelSubjects';
import { subjectsMap } from '^common/models/enums/subjects';

import { useAppDispatch, useAppSelector } from ':common/redux';
import { clearGrades, removeProfile, setGrades, setLoadedGrades, setProfile } from '@common/contexts/profile';

const S2LevelSubjects = levelsSubjects['S3'];

export default function useProfile<
	Profile extends PublicStudentProfileI | null = PublicStudentProfileI | null,
	Grades extends StudentGradesI | null = StudentGradesI | null,
>() {
	const dispatch = useAppDispatch();
	const P = useAppSelector((state) => state.profile);
	const { profile, grades, loadedGrades, loadedProfile } = P as {
		profile: Profile;
		grades: Grades;
		loadedProfile: boolean;
		loadedGrades: boolean;
	};
	const average = useMemo(() => {
		if (grades && profile && profile.level === 'S3') {
			const specialty = profile.specialty!;
			const specialtyD = secondarySpecialties[specialty];
			const subjectsCofs = S2LevelSubjects[specialtyD.mainSpecialty];
			if (!subjectsCofs) {
				console.error('This specialty is not supported yet');
				return 0;
			}
			const result = (Object.entries(grades) as [subjectsEnumT, number][]).reduce(
				(acc, [subject, grade]) => {
					const mainSubject = subjectsMap[subject].mainSubject;
					if (subjectsCofs.subjects.includes(mainSubject)) {
						const cof = subjectsCofs.subjectsCof.mandatory[mainSubject]!;
						return {
							avg: acc.avg + grade * cof,
							cof: acc.cof + cof,
						};
					} else if (subjectsCofs.optionalSubjects.includes(mainSubject)) {
						const cof = subjectsCofs.subjectsCof.optionals[mainSubject]!;
						return {
							avg: acc.avg + grade * cof,
							cof: acc.cof + cof,
						};
					} else {
						console.error('This subject is not supported yet');
						return acc;
					}
				},
				{ avg: 0, cof: 0 }
			);
			return result.cof === 0 ? 0 : Math.floor((result.avg / result.cof) * 100) / 100;
		} else return 0;
	}, [grades, profile]);
	return {
		profile,
		grades,
		loadedProfile,
		loadedGrades,
		average,
		setProfile: (profile: PublicStudentProfileI) => {
			dispatch(setProfile(profile));
		},
		removeProfile: () => {
			dispatch(removeProfile());
		},
		setGrades: (grades: StudentGradesI) => {
			dispatch(setGrades(grades));
		},
		setLoadedGrades: () => {
			dispatch(setLoadedGrades());
		},
		clearGrades: () => {
			dispatch(clearGrades());
		},
	};
}
