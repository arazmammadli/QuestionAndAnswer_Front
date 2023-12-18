"use client";
import {FormEvent, useEffect, useState} from "react";
import {Input} from "@/components/common/input";
import {Button} from "@/components/common/button";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useAskQuestion} from "@/components/page_modules/ask-question/hooks/ask-question.hook";
import {useNotify} from "@/global/hooks/notifyHook";
import {FormEntries} from "@/utils/mixedUtils";
import {IAskQuestion} from "@/components/page_modules/ask-question/data/ask-question.type";
import {askQuestionValidator} from "@/components/page_modules/ask-question/validator/ask-question.validator";
import {useRouter} from "next/navigation";
import {Toast} from "@/components/common/toast";

export function AskQuestionContainer() {
    // hooks
    const [problemDetail, setProblemDetail] = useState<string>('');
    const [problemExcepting,setProblemExcepting] = useState<string>("");
    const [tagValues,setTagValues] = useState("");

    const askQuestionRequest = useAskQuestion();
    const pushNotify = useNotify();
    const router = useRouter();

    useEffect(() => {
        let timer:ReturnType<typeof setTimeout>;

        if(askQuestionRequest.isSuccess) {
            timer = setTimeout(() => {
                router.push("/profile");
            },1000);
        }

        return ()=> clearTimeout(timer);
    },[askQuestionRequest.isSuccess])

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        const tagArray = tagValues.split(",");
        const uniqueTags = new Set(tagArray);
        const tags = Array.from(uniqueTags);
        const form = FormEntries<IAskQuestion>(e.target);
        form.problemDetail = problemDetail;
        form.problemViews = problemExcepting;
        form.tags = tags;

        askQuestionValidator({
            form,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(askQuestionRequest.mutateAsync(form),{
                    error:(data) => data.response.data.message,
                    loadingText:"Created...",
                    successText:"Created successfully."
                })
            }
        })
    }

    return (
        <div className="w-full">
            <div className="w-full mt-10">
                <div className="w-full text-left">
                    <h1 className="text-4xl font-bold text-[#191c1f]">Ask a public question</h1>
                </div>
                <div className="w-full py-10">
                    <form onSubmit={handleSubmit} action="" className="w-full">
                        <div className="w-full flex flex-col gap-5">
                            <div className="p-6 bg-white border border-solid border-gray-200 rounded-md">
                                <div className="flex flex-col gap-1">
                                    <div className="w-full text-left">
                                        <h2 className="text-base font-semibold text-[#191c1f]">Title</h2>
                                    </div>
                                    <Input type="text" id="title" name="title" placeholder="Enter question title"/>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-solid border-gray-200 rounded-md">
                                <div className="flex flex-col gap-1">
                                    <div className="w-full text-left">
                                        <h2 className="text-base font-semibold text-[#191c1f]">What are the details of
                                            your problem?</h2>
                                    </div>
                                    <ReactQuill theme="snow" value={problemDetail} onChange={setProblemDetail}/>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-solid border-gray-200 rounded-md">
                                <div className="flex flex-col gap-1">
                                    <div className="w-full text-left">
                                        <h2 className="text-base font-semibold text-[#191c1f]">What did you try and what
                                            were you expecting?</h2>
                                    </div>
                                    <ReactQuill theme="snow" value={problemExcepting} onChange={setProblemExcepting}/>
                                </div>
                            </div>
                            <div className="p-6 bg-white border border-solid border-gray-200 rounded-md">
                                <div className="flex flex-col gap-1">
                                    <div className="w-full text-left">
                                        <h2 className="text-base font-semibold text-[#191c1f]">Tags</h2>
                                    </div>
                                    <Input onChange={(e) => setTagValues(e.target.value)} type="text" id="tags" name="tags"
                                           placeholder="Enter question tags form example:javascript,nextjs"/>
                                </div>
                            </div>
                            <div className="">
                                <Button type="submit" className="bg-[#155CA2]">
                                    <span className="text-sm text-white leading-5 font-semibold">Ask Question</span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toast/>
        </div>
    )
}