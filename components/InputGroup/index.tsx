import { InputHTMLAttributes, useState } from 'react';
import { ErrorMessage, FieldInputProps } from 'formik';

import {
	InputGroupI,
	InputPropsI,
	InputTypesKeysI,
	InputTypesValuesI,
	TextInputPropsI,
	TextInputTypesKeysI,
} from './types';

function TextInput<InputType extends TextInputTypesKeysI>({
	id,
	type,
	inputProps = {},
	fixes,
	...formikProps
}: TextInputPropsI<InputType>) {
	const [showPassword, setShowPassword] = useState(false);
	const { prefix, suffix } = fixes || {};

	return (
		<label className={'input input-bordered flex items-center gap-2'}>
			{prefix}
			<input
				id={id}
				{...formikProps}
				{...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
				type={type === 'password' && showPassword ? 'text' : type}
				className={`${prefix || suffix ? 'grow' : ''} ${inputProps.className || 'w-full'}`}
			/>
			{type === 'password' ? (
				showPassword ? (
					<span className="icon-[mdi--eye-off] w-6" onClick={() => setShowPassword(false)} />
				) : (
					<span className="icon-[mdi--eye] w-6" onClick={() => setShowPassword(true)} />
				)
			) : (
				suffix
			)}
		</label>
	);
}

function Input<InputType extends InputTypesKeysI>({
	id,
	type,
	inputProps = {},
	enums,
	fixes,
	...formikProps
}: InputPropsI<InputType>) {
	switch (type) {
		case 'textarea': {
			const otherProps = formikProps as FieldInputProps<InputTypesValuesI['textarea']>;
			return (
				<textarea
					className={'textarea textarea-bordered rounded-lg ' + (inputProps.className || '')}
					placeholder="Bio"
					rows={6}
					id={id}
					{...(inputProps as InputHTMLAttributes<HTMLTextAreaElement>)}
					{...otherProps}
				>
					{formikProps.value}
				</textarea>
			);
		}
		case 'select':
			return (
				<select
					id={id}
					className={`select select-bordered ${inputProps.className || 'w-full'}`}
					{...(inputProps as InputHTMLAttributes<HTMLSelectElement>)}
					{...formikProps}
					value={formikProps.value as string | number}
				>
					{enums?.map((option, i) => (
						<option key={id + option.label + i} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			);
		case 'checkbox':
		case 'radio':
			return (
				<input
					id={id}
					{...formikProps}
					{...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
					type={type}
					checked={formikProps.value as unknown as boolean}
					className={`checkbox ${inputProps.className || ''}`}
				/>
			);
		case 'datetime-local':
			return (
				<TextInput
					id={id}
					type={type as TextInputTypesKeysI}
					inputProps={inputProps as InputHTMLAttributes<HTMLInputElement>}
					enums={enums}
					fixes={fixes}
					{...formikProps}
					value={new Date(formikProps.value).toISOString().slice(0, 16)}
				/>
			);
		case 'week':
		case 'date':
			return (
				<TextInput
					id={id}
					type={type as TextInputTypesKeysI}
					inputProps={inputProps as InputHTMLAttributes<HTMLInputElement>}
					enums={enums}
					fixes={fixes}
					{...formikProps}
					value={new Date(formikProps.value).toISOString().slice(0, 10)}
				/>
			);
		case 'time':
			return (
				<TextInput
					id={id}
					type={type as TextInputTypesKeysI}
					inputProps={inputProps as InputHTMLAttributes<HTMLInputElement>}
					enums={enums}
					fixes={fixes}
					{...formikProps}
					value={new Date(formikProps.value).toISOString().slice(11, 16)}
				/>
			);
		case 'month':
			return (
				<TextInput
					id={id}
					type={type as TextInputTypesKeysI}
					inputProps={inputProps as InputHTMLAttributes<HTMLInputElement>}
					enums={enums}
					fixes={fixes}
					{...formikProps}
					value={new Date(formikProps.value).toISOString().slice(0, 7)}
				/>
			);

		case 'color':
			return (
				<input
					id={id}
					{...formikProps}
					{...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
					type={type}
					className={`input input-bordered ${inputProps.className || 'w-full'}`}
				/>
			);
		default:
			return (
				<TextInput
					id={id}
					type={type as TextInputTypesKeysI}
					inputProps={inputProps as InputHTMLAttributes<HTMLInputElement>}
					enums={enums}
					fixes={fixes}
					{...formikProps}
				/>
			);
	}
}

export default function InputGroup<InputType extends InputTypesKeysI>({
	className = 'w-full',
	id: passedId,
	label,
	enums,
	fixes,
	type,
	inputProps,
	...formikProps
}: InputGroupI<InputType>) {
	const [id] = useState(passedId || Math.random().toString(36).substring(7));
	if (type === 'checkbox' || type === 'radio') {
		return (
			<div className={`${className} flex flex-col gap-2 text-gray-900`}>
				<div className="flex gap-4">
					<Input id={id} type={type} inputProps={inputProps} enums={enums} fixes={fixes} {...formikProps} />
					{label &&
						(typeof label === 'string' ? (
							<label htmlFor={id} className={'block text-sm font-medium'}>
								{label}
							</label>
						) : (
							label
						))}
				</div>
				<ErrorMessage name={formikProps.name} className="label text-sm" />
			</div>
		);
	}
	return (
		<div className={`form-control ${className || 'w-full'} text-gray-900`}>
			{label &&
				(typeof label === 'string' ? (
					<label htmlFor={id} className={'label'}>
						{label}
					</label>
				) : (
					label
				))}
			<Input id={id} type={type} inputProps={inputProps} enums={enums} fixes={fixes} {...formikProps} />
			<ErrorMessage name={formikProps.name} className="label text-sm" />
		</div>
	);
}
