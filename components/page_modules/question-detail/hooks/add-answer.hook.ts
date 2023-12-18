import {useMutation, useQueryClient} from "@tanstack/react-query";
import {questionDetailRequest} from "@/components/page_modules/question-detail/data/question-detail.request";

export function useAddAnswer() {
    const queryClient = useQueryClient();

    const query = useMutation({
        mutationKey:["addAnswer"],
        mutationFn:questionDetailRequest.addAnswer,
        onSuccess: (data) => {
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