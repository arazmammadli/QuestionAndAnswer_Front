import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {questionDetailRequest} from "@/components/page_modules/question-detail/data/question-detail.request";

export function useGetQuestion() {
    const params = useParams();
    const slug = params.slug as string;

    const query = useQuery({
        queryKey:["getQuestion"],
        queryFn:() => questionDetailRequest.getQuestion(slug)
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data!,
        query,
    }

}