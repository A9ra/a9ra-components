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
	title: LanguagesContentI;
	subtitle?: LanguagesContentI;
	description?: LanguagesContentI;
	icon?: string;
	validator?: (form: RegisterFormI) => Promise<boolean>;
	color: string;
	/* type: string; */
}
export interface OnboardingContextType {
	currentStep: number;
	form: RegisterFormI;
	formDefault: RegisterFormI;

	isRegistering: boolean;
	isErrorRegistering: boolean;
	isAtEnd: boolean;
	isAtBeginning: boolean;
	isSuccessRegistering: boolean;
	isChecking: boolean;

	isValidating: boolean;
	isValid: boolean;
	validationError: LanguagesContentI | null;

	setForm: Dispatch<React.SetStateAction<RegisterFormI>>;
	nextStep: () => void;
	prevStep: () => void;
	goToStep: (step: number) => void;
	submit: () => void;
	checkSubmit: () => void;
	modifyAnswers: () => void;
}
