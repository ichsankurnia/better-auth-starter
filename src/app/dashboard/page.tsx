import Logout from "@/components/logout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Image from "next/image";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return <div>Not authenticated</div>
    }

    // console.log(session)
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl"> You’re signed in!</CardTitle>
                        <CardDescription>
                            Authentication successful. You are logged in with the account below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center">
                            <div className="relative w-20 h-20 rounded-full">
                                <Image alt="avatar" src={session.user.image || '/chigiri.png'} fill sizes="75vw" className='object-cover rounded-full' />
                            </div>
                            <div className="text-center mb-5 mt-2">
                                <h1 className="font-bold text-base">{session.user.name}</h1>
                                <div className="text-muted-foreground text-sm">{session.user.email}</div>
                            </div>
                            <Logout />
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}