declare interface OptionDocumentI extends OptionWhenCreateProductI {
	productId: string;
}

declare interface OptionI<OptionId = string> extends OptionDocumentI, TimeStampI {
	_id: OptionId;
}

declare interface OptionWhenCreateProductI {
	name: string;
	values: string[];
}
