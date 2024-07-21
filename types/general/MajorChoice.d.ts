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
declare interface PublicMajorChoiceI<IDS = string> extends MajorsAcceptanceI<IDS> {
	id: IDS;
}