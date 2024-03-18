import { MyZodType, z } from './defaultZod';
import {
	arraySchema,
	booleanSchema,
	descriptionSchema,
	imageSchema,
	nameSchema,
	priceSchema,
	quantitySchema,
	statusProductSchema,
	weightSchema,
	weightUnitSchema,
	mongoIDSchema,
	stringDateSchema,
} from './elements';
import { OptionSchema, OptionsWhenCreateProductSchema } from './option';
import { VariantWhenCreateProductSchema } from './variant';

/* --------------------------------- Create Product Schema --------------------------------- */

export const createProductSchema = (
	{
		name,
		status,
		price,
		compareAtPrice,
		weightUnit,
		inventoryTracking,
		physicalProduct,
		description,
		vendor,
		tags,
		costumeCategory,
		standardCategory,
		barcode,
		sku,
		collections,
		options,
		variants,
		inventoryQuantity,
		searchEngineDescription,
		searchEngineHandle,
		searchEngineTitle,
		weight,
	}: Partial<Record<Exclude<keyof CreateProductI, 'images'>, ErrorsSchemaMsgI>> = {},
	images?: ImageErrorsSchemaMsgI,

	createProductMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<CreateProductI>>(
			{
				name: nameSchema(name),
				description: descriptionSchema(description).optional(),
				vendor: nameSchema(vendor).optional(),
				tags: arraySchema<string>(nameSchema(tags)).optional(),
				price: priceSchema(price),
				compareAtPrice: priceSchema(compareAtPrice),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit),
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
				status: statusProductSchema(status),
				standardCategory: nameSchema(standardCategory).optional(),
				costumeCategory: nameSchema(costumeCategory).optional(),
				searchEngineTitle: nameSchema(searchEngineTitle).optional(),
				searchEngineDescription: nameSchema(searchEngineDescription).optional(),
				searchEngineHandle: nameSchema(searchEngineHandle).optional(),
				images: arraySchema<ImageI>(imageSchema(images)).optional(),
				collections: arraySchema<string>(mongoIDSchema(), collections).optional(),
				options: arraySchema<OptionWhenCreateProductI>(OptionsWhenCreateProductSchema(), options).optional(),
				variants: arraySchema<VariantWhenCreateProductI>(VariantWhenCreateProductSchema(), variants).optional(),
			},
			{
				description: createProductMsg.description || 'Create Product Schema',
				invalid_type_error: createProductMsg.invalid || 'Invalid Create Product Schema',
				required_error: createProductMsg.required || 'Create Product Schema is required',
			}
		)
		.refine((data) => {
			if (data.compareAtPrice && data.compareAtPrice > data.price) {
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

/* --------------------------------- Product Document Schema --------------------------------- */

export const ProductDocumentSchema = (
	{
		name,
		status,
		price,
		compareAtPrice,
		weightUnit,
		inventoryTracking,
		physicalProduct,
		description,
		vendor,
		tags,
		costumeCategory,
		standardCategory,
		barcode,
		sku,
		collections,
		options,
		variants,
		inventoryQuantity,
		searchEngineDescription,
		searchEngineHandle,
		searchEngineTitle,
		weight,
	}: Partial<Record<Exclude<keyof ProductDocumentI, 'images'>, ErrorsSchemaMsgI>> = {},
	images?: ImageErrorsSchemaMsgI,
	productMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<ProductDocumentI>>(
			{
				name: nameSchema(name),
				description: descriptionSchema(description).optional(),
				vendor: nameSchema(vendor).optional(),
				tags: arraySchema<string>(nameSchema(tags)).optional(),
				price: priceSchema(price),
				compareAtPrice: priceSchema(compareAtPrice),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit),
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
				status: statusProductSchema(status),
				standardCategory: nameSchema(standardCategory).optional(),
				costumeCategory: nameSchema(costumeCategory).optional(),
				searchEngineTitle: nameSchema(searchEngineTitle).optional(),
				searchEngineDescription: nameSchema(searchEngineDescription).optional(),
				searchEngineHandle: nameSchema(searchEngineHandle).optional(),
				images: arraySchema<ImageI>(imageSchema(images)).optional(),
				collections: arraySchema<string>(mongoIDSchema(), collections).optional(),
				options: arraySchema<string>(mongoIDSchema(), options).optional(),
				variants: arraySchema<string>(mongoIDSchema(), variants).optional(),
			},
			{
				description: productMsg.description || 'Product Document Schema',
				invalid_type_error: productMsg.invalid || 'Invalid Product Schema',
				required_error: productMsg.required || 'Product Schema is required',
			}
		)
		.refine((data) => {
			if (data.compareAtPrice && data.compareAtPrice > data.price) {
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

/* --------------------------------- Product Schema --------------------------------- */

export const PublicProductSchema = (
	{
		_id,
		name,
		status,
		price,
		compareAtPrice,
		weightUnit,
		inventoryTracking,
		physicalProduct,
		description,
		vendor,
		tags,
		costumeCategory,
		standardCategory,
		barcode,
		sku,
		collections,
		options,
		variants,
		inventoryQuantity,
		searchEngineDescription,
		searchEngineHandle,
		searchEngineTitle,
		weight,
		createdAt,
		updatedAt,
	}: Partial<Record<Exclude<keyof ProductI, 'images'>, ErrorsSchemaMsgI>> = {},
	images?: ImageErrorsSchemaMsgI,
	productMsg: ErrorsSchemaMsgI = {}
) =>
	z
		.object<MyZodType<ProductI<string, string | OptionI, string>>>(
			{
				_id: mongoIDSchema(_id),
				name: nameSchema(name),
				description: descriptionSchema(description).optional(),
				vendor: nameSchema(vendor).optional(),
				tags: arraySchema<string>(nameSchema(tags)).optional(),
				price: priceSchema(price),
				compareAtPrice: priceSchema(compareAtPrice),
				physicalProduct: booleanSchema(physicalProduct),
				weightUnit: weightUnitSchema(weightUnit),
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
				status: statusProductSchema(status),
				standardCategory: nameSchema(standardCategory).optional(),
				costumeCategory: nameSchema(costumeCategory).optional(),
				searchEngineTitle: nameSchema(searchEngineTitle).optional(),
				searchEngineDescription: nameSchema(searchEngineDescription).optional(),
				searchEngineHandle: nameSchema(searchEngineHandle).optional(),
				images: arraySchema<ImageI>(imageSchema(images)).optional(),
				collections: arraySchema<string>(mongoIDSchema(), collections).optional(),
				options: arraySchema<string | OptionI>(mongoIDSchema().or(OptionSchema()), options).optional(),
				variants: arraySchema<string>(mongoIDSchema(), variants).optional(),
				createdAt: stringDateSchema(createdAt),
				updatedAt: stringDateSchema(updatedAt),
			},
			{
				description: productMsg.description || 'Product Document Schema',
				invalid_type_error: productMsg.invalid || 'Invalid Product Schema',
				required_error: productMsg.required || 'Product Schema is required',
			}
		)
		.refine((data) => {
			if (data.compareAtPrice && data.compareAtPrice > data.price) {
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
