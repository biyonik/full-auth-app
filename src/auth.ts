import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google,
        GitHub
    ],
})