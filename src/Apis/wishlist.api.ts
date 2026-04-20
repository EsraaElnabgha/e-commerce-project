import { getToken } from "@/utilities/getToken"
import { ProductInterface } from "@/interfaces/products.interface"

export interface WishlistResponse {
    status: string
    count: number
    data: ProductInterface[]
}

export async function getWishlist(): Promise<WishlistResponse | null> {
    const token = await getToken()
    if (!token) return null

    try {
        const res = await fetch(`${process.env.API}wishlist`, {
            headers: {
                token: token,
            },
            cache: "no-store",
        })

        if (!res.ok) return null

        const result: WishlistResponse = await res.json()
        return result
    } catch {
        return null
    }
}
