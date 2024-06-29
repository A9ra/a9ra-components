import { Dispatch } from 'react';
import { RegisterFormI } from '@client/providers/OnboardingProvider/formDefault';

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
	validator?: (form: RegisterFormI) => Promise<boolean>;
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

	setForm: Dispatch<React.SetStateAction<RegisterFormI>>;
	nextStep: () => void;
	prevStep: () => void;
	goToStep: (step: number) => void;
	submit: () => void;
	checkSubmit: () => void;
	modifyAnswers: () => void;
}
