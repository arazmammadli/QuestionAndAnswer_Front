import {useMutation} from "@tanstack/react-query";
import {profileEditRequest} from "@/components/page_modules/profile-edit/data/profile-edit.request";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";

export function useProfileEdit() {
    const authState = useAuthStore((state) => ({
        setUser:state.setUser
    }));

    const query = useMutation({
        mutationKey:["profileEdit"],
        mutationFn:profileEditRequest.profileEdit,
        onSuccess:(data) => {
            if(data.success) {
                authState.setUser(data.user);
            }
        }
    })

    return {
        isError: query.isError,
        isSuccess: query.isSuccess,
        data: query.data,
        mutateAsync: query.mutateAsync,
    }
}