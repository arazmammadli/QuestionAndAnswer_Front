import {userDetailRequest} from "@/components/page_modules/user-detail/data/user-detail.request";

export async function getUser(userId:string) {
    const response = await userDetailRequest.getUser(userId);
    return response;
}