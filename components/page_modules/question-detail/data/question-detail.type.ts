import {IAnswer, IQuestion} from "@/components/page_modules/home/components/questions/data/questions.type";

export interface IQuestionDetailResponse {
    success:boolean;
    message:string;
    data:IQuestion
};
export interface IAddAnswer {
    answer:string;
    questionId:string;
}

export interface IAddComment {
    desc:string;
    questionId:string;
}

export interface IAddAnswerResponse {
    success:boolean;
    message:string;
    answer:IAnswer;
}

export interface IAddCommentResponse {
    success:boolean;
    message:string;
    comment:{
        _id:string;
        desc:string;
        user:string;
        question:string
    };
}