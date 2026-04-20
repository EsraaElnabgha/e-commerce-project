"use client"

import { Trash2, Loader2 } from "lucide-react"
import { useState } from "react"
import { clearCart } from "./cart.actions"
import { useRouter } from "next/navigation"

export default function ClearCartBtn() {
    const [isClearing, setIsClearing] = useState(false)
    const router = useRouter()

    async function handleClear() {
        const confirmed = window.confirm("Are you sure you want to clear your entire cart?")
        if (!confirmed) return

        setIsClearing(true)
        try {
            await clearCart()
            router.refresh()
        } finally {
            setIsClearing(false)
        }
    }

    return (
        <button
            onClick={handleClear}
            disabled={isClearing}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 hover:border-red-300 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
            {isClearing ? (
                <Loader2 size={16} className="animate-spin" />
            ) : (
                <Trash2 size={16} />
            )}
            Clear Cart
        </button>
    )
}
