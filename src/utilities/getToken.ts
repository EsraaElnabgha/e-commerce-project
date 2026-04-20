import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getToken(): Promise<string | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get("next-auth.session-token")?.value
    if (!token) return null
    const decodedToken = await decode({ secret: process.env.NEXTAUTH_SECRET as string, token })
    const resultToken = (decodedToken?.token as string) || token
    return resultToken ?? null
}