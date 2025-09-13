import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID!,       // set in .env.local - not sure if it should all be in .env
        clientSecret: process.env.GITHUB_SECRET!
      }),
    ],
});