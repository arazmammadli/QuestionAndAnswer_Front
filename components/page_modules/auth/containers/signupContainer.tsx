"use client";
import {registerFields} from "@/components/page_modules/auth/data/auth.repository";
import {Input} from "@/components/common/input";
import {Button} from "@/components/common/button";
import {Toast} from "@/components/common/toast";
import {useRegister} from "@/components/page_modules/auth/hooks/register.hook";
import {useNotify} from "@/global/hooks/notifyHook";
import {useRouter} from "next/navigation";
import {FormEvent, useEffect} from "react";
import {FormEntries} from "@/utils/mixedUtils";
import {IRegister} from "@/components/page_modules/auth/data/auth.type";
import {registerValidator} from "@/components/page_modules/auth/validators/register.validator";

export function SignupContainer() {
    // hooks
    const registerRequest = useRegister();
    const pushNotify = useNotify();

    const router = useRouter();

    // navigate after successfully request
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if(registerRequest.isSuccess) {
            timer = setTimeout(() => {
                router.push("/");
              }, 1000);
        }

        return () => clearTimeout(timer);
    },[registerRequest.isSuccess]);

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        const form = FormEntries<IRegister>(e.target);
        registerValidator({
            form,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(registerRequest.mutateAsync(form),{
                    error:(data) => data?.response?.data?.message,
                    loadingText:"Registering...",
                    successText:"Successfully"
                })
            }
        })
    }
return (
    <div className='flex flex-col gap-6'>
        <div className='w-full'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {registerFields.map((field, index) => (
                    <div className='w-full' key={index}>
                        <Input
                            name={field.name}
                            id={field.name}
                            type={field.type as any}
                            label={field.label}
                            placeholder={field.placeholder}
                        />
                    </div>
                ))}
                <div className='w-full mt-2'>
                    <Button type='submit' className="w-full">
                      <span className='text-sm text-white font-bold leading-[48px] uppercase'>
                        Sign up
                      </span>
                    </Button>
                </div>
            </form>
        </div>

        <Toast/>
    </div>
)
}