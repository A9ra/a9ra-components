declare interface InterestsI {
	interests: FocusedChoiceI<interestsEnumT>;
	subjects: FocusedChoiceI<subjectsEnumT>;
	careers: FocusedChoiceI<careersEnumT>;
}

declare interface PreferencesI {
	learningStyle: FocusedChoiceI<learningStyleEnumT>;
	learningTimes: FocusedChoiceI<learningTimesEnumT>;
	learningDuration: FocusedChoiceI<learningDurationEnumT>;
}

declare interface StudentProfileI {
	interests: InterestsI;
	preferences: PreferencesI;
	level: levelsEnumT;
}
