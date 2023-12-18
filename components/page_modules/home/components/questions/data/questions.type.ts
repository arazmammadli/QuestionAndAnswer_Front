import exp from "node:constants";
import {IUser} from "@/components/page_modules/auth/data/auth.type";
import {IUserQuestion} from "@/components/page_modules/ask-question/data/ask-question.type";

export interface IQuestionsQuery {
    limit:number;
    pageParam:number;
};

export interface IQuestionsResponse {
    success:boolean;
    data:{
        questions:any[];
        count:number;
        totalPages:number;
    };
    message:string;
}

export interface IQuestion {
    _id:string;
    views:string[];
    user:IUser;
    title:string;
    tags:string[];
    slug:string;
    problemViews:string;
    problemDetail:string;
    createdAt:string;
    comments:IComment[];
    answers:IAnswer[];
}

export interface IComment {
    _id:string;
    user:IUser;
    desc:string;
    createdAt:string;
}

export interface IAnswer {
    _id:string;
    answer:string;
    answerNumber:number;
    createdAt:string;
    user:IUser;
    question:IUserQuestion;
}