import {UserShow} from "@/components/page_modules/shared/components/userShow";
import {UserContent} from "@/components/page_modules/shared/components/userContent";
import {getUser} from "@/components/page_modules/user-detail/data/user-detail.lib";

type Props= {
    userId:string;
}
export async function UserDetailContainer(props:Props) {
    const {userId} = props;
    const data = await getUser(userId);

    return (
        <div className="w-full">
            <div className="w-full">
                <UserShow image={data?.user.img} name={data?.user.name || ""} surname={data?.user.surname || ""} isProfile={false}/>
            </div>
            <div className="w-full">
                <UserContent
                    about={data?.user.about || ""}
                    answerCounts={data?.user.answers.length || 0}
                    questionCounts={data?.user.questions.length || 0}
                    answers={data?.user.answers.length > 0 ? data.user.answers : []}
                    questions={data?.user.questions.length > 0 ? data.user.questions : []}
                />
            </div>
        </div>
    )
}