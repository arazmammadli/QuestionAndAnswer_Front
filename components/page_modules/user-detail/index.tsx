import {UserDetailContainer} from "@/components/page_modules/user-detail/container/user-detail.container";

type Props = {
    userId:string;
}
export function UserDetail(props:Props) {
    const {userId} = props;
    return (
        <div className="w-full py-5">
            <div className="max-w-[1000px] mx-auto">
                <UserDetailContainer userId={userId} />
            </div>
        </div>
    )
}