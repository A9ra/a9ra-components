import { useAppDispatch, useAppSelector } from ':common/redux';
import { removeUser, setProfilePicture, setUser } from '@common/contexts/user';

function useUser<T extends PublicUserI | null = PublicUserI | null>() {
	const dispatch = useAppDispatch();
	const U = useAppSelector((state) => state.user);
	return {
		user: U.user as T,
		loadedUser: U.loadedUser,
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
