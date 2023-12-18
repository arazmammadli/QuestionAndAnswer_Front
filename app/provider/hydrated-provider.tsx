import {QueryFns} from "@/global/types/query.type";
import {PropsWithChildren} from "react";
import getQueryClient from "@/shared/query-client";
import {dehydrate,HydrationBoundary} from "@tanstack/react-query";

type Props = {
    queryFns:QueryFns[];
    queryKeys:string[][];
} & PropsWithChildren;

export default async function HydratedProvider(props:Props) {
    const {queryKeys,queryFns,children} = props;
    const queryClient = getQueryClient();

    const queries = queryFns.map((query,index) => {
        const key = queryKeys[index];
        return {
            queryKey: key,
            queryFn: query.queryFn,
            queryType: query.prefetchType
        }
    });

    await Promise.all(
        queries.map(async (query) => {
            const {queryFn,queryType,queryKey} = query;

            if(queryType === "query") {
                // @ts-ignore
                await queryClient.prefetchQuery({queryKey:queryKey,queryFn:queryFn});
            } else if(queryType === "infiniteQuery") {
                // @ts-ignore
                await queryClient.prefetchInfiniteQuery({queryKey:queryKey,queryFn:queryFn});
            }
        })
    );

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            {children}
        </HydrationBoundary>
    )
}