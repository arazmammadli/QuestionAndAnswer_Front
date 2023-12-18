import {AuthStoreTypes} from "@/components/page_modules/auth/data/auth.store";

export const registerFields = [
    {
        type: 'text',
        name: 'name',
        label: '*Name',
        placeholder: 'Name',
    },
    {
        type: 'text',
        name: 'surname',
        label: '*Surname',
        placeholder: 'Surname',
    },
    {
        type: 'email',
        name: 'email',
        label: '*Email Address',
        placeholder: 'Email Address',
    },
    {
        type: 'password',
        name: 'password',
        label: '*Password',
        placeholder: 'Password',
    }
];

export const initialAuth:AuthStoreTypes["auth"] = {
    accessToken:null,
    isLogin:false
};