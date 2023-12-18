export type QueryFns = {
    queryFn: () => Promise<any>;
    prefetchType: "query" | "infiniteQuery";
};