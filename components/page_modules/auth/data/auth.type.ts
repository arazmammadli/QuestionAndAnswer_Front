
export interface IRegister {
    email:string;
    name:string;
    surname:string;
    password:string;
}

export interface IRegisterResponse {
    user:IUser;
    success:boolean;
    token:string;
}

export interface IUser {
    _id:string;
    name: string;
    email: string;
    surname: string;
    img: string | undefined;
    about:string | undefined;
    questions:any[];
    answers:any[];
}

export interface IProfileResponse {
    message:string;
    success:boolean;
    user:IUser;
}

export interface IAuth {
    email:string;
    password:string;
}

export interface IAuthResponse {
    token:string;
    user:IUser;
    success:boolean;
}