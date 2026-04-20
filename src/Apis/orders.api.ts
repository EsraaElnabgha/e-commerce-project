import { getToken } from "@/utilities/getToken"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export interface Order {
    _id: string
    user: string
    cartItems: OrderItem[]
    totalOrderPrice: number
    paymentMethodType: "card" | "cash"
    isPaid: boolean
    isDelivered: boolean
    createdAt: string
    updatedAt: string
    shippingAddress?: {
        details: string
        phone: string
        city: string
    }
}

export interface OrderItem {
    count: number
    _id: string
    product: {
        _id: string
        title: string
        imageCover: string
        category: { _id: string; name: string }
        brand: { _id: string; name: string }
        ratingsAverage: number
        id: string
    }
    price: number
}

async function getUserId(): Promise<string | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get("next-auth.session-token")?.value
    if (!token) return null
    const decoded = await decode({ secret: process.env.NEXTAUTH_SECRET as string, token })
    return (decoded?.id as string) || null
}

export async function getUserOrders(): Promise<Order[]> {
    const userId = await getUserId()
    if (!userId) return []

    try {
        const res = await fetch(
            `${process.env.API}orders/user/${userId}`,
            { cache: "no-store" }
        )
        if (!res.ok) return []
        const data = await res.json()
        return data ?? []
    } catch {
        return []
    }
}
