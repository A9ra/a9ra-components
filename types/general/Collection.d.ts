declare interface CollectionDocumentI<ProductsPopulated = string> extends TimeStampI {
	title: string;
	description?: string;
	image?: ImageI;
	products?: ProductsPopulated[];
	searchEngineTitle?: string;
	searchEngineDescription?: string;
	searchEngineHandle?: string;
}

declare interface CollectionI<CollectionId = string> extends CollectionDocumentI {
	_id: CollectionId;
}
