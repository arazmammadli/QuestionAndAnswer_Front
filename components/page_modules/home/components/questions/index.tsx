import {QuestionsContainer} from "@/components/page_modules/home/components/questions/container/questions.container";
import HydratedProvider from "@/app/provider/hydrated-provider";
import {questionsRequest} from "@/components/page_modules/home/components/questions/data/questions.request";
import {QueryFns} from "@/global/types/query.type";

export function Questions() {

    const queryFns: QueryFns[] = [
        {
            prefetchType: 'infiniteQuery',
            queryFn: () => questionsRequest.getQuestions({})
        }
    ];


    return (
        <HydratedProvider queryKeys={[["getQuestions"]]} queryFns={queryFns}>
            <QuestionsContainer/>
        </HydratedProvider>
    )
}