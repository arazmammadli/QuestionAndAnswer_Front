"use client";
import {useQuery} from "@tanstack/react-query";
import {authRequest} from "@/components/page_modules/auth/data/auth.request";

export function useGetProfile() {

    const query = useQuery({
        queryKey:["getProfile"],
        queryFn:authRequest.getProfile,
    });

    return {
        isLoading: query.isLoading,
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        query
    }
}