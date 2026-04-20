// 
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
interface applicationUser {
    id: string;
    name: string;
    email: string;
    token: string;
} 
declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        email: string;
        token: string;
    }
    interface Session {
        user: applicationUser;
        token: string;
    }
}
declare module "next-auth/jwt" {
    interface JWT extends applicationUser {}
}