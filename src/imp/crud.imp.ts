import { AxiosResponse } from "axios";


export declare interface CrudRepositoryImp<T> {
    save(t: T): Promise<void>;

    findAll(): Promise<AxiosResponse<T>>;

    delete(t: T): Promise<void>;
}