"use client";
import Image from "next/image";
import {useState, ChangeEvent, useEffect, FormEvent} from "react";
import {Input} from "@/components/common/input";
import {Textarea} from "@/components/common/textarea";
import {Button} from "@/components/common/button";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {IUser} from "@/components/page_modules/auth/data/auth.type";
import {UserShow} from "@/components/page_modules/shared/components/userShow";
import {useProfileEdit} from "@/components/page_modules/profile-edit/hooks/profile-edit.hook";
import {useNotify} from "@/global/hooks/notifyHook";
import {FormEntries} from "@/utils/mixedUtils";
import {IProfileEdit} from "@/components/page_modules/profile-edit/data/profile-edit.type";
import {profileEditValidator} from "@/components/page_modules/profile-edit/validator/profile-edit.validator";
import {Toast} from "@/components/common/toast";

export function ProfileEditContainer () {
    // store
    const data = useAuthStore((state) => ({
        user:state.user
    }));
    const profile = data.user as IUser;

    // hooks
    const [userImg, setUserImg] = useState<File | string>("");
    const [file,setFile] = useState<string>(profile.img ? profile.img : "");

    const updateRequest = useProfileEdit();
    const pushNotify = useNotify();

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        const form = FormEntries<IProfileEdit>(e.target);
        console.log(form)
        if(file) {
            form.file = file
        }
        profileEditValidator({
            form,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(updateRequest.mutateAsync(form),{
                    error:(data) => data.response.data.message,
                    loadingText:"Updated...",
                    successText:"Successfully"
                })
            }
        })
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length === 1) {
            console.log(e.target.files)
            const img = e.target.files[0];
            if (img) {
                setUserImg(img);
            }
        }
    }

    useEffect(() => {
        if (userImg) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(reader.result as string);
            };
            reader.readAsDataURL(userImg as File);
        }
    }, [userImg]);

    return (
        <div className="w-full">
            <div className="w-full">
                <UserShow image={profile?.img} name={profile?.name || ""} surname={profile?.surname || ""} isProfile={true}/>
            </div>
            <div className="w-full mt-10">
                <div className="w-full text-left pb-2 border-b border-solid border-[#191c1f]">
                    <h1 className="text-4xl font-semibold text-[#191c1f]">Edit your profile</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start mt-4 gap-6">
                    <div className="md:flex-[0_0_11rem]">
                        <div className="relative w-full">
                            <Image src={file || "/assets/images/profile.png"} width="176" height="176" alt="Avatar"/>
                            <input type="file" onChange={handleChange} name="fileUpload" id="fileUpload"
                                   className='hidden'/>
                            <label htmlFor="fileUpload"
                                   className="block cursor-pointer absolute top-0 left-0 w-full h-full"></label>
                        </div>
                    </div>
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="block w-full">
                            <div className="flex flex-col gap-3">
                                <div className="">
                                    <Input label="Name" type="text" name="name" defaultValue={profile?.name || ""}/>
                                </div>
                                <div className="">
                                    <Input label="Surname" type="text" name="surname"
                                           defaultValue={profile?.surname || ""}/>
                                </div>
                                <div className="">
                                    <Textarea label="About" type="text" name="about"
                                              defaultValue={profile?.about || ""}/>
                                </div>
                                <div className="">
                                    <Button type="submit" className="bg-[#155CA2]">
                                        <span className="text-sm text-white leading-5 font-semibold">Edit Profile</span>
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Toast/>
        </div>
    )
}