import { InputHTMLAttributes } from 'react';
import { FieldConfig, FieldInputProps, FormikValues } from 'formik';

interface SelectOptionI {
	value: string | number;
	label: string;
}
export type TextInputTypesKeysI =
	| 'text'
	| 'password'
	| 'email'
	| 'number'
	| 'checkbox'
	| 'radio'
	| 'tel'
	| 'date'
	| 'datetime'
	| 'datetime-local'
	| 'time'
	| 'month'
	| 'week'
	| 'url'
	| 'search'
	| 'color';
export type InputTypesKeysI = TextInputTypesKeysI | 'textarea' | 'select';
export interface InputTypesValuesI extends Record<InputTypesKeysI, string | number> {
	text: string;
	password: string;
	email: string;
	number: number;
	textarea: string;
	select: number | string;
	checkbox: string;
	radio: string;
	tel: string;
	date: string;
	datetime: string;
	'datetime-local': string;
	time: string;
	month: string;
	week: string;
	url: string;
	search: string;
	color: string;
}
interface InputTypesElementsI extends Record<InputTypesKeysI, HTMLElement> {
	text: HTMLInputElement;
	password: HTMLInputElement;
	email: HTMLInputElement;
	number: HTMLInputElement;
	textarea: HTMLTextAreaElement;
	select: HTMLSelectElement;
	checkbox: HTMLInputElement;
	radio: HTMLInputElement;
	tel: HTMLInputElement;
	date: HTMLInputElement;
	datetime: HTMLInputElement;
	'datetime-local': HTMLInputElement;
	time: HTMLInputElement;
	month: HTMLInputElement;
	week: HTMLInputElement;
	url: HTMLInputElement;
	search: HTMLInputElement;
	color: HTMLInputElement;
}
export interface InputPropsI<InputType extends InputTypesKeysI> extends FieldInputProps<InputTypesValuesI[InputType]> {
	id: string;
	type: InputType;
	fixes?: {
		prefix?: JSX.Element;
		suffix?: JSX.Element;
	};
	inputProps?: InputHTMLAttributes<InputTypesElementsI[InputType]>;
	enums?: SelectOptionI[];
}

export interface InputGroupI<InputType extends InputTypesKeysI = InputTypesKeysI>
	extends Omit<InputPropsI<InputType>, 'id'> {
	id?: string;
	label?: string | JSX.Element;
	enums?: SelectOptionI[];
	className?: string;
}
export interface TextInputPropsI<InputType extends TextInputTypesKeysI> extends InputPropsI<InputType> {}

export interface InputsI<Values extends FormikValues = FormikValues> {
	getFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>;
	setValues: (values: React.SetStateAction<Values>, shouldValidate?: boolean) => Promise<void>;
	values: Values;
}
