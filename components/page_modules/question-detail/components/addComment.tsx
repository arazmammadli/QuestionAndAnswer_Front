import {Textarea} from "@/components/common/textarea";
import {Button} from "@/components/common/button";

export function AddComment () {
    return (
        <div className="w-full">
            <form action="" className="flex flex-col gap-6">
                <div className="w-full">
                    <Textarea name="comments" id="comments"/>
                </div>
                <div className="w-full">
                    <Button type="submit" className="bg-[#1B75D0]">
                        <span className="text-sm font-bold leading-[48px] uppercase text-white">Add Comment</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}