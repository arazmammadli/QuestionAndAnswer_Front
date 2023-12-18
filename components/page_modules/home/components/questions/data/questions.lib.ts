import {questionsRequest} from "@/components/page_modules/home/components/questions/data/questions.request";

export async function getQuestion(slug:string) {
    const response = await questionsRequest.getQuestion(slug);
    return response.data
}