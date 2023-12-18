"use client";
import Link from "next/link";
import Image from "next/image"
import {menuData} from "@/components/layout/header/data/header.repository";
import {MenuItem} from "@/components/layout/header/desktop/components/menuItem";
import {useSelectedLayoutSegment} from "next/navigation";
import {useAuthStore} from "@/components/page_modules/auth/data/auth.store";
import {useCallback} from "react";
export function DesktopHeader() {
    const segment = useSelectedLayoutSegment();

    const authState = useAuthStore((state) => ({
        isLogin:state.auth.isLogin
    }));

    function getUrl() {
        return authState.isLogin ? "/profile" : "/login";
    }

    const url = useCallback(getUrl,[authState.isLogin]);

    return (
        <header className="w-full hidden md:block fixed z-[9999] bg-white top-0 border-b border-solid border-[#d6d9dc]">
            <div className="lg:max-w-[1264px] md:max-w-[700px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-3 items-center">
                        <div>
                            <Link href="/" className="block">
                                <Image src="/assets/images/logo.png" className="object-cover h-[60px]" width={200} height={60}
                                       alt="Logo"/>
                            </Link>
                        </div>
                        <div className="flex flex-row items-center gap-2.5">
                            {
                                menuData.map((item) => (
                                    <MenuItem key={item.id} head={item.head} href={item.href} active={segment === item.segment}/>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <Link href={url()} className="block">
                            <Image src="/assets/images/user.png" alt="Profile" width={40} height={40}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}