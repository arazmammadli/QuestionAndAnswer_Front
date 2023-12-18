import {AuthContainer} from "@/components/container/auth.container";
import {SignupContainer} from "@/components/page_modules/auth/containers/signupContainer";

export function Signup() {
    return(
        <AuthContainer>
            <SignupContainer/>
        </AuthContainer>
    )
}