declare interface IntrestsI {
	hobbies: FocusedChoiceI<hobbiesEnumT>;
	subjects: FocusedChoiceI<subjectsEnumT>;
	careers: FocusedChoiceI<careersEnumT>;
}

declare interface PrefrencesI {
	learningStyle: FocusedChoiceI<learningStyleEnumT>;
	learningTimes: FocusedChoiceI<learningTimesEnumT>;
	learningDuration: FocusedChoiceI<learningDurationEnumT>;
}

declare interface StudentProfileI {
	intrests: IntrestsI;
	prefrences: PrefrencesI;
	level: levelsEnumT;
}
