import {ProfileEditContainer} from "@/components/page_modules/profile-edit/container/profile-edit.container";
import {AskQuestionContainer} from "@/components/page_modules/ask-question/container/ask-question.container";

export function AskQuestion() {
    return (
        <div className="w-full py-5">
            <div className="max-w-[1000px] mx-auto">
                <AskQuestionContainer/>
            </div>
        </div>
    )
}