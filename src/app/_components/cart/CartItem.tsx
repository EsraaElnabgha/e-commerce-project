"use client"

import { CartProduct } from "@/interfaces/cart.interface"
import Image from "next/image"
import { Minus, Plus, Trash2, Loader2 } from "lucide-react"
import { useState } from "react"
import { updateCartQuantity, removeFromCart } from "./cart.actions"
import { useRouter } from "next/navigation"

export default function CartItem({ item }: { item: CartProduct }) {
    const [isUpdating, setIsUpdating] = useState(false)
    const [isRemoving, setIsRemoving] = useState(false)
    const router = useRouter()

    async function handleUpdateQuantity(newCount: number) {
        if (newCount < 1) return
        setIsUpdating(true)
        try {
            await updateCartQuantity(item.product._id, newCount)
            router.refresh()
        } finally {
            setIsUpdating(false)
        }
    }

    async function handleRemove() {
        setIsRemoving(true)
        try {
            await removeFromCart(item.product._id)
            router.refresh()
        } finally {
            setIsRemoving(false)
        }
    }

    return (
        <div
            className={`group relative flex flex-col sm:flex-row items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                isRemoving ? "opacity-50 scale-[0.98]" : ""
            }`}
        >
            {/* Product Image */}
            <div className="relative w-28 h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Product Info */}
            <div className="flex-grow text-center sm:text-left min-w-0">
                <p className="text-xs font-medium text-green-600 uppercase tracking-wider mb-1">
                    {item.product.category?.name}
                </p>
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-snug mb-2">
                    {item.product.title}
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg font-bold text-green-600">
                        {item.price} EGP
                    </span>
                    {item.count > 1 && (
                        <span className="text-xs text-gray-400">
                            × {item.count} = {item.price * item.count} EGP
                        </span>
                    )}
                </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-1">
                <button
                    onClick={() => handleUpdateQuantity(item.count - 1)}
                    disabled={isUpdating || item.count <= 1}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Decrease quantity"
                >
                    <Minus size={14} />
                </button>

                <span className="w-12 text-center font-bold text-gray-800 text-lg relative">
                    {isUpdating ? (
                        <Loader2 size={18} className="animate-spin mx-auto text-green-500" />
                    ) : (
                        item.count
                    )}
                </span>

                <button
                    onClick={() => handleUpdateQuantity(item.count + 1)}
                    disabled={isUpdating}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-200 hover:text-green-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Increase quantity"
                >
                    <Plus size={14} />
                </button>
            </div>

            {/* Item Total & Remove */}
            <div className="flex flex-col items-center gap-2 min-w-[100px]">
                <span className="text-lg font-extrabold text-gray-900">
                    {item.price * item.count} EGP
                </span>
                <button
                    onClick={handleRemove}
                    disabled={isRemoving}
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-red-500 transition-colors cursor-pointer disabled:cursor-not-allowed"
                    aria-label="Remove item"
                >
                    {isRemoving ? (
                        <Loader2 size={14} className="animate-spin" />
                    ) : (
                        <Trash2 size={14} />
                    )}
                    Remove
                </button>
            </div>
        </div>
    )
}
