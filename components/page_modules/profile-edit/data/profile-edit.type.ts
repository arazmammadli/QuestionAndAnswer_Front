import {IUser} from "@/components/page_modules/auth/data/auth.type";

export interface IProfileEdit {
    name:string;
    surname:string;
    file:string;
    about:string;
}
export interface IProfileEditResponse {
    message:string;
    success:boolean;
    user:IUser;
}

