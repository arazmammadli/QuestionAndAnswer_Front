import {UserStat} from "@/components/page_modules/shared/components/userStat";
import clsx from "clsx";
import {IUserQuestion} from "@/components/page_modules/ask-question/data/ask-question.type";
import {getDate} from "@/utils/getDate";
import {QuestionItem} from "@/components/page_modules/shared/components/questionItem";
import {IAnswer} from "@/components/page_modules/home/components/questions/data/questions.type";

type Props = {
    answerCounts:number;
    questionCounts:number;
    about:string;
    questions:IUserQuestion[];
    answers:IAnswer[];
}

export function UserContent(props:Props) {
    const {answerCounts,questionCounts, answers,questions,about} = props;

    return (
        <div className="w-full">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-3 items-start">
                    <div className="md:flex-[0_0_25%] md:max-w-[25%] flex-[0_0_100%] max-w-full">
                        <div className="w-full flex flex-col gap-6">
                            <UserStat answersCount={answerCounts}
                                      questionsCount={questionCounts}/>
                        </div>
                    </div>
                    <div className="md:flex-[0_0_75%] md:max-w-[75%] flex-[0_0_100%] max-w-full">
                        <div className="w-full flex flex-col gap-6">
                            <div className="w-full">
                                <div className="w-full mb-2 text-left">
                                    <h2 className="text-lg font-medium text-[#191c1f]">About</h2>
                                </div>
                                <div
                                    className={clsx("w-full border border-solid border-gray-300 rounded-md", {
                                        ["p-8 bg-[#F9FAFA]"]: !Boolean(about),
                                        ["p-1"]: Boolean(about)
                                    })}>
                                    <p className="text-sm text-gray-500 text-center font-normal leading-5">
                                        {about ? about : "Your about me section is currently blank."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="w-full">
                        <div className="w-full mb-2 text-left">
                            <h2 className="text-lg font-medium text-[#191c1f]">Questions</h2>
                        </div>
                        <div
                            className={clsx("w-full border border-solid border-gray-300 rounded-md", {
                                ["p-8 bg-[#F9FAFA]"]: Boolean(questions.length === 0),
                            })}>
                            {
                                questions.length > 0 ? questions.map((question) => {
                                    const questionCreated = getDate(question.createdAt)
                                    return (
                                        <QuestionItem key={question.slug}
                                                      questionCreated={questionCreated} title={question.title} slug={question.slug}/>
                                    )
                                }) : <p className="text-center text-lg text-gray-500">No Questions</p>
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-2 text-left">
                            <h2 className="text-lg font-medium text-[#191c1f]">Answers</h2>
                        </div>
                        <div
                            className={clsx("w-full border border-solid border-gray-300 rounded-md", {
                                ["p-8 bg-[#F9FAFA]"]: Boolean(answers.length === 0),
                            })}>
                            {
                                answers.length > 0 ? answers.map((answer) => {
                                    const questionCreated = getDate(answer.createdAt)
                                    return (
                                        <QuestionItem key={answer?.question?.slug}
                                                      questionCreated={questionCreated} title={answer?.question?.title || ""} slug={answer?.question?.slug || ""}/>
                                    )
                                }) : <p className="text-center text-lg text-gray-500">No Answer.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}