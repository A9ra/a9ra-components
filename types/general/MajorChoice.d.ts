interface PriorityMinimumI {
	priority: number;
	average: number;
}
declare type PriorityAcceptanceI = Optional<Record<SecondaryBasicSpecialtiesT, PriorityMinimumI>>;
declare interface MajorChoiceI<IDS = string> {
	major: IDS;
	university: IDS;
	priorities: PriorityAcceptanceI;
	undetermined?: boolean;
}
declare interface PublicMajorChoiceI<IDS = string> extends MajorChoiceI<IDS> {
	id: IDS;
}
declare interface PopulatedMajorChoiceI<IDS = string> extends PublicMajorChoiceI<IDS> {
	major: PublicMajorI<IDS>;
	university: PublicUniversityI<IDS>;
}
