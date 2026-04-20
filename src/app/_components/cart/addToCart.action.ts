"use server"

import { getToken } from "@/utilities/getToken"
import { revalidatePath } from "next/cache"

export async function addToCart(productId: string) {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in to add items to your cart" }
    }
    const data = await fetch(`${process.env.API}cart`, {
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