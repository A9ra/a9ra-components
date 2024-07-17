import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initial_state: PublicUserI | null = JSON.parse(localStorage.getItem('User') || 'null');
const user = createSlice({
	name: 'user',
	initialState: initial_state,
	reducers: {
		setUser: (state, action: { type: string; payload: PublicUserI }) => {
			const user: PublicUserI = {
				...action.payload,
				personalInformation: {
					...action.payload.personalInformation,
					birthday: action.payload.personalInformation.birthday
						? format(action.payload.personalInformation.birthday, 'yyyy-MM-dd')
						: undefined,
				},
			};
			localStorage.setItem('User', JSON.stringify(user));
			state = user;
			return state;
		},
		removeUser: (state) => {
			localStorage.removeItem('User');
			state = null;
			return state;
		},
		setProfilePicture: (state, action: { type: string; payload: string }) => {
			if (state) {
				state.profilePicture = action.payload;
			}
		},
	},
});

export const { setUser, removeUser, setProfilePicture } = user.actions;

export default user.reducer;
