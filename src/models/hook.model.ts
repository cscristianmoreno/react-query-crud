import { Dispatch, SetStateAction } from "react";

export type hookModelStruct<T> = [
    T,
    Dispatch<SetStateAction<T>>
];