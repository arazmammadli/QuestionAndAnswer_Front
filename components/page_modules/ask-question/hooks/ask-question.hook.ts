import {useMutation, useQueryClient} from "@tanstack/react-query";
import {askQuestionRequest} from "@/components/page_modules/ask-question/data/ask-question.request";

export function useAskQuestion() {
    const queryClient = useQueryClient();

    const query = useMutation({
        mutationKey:["askQuestion"],
        mutationFn:askQuestionRequest.createQuestion,
        onSuccess:(data) => {
            if(data.success) {
                queryClient.invalidateQueries({queryKey:["getProfile"]})
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