import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {Button} from "@/components/common/button";
import {cleanAfterLogout} from "@/utils/mixedUtils";

type Props = {
    isProfile:boolean;
    name:string;
    surname:string;
    image:string | undefined;
}

export function UserShow(props:Props) {
    const {isProfile,name,surname,image} = props;

    function signOut() {
        cleanAfterLogout(() => {
            window.location.replace('/login')
        });
    };

    return (
        <div className="w-full mb-5">
            <div className="relative w-full flex flex-row items-center">
                <div className={clsx("",{
                    ["p-2 bg-gray-300"]:!Boolean(image),
                })}>
                    <Image src={image !== undefined ? image : "/assets/images/profile.png"} alt="Profile Image" width={150} height={100}/>
                </div>
                <div className="p-2">
                    <div className="text-left">
                        <h1 className="text-3xl text-[#0C0D0E] font-semibold">{name + " " + surname}</h1>
                    </div>
                </div>

                {
                    isProfile ? <div className="absolute top-0 right-0">
                        <div className="flex flex-row gap-2 items-center">
                            <Link href="/profile/edit" className="bg-white rounded-md transition-colors duration-300 hover:bg-gray-100 py-2 px-3 border border-solid border-gray-200">
                                <span className="text-sm font-normal leading-5 text-[#191c1f]">Edit Profile</span>
                            </Link>
                            <Link href="/question/ask" className="bg-white rounded-md transition-colors duration-300 hover:bg-gray-100 py-2 px-3 border border-solid border-gray-200">
                                <span className="text-sm font-normal leading-5 text-[#191c1f]">Ask Question</span>
                            </Link>
                            <Button type="button" onClick={signOut} className="bg-white rounded-md transition-colors h-fit duration-300 hover:bg-gray-100 py-[8px_!important] px-3 border border-solid border-gray-200">
                                <span className="text-sm font-normal leading-5 text-[#191c1f]">Log out</span>
                            </Button>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}