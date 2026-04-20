import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    id: string;
    iat?: number;
    exp?: number;
}

export const NextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password"
                }
            },
            authorize: async (credentials) => {
                const data = await fetch(`${process.env.API}auth/signin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                })
                const result = await data.json()
                console.log("Auth API status:", data.status)
                console.log("Auth API response:", JSON.stringify(result))
                if (!data.ok) {
                    throw new Error(result?.message || "Invalid credentials")
                }
                const { email, name } = result.user
                const tokenData = jwtDecode<DecodedToken>(result.token)
                return {
                    id: tokenData.id,
                    email,
                    name,
                    token: result.token
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.token = user.token
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.name = token.name as string
            }
            return session
        }

    },
    pages: {
        signIn: "/login",
    }
}
