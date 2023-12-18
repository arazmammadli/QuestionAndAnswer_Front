import {ValidatorType} from "@/global/types/validatorType";
import {IAskQuestion} from "@/components/page_modules/ask-question/data/ask-question.type";

export function askQuestionValidator({cb,notify,form}:ValidatorType<IAskQuestion>) {

    if(
        !form.title ||
        !form.problemDetail ||
        !form.tags
    ) {
        return notify("Please fill in all fields","error");
    }

    if(form.title.length < 7) {
        return notify("The length of the header cell must be at least 7","error");
    }

    if (form.problemDetail.length < 20) {
        return notify("The length of the problem detail cell must be at least 7","error");
    }

    if (form.problemDetail.length < 20) {
        return notify("The length of the problem views cell must be at least 7","error");
    }

    cb();
}