import Link from "next/link";
import clsx from "clsx";

type Props = {
    head:string;
    href:string;
    active:boolean;
}
export function MenuItem(props:Props) {
    const {active,head,href} = props;

    return(
        <Link href={href} className={clsx("py-[6px] px-3 text-sm font-normal",{
            ["text-[#F48024]"]:active,
            ["text-[#636b74]"]:!active
        })}>
            <span>{head}</span>
        </Link>
    )
}