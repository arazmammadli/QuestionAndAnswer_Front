import {Spinner} from "@nextui-org/react";

export function Loading() {
    return (
        <div className='flex justify-center py-5'>
            <Spinner color="primary"/>
        </div>
    )
}