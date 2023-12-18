import {QuestionDetail} from "@/components/page_modules/question-detail";
import {QueryFns} from "@/global/types/query.type";
import {questionDetailRequest} from "@/components/page_modules/question-detail/data/question-detail.request";
import HydratedProvider from "@/app/provider/hydrated-provider";

type Props = {
    params: { slug: string };
}
export default function Page(props:Props) {
    const {params} = props;

    const queryFns: QueryFns[] = [
        {
            prefetchType: 'query',
            queryFn: () => questionDetailRequest.getQuestion(params.slug)
        }
    ];

    return (
        <HydratedProvider queryFns={queryFns} queryKeys={[["getQuestion"]]}>
            <QuestionDetail/>
        </HydratedProvider>
    )
}