import {UserDetail} from "@/components/page_modules/user-detail";

type Props = {
    params: { id: string };
}
export default function Page(props:Props) {
    const {params} = props;

    return <UserDetail userId={params.id}/>
}