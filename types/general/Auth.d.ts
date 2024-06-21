declare interface UserLogInI {
	username: string;
	password: string;
	stay?: boolean;
}
declare interface UserAuthI {
	user: UserI;
	new?: boolean;
	token?: string;
}
declare type UserTokenI = string;

declare type TLevels = 'easy' | 'medium' | 'advanced';

declare type TGender = 'male' | 'female';
declare type TLanguage = 'english' | 'french' | 'arabic';
declare type TResidency = {
	wilaya: { id: string; name: string; ar_name: string };
	community: { id: string; name: string; ar_name: string };
};
declare type TEducationLevel = {
	schoolLevel: string;
	grade: number;
	schoolName: string;
};
declare type TAveragePerformance = '<10' | '10-12' | '12-14' | '14-16' | '>16';

declare type TFormLSTime = 'morning' | 'afternoon' | 'evening' | 'night';
declare type TFormLSDuration = '<1' | '1-3' | '>3';

declare interface UserRegistrationI extends Omit<UserLogInI, 'stay'> {
	email: string;
	firstName: string;
	lastName: string;
	confirmPassword: string;
	gender: TGender;
	birthday: Date;
	birthplace: string;
	phone: string;
	residency: TResidency;
	language: TLanguage;
	educationLevel: TEducationLevel;
	averagePerformance: TAveragePerformance;
	interests: {
		hobbies: string[];
		subjects: string[];
		career: string;
	};
	learningStyle: {
		type: string[];
		time: TFormLSTime[];
		duration: TFormLSDuration;
	};
}
declare interface UserGoogleRegistrationI extends Omit<UserRegistrationI, 'stay' | 'terms' | 'confirmPassword'> {
	profilePicture?: string;
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
