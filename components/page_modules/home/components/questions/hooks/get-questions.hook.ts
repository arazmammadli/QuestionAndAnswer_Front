import {useInfiniteQuery} from "@tanstack/react-query";
import {questionsRequest} from "@/components/page_modules/home/components/questions/data/questions.request";

export function useGetQuestions() {

    const query = useInfiniteQuery(
        {
            queryKey:["getQuestions"],
            queryFn:questionsRequest.getQuestions,
            initialPageParam:1,
            getNextPageParam: (lastPage) => {
                return lastPage.prevPage < lastPage.data.totalPages ? lastPage.prevPage + 1 : undefined;
            },
        }
    );

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        fetchNextPage: query.fetchNextPage,
        refetch: query.refetch,
        hasNextPage: query.hasNextPage,
        isFetchingNextPage: query.isFetchingNextPage,
        query
    }
}