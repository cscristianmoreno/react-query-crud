import { AxiosResponse } from "axios";
import RequestService from "../services/request.service";
import { CrudRepositoryImp } from "../imp/crud.imp";

export class CrudRepository<T> implements CrudRepositoryImp<T> {
    async save(t: T): Promise<void> {
        await RequestService.post<void>("/users/save", t);
    }

    async findAll(): Promise<AxiosResponse<T>> {
        const result: AxiosResponse<T> = await RequestService.get("/users/all");
        return result;
    }

    async delete(t: T): Promise<void> {
        await RequestService.delete<void>("/users/delete/" + t);
    }
}