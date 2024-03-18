declare interface CustomerI<CustomerId = string> {
	_id: CustomerId;
	firstname: string;
	lastName: string;
	email?: string;
	phone: string;
	address?: AddressI;
	tags?: string[];
}

declare interface AddressI {
	city: string;
	country: string;
	apartment?: string;
	company?: string;
	postalCode?: string;
}
