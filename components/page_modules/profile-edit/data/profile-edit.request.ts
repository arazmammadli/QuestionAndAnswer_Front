import {IProfileEdit, IProfileEditResponse} from "@/components/page_modules/profile-edit/data/profile-edit.type";
import {requestInstanceClient} from "@/config/request";

export const profileEditRequest = {
    profileEdit: (data: IProfileEdit) => {
        return requestInstanceClient.put<IProfileEditResponse, IProfileEdit>("/user", data);
    },
}