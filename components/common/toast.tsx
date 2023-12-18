import {Toaster, ToastOptions} from "react-hot-toast";

type Props= & ToastOptions;
export function Toast(props:Props) {
    return <Toaster {...props}/>
}