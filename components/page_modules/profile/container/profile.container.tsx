"use client";
import {UserShow} from "@/components/page_modules/shared/components/userShow";
import {UserStat} from "@/components/page_modules/shared/components/userStat";
import {useGetProfile} from "@/components/page_modules/auth/hooks/get-profile.hook";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {IUser} from "@/components/page_modules/auth/data/auth.type";
import clsx from "clsx";
import {useEffect} from "react";
import {UserContent} from "@/components/page_modules/shared/components/userContent";

export function ProfileContainer () {
    const {data,isSuccess} = useGetProfile();
    const userData = useAuthStore((state) => ({
        user:state.user,
        setUser:state.setUser
    }));

    const user = userData.user as IUser;

    useEffect(() => {
        if(isSuccess && data) {
            userData.setUser(data.user);
        }
    },[isSuccess,data])

    return (
        <div className="w-full">
            <div className="w-full">
                <UserShow image={user?.img} name={user?.name || ""} surname={user?.surname || ""} isProfile={true}/>
            </div>
            <div className="w-full">
                <UserContent
                    about={user?.about || ""}
                    answerCounts={user?.answers.length || 0}
                    questionCounts={user?.questions.length || 0}
                    answers={user?.answers.length > 0 ? user.answers : []}
                    questions={user?.questions.length > 0 ? user.questions : []}
                />
            </div>
        </div>
    )
}