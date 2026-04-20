"use server"

import { getToken } from "@/utilities/getToken"
import { revalidatePath } from "next/cache"

export async function addToWishlist(productId: string) {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in to add items to your wishlist" }
    }
    const data = await fetch(`${process.env.API}wishlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
        body: JSON.stringify({ productId })
    })
    const result = await data.json()
    revalidatePath("/", "layout")
    return result
}

export async function removeFromWishlist(productId: string) {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in to remove items from your wishlist" }
    }
    const data = await fetch(`${process.env.API}wishlist/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
    })
    const result = await data.json()
    revalidatePath("/", "layout")
    return result
}
