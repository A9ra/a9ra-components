import { createSlice } from '@reduxjs/toolkit';

import { DISABLE_AUTH } from '&client/web';
const defaultProfile: PublicStudentProfileI = {
	id: '6699638ef25ccc04551ac244',
	user: '6699638ef25ccc04551ac242',

	kind: 'S',
	interests: {
		interests: {
			main: 'Photography',
			others: ['Baking', 'Gardening', 'Writing', 'Drawing', 'Videography'],
		},
		subjects: {
			main: 'Ar',
			others: ['Mu', 'P', 'S', 'Cs'],
		},
		careers: {
			main: 'Engineer',
			others: [],
		},
	},
	preferences: {
		learningStyle: {
			main: 'Visual',
			others: ['R/W', 'Kinesthetic'],
		},
		learningTimes: {
			main: 'E',
			others: [],
		},
		learningDuration: {
			main: '<1',
			others: [],
		},
	},
	level: 'S3',
	specialty: 'M',
	optionals: {
		sports: true,
		amazight: true,
		// music: boolean;
	},
};

interface StudentProfileSliceI {
	profile: PublicStudentProfileI | null;
	grades: StudentGradesI | null;
	loadedProfile: boolean;
	loadedGrades: boolean;
}
const initial_state: StudentProfileSliceI = {
	profile: DISABLE_AUTH ? defaultProfile : JSON.parse(localStorage.getItem('Profile') || 'null'),
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
	},
});

export const { setProfile, removeProfile, setGrades, clearGrades } = profile.actions;

export default profile.reducer;
