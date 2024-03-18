import { MyZodType, z } from '../defaultZod';
import { ResendValidationSchema, ValidateRequestSchema } from '../models/validate';

export const ValidateShapeSchema = z.object<MyZodType<ValidateRequestShapeI>>({
	body: ValidateRequestSchema(),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
});
export const ResendValidationShapeSchema = z.object<MyZodType<ValidationResendRequestShapeI>>({
	body: ResendValidationSchema(),
	query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
		message: 'Query must be empty',
	}),
});
