import {Container} from "@/components/container/ui.container";
import {QuestionDetailContainer} from "@/components/page_modules/question-detail/container/question-detail.container";

export function QuestionDetail() {
    return (
        <div className="w-full">
            <Container>
                <QuestionDetailContainer/>
            </Container>
        </div>
    )
}