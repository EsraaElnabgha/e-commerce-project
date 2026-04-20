"use server"

import { getToken } from "@/utilities/getToken"
import { revalidatePath } from "next/cache"

export async function updateCartQuantity(productId: string, count: number) {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in" }
    }

    const res = await fetch(`${process.env.API}cart/${productId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
        body: JSON.stringify({ count }),
    })
    const result = await res.json()
    revalidatePath("/", "layout")
    return result
}

export async function removeFromCart(productId: string) {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in" }
    }

    const res = await fetch(`${process.env.API}cart/${productId}`, {
        method: "DELETE",
        headers: {
            token: token,
        },
    })
    const result = await res.json()
    revalidatePath("/", "layout")
    return result
}

export async function clearCart() {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in" }
    }

    const res = await fetch(`${process.env.API}cart`, {
        method: "DELETE",
        headers: {
            token: token,
        },
    })
    const result = await res.json()
    revalidatePath("/", "layout")
    return result
}
