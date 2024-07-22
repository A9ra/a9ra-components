import { createSlice } from '@reduxjs/toolkit';

interface StudentProfileSliceI {
	profile: PublicStudentProfileI | null;
	grades: StudentGradesI | null;
	loadedProfile: boolean;
	loadedGrades: boolean;
}
const initial_state: StudentProfileSliceI = {
	profile: JSON.parse(localStorage.getItem('Profile') || 'null'),
	grades: null,
	loadedProfile: false,
	loadedGrades: false,
};

const profile = createSlice({
	name: 'profile',
	initialState: initial_state,
	reducers: {
		setProfile: (state, action: { type: string; payload: PublicStudentProfileI }) => {
			const profile: PublicStudentProfileI = action.payload;
			localStorage.setItem('Profile', JSON.stringify(profile));
			state.profile = profile;
			state.loadedProfile = true;
			return state;
		},
		removeProfile: (state) => {
			localStorage.removeItem('Profile');
			state.profile = null;
			return state;
		},
		setGrades: (state, action: { type: string; payload: StudentGradesI }) => {
			state.grades = action.payload;
			state.loadedGrades = true;
			return state;
		},
		clearGrades: (state) => {
			state.grades = null;
			return state;
		},
		setLoadedGrades: (state) => {
			state.loadedGrades = true;
			return state;
		},
	},
});

export const { setProfile, removeProfile, setGrades, clearGrades, setLoadedGrades } = profile.actions;

export default profile.reducer;
