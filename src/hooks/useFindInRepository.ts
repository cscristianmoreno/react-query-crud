/* eslint-disable prefer-const */
import { functionModelStruct } from "../models/function.model";
import { AxiosResponse } from "axios";
import { UseQueryResult, useQuery, } from "@tanstack/react-query";
import { CrudRepository } from "../repository/crud.repository";
import { UserDTO } from "../dto/user.dto";
import { QueryType } from "../query-keys/query.key";

export const useFindInRepository: functionModelStruct<void, UseQueryResult<UserDTO[]>> =
    (): UseQueryResult<UserDTO[]> => {
        
    const query: UseQueryResult<UserDTO[]> = useQuery({
        queryKey: [QueryType.FIND_ALL_USERS],
        queryFn: async (): Promise<UserDTO[]> => {
            const repository: CrudRepository<UserDTO[]> = new CrudRepository<UserDTO[]>();
            const usersData: AxiosResponse<UserDTO[]> = await repository.findAll();

            let usersDTO: UserDTO[];
            usersDTO = [];

            usersData.data.forEach((str: UserDTO): void => {
                const userDTO: UserDTO = new UserDTO(str);
                usersDTO.push(userDTO);
            });

            return usersDTO;
        },
        retry: false
    });
    
    return query;
};