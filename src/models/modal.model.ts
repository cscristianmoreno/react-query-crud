import { ReactNode } from "react";

export interface modalModelStruct {
    open: boolean,
    onClose: () => void | undefined,
    title?: string,
    subtitle?: string,
    children: ReactNode
}