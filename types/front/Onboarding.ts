import { Dispatch } from 'react';
export type StepIds =
	| 'FullName'
	| 'Email'
	| 'Password'
	| 'Gender'
	| 'BirthDayPlace'
	| 'Username'
	| 'Phone'
	// | 'Residency'
	// | 'Language'
	| 'EducationLevel'
	// | 'AveragePerformance'
	| 'InterestsHobbies'
	| 'InterestsSubjects'
	| 'InterestsCareers'
	| 'LearningStyleType'
	| 'LearningStyleTime'
	| 'LearningStyleDuration';
export interface StepI {
	id: StepIds;
	title: string;
	subtitle?: string;
	description?: string;
	validator?: (form: UserRegistrationI) => Promise<boolean>;
	/* type: string; */
}
export interface OnboardingContextType {
	currentStep: number;
	form: UserRegistrationI;
	formDefault: UserRegistrationI;

	isRegistering: boolean;
	isErrorRegistering: boolean;
	isAtEnd: boolean;
	isAtBeginning: boolean;
	isSuccessRegistering: boolean;
	isChecking: boolean;

	setForm: Dispatch<React.SetStateAction<UserRegistrationI>>;
	nextStep: () => void;
	prevStep: () => void;
	goToStep: (step: number) => void;
	submit: () => void;
	checkSubmit: () => void;
	modifyAnswers: () => void;
}
