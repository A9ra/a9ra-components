declare type PrimitiveTypes = string | number | boolean | Date | null | undefined;
declare type Keys<T extends object> = Exclude<keyof T, symbol | number>;
