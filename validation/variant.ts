import { MyZodType, z } from './defaultZod';
import {
	arraySchema,
	booleanSchema,
	mongoIDSchema,
	nameSchema,
	priceSchema,
	quantitySchema,
	stringDateSchema,
	weightSchema,
	weightUnitSchema,
} from './elements';
import { OptionSchema } from './option';

export const VariantWhenCreateProductSchema = (
	{
		barcode,
		compareAtPrice,
		inventoryQuantity,
		inventoryTracking,
		name,
		optionsValues,
		physicalProduct,
		price,
		sku,
		weight,
		weightUnit,
	}: Partial<Record<Exclude<keyof VariantWhenCreateProductI, 'optionsValues'>, ErrorsSchemaMsgI>> & {
		optionsValues?: {
			option: ErrorsSchemaMsgI;
			valueSelected: ErrorsSchemaMsgI;
		};
	} = {},
	variantMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<VariantWhenCreateProductI>>(
			{
				name: nameSchema(name),
				price: priceSchema(price).optional(),
				compareAtPrice: priceSchema(compareAtPrice).optional(),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit).optional(),
				weight: weightSchema(weight).optional(),
				inventoryTracking: booleanSchema(inventoryTracking),
				inventoryQuantity: quantitySchema(inventoryQuantity).optional(),
				barcode: z
					.string({
						invalid_type_error: barcode?.invalid || 'Invalid barcode',
						required_error: barcode?.required || 'Barcode is required',
						description: barcode?.description || 'A barcode',
					})
					.optional(),
				sku: z
					.string({
						invalid_type_error: sku?.invalid || 'Invalid sku',
						required_error: sku?.required || 'Sku is required',
						description: sku?.description || 'A sku',
					})
					.optional(),
				optionsValues: arraySchema<OptionValueWhenCreateProductI>(
					z.object<MyZodType<OptionValueWhenCreateProductI>>({
						option: z.string({
							invalid_type_error: optionsValues?.option?.invalid || 'Invalid Option',
							required_error: optionsValues?.option?.required || 'Option is required',
							description: optionsValues?.option?.description || 'Option Schema',
						}),
						valueSelected: z.string({
							invalid_type_error: optionsValues?.valueSelected?.invalid || 'Invalid ValueSelected',
							required_error: optionsValues?.valueSelected?.required || 'ValueSelected is required',
							description: optionsValues?.valueSelected?.description || 'ValueSelected Schema',
						}),
					})
				),
			},
			{
				description: variantMsg?.description || 'Variant Schema',
				invalid_type_error: variantMsg?.invalid || 'Invalid Variant Schema',
				required_error: variantMsg?.required || 'Variant Schema is required',
			}
		)
		.refine((data) => {
			if (data.price && data.compareAtPrice && data.compareAtPrice > data.price) {
				throw new Error('CompareAtPrice should be less than or equal to price');
			}
			if (data.inventoryTracking && !data.inventoryQuantity) {
				throw new Error('Available Quantity is required when inventory tracking is enabled');
			}
			if (data.physicalProduct && (!data.weight || !data.weightUnit)) {
				throw new Error('Weight and WeightUnit are required for physical products');
			}
			return true;
		});

export const VariantDocumentSchema = (
	{
		barcode,
		compareAtPrice,
		inventoryQuantity,
		inventoryTracking,
		name,
		physicalProduct,
		price,
		sku,
		weight,
		weightUnit,
		productId,
	}: Partial<Record<Exclude<keyof VariantDocumentI, 'optionsValues'>, ErrorsSchemaMsgI>> = {},
	optionsValues?: {
		option: ErrorsSchemaMsgI;
		valueSelected: ErrorsSchemaMsgI;
	}
) =>
	z
		.object<MyZodType<VariantDocumentI>>(
			{
				productId: mongoIDSchema(productId),
				name: nameSchema(name),
				price: priceSchema(price).optional(),
				compareAtPrice: priceSchema(compareAtPrice).optional(),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit).optional(),
				weight: weightSchema(weight).optional(),
				inventoryTracking: booleanSchema(inventoryTracking),
				inventoryQuantity: quantitySchema(inventoryQuantity).optional(),
				barcode: z
					.string({
						invalid_type_error: barcode?.invalid || 'Invalid barcode',
						required_error: barcode?.required || 'Barcode is required',
						description: barcode?.description || 'A barcode',
					})
					.optional(),
				sku: z
					.string({
						invalid_type_error: sku?.invalid || 'Invalid sku',
						required_error: sku?.required || 'Sku is required',
						description: sku?.description || 'A sku',
					})
					.optional(),
				optionsValues: arraySchema<OptionValueDocumentI>(
					z.object<MyZodType<OptionValueDocumentI>>({
						option: mongoIDSchema(optionsValues?.option),
						valueSelected: z.string({
							invalid_type_error: productId?.invalid || 'Invalid valueSelected',
							required_error: productId?.required || 'ValueSelected is required',
							description: productId?.description || 'A valueSelected',
						}),
					})
				),
			},
			{
				description: 'Variant Document Schema',
				invalid_type_error: 'Invalid Variant Schema',
				required_error: 'Variant Schema is required',
			}
		)
		.refine((data) => {
			if (data.price && data.compareAtPrice && data.compareAtPrice > data.price) {
				throw new Error('CompareAtPrice should be less than or equal to price');
			}
			if (data.inventoryTracking && !data.inventoryQuantity) {
				throw new Error('Available Quantity	is required when inventory tracking is enabled');
			}
			if (data.physicalProduct && (!data.weight || !data.weightUnit)) {
				throw new Error('Weight and WeightUnit are required for physical products');
			}
			return true;
		});

export const VariantSchema = (
	{
		_id,
		barcode,
		compareAtPrice,
		inventoryQuantity,
		inventoryTracking,
		name,
		physicalProduct,
		price,
		sku,
		weight,
		weightUnit,
		productId,
		createdAt,
		updatedAt,
	}: Partial<Record<Exclude<keyof VariantI, 'optionsValues'>, ErrorsSchemaMsgI>> = {},
	optionsValues?: {
		option: ErrorsSchemaMsgI;
		valueSelected: ErrorsSchemaMsgI;
	}
) =>
	z
		.object<MyZodType<VariantI<string, string | OptionI>>>(
			{
				_id: mongoIDSchema(_id),
				productId: mongoIDSchema(productId),
				name: nameSchema(name),
				price: priceSchema(price).optional(),
				compareAtPrice: priceSchema(compareAtPrice).optional(),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit).optional(),
				weight: weightSchema(weight).optional(),
				inventoryTracking: booleanSchema(inventoryTracking),
				inventoryQuantity: quantitySchema(inventoryQuantity).optional(),
				barcode: z
					.string({
						invalid_type_error: barcode?.invalid || 'Invalid barcode',
						required_error: barcode?.required || 'Barcode is required',
						description: barcode?.description || 'A barcode',
					})
					.optional(),
				sku: z
					.string({
						invalid_type_error: sku?.invalid || 'Invalid sku',
						required_error: sku?.required || 'Sku is required',
						description: sku?.description || 'A sku',
					})
					.optional(),
				optionsValues: arraySchema<OptionValueI<string | OptionI>>(
					z.object<MyZodType<OptionValueI<string | OptionI>>>({
						option: mongoIDSchema(optionsValues?.option).or(OptionSchema()),
						valueSelected: z.string({
							invalid_type_error: optionsValues?.valueSelected?.invalid || 'Invalid ValueSelected',
							required_error: optionsValues?.valueSelected?.required || 'ValueSelected is required',
							description: optionsValues?.valueSelected?.description || 'ValueSelected Schema',
						}),
					})
				),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
			},
			{
				description: 'Variant Schema',
				invalid_type_error: 'Invalid Variant Schema',
				required_error: 'Variant Schema is required',
			}
		)
		.refine((data) => {
			if (data.price && data.compareAtPrice && data.compareAtPrice > data.price) {
				throw new Error('CompareAtPrice should be less than or equal to price');
			}
			if (data.inventoryTracking && !data.inventoryQuantity) {
				throw new Error('Available Quantity	is required when inventory tracking is enabled');
			}
			if (data.physicalProduct && (!data.weight || !data.weightUnit)) {
				throw new Error('Weight and WeightUnit are required for physical products');
			}
			return true;
		});
