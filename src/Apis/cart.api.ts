import { CartResponse } from "@/interfaces/cart.interface"
import { getToken } from "@/utilities/getToken"

export async function getCart(): Promise<CartResponse | null> {
    const token = await getToken()
    if (!token) return null

    try {
        const res = await fetch(`${process.env.API}cart`, {
            headers: {
                token: token,
            },
            cache: "no-store",
        })

        if (!res.ok) return null

        const result: CartResponse = await res.json()
        return result
    } catch {
        return null
    }
}
