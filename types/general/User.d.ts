declare interface UserI {
	profilePicture?: string;
	personalInformation: PersonalInformationI;
	username: string;
	email: string;
	phone?: string;
	password: string;
}
declare interface PublicUserI extends Omit<UserI, 'password'> {
	id: string;
	emailValidated: boolean;
}
declare interface NecessaryUserI extends Omit<UserI, 'password'> {
	id: string;
}
declare type EnabledUserAppsEnum = 'google';
declare type DisabledUserAppsEnum = 'facebook' | 'twitter' | 'github';
declare type UserAppsEnum = EnabledUserAppsEnum | DisabledUserAppsEnum;
declare type EnabledUserAppsI = Record<EnabledUserAppsEnum, string>;
declare type DisabledUserAppsI = Record<DisabledUserAppsEnum, string>;
declare type UserAppsI = EnabledUserAppsI & DisabledUserAppsI;
interface UserDocumentI extends UserI {
	contactInformation: ContactInformationI;
	enabled: boolean;
	lastLogin: Date | string;
	apps: Partial<EnabledUserAppsI>;
}

interface ChangePasswordI {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
}
