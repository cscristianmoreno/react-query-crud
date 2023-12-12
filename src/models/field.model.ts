import { HTMLInputTypeAttribute } from "react";

export interface fieldModelStruct {
    label?: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    name?: string,
    fieldTypeSelect?: boolean
}