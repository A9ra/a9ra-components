declare interface ResetPasswordEmailContext extends TemplateContexts {
	name: string;
	resetUrl: string;
}
declare interface ResetPasswordEmailAdditionalContext {
	logo: string;
	supportEmail: string;
}

declare interface ResetPasswordTemplateContext extends ResetPasswordEmailContext, ResetPasswordEmailAdditionalContext {}
