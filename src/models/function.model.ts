export type functionModelStruct<T, S> = (t: T) => S;

export type formDataModelStruct = {
    [K: string]: FormDataEntryValue
};