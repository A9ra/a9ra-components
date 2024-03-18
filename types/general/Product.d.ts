declare type weightUnit = 'kg' | 'g' | 'lb' | 'oz';
declare type ProductStatus = 'inactive' | 'active';

declare interface ProductDocumentI<OptionsPopulated = string, VariantsPopulated = string> {
	name: string;
	description?: string;
	vendor?: string;
	images?: ImageI[];
	tags?: string[];
	price: string;
	compareAtPrice?: string;
	inventoryTracking: boolean;
	inventoryQuantity?: number;
	physicalProduct: boolean;
	weight?: string;
	weightUnit?: weightUnit;
	barcode?: string;
	sku?: string;
	status: ProductStatus;
	standardCategory?: string;
	costumeCategory?: string;
	searchEngineTitle?: string;
	searchEngineDescription?: string;
	searchEngineHandle?: string;
	collections?: string[];
	variants?: VariantsPopulated[];
	options?: OptionsPopulated[];
}

declare interface ProductI<ProductId = string, OptionsPopulated = string, VariantsPopulated = string>
	extends ProductDocumentI<OptionsPopulated, VariantsPopulated>,
		TimeStampI {
	_id: ProductId;
}

declare interface CreateProductI extends ProductDocumentI {
	variants?: VariantWhenCreateProductI[];
	options?: OptionWhenCreateProductI[];
}
