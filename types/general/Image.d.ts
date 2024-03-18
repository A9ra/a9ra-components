declare interface ImageI {
	src: string;
	alt?: string;
	width?: number;
	height?: number;
}

declare interface ImageErrorsSchemaMsgI {
	src?: ErrorsSchemaMsgI;
	alt?: ErrorsSchemaMsgI;
	width?: ErrorsSchemaMsgI;
	height?: ErrorsSchemaMsgI;
}
