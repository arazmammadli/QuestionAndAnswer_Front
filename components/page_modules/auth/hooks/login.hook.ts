import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {authRequest} from "@/components/page_modules/auth/data/auth.request";

export function useLogin() {
    const authState = useAuthStore((state) => ({
        setAuth:state.setAuth,
    }));

    const query = useMutation({
        mutationKey:["login"],
        mutationFn:authRequest.login,
        onSuccess:(data) => {
            authState.setAuth({
                accessToken:data.token,
                isLogin:Boolean(data.token)
            });
        }
    });

    return {
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}