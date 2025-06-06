declare interface InterestsI {
	interests: FocusedChoiceI<interestsEnumT>; // in front side create an array: [main ...others]
	subjects: FocusedChoiceI<subjectsEnumT>;
	careers: FocusedChoiceI<careersEnumT>;
}

declare interface PreferencesI {
	learningStyle: FocusedChoiceI<learningStyleEnumT>;
	learningTimes: FocusedChoiceI<learningTimesEnumT>;
	learningDuration: FocusedChoiceI<learningDurationEnumT>;
}
declare interface OptionalSubjectsI {
	sports?: boolean;
	amazight?: boolean;
	// music: boolean;
}

declare interface StudentProfileI {
	interests: InterestsI;
	preferences: PreferencesI;
	level: levelsEnumT;
	specialty?: SecondarySpecialtiesT;
	optionals: OptionalSubjectsI;
}
declare interface StudentProfileDocumentI<T = string> extends StudentProfileI, ProfileI<T> {}
declare interface PublicStudentProfileI<IDS = string> extends StudentProfileDocumentI<IDS> {
	id: IDS;
}
declare type StudentGradesI = Optional<Record<basicSubjectsEnumT, number>>;
declare type StudentFullGradesI = Optional<Record<subjectsEnumT, number>>;
