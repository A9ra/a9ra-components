interface GradeI {
	subject: basicSubjectsEnumT;
	grade: number;
}
interface GradesI<IDs = string> {
	grades: GradeI[];
	user: IDs;
	profile: IDs;
}
