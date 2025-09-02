"use client"

import { useState } from "react";
import { LoaderPinwheel, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Logout() {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleLogout = async () => {
        setIsLoading(true)
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/login"); // redirect to login page
                },
            },
        })
    }
    return (
        <Button variant='outline' className="w-full" onClick={handleLogout} disabled={isLoading}>
            Logout
            {isLoading ? <LoaderPinwheel className='size-4 animate-spin' /> : <LogOut className="size-4" />}
        </Button>
    );
}