import {PropsWithChildren} from "react";

export function Container({children}:PropsWithChildren) {
    return(
        <div className="container px-4 lg:p-0">
            {children}
        </div>
    )
}