import { FormEventHandler, ReactNode } from "react";

export interface formModelStruct {
    children: ReactNode,
    onSubmit?: FormEventHandler<HTMLFormElement>,
}