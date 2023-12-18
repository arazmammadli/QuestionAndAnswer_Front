import {
    IQuestionsQuery,
    IQuestionsResponse
} from "@/components/page_modules/home/components/questions/data/questions.type";
import {requestInstanceClient, requestInstanceServer} from "@/config/request";

export const questionsRequest = {
    getQuestions: async (
        {limit=8,pageParam=1}:Partial<IQuestionsQuery>
    ) => {
        const data = await requestInstanceClient.get<IQuestionsResponse>(`/question?limit=${limit}&page=${pageParam}`);
        return {
            ...data,
            prevPage:pageParam
        }
    }
}