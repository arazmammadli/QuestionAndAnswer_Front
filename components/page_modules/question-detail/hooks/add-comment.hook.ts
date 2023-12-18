import {useMutation, useQueryClient} from "@tanstack/react-query";
import {questionDetailRequest} from "@/components/page_modules/question-detail/data/question-detail.request";

export function useAddComment() {
    const queryClient = useQueryClient();

    const query = useMutation({
        mutationKey:["addComment"],
        mutationFn:questionDetailRequest.addComment,
        onSuccess:(data) => {
            if(data.success) {
                queryClient.invalidateQueries({queryKey:["getQuestion"]});
            }
        }
    });
    return {
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}