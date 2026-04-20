"use server"

import { getToken } from "@/utilities/getToken"
import { redirect } from "next/navigation"

export async function checkoutOnline(cartId: string, formData: FormData): Promise<{ url?: string; error?: string }> {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in" }
    }

    const shippingAddress = {
        details: formData.get("details") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string,
    }

    const res = await fetch(
        `${process.env.API}orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
            body: JSON.stringify({ shippingAddress }),
        }
    )

    const result = await res.json()

    if (result.status === "success" && result.session?.url) {
        return { url: result.session.url }
    }

    return { error: result.message || "Failed to create checkout session" }
}

export async function checkoutCash(cartId: string, formData: FormData): Promise<{ error?: string }> {
    const token = await getToken()
    if (!token) {
        return { error: "You must be logged in" }
    }

    const shippingAddress = {
        details: formData.get("details") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string,
    }

    const res = await fetch(
        `${process.env.API}orders/${cartId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
            body: JSON.stringify({ shippingAddress }),
        }
    )

    const result = await res.json()

    if (result.status === "success") {
        redirect("/allorders")
    }

    return { error: result.message || "Failed to place order" }
}
