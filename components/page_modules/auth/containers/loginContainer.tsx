"use client";
import {Divider} from "@nextui-org/react";
import {Input} from "@/components/common/input";
import {Button} from "@/components/common/button";
import {useRouter} from "next/navigation";
import {useLogin} from "@/components/page_modules/auth/hooks/login.hook";
import {useNotify} from "@/global/hooks/notifyHook";
import {FormEvent, useEffect} from "react";
import {FormEntries} from "@/utils/mixedUtils";
import {IAuth} from "@/components/page_modules/auth/data/auth.type";
import {loginValidator} from "@/components/page_modules/auth/validators/login.validator";
import {Toast} from "@/components/common/toast";
export function LoginContainer() {
    // hooks
    const loginRequest = useLogin();
    const pushNotify = useNotify();

    const router = useRouter();

    // navigate after successfully request
    useEffect(() => {
        let timer:ReturnType<typeof setTimeout>;

        if(loginRequest.isSuccess) {
            timer = setTimeout(() => {
                router.push("/")
            },1000)
        }

        return () => clearTimeout(timer);
    },[loginRequest.isSuccess]);

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        const form = FormEntries<IAuth>(e.target);
        loginValidator({
            form,
            notify:pushNotify.notify,
            cb:() => {
                pushNotify.promiseNotify(loginRequest.mutateAsync(form),{
                    error:(data) => data?.response?.data?.message,
                    loadingText:"Login...",
                    successText:"Successfully!"
                })
            }
        });
    }
    return (
        <div className='w-full flex flex-col gap-6'>
            <div className='block'>
                <h1 className='text-xl font-semibold leading-5 text-[#191c1f] text-center mb-6'>
                    Sign in to your account
                </h1>
                <div className='w-full'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='w-full'>
                            <Input type='email' label='Email Address' id='email' name='email'
                                   placeholder=''/>
                        </div>
                        <div className='w-full'>
                            <Input type='password' label='Password' id='password' name='password'/>
                        </div>
                        <div className='w-full'>
                            <Button
                                type='submit'
                                className="w-full"
                            >
                <span className='text-sm font-bold leading-[48px] uppercase text-white'>
                  Login
                </span>
                            </Button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Divider content='Don’t have account'/>
                            <div className='w-full'>
                                <Button onClick={() => router.push("/signup")} className="bg-white border w-full border-solid border-[#1B75D0]">
                                    <span className='text-sm font-bold leading-[48px] text-[#1B75D0] uppercase'>
                                      Create account
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Toast/>
        </div>
    )
}