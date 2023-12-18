import {requestInstanceServer} from "@/config/request";
import {IProfileResponse} from "@/components/page_modules/auth/data/auth.type";

export const userDetailRequest = {
    getUser: (userId:string) => {
        return requestInstanceServer.get<IProfileResponse>(`/user/${userId}`,{
            cache:"no-store"
        });
    },
}