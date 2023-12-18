import {ToastType} from "@/global/hooks/notifyHook";

export type ValidatorType<T> = {
    form:T,
    notify:(message:string,type:ToastType) => void,
    cb:()=> void
};
