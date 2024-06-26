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
declare interface NecessaryUserI extends PublicUserI {}
declare interface UserAppsI {
	google: string;
}
interface UserDocumentI extends UserI {
	contactInformation: ContactInformationI;
	enabled: boolean;
	lastLogin: Date | string;
	apps: UserAppsI;
}
