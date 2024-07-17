import { removeUser, setProfilePicture, setUser } from '@common/contexts/user';

import { useAppDispatch, useAppSelector } from ':common/redux';

function useUser<T extends PublicUserI | null = PublicUserI | null>() {
	const dispatch = useAppDispatch();
	return {
		user: useAppSelector((state) => state.user) as T,
		setUser: (user: PublicUserI) => {
			dispatch(setUser(user));
		},
		setProfilePicture: (profilePicture: string) => {
			dispatch(setProfilePicture(profilePicture));
		},

		removeUser: () => {
			dispatch(removeUser());
		},
	};
}
export default useUser;
