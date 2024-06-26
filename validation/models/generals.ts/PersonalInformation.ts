import { MyZodType, z } from '^common/defaultZod';
import { nameSchema, stringDateSchema } from '^common/elements';

import { AddressSchema } from './Address';
export const gendersMap: Record<GendersNamesT, GendersT> = { Male: 'M', Female: 'F' };
export const gendersList = Object.values(gendersMap) as unknown as MyEnum<GendersT>;
export const PersonalInformationSchema = (
	{
		birthday,
		birthplace,
		firstName,
		gender,
		lastName,
		residence,
	}: Partial<Record<Exclude<keyof PersonalInformationI, 'birthplace' | 'residence'>, ErrorsSchemaMsgI>> & {
		birthplace?: Partial<Record<keyof AddressI, ErrorsSchemaMsgI>>;
		residence?: Partial<Record<keyof AddressI, ErrorsSchemaMsgI>>;
	} = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<PersonalInformationI>>(
			{
				firstName: nameSchema(firstName, 'firstName'),
				lastName: nameSchema(lastName, 'lastName'),
				birthday: stringDateSchema(birthday),
				birthplace: AddressSchema(birthplace).optional(),
				residence: AddressSchema(residence).optional(),
				gender: z.enum<GendersT, MyEnum<GendersT>>(gendersList, gender), // <1>
			},
			{
				description: DocumentUserMsg.description || 'User document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid User Schema',
				required_error: DocumentUserMsg.required || 'User document Schema is required',
			}
		)
		.openapi('User_Document', { description: 'User document Schema' });
};
