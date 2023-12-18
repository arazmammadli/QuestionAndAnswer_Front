import {Button as NextButton,ButtonProps} from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

type Props = {
    children:React.ReactNode
} & ButtonProps;

export function Button(props:Props) {
    const {className,children,...rest} = props;

    const merged = clsx("flex justify-center h-14 items-center gap-1 bg-[#1B75D0] rounded-lg py-3 px-6", className)
    return (
        <NextButton {...rest} color="primary" className={merged} isLoading={false}>
            {children}
        </NextButton>
    )
}