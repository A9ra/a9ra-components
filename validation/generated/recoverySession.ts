import {
	RecoverySessionResponseSchema,
	RecoverySessionSchema,
	RecoverySessionSendSchema,
	ResetPasswordSchema,
} from '../models/recoverySession';

export const DefaultRecoverySessionSchema = RecoverySessionSchema();
export const DefaultRecoverySessionSendSchema = RecoverySessionSendSchema();
export const DefaultResetPasswordSchema = ResetPasswordSchema();
export const DefaultRecoverySessionResponseSchema = RecoverySessionResponseSchema();
