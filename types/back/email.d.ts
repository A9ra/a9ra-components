declare interface EmailContexts {
	resetPassword: ResetPasswordEmailContext;
}
declare interface AdditionalContext {
	resetPassword: ResetPasswordEmailAdditionalContext;
}

declare type EmailTemplates = keyof EmailContexts;

declare type EmailAccounts = 'info' | 'support' | 'noReply';

declare interface QueuedEmail<T extends EmailTemplates = EmailTemplates> {
	by: A9raAppsI;
	from: EmailAccounts;
	to: string | string[];
	cc?: string | string[];
	bcc?: string | string[];
	subject: string;
	template: T;
	context: EmailContexts[T];
}
