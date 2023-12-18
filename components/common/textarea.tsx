import {InputHTMLAttributes} from "react";

type Props= {
    label?:string;
} & InputHTMLAttributes<HTMLTextAreaElement>
export function Textarea(props:Props) {
    const {label,id,...rest} = props;

    return (
        <>
            {label &&
                <label htmlFor={id} className="block text-[#191c1f] text-sm font-normal leading-5">{label}</label>}
            <div className="mt-4">
                <textarea id={id}
                          className="w-full text-gray-800 py-3 px-4 min-h-[163px] bg-black-700 rounded-sm outline-none border border-solid border-black-400 placeholder:text-gray-800 placeholder:text-lg placeholder:font-normal placeholder:leading-[150%]" {...rest} />
            </div>
        </>
    )
}