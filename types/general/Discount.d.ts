declare interface Discount<
	DiscountId = string,
	ProductsPopulated = string,
	CollectionsPopulated = string,
	VariantsPopulated = string,
> extends TimeStampI {
	_id: DiscountId;
	type: 'onProduct' | 'onOrder' | 'shipping';
	method: 'automatic' | 'code';
	startsAt: Date;
	endsAt?: Date;
	status: 'active' | 'inactive' | 'expired';
	appliesOn?: 'specific_products' | 'specific_collections' | 'specific_variants';
	products?: ProductsPopulated[];
	collections?: ProductsPopulated[];
	productsVariants?: VariantsPopulated[];
	customerGets?: CustomerGetsI;
	// customerBuysX?: CustomerBuysXI;
	// customerGetsY?: CustomerGetsYI;
}

declare interface CodeDiscount extends Discount {
	code: string;
	usageLimit?: number;
	appliesOnesPerCustomer?: boolean;
	minimalPurchaseRequirements?: MinimalPurchaseRequirementsI;
}

declare interface AutomaticDiscount extends Discount {
	minimalPurchaseRequirements: MinimalPurchaseRequirementsI;
}

declare interface MinimalPurchaseRequirementsI {
	type: 'quantity' | 'amount';
	amount?: number;
	quantity?: number;
}

declare interface CustomerGetsI {
	discountValuetype: 'fixed' | 'percentage';
	discountValue: number;
}

// declare interface CustomerBuysXI {
// 	type: 'quantity' | 'amount';
// 	appliesOn?: 'specific_products' | 'specific_collections' | 'specific_variants';
// 	products?: ProductsPopulated[];
// 	collections?: ProductsPopulated[];
// 	productsVariants?: VariantsPopulated[];
// 	amount?: number;
// 	quantity?: number;
// }

// declare interface CustomerGetsYI {
// 	quantity: number;
// 	discountValueType: 'percentage' | 'fixed' | 'free';
// 	value?: number;
// }
