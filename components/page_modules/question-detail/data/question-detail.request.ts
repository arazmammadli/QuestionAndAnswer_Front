import {requestInstanceClient, requestInstanceServer} from "@/config/request";
import {
    IAddAnswerResponse, IAddComment, IAddCommentResponse,
    IQuestionDetailResponse
} from "@/components/page_modules/question-detail/data/question-detail.type";
import {IAddAnswer} from "@/components/page_modules/question-detail/data/question-detail.type";

export const questionDetailRequest = {
    getQuestion:(slug:string) => {
        return requestInstanceServer.get<IQuestionDetailResponse>(`/question/${slug}`,{
            cache: 'no-store',
        });
    },
    addAnswer:(data:IAddAnswer) => {
        return requestInstanceClient.post<IAddAnswerResponse,IAddAnswer>("/answer",data);
    },
    addComment:(data:IAddComment) => {
        return requestInstanceClient.post<IAddCommentResponse,IAddComment>("/comment",data);
    }
}