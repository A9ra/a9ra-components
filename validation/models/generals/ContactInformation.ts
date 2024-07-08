import { MyZodType, z } from '^common/defaultZod';
import { arraySchema } from '^common/elements';

/* Social media  schema */
export const SocialMediaSchema = (
	{ facebook, instagram, linkedin, x, youtube }: Partial<Record<keyof SocialMediaUrlsI, ErrorsSchemaMsgI>> = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<SocialMediaUrlsI>>(
			{
				facebook: z.string(facebook).optional(),
				instagram: z.string(instagram).optional(),
				linkedin: z.string(linkedin).optional(),
				x: z.string(x).optional(),
				youtube: z.string(youtube).optional(),
			},
			{
				description: DocumentUserMsg.description || 'Social media document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid Social media Schema',
				required_error: DocumentUserMsg.required || 'Social media document Schema is required',
			}
		)
		.openapi('Social_Media_Document', { description: 'Social media document Schema' });
};
/* Phone  schema */
export const PhoneSchema = (
	{ number, code }: Partial<Record<keyof PhoneI, ErrorsSchemaMsgI>> = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<PhoneI>>(
			{
				number: z.string(number),
				code: z.string(code).optional(),
			},
			{
				description: DocumentUserMsg.description || 'Phone document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid Phone Schema',
				required_error: DocumentUserMsg.required || 'Phone document Schema is required',
			}
		)
		.openapi('Phone_Document', { description: 'Phone document Schema' });
};
/* Personal information schema */
export const ContactInformationSchema = (
	{
		emails,
		faxes,
		phones,
		socialMediaUrls,
		validatedEmails,
		websites,
	}: Partial<Record<Exclude<keyof ContactInformationI, 'socialMediaUrls'>, ErrorsSchemaMsgI>> & {
		socialMediaUrls?: Partial<Record<keyof SocialMediaUrlsI, ErrorsSchemaMsgI>>;
	} = {},
	DocumentUserMsg: ErrorsSchemaMsgI = {}
) => {
	return z
		.object<MyZodType<ContactInformationI>>(
			{
				emails: arraySchema(z.string(), emails),
				validatedEmails: arraySchema(z.string(), validatedEmails),
				websites: arraySchema(z.string(), websites),
				faxes: arraySchema(PhoneSchema(), faxes),
				phones: arraySchema(PhoneSchema(), phones),
				socialMediaUrls: SocialMediaSchema(socialMediaUrls),
			},
			{
				description: DocumentUserMsg.description || 'Contact information document Schema',
				invalid_type_error: DocumentUserMsg.invalid || 'Invalid Contact information Schema',
				required_error: DocumentUserMsg.required || 'Contact information document Schema is required',
			}
		)
		.openapi('Contact_information_Document', { description: 'Contact information document Schema' });
};
