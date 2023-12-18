"use client";
import {menuData} from "@/components/layout/header/data/header.repository";
import {MenuItem} from "@/components/layout/header/desktop/components/menuItem";
import {useSelectedLayoutSegment} from "next/navigation";

export function Sidebar() {
    const segment = useSelectedLayoutSegment();

    return(
        <div className="w-full relative py-4 rounded">
            <div className="sticky w-full">
                <div className="flex flex-col gap-1">
                    {
                        menuData.map((item) => (
                            <MenuItem key={item.id} head={item.head} href={item.href} active={segment === item.segment}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}