import {ValidatorType} from "@/global/types/validatorType";
import {IAddAnswer} from "@/components/page_modules/question-detail/data/question-detail.type";

export function addAnswerValidator({form,notify,cb}:ValidatorType<IAddAnswer>) {

    if(
        !form.answer
    ) {
        notify("Do not leave the answer box blank","error");
    }

    if(form.answer.length < 10) {
        notify("The length of the response field must be at least 10","error");
    }

    cb();
}