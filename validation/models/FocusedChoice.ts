import { ZodType } from 'zod';

import { arraySchema } from '^common/elements';

import { MyZodType, z } from '../defaultZod';

export const FocusedChoiceSchema = <T extends string>(schema: ZodType<T>) =>
	z
		.object<MyZodType<FocusedChoiceI<T>>>(
			{
				main: schema,
				others: arraySchema<T>(schema),
			},
			{
				description: 'A focused choice',
				invalid_type_error: 'The focused choice must be an object',
				required_error: 'The focused choice is required',
			}
		)
		.openapi('Focused_Choice', { description: 'A focused choice' });
