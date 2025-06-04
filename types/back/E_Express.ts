import { Request } from 'express';
import { ParsedQs } from 'qs';

import { UserHydratedDocument } from '!common/models/user';

type RequestExtends = UserDocumentI;

interface RequestExtendsMap<T extends RequestExtends | null = null> {
	records?: { user: T extends UserDocumentI ? UserHydratedDocument : null };
}

export interface ERequest<
	Req extends RequestExtends | null = null,
	Params = {},
	ResBody = any,
	ReqBody = any,
	ReqQuery = {},
	Locals extends Record<string, any> = Record<string, any>,
> extends Request<Params, ResBody, ReqBody, ReqQuery & ParsedQs, Locals>,
		RequestExtendsMap<Req> {}
