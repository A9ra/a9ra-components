import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

import { DISABLE_AUTH } from '&client/web';
const defaultUser: PublicUserI = {
	id: '0',
	email: 'mail@mail.com',
	emailValidated: true,
	phone: '0000000000',
	username: 'username',
	profilePicture: '',
	personalInformation: {
		firstName: '',
		lastName: '',
		birthday: new Date(),
		gender: 'M',
		note: '',
		residence: {
			addresses: ['default'],
			city: 1,
			province: 1,
		},
	},
};
const initial_state: { user: PublicUserI | null } = {
	user: DISABLE_AUTH ? processUser(defaultUser) : JSON.parse(localStorage.getItem('User') || 'null'),
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
