import { useAppDispatch, useAppSelector } from ':common/redux';
import { clearGrades, removeProfile, setGrades, setLoadedGrades, setProfile } from '@common/contexts/profile';
export default function useProfile<
	Profile extends PublicStudentProfileI | null = PublicStudentProfileI | null,
	Grades extends StudentGradesI | null = StudentGradesI | null,
>() {
	const dispatch = useAppDispatch();
	const P = useAppSelector((state) => state.profile);
	return {
		profile: P.profile as Profile,
		grades: P.grades as Grades,
		loadedProfile: P.loadedProfile,
		loadedGrades: P.loadedGrades,

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
