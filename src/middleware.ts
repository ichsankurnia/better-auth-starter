import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getSessionCookie } from "better-auth/cookies";

// export async function middleware(request: NextRequest) {
//     const sessionCookie = getSessionCookie(request);

//     // THIS IS NOT SECURE!
//     // This is the recommended approach to optimistically redirect users
//     // We recommend handling auth checks in each page/route
//     console.log({ sessionCookie })
//     if (!sessionCookie) {
//         return NextResponse.redirect(new URL("/", request.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/dashboard"], // Specify the routes the middleware applies to
// };

export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    runtime: "nodejs",
    matcher: ["/dashboard"], // Apply middleware to specific routes
};