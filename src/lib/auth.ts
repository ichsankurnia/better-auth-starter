import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db/drizzle"; // your drizzle instance
import { schema } from "@/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        github: {
            prompt: 'select_account',
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            /*  Google only issues a refresh token the first time a user consents to your app. If the user has already authorized your app, subsequent OAuth flows will only return an access token, not a refresh token.
                To always get a refresh token, you can set the accessType to offline, and prompt to select_account consent in the provider options. 
            */
            accessType: "offline",
            prompt: "select_account consent",
        },
    },
    plugins: [nextCookies()] // make sure this is the last plugin in the array
});