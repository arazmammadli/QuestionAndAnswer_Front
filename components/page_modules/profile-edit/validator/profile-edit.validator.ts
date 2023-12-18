import {ValidatorType} from "@/global/types/validatorType";
import {IProfileEdit} from "@/components/page_modules/profile-edit/data/profile-edit.type";

export function profileEditValidator({cb,form,notify}:ValidatorType<IProfileEdit>) {
    if(
        !form.name
    ) {
        return notify("Do not leave the name box empty","error")
    }

    if(
        !form.surname
    ) {
        return notify("Do not leave the surname box empty","error")
    }

    if(form.name.length < 3) {
        return notify("The length of the name should be at least 3.","error")
    }

    if(form.surname.length < 4) {
        return notify("The length of the surname should be at least 4.","error")
    }

    if(form.about && form.about.length < 30) {
        return notify("The length of the About column must be at least 30","error");
    }

    cb();
}