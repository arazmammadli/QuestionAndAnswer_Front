import {AuthContainer} from "@/components/container/auth.container";
import {LoginContainer} from "@/components/page_modules/auth/containers/loginContainer";

export function Login() {
    return (
        <AuthContainer>
            <LoginContainer/>
        </AuthContainer>
    )
}