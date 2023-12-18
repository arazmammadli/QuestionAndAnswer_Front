"use client";
import Image from "next/image";
import Link from "next/link";
import {useGetQuestions} from "@/components/page_modules/home/components/questions/hooks/get-questions.hook";
import {IQuestion, IQuestionsResponse} from "@/components/page_modules/home/components/questions/data/questions.type";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {QuestionCard} from "@/components/page_modules/home/components/questions/components/questionCard";
import {Loading} from "@/components/common/loading";


type ArgType = {
    prevPage: number;
} & IQuestionsResponse;
export function QuestionsContainer() {
    const {data,fetchNextPage,isSuccess,isFetchingNextPage,hasNextPage} = useGetQuestions();

    const { ref, entry } = useInView();

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage !== false) {
            fetchNextPage()
        }
    }, [entry, fetchNextPage]);

    const questions = data?.pages.reduce((acc: IQuestion[], page: ArgType): IQuestion[] => {
        return [...acc, ...page.data.questions];
    }, []) || [];

    return (
        <div className="w-full">
            <div className="max-w-[590px]">
                <div className="w-full flex flex-col gap-4">
                    {
                        questions.map((question,index) => {
                            if(index === questions.length - 1) {
                                return (
                                   <div className="w-full" key={question.slug} ref={ref}>
                                       <QuestionCard {...question}/>
                                   </div>
                                )
                            } else  {
                                return  (
                                    <QuestionCard key={question.slug} {...question}/>
                                )
                            }
                        })
                    }

                </div>
                {
                    isFetchingNextPage && <div className="w-full flex items-center justify-center py-1">
                    <Loading/>
                    </div>
                }
            </div>
        </div>
    )
}