import { Snackbar } from "@mui/joy";
import { FC, ReactElement, useEffect, useState } from "react";
import { hookModelStruct } from "../../models/hook.model";
import { snackbarModelStruct } from "../../models/snackbar.model";

const SnackbarComponent: FC<snackbarModelStruct> = 
    ({ open, children, color }: snackbarModelStruct): ReactElement => {
    const [openSnackbar, setOpenSnackbar]: hookModelStruct<boolean> = useState<boolean>(false);

    useEffect((): void => {
        setOpenSnackbar(open);
    }, [open]);

    return (
        <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openSnackbar}
                color={color}
                variant="solid"
                autoHideDuration={3000}
                onClose={(): void => setOpenSnackbar(false)}
            >
                {children}
            </Snackbar>
    );
};

export default SnackbarComponent;