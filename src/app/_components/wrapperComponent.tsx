"use client"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export default function WrapperComponent({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (status === "unauthenticated" && pathname !== "/login" && pathname !== "/register") {
            router.push("/login")
        }
    }, [status, router, pathname])        
    
    if (status === "loading") {
        return null; 
    }

    return <>{children}</>
}
