import { useAppDispatch, useAppSelector } from ':common/redux';
import { clearGrades, removeProfile, setGrades, setProfile } from '@common/contexts/profile';
export default function useProfile<
	Profile extends PublicStudentProfileI | null = PublicStudentProfileI | null,
	Grades extends StudentGradesI | null = StudentGradesI | null,
>() {
	const dispatch = useAppDispatch();
	return {
		profile: useAppSelector((state) => state.profile).profile as Profile,
		grades: useAppSelector((state) => state.profile).grades as Grades,
		setProfile: (profile: PublicStudentProfileI) => {
			dispatch(setProfile(profile));
		},
		removeProfile: () => {
			dispatch(removeProfile());
		},
		setGrades: (grades: StudentGradesI) => {
			dispatch(setGrades(grades));
		},
		clearGrades: () => {
			dispatch(clearGrades());
		},
	};
}
