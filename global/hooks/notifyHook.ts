import {Renderable,ValueOrFunction,toast} from "react-hot-toast";

export type ToastType = "success" | "error" | "loading";

export type PromiseMessage = {
    loadingText:string;
    successText:string;
    error:ValueOrFunction<Renderable, any>
};

export function useNotify() {
    function notify(message:string,type:ToastType) {
        return toast[type](message);
    }

    function promiseNotify(cb:Promise<unknown>,message:PromiseMessage) {
        toast.promise(cb,{
            loading:message.loadingText,
            success:message.successText,
            error:message.error
        })
    }

    return {notify,promiseNotify};
}