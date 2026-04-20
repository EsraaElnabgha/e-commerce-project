"use client"

import { useState } from "react"
import { addToWishlist } from "./wishlist.actions"
import { toast } from "sonner"
import { Heart, Loader2 } from "lucide-react"

interface AddToWishlistBtnProps {
    productId: string
    variant?: "full" | "icon"
}

export default function AddToWishlistBtn({ productId, variant = "full" }: AddToWishlistBtnProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleAdd() {
        setIsLoading(true)
        const result = await addToWishlist(productId)
        setIsLoading(false)

        if (result?.status === "success") {
            toast.success("Added to wishlist successfully! ❤️")
        } else if (result?.error) {
            toast.error(result.error)
        } else {
            toast.error(result?.message || "Failed to add to wishlist")
        }
    }

    if (variant === "icon") {
        return (
            <button
                onClick={(e) => {
                    e.preventDefault(); // Prevent navigating if wrapped in a link
                    handleAdd();
                }}
                disabled={isLoading}
                className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50 z-10"
                aria-label="Add to wishlist"
                title="Add to wishlist"
            >
                {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                ) : (
                    <Heart size={16} />
                )}
            </button>
        )
    }

    return (
        <button
            onClick={handleAdd}
            disabled={isLoading}
            className="w-full mt-3 h-10 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-red-50 hover:text-red-500 hover:border-red-200 text-sm font-medium flex items-center justify-center transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
        >
            {isLoading ? (
                <Loader2 size={18} className="animate-spin" />
            ) : (
                <>
                    <Heart size={18} className="mr-2 group-hover:fill-red-500 transition-colors" />
                    Add To Wishlist
                </>
            )}
        </button>
    )
}
