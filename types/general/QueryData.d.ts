declare interface QuerySearchI<T extends NonNullable<object>> {
	search?: string;
	page?: number;
	limit?: number;
	sort?: Record<keyof T, 1 | -1>;
}
declare interface ListResponse<T extends NonNullable<object>> {
	data: T[];
	total: number;
	page?: number;
	limit?: number;
}
