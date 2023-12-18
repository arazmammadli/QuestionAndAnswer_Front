import {requestInstanceClient} from "@/config/request";
import {
    IAuth,
    IAuthResponse,
    IProfileResponse,
    IRegister,
    IRegisterResponse
} from "@/components/page_modules/auth/data/auth.type";

export const authRequest = {
    register:(data:IRegister) => {
        return requestInstanceClient.post<IRegisterResponse,IRegister>("/auth/register",data);
    },
    login:(data:IAuth) => {
        return requestInstanceClient.post<IAuthResponse,IAuth>("/auth/login",data);
    },
    getProfile: () => {
        return requestInstanceClient.get<IProfileResponse>("/user/profile")
    },
}