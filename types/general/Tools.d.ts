declare interface MyFile {
	fileName: string;
	src: string;
	size: number;
	mimetype: string;
}
declare interface MyImageFile extends MyFile {
	width: number;
	height: number;
}

type MyEnum<U extends string> = Readonly<[U, ...U[]]>;
type Optional<T> = {
	[P in keyof T]?: T[P];
};
