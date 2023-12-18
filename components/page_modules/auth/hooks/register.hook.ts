import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {authRequest} from "@/components/page_modules/auth/data/auth.request";

export function useRegister() {
    const authState = useAuthStore((state) => ({
        setAuth:state.setAuth
    }));

    const query = useMutation({
        mutationKey:["register"],
        mutationFn:authRequest.register,
        onSuccess:(data) => {
            if(data.success) {
                authState.setAuth({
                    accessToken:data.token,
                    isLogin:Boolean(data.token)
                });
            }
        }
    });

    return {
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}