import {IAnswer, IComment} from "@/components/page_modules/home/components/questions/data/questions.type";

export interface IAskQuestion {
    title:string;
    problemDetail:string;
    problemViews:string;
    tags:string[]
};

export interface IAskQuestionResponse {
    message:string;
    success:boolean;
    question:IUserQuestion;
}

export interface IUserQuestion {
    _id:string;
    createdAt:string;
    problemDetail:string;
    problemViews:string;
    title:string;
    answers:IAnswer[];
    comments:IComment[];
    slug:string;
    tags:string[];
    user:string;
    views:string[];
}

