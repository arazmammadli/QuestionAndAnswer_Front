import {Dispatch,SetStateAction} from "react";
import ReactQuill from "react-quill";

type Props = {
    value:string;
    setValue: Dispatch<SetStateAction<string>>
}
export function AddAnswer (props:Props) {
    const {value, setValue} = props;

    return (
        <div className="w-full">
            <div>
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </div>
        </div>
    )
}