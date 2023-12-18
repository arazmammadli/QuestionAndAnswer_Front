import React from "react";

type Props ={
    children:React.ReactNode;
}
export function AuthContainer({children}:Props) {
    return (
        <div className="w-full py-[6.25rem]">
            <div className="max-w-[26.5rem] mx-auto">
                <div
                    className="bg-white p-3 md:p-8 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)] rounded border border-solid border-[#E4E7E9]">
                    {children}
                </div>
            </div>
        </div>
    )
}