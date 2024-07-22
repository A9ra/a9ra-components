import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initial_state: { user: PublicUserI | null; loadedUser: boolean } = {
	user: JSON.parse(localStorage.getItem('User') || 'null'),
	loadedUser: false,
};
function processUser(user: PublicUserI): PublicUserI {
	return {
		...user,
		personalInformation: {
			...user.personalInformation,
			birthday: user.personalInformation.birthday
				? format(user.personalInformation.birthday, 'yyyy-MM-dd')
				: undefined,
		},
	};
}
const user = createSlice({
	name: 'user',
	initialState: initial_state,
	reducers: {
		setUser: (state, action: { type: string; payload: PublicUserI }) => {
			const user: PublicUserI = processUser(action.payload);
			localStorage.setItem('User', JSON.stringify(user));
			state.user = user;
			state.loadedUser = true;
			return state;
		},
		removeUser: (state) => {
			localStorage.removeItem('User');
			state.user = null;
			return state;
		},
		setProfilePicture: (state, action: { type: string; payload: string }) => {
			if (state.user) {
				state.user.profilePicture = action.payload;
			}
		},
	},
});

export const { setUser, removeUser, setProfilePicture } = user.actions;

export default user.reducer;
