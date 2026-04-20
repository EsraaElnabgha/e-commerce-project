import { getCart } from "@/Apis/cart.api"
import CheckoutForm from "../_components/cart/CheckoutForm"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, ArrowLeft, PackageOpen } from "lucide-react"

export const metadata = {
    title: "Checkout | FreshCart",
    description: "Complete your purchase at FreshCart",
}

export default async function CheckoutPage() {
    const cartData = await getCart()

    const products = cartData?.data?.products ?? []
    const totalPrice = cartData?.data?.totalCartPrice ?? 0
    const cartId = cartData?.cartId ?? ""
    const numItems = cartData?.numOfCartItems ?? 0

    if (products.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                    <PackageOpen size={48} className="text-gray-300" />
                </div>
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                    Nothing to checkout
                </h2>
                <p className="text-gray-400 mb-8 max-w-sm">
                    Your cart is empty. Add some products before proceeding to checkout.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                >
                    <ArrowLeft size={18} />
                    Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <Link
                    href="/cart"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                    <ArrowLeft size={18} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
                    <p className="text-sm text-gray-400">
                        {numItems} {numItems === 1 ? "item" : "items"} · {totalPrice} EGP
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left — Shipping & Payment Form */}
                <div className="flex-grow">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                        <h2 className="text-lg font-bold text-gray-800 mb-6">
                            Shipping & Payment
                        </h2>
                        <CheckoutForm cartId={cartId} />
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-6 flex items-center gap-3 text-gray-400 text-xs">
                        <ShieldCheck size={16} className="text-green-500" />
                        <span>Your payment information is secure and encrypted</span>
                    </div>
                </div>

                {/* Right — Order Summary */}
                <div className="lg:w-[400px] flex-shrink-0">
                    <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                            <h2 className="text-white font-bold text-lg">
                                Order Summary
                            </h2>
                        </div>

                        <div className="p-6 space-y-4">
                            {/* Items */}
                            <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1">
                                {products.map((item) => (
                                    <div
                                        key={item._id}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.product.imageCover}
                                                alt={item.product.title}
                                                width={56}
                                                height={56}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-sm font-medium text-gray-700 truncate">
                                                {item.product.title}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Qty: {item.count}
                                            </p>
                                        </div>
                                        <span className="font-semibold text-sm text-gray-700 flex-shrink-0">
                                            {item.price * item.count} EGP
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-dashed border-gray-200 pt-4" />

                            {/* Subtotal */}
                            <div className="flex justify-between">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-semibold text-gray-700">
                                    {totalPrice} EGP
                                </span>
                            </div>

                            {/* Shipping */}
                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping</span>
                                <span className="font-semibold text-green-600">Free</span>
                            </div>

                            <div className="border-t border-gray-200 pt-4" />

                            {/* Total */}
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-800">
                                    Total
                                </span>
                                <span className="text-2xl font-extrabold text-green-600">
                                    {totalPrice} EGP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
