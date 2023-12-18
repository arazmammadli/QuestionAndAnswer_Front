import {IAskQuestion, IAskQuestionResponse} from "@/components/page_modules/ask-question/data/ask-question.type";
import {requestInstanceClient} from "@/config/request";

export const askQuestionRequest = {
    createQuestion:(data:IAskQuestion) => {
        return requestInstanceClient.post<IAskQuestionResponse,IAskQuestion>("/question",data);
    }
}