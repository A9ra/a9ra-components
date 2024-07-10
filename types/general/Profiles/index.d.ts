declare type ProfileTypesI =
	| 'T' // teacher
	| 'S' // student
	| 'P' // parent
	| 'A' // admin
	| 'C' // contributor
	| 'I'; // institution (school_worker)

declare interface ProfileI<ID = string> {
	user: ID;
	kind: ProfileTypesI;
}
