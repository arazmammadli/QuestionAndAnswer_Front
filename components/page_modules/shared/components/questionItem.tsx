import Link from "next/link";
import {IUserQuestion} from "@/components/page_modules/ask-question/data/ask-question.type";

type Props = {
    questionCreated:string;
    title:string;
    slug:string;
};
export function QuestionItem(props:Props) {
    const {questionCreated,title,slug} = props;
    return (
        <div className="w-full p-3 border-b border-solid border-gray-300">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="block">
                    <Link href={`/question/${slug}`}
                          className="text-base text-blue-500 font-normal transition-colors hover:text-blue-600 duration-300">
                        {title?.slice(0,40) + "..."}
                    </Link>
                </div>
                <p className="text-sm text-gray-400 font-normal leading-5">{questionCreated}</p>
            </div>
        </div>
    )
}