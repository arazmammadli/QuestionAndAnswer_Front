import Image from "next/image";
import Link from "next/link";
import {IQuestion} from "@/components/page_modules/home/components/questions/data/questions.type";
import {getDate} from "@/utils/getDate";

type Props  = {

} & IQuestion;

export function QuestionCard(props:Props) {
    const {title,user,problemDetail,tags,slug,createdAt} = props;
    const questionCreatedAt = getDate(createdAt);

    return (
        <div className="w-full border border-solid border-[#dee0e1] rounded">
            <div className="w-full p-3">
                <div className="w-full">
                    <div className="flex min-w-0 gap-x-4 mb-4">
                        <div className="w-12 h-12 relative">
                            <Image src="/assets/images/uq.png" className="rounded-full " fill={true} alt={user.name}/>
                        </div>
                        <div className="min-w-0 flex-auto">
                            <Link href={`/users/${user._id}`} className="text-base font-semibold text-[#191c1f]">{user.name + " " + user.surname}</Link>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{questionCreatedAt}</p>
                        </div>
                    </div>
                    <div className="w-full text-left mb-3">
                        <Link href={`/question/${slug}`} className="text-base text-[#191c1f] font-bold">
                            <span>{title}</span>
                        </Link>
                    </div>
                    <div className="w-full ">
                        <div className="w-full max-h-[70px] overflow-hidden">
                            <div dangerouslySetInnerHTML={{__html: problemDetail}}></div>
                        </div>
                    </div>
                    <div className="w-full mt-3">
                        <div className="w-full flex flex-row items-center gap-1">
                            {
                                tags.map((tag) => (
                                    <span
                                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{tag}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}