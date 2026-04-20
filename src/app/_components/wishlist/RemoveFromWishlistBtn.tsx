"use client"

import { useState } from "react"
import { removeFromWishlist } from "./wishlist.actions"
import { toast } from "sonner"
import { Trash2, Loader2 } from "lucide-react"

interface RemoveFromWishlistBtnProps {
    productId: string
}

export default function RemoveFromWishlistBtn({ productId }: RemoveFromWishlistBtnProps) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleRemove() {
        setIsLoading(true)
        const result = await removeFromWishlist(productId)
        setIsLoading(false)

        if (result?.status === "success") {
            toast.success("Removed from wishlist 🗑️")
        } else if (result?.error) {
            toast.error(result.error)
        } else {
            toast.error(result?.message || "Failed to remove from wishlist")
        }
    }

    return (
        <button
            onClick={handleRemove}
            disabled={isLoading}
            className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-500 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Remove from wishlist"
        >
            {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
            ) : (
                <Trash2 size={18} />
            )}
        </button>
    )
}
