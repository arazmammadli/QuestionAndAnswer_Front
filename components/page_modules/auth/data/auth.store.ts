import {cookiePersistStorage} from "@/shared/cookie";
import {create} from "zustand";

import {createJSONStorage,persist} from "zustand/middleware";
import {initialAuth} from "@/components/page_modules/auth/data/auth.repository";

export type AuthStoreTypes = {
    user:any,
    auth:{
        isLogin:boolean,
        accessToken:string | null
    }
};

type AuthStoreActions = {
    setUser:(user:AuthStoreTypes["user"]) => void;
    setAuth:(auth:AuthStoreTypes["auth"]) => void;
    clean:() => void;
}

export const useAuthStore = create(
    persist<AuthStoreTypes & AuthStoreActions>(
        (set,get) => ({
            user:null,
            auth:initialAuth,
            setUser:(user) => {
                set({user})
            },
            setAuth:(auth) => {
                set({auth})
            },
            clean:() => {
                set({
                    user:null,
                    auth:initialAuth
                })
            }
        }),
        {
            name:"auth-storage",
            storage:createJSONStorage(() => cookiePersistStorage)
        }
    )
)