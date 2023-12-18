"use client";
import {Container} from "@/components/container/ui.container";
import Image from "next/image";
import {getDate} from "@/utils/getDate";
import {Button} from "@/components/common/button";
import {AddComment} from "@/components/page_modules/question-detail/components/addComment";
import {useGetQuestion} from "@/components/page_modules/question-detail/hooks/get-question.hook";
import {AddAnswer} from "@/components/page_modules/question-detail/components/addAnswer";
import {FormEvent, useEffect, useState} from "react";

import 'react-quill/dist/quill.snow.css';
import {useAddAnswer} from "@/components/page_modules/question-detail/hooks/add-answer.hook";
import {useNotify} from "@/global/hooks/notifyHook";
import {IAddAnswer, IAddComment} from "@/components/page_modules/question-detail/data/question-detail.type";
import {addAnswerValidator} from "@/components/page_modules/question-detail/validator/add-answer.validator";
import {Toast} from "@/components/common/toast";
import {useAddComment} from "@/components/page_modules/question-detail/hooks/add-comment.hook";
import {Textarea} from "@/components/common/textarea";
import {FormEntries} from "@/utils/mixedUtils";
import {addCommentValidator} from "@/components/page_modules/question-detail/validator/add-comment.validator";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {useRouter} from "next/navigation";
import Link from "next/link";
export function QuestionDetailContainer() {
    // hooks
    const [answerValue,setAnswerValue] = useState<string>("");
    const {data:question} = useGetQuestion();
    const addAnswerRequest = useAddAnswer();
    const addCommentRequest = useAddComment();
    const pushNotify = useNotify();

    // router hook
    const router = useRouter();

    // auth state
    const authState = useAuthStore((state) => ({
        isLogin:state.auth.isLogin
    }))

    useEffect(() => {
        let timer:ReturnType<typeof setTimeout>;

        if(addAnswerRequest.isSuccess) {
            timer = setTimeout(() => {
                setAnswerValue("");
            },1000)
        }

        return () => clearTimeout(timer);
    },[addAnswerRequest.isSuccess])

    const createAnswer = async () => {
        if(!authState.isLogin) {
            return router.push("/login");
        }

        const formData:IAddAnswer = {
            answer:answerValue,
            questionId:question.data._id
        };

        addAnswerValidator({
            form:formData,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(addAnswerRequest.mutateAsync(formData),{
                    error:(data) => data.response.data.message,
                    loadingText:"Your answer is given...",
                    successText:"Your answer has been added successfully."
                })
            }
        })
    }

    const createComment = async (e:FormEvent) => {
        e.preventDefault();
        if(!authState.isLogin) {
            return router.push("/login");
        }

        const form = FormEntries<IAddComment>(e.target);
        form.questionId = question.data._id;
        addCommentValidator({
            form,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(addCommentRequest.mutateAsync(form),{
                    error:(data) => data.response.data.message,
                    loadingText:"Your comment is attached...",
                    successText:"Your comment has been successfully added"
                })
            }
        })
    }

    return (
        <div className="w-full">
            <Container>
                <div className="w-full flex flex-col gap-3 mb-8">
                    <div className="w-full">
                        <div className="flex min-w-0 gap-x-4 mb-4">
                            <div className="w-12 h-12 relative">
                                <Image src="/assets/images/uq.png" className="rounded-full " fill={true}
                                       alt={question.data.user.name}/>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <Link href={`/users/${question.data.user._id}`}
                                      className="text-base font-semibold text-[#191c1f]">{question.data.user.name + " " + question.data.user.surname}</Link>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{getDate(question.data.createdAt)}</p>
                            </div>
                        </div>
                        <div className="w-full mb-3 text-left">
                            <div className="flex flex-col gap-1 pb-2 border-b border-solid border-gray-300">
                                <h1 className="text-3xl font-bold text-[#191c1f]">{question.data.title}</h1>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full flex flex-col gap-3"
                                 dangerouslySetInnerHTML={{__html: question.data.problemDetail}}></div>
                        </div>

                        <div className="w-full">
                            {
                                question.data.problemViews ? <div className="w-full flex flex-col gap-3"
                                                             dangerouslySetInnerHTML={{__html: question.data.problemViews}}></div> : null
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="block w-full mb-4">
                            {
                                Boolean(question.data.comments.length) && <>
                                    <div className="w-full">
                                        <h2 className="text-xl font-normal leading-7 text-[#191c1f]">{question.data.comments.length} Comments</h2>
                                    </div>

                                    <div className="w-full flex flex-col">
                                        {
                                            question.data.comments.map((comment) => {
                                                const commentCreated = getDate(comment.createdAt)
                                                return (
                                                    <div key={comment._id}
                                                         className="w-full py-6 border-b border-solid border-[#E4E7E9]">
                                                        <div className="flex flex-row items-center gap-3 mb-3">
                                                            <Image src="/assets/images/uq.png" width="40" height="40"
                                                                   alt={comment.user.name}/>
                                                            <div className="block w-full">
                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                    <h1 className="text-base font-medium leading-5 text-[#191c1f]">{comment.user.name + " " + comment.user.surname}</h1>
                                                                    <span
                                                                        className="text-base font-normal leading-5 text-[#77878F]">•</span>
                                                                    <p className="text-base font-normal leading-5 text-[#77878F]">{commentCreated}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full">
                                                            <p className="text-sm font-normal leading-5 italic text-[#475156]">{comment.desc}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>}
                        </div>
                        <div className="w-full mb-5">
                            <div className="w-full text-left mb-3">
                                <h1 className="text-xl font-normal leading-7 text-[#191c1f]">Add a comment</h1>
                            </div>
                            <div className="w-full">
                                <form onSubmit={createComment} className="flex flex-col gap-6">
                                    <div className="w-full">
                                        <Textarea name="desc" id="desc"/>
                                    </div>
                                    <div className="w-full">
                                        <Button type="submit" className="bg-[#1B75D0]">
                                            <span className="text-sm font-bold leading-[48px] uppercase text-white">Add Comment</span>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {
                        Boolean(question.data.answers.length) && <div className="w-full">
                            <div className="block w-full mb-4">
                                <div className="w-full">
                                    <h2 className="text-xl font-normal leading-7 text-[#191c1f]">{question.data.answers.length} Answers</h2>
                                </div>
                                <div className="w-full flex flex-col">
                                {
                                        question.data.answers.map((answer) => {
                                            const answerCreated = getDate(answer.createdAt);
                                            return (
                                                <div key={answer._id} className="w-full py-6 border-b border-solid border-[#E4E7E9]">
                                                    <div className="flex flex-row items-center gap-3 mb-3">
                                                        <Image src="/assets/images/uq.png" width="40" height="40"
                                                               alt={answer.user.name}/>
                                                        <div className="block w-full">
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <h1 className="text-base font-medium leading-5 text-[#191c1f]">
                                                                    {answer.user.name + " " + answer.user.surname}
                                                                </h1>
                                                                <span
                                                                    className="text-base font-normal leading-5 text-[#77878F]">•</span>
                                                                <p className="text-base font-normal leading-5 text-[#77878F]">{answerCreated}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="flex flex-col gap-3" dangerouslySetInnerHTML={{__html:answer.answer}}>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="w-full">
                    <div className="w-full pb-2 border-b border-solid border-gray-300">
                        <h2 className="text-xl font-normal leading-7 text-[#191c1f]">Your Answer</h2>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <div>
                            <AddAnswer value={answerValue} setValue={setAnswerValue}/>
                        </div>
                        <div>
                            <Button onClick={createAnswer} type="button" className="bg-[#1B75D0]">
                                    <span className="text-white">Post Your Answer</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <Toast/>
        </div>
    )
}