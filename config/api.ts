import axios from "axios";
import {BASE_URL} from "@/config/base";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";

export const instance = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
});

instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
        return Promise.reject(error)
    }
);

instance.interceptors.request.use(
    (config) => {
        // @ts-ignore
        config.headers = getHeaders();

        return config;
    }
)

export function getHeaders() {
    const authState = useAuthStore.getState();

    const headers = Object.assign({},
        authState.auth.isLogin && authState.auth.accessToken ? {Authorization:`Bearer ${authState.auth.accessToken}`} : {}
    );

    return headers;
}