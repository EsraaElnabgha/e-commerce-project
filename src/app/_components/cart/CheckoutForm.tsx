"use client"

import { useState } from "react"
import { checkoutOnline, checkoutCash } from "./checkout.action"
import { CreditCard, Banknote, Loader2 } from "lucide-react"

interface CheckoutFormProps {
    cartId: string
}

export default function CheckoutForm({ cartId }: CheckoutFormProps) {
    const [paymentMethod, setPaymentMethod] = useState<"online" | "cash">("online")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        setError("")

        try {
            const result: { url?: string; error?: string } = paymentMethod === "online"
                ? await checkoutOnline(cartId, formData)
                : await checkoutCash(cartId, formData)

            if (result?.url) {
                // Redirect to Stripe checkout page
                window.location.href = result.url
                return
            }

            if (result?.error) {
                setError(result.error)
                setIsLoading(false)
            }
        } catch {
            // redirect() from cash checkout throws — this is expected
        }
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            {/* Payment Method Selector */}
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("online")}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                            paymentMethod === "online"
                                ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                        }`}
                    >
                        <CreditCard size={20} />
                        <span className="font-semibold text-sm">Pay Online</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setPaymentMethod("cash")}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                            paymentMethod === "cash"
                                ? "border-green-500 bg-green-50 text-green-700 shadow-sm"
                                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                        }`}
                    >
                        <Banknote size={20} />
                        <span className="font-semibold text-sm">Cash on Delivery</span>
                    </button>
                </div>
            </div>

            {/* Shipping Details */}
            <div>
                <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                    Address Details
                </label>
                <input
                    id="details"
                    name="details"
                    type="text"
                    required
                    placeholder="Street address, apartment, floor..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                        City
                    </label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="e.g. Cairo"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. 01012345678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-sm"
                    />
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base rounded-xl hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all shadow-lg shadow-green-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isLoading ? (
                    <>
                        <Loader2 size={20} className="animate-spin" />
                        Processing...
                    </>
                ) : paymentMethod === "online" ? (
                    <>
                        <CreditCard size={20} />
                        Pay with Card
                    </>
                ) : (
                    <>
                        <Banknote size={20} />
                        Place Order (Cash)
                    </>
                )}
            </button>
        </form>
    )
}
