declare interface UserLogInI {
	username: string;
	password: string;
	stay?: boolean;
}
declare interface UserAuthI {
	user: PublicUserI;
	new?: boolean;
	token?: string;
}
declare type UserTokenI = string;

declare interface UserRegistrationI extends UserI, StudentProfileI {}

declare interface UserGoogleRegistrationI {
	googleId: string;
}
declare type ValidationKeysI = 'email' | 'phone';
declare type ValidatedElementsI<T extends Omit<ValidationI, 'updatedAt'> = Omit<ValidationI, 'updatedAt'>> = Record<
	ValidationKeysI,
	T
>;
declare interface OAuthRequestQueryI {
	issFor?: A9raAppsI;
}
/* ----------------------- Google auth -----------------------*/
declare interface GoogleAuthorizationUrlRequestI {}
declare interface GoogleLogOnI {
	code: string;
}
declare interface UserOAuthI {
	token: string;
}
