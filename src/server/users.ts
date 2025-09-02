"use server";

import { auth } from "@/lib/auth"

export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email: email,
                password: password,
            }
        })

        return {
            success: true, message: "Signed in"
        }
    } catch (error: any) {
        return {
            success: false, message: error.message || 'An unknown error occurred.'
        }
    }
}

export const signUp = async (email: string, password: string, name: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email: email,
                password: password,
                name: name
            }
        })
        return {
            success: true, message: "Signed up successfully."
        }
    } catch (error: any) {
        return {
            success: false, message: error.message || 'An unknown error occurred.'
        }
    }
}