import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { functionModelStruct } from "../models/function.model";
import { QueryType } from "../query-keys/query.key";
import { CrudRepository } from "../repository/crud.repository";

export const useDeleteInRepository: functionModelStruct<void, UseMutationResult<void, Error, number, unknown>> = 
    (): UseMutationResult<void, Error, number, unknown> => {

    const query: UseQueryResult<void> = useQuery({
        queryKey: [QueryType.FIND_ALL_USERS]
    });

    const mutation: UseMutationResult<void, Error, number, unknown> = useMutation({
        mutationKey: [QueryType.DELETE_USER],
        mutationFn: async (id: number): Promise<void> => {
            const repository: CrudRepository<number> = new CrudRepository<number>();
            await repository.delete(id);
            query.refetch();
        },
        retry: false
    });

    return mutation;
};