import {ValidatorType} from "@/global/types/validatorType";
import {IRegister} from "@/components/page_modules/auth/data/auth.type";

export function registerValidator({cb,notify,form}:ValidatorType<IRegister>) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(
        !form.email ||
        !form.name ||
        !form.surname ||
        !form.password
    ) {
        return notify("Fill in all the boxes.","error");
    }

    if(form.name.length < 3) {
        return notify("The length of the name should be at least 3.","error")
    }

    if(form.surname.length < 4) {
        return notify("The length of the surname should be at least 4.","error")
    }

    if (!form.email.match(validRegex)) {
        return notify("Please enter the correct email.", "error");
    }

    if(form.password.length < 6) {
        return notify("The length of the password should be at least 6.","error");
    }

    cb();
}