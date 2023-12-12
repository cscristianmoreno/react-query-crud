import { Button, ButtonGroup, Table } from "@mui/joy";
import { FC, ReactElement, useState } from "react";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { UserDTO } from "../../dto/user.dto";
import { useFindInRepository } from "../../hooks/useFindInRepository";
import { hookModelStruct } from "../../models/hook.model";
import ModalComponent from "../modal/modal.component";

import "./list.component.css";
import { functionModelStruct } from "../../models/function.model";
import { useDeleteInRepository } from "../../hooks/useDeleteInRepository";
import SnackbarComponent from "../snackbar/snackbar.component";

const ListComponent: FC = (): ReactElement => {

    const users: UseQueryResult<UserDTO[]> = useFindInRepository();
    const userDelete: UseMutationResult<void, Error, number, unknown> = useDeleteInRepository();

    const [modalDelete, setModalDelete]: hookModelStruct<boolean> = useState<boolean>(false);
    const [userId, setUserId]: hookModelStruct<number> = useState<number>(0);
    
    const onActionUserDelete: functionModelStruct<number, void> = (id: number): void => {
        setModalDelete(!modalDelete);
        setUserId(id);
    };

    const onUserDelete: functionModelStruct<void, void> = (): void => {
        userDelete.mutate(userId);
        setModalDelete(false);
    };

    return (
        <Table style={{width: "85%"}} color="neutral" variant="plain">
            <thead>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Autoridad</th>
                <th>Fecha de registro</th>
                <th>Acción</th>
            </thead>
            <tbody>
                { users.isLoading && <span>Cargando...</span> }
                { users.isError && <span>Ocurrió un error</span> }
                { users.isSuccess && !users.data.length && <span>No se encontraron resultados...</span> }
                {  
                    users.isSuccess && 
                    users.data.map((str: UserDTO, index: number): ReactElement => {
                        return ( 
                            <tr key={index}>
                                <td>{str.getId}</td>
                                <td>{str.getName}</td>
                                <td>{str.getLastname}</td>
                                <td id="email">{str.getEmail}</td>
                                <td>{str.getAuthority.role}</td>
                                <td>{new Date().toLocaleDateString()}</td>
                                <td>
                                    <ButtonGroup spacing={2}>
                                        <Button variant="solid" color="primary">Modificar</Button>
                                        <Button variant="outlined" color="danger" onClick={(): void => onActionUserDelete(str.getId)}>Eliminar</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        );
                    })
                }
                { users.isRefetching && <span>Cargando nuevos datos...</span>}

            </tbody>

            <ModalComponent title="Eliminar usuario" subtitle="¿Estás seguro de eliminar este usuario?" open={modalDelete} onClose={(): void => setModalDelete(!modalDelete)}>
                <ButtonGroup spacing={2}>
                    <Button onClick={(): void => onUserDelete()} color="danger">Eliminar</Button>
                    <Button color="neutral">Cancelar</Button>
                </ButtonGroup>
            </ModalComponent>

            <SnackbarComponent open={userDelete.isSuccess} color="danger">
                El usuario fue eliminado
            </SnackbarComponent>
        </Table>
    );
};

export default ListComponent;