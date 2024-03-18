declare interface OrderI<OrderId = string, DiscountPopulated = string, CustomerPopulated = string> extends TimeStampI {
	_id: OrderId;
	customer: CustomerPopulated;
	products: ProductOrderI[];
	orderDiscounts?: DiscountOrderI[];
	freeShippingDiscounts: boolean;
	total: string;
	status: OrderStatus;
	shippingPrice: ShippingI;
}

declare interface ProductOrderI<ProductPopulated = string, VariantPopulated = string> {
	product: productPopulated;
	quantity: number;
	variant?: VariantPopulated;
	productDiscounts?: DiscountProductI[];
}

declare interface DiscountOrderI<DiscountPopulated = string> {
	discount: DiscountPopulated;
	reductionAmount: string;
	priceAfterDiscount: string;
}

declare interface DiscountProductI<DiscountPopulated = string> {
	discount: DiscountPopulated;
	freeShipping: boolean;
	reductionAmount: string;
	priceAfterDiscount: string;
}
