import { DefaultColorPalette } from "@mui/joy/styles/types";
import { ReactNode } from "react";

export interface snackbarModelStruct {
    open: boolean, 
    children: ReactNode, 
    color: DefaultColorPalette
}