import { z } from './defaultZod';
import { arraySchema, mongoIDSchema, nameSchema, stringDateSchema } from './elements';

export const OptionsWhenCreateProductSchema = ({
	name,
	values,
}: Partial<Record<keyof OptionWhenCreateProductI, ErrorsSchemaMsgI>> = {}) =>
	z.object({
		name: nameSchema(name),
		values: arraySchema<string>(z.string(), values),
	});

export const OptionDocumentSchema = ({
	productId,
	name,
	values,
}: Partial<Record<keyof OptionDocumentI, ErrorsSchemaMsgI>> = {}) =>
	z.object({
		productId: mongoIDSchema(productId),
		name: nameSchema(name),
		values: arraySchema<string>(z.string(), values),
	});

export const OptionSchema = ({
	_id,
	productId,
	name,
	values,
	createdAt,
	updatedAt,
}: Partial<Record<keyof OptionI, ErrorsSchemaMsgI>> = {}) =>
	z.object({
		_id: mongoIDSchema(_id),
		productId: mongoIDSchema(productId),
		name: nameSchema(name),
		values: arraySchema<string>(z.string(), values),
		createdAt: stringDateSchema(createdAt),
		updatedAt: stringDateSchema(updatedAt),
	});
