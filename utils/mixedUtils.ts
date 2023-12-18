import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
export function cleanAfterLogout(cb: () => void) {

    useAuthStore.getState().clean()
    cb()
}

export function FormEntries<T>(target:EventTarget):T {
    return Object.fromEntries(new FormData(target as HTMLFormElement)) as T
}