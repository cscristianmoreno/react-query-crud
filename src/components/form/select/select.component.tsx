import { FormControl, FormLabel, Select } from "@mui/joy";
import Option from "@mui/joy/Option";
import { FC, ReactElement } from "react";
import { fieldModelStruct } from "../../../models/field.model";

const SelectComponent: FC<fieldModelStruct> = ({ label, name }: fieldModelStruct): ReactElement => {
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Select defaultValue="" name={name}>
                <Option value="" disabled={true}>Selecciona una opción</Option>
                <Option value="1">Usuario</Option>
                <Option value="2">Administrador</Option>
            </Select>
        </FormControl>
    );
};

export default SelectComponent;