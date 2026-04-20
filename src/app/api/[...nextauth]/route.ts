import NextAuth from "next-auth";
import { NextAuthConfig } from '../../../Auth'

const handler = NextAuth(NextAuthConfig)

export { handler as GET, handler as POST }