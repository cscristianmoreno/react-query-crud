import { FC, ReactElement } from "react";
import { formModelStruct } from "../../models/form.model";
import { Stack } from "@mui/joy";

const FormComponent: FC<formModelStruct> = ({ children, onSubmit }: formModelStruct): ReactElement => {
    return (
        <form onSubmit={onSubmit}> 
            <Stack spacing={3}>
                {children}
            </Stack>
        </form>
    );
};

export default FormComponent;