import { formDataModelStruct, functionModelStruct } from "../models/function.model";

export const deserializeJsonDataUtil: functionModelStruct<EventTarget & HTMLFormElement, formDataModelStruct> = 
    (ev: EventTarget & HTMLFormElement): formDataModelStruct => {
    const form: FormData = new FormData(ev);
    const data: formDataModelStruct = Object.fromEntries(form.entries());
    return data;
};