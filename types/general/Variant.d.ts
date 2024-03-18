declare interface VariantDocumentI extends VariantWhenCreateProductI {
	optionsValues: OptionValueDocumentI[];
	productId: string;
}

declare interface VariantI<VariantId = string, OptionPopulated = string> extends VariantDocumentI, TimeStampI {
	_id: VariantId;
	optionsValues: OptionValueI<OptionPopulated>[];
}
declare interface OptionValueWhenCreateProductI {
	option: string;
	valueSelected: string;
}

declare interface OptionValueI<OptionPopulated = string> {
	option: OptionPopulated;
	valueSelected: string;
}

declare interface OptionValueDocumentI {
	option: string;
	valueSelected: string;
}
declare interface VariantWhenCreateProductI {
	name: string;
	optionsValues: OptionValueWhenCreateProductI[];
	price?: string;
	sku?: string;
	barcode?: string;
	inventoryTracking: boolean;
	inventoryQuantity?: number;
	physicalProduct: boolean;
	weight?: string;
	weightUnit?: weightUnit;
	compareAtPrice?: string;
}
