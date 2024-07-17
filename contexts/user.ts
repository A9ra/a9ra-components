import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const initial_state: { user: PublicUserI | null } = {
	user: {
		id: '0',
		email: 'mail@mail.com',
		emailValidated: true,
		phone: '0000000000',
		username: 'jesuph',
		profilePicture: '',
		personalInformation: {
			firstName: '',
			lastName: '',
			birthday: format(new Date(), 'yyyy-MM-dd'),
			gender: 'M',
			note: '',
			residence: {
				addresses: ['default'],
				city: 1,
				province: 1,
			},
		},
	},
	//JSON.parse(localStorage.getItem('User') || 'null');
};
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
