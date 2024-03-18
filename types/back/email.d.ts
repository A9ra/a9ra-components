declare interface EmailContexts {
	resetPassword: ResetPasswordEmailContext;
	validateEmail: ValidateEmailContext;
}
declare interface AdditionalContext {
	resetPassword: ResetPasswordEmailAdditionalContext;
	validateEmail: ValidateEmailAdditionalContext;
}

declare type EmailTemplates = keyof EmailContexts;

declare type EmailAccounts = 'info' | 'support' | 'noReply';

declare interface QueuedEmail<T extends EmailTemplates = EmailTemplates> {
	by: A9raApps;
	from: EmailAccounts;
	to: string | string[];
	cc?: string | string[];
	bcc?: string | string[];
	subject: string;
	template: T;
	context: EmailContexts[T];
}
