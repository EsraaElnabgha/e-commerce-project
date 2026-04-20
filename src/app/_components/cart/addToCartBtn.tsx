'use client'

import { addToCart } from "./addToCart.action"
import { toast } from "sonner"

interface AddToCartBtnProps {
    productId: string
    variant?: 'icon' | 'full'
}

async function handleAddToCart(productId: string) {
    const result = await addToCart(productId)
    if (result?.status === "success") {
        toast.success("Added to cart successfully! 🛒")
    } else if (result?.error) {
        toast.error(result.error)
    } else {
        toast.error(result?.message || "Failed to add to cart")
    }
}

export default function AddToCartBtn({ productId, variant = 'icon' }: AddToCartBtnProps) {
    if (variant === 'icon') {
        return (
            <button
                onClick={() => handleAddToCart(productId)}
                className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 active:scale-90 text-white flex items-center justify-center text-xl font-light transition-all duration-200 cursor-pointer flex-shrink-0"
                aria-label="Add to cart"
            >
                +
            </button>
        )
    }

    return (
        <button
            onClick={() => handleAddToCart(productId)}
            className="w-1/2 h-8 rounded-md bg-green-500 hover:bg-green-600 active:scale-95 text-white text-xl flex items-center justify-center transition-colors cursor-pointer"
        >
            <span className="text-xl font-light leading-none mr-2"> +</span>
            Add to Cart
        </button>
    )
}