import { MyZodType, z } from '../defaultZod';
import { RecoverySessionSchema, RecoverySessionSendSchema, ResetPasswordSchema } from '../models/recoverySession';

export const RecoverySessionRequestSchema = ({
	username,
	email,
}: Partial<Record<keyof RecoverySessionI | 'email', ErrorsSchemaMsgI>> = {}) =>
	z.object<MyZodType<RecoverySessionShapeI>>({
		// body must be empty
		body: RecoverySessionSchema({ username, email }),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
export const SendRecoverySessionSchema = () =>
	z.object<MyZodType<RecoverySessionSendShapeI>>({
		body: RecoverySessionSendSchema(),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
export const SendRecoverySessionGetSchema = () =>
	z.object<MyZodType<RecoverySessionSendShapeI>>({
		query: RecoverySessionSendSchema(),
		body: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
export const ResetPasswordRequestSchema = () =>
	z.object<MyZodType<ResetPasswordShapeI>>({
		body: ResetPasswordSchema(),
		query: z.any().refine((query) => !query || Object.keys(query).length === 0, {
			message: 'Query must be empty',
		}),
	});
