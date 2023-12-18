// @ts-ignore
import {ValidatorType} from "@/global/types/validatorType";
// @ts-ignore
import {IAddComment} from "@/components/page_modules/question-detail/data/question-detail.type";

export function addCommentValidator({form,notify,cb}:ValidatorType<IAddComment>) {

    if(
        !form.desc
    ) {
        notify("Do not leave the box blank","error");
    }

    if(form.desc.length < 10) {
        notify("The length of the comment field must be at least 10","error");
    }

    cb();
}