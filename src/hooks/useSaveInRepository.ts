import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { formDataModelStruct, functionModelStruct } from "../models/function.model";
import { CrudRepository } from "../repository/crud.repository";
import { User } from "../entity/user.entity";
import { QueryType } from "../query-keys/query.key";

export const useSaveInRepository: functionModelStruct<void, UseMutationResult<void, Error, formDataModelStruct, unknown>> = 
    (): UseMutationResult<void, Error, formDataModelStruct, unknown> => {

    const query: UseQueryResult<void> = useQuery({
        queryKey: [QueryType.FIND_ALL_USERS]
    });

    const mutation: UseMutationResult<void, Error, formDataModelStruct, unknown> = useMutation({
        mutationKey: [QueryType.SAVE_USER],
        mutationFn: async (data: formDataModelStruct): Promise<void> => {
            const user: User = new User();

            user.setName = data.name as string;
            user.setLastname = data.lastname as string;
            user.setEmail = data.email as string;
            user.setPassword = data.password as string;

            user.setAuthority = {
                id: data.authority as string
            };

            const repository: CrudRepository<User> = new CrudRepository<User>();
            await repository.save(user);
            query.refetch();
        },
        retry: false
    });

    return mutation;
};