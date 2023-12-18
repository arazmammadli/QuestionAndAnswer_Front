import {ValidatorType} from "@/global/types/validatorType";
import {IAuth} from "@/components/page_modules/auth/data/auth.type";

export function loginValidator({cb,form,notify}:ValidatorType<IAuth>) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(
        !form.email ||
        !form.password
    ) {
        return notify("Fill in all the boxes.","error");
    }

    if (!form.email.match(validRegex)) {
        return notify("Please enter the correct email.", "error");
    }

    if(form.password.length < 6) {
        return notify("The length of the password should be at least 6.","error");
    }

    cb();
}