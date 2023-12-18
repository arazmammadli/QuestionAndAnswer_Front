import {NextRequest, NextResponse} from "next/server";
const protectedPaths = ["/profile","/profile/edit","/question/ask"];
export function middleware(req:NextRequest) {
    const pathname = req.nextUrl.pathname;

    const serializedAuthState = req.cookies.get('auth-storage');
    const parsedAuthObject = serializedAuthState ? JSON.parse(serializedAuthState.value) : null;
    const accessToken = parsedAuthObject?.state?.auth?.accessToken;
    const nextUrl = req.nextUrl.clone();

    if(protectedPaths.includes(pathname)) {
        if(!accessToken) {
            nextUrl.pathname = "/signup";
            return NextResponse.redirect(nextUrl)
        }
        try {
            return NextResponse.next();
        } catch (err) {
            nextUrl.pathname = "/login";
            return NextResponse.redirect(nextUrl);
        }
    }

    return NextResponse.next();
}