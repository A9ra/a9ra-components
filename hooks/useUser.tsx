import { useAppDispatch, useAppSelector } from ':common/redux';
import { removeUser, setProfilePicture, setUser } from '@common/contexts/user';

function useUser<T extends PublicUserI | null = PublicUserI | null>() {
	const dispatch = useAppDispatch();
	return {
		user: useAppSelector((state) => state.user).user as T,
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
