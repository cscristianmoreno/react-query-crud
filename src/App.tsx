import { FC, FormEvent, ReactElement, useState  } from "react";
import { RequestInterceptor } from "./interceptors/request.interceptor";
import { Button } from "@mui/joy";
import ListComponent from "./components/list/list.component";

import "./App.css";
import { hookModelStruct } from "./models/hook.model";
import FormComponent from "./components/form/form.component";
import FieldComponent from "./components/form/field/field.component";
import { formDataModelStruct, functionModelStruct } from "./models/function.model";
import SelectComponent from "./components/form/select/select.component";
import { deserializeJsonDataUtil } from "./utils/data.util";
import { UseMutationResult } from "@tanstack/react-query";
import { useSaveInRepository } from "./hooks/useSaveInRepository";
import ModalComponent from "./components/modal/modal.component";
import SnackbarComponent from "./components/snackbar/snackbar.component";

const App: FC = (): ReactElement => {

    new RequestInterceptor();

    const [modal, setModal]: hookModelStruct<boolean> = useState<boolean>(false);

    const { mutate, isSuccess }: UseMutationResult<void, Error, formDataModelStruct, unknown> = useSaveInRepository();

    const handleSubmit: functionModelStruct<FormEvent<HTMLFormElement>, Promise<void>> = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setModal(false);

        const data: formDataModelStruct = deserializeJsonDataUtil(event.currentTarget);

        mutate(data);
    };

    return (
        <>
            <div className="class_section_container">
                <h1>ad</h1>
                <Button onClick={(): void => setModal(!modal)}>Crear usuario</Button>
                <ListComponent/>
            </div>


            <SnackbarComponent open={isSuccess} color="success">
                El usuario fue creado con exito
            </SnackbarComponent>

            <ModalComponent title="Crear usuario" subtitle="Genera un nuevo usuario" open={modal} onClose={(): void => setModal(false)}>
                <FormComponent onSubmit={handleSubmit}>
                    <FieldComponent label="Nombre" name="name"/>
                    <FieldComponent label="Apellido" name="lastname"/>
                    <FieldComponent label="Correo electrónico" name="email"/>
                    <FieldComponent label="Contraseña" type="password" name="password"/>
                    <SelectComponent label="Rol" name="authority"/>
                    <Button type="submit">Registrar</Button>
                </FormComponent>
            </ModalComponent>
        </>
    );
};

export default App;
