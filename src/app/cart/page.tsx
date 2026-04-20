import { getCart } from "@/Apis/cart.api"
import CartItem from "../_components/cart/CartItem"
import ClearCartBtn from "../_components/cart/ClearCartBtn"
import { ShoppingCart, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "Shopping Cart | FreshCart",
    description: "Review and manage items in your FreshCart shopping cart",
}

export default async function CartPage() {
    const cartData = await getCart()

    const products = cartData?.data?.products ?? []
    const totalPrice = cartData?.data?.totalCartPrice ?? 0
    const numItems = cartData?.numOfCartItems ?? 0

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                        <ShoppingCart size={22} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
                        <p className="text-sm text-gray-400">
                            {numItems} {numItems === 1 ? "item" : "items"} in your cart
                        </p>
                    </div>
                </div>

                {products.length > 0 && <ClearCartBtn />}
            </div>

            {products.length === 0 ? (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-28 h-28 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                        <ShoppingBag size={48} className="text-gray-300" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-700 mb-2">
                        Your cart is empty
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-sm">
                        Looks like you haven&apos;t added any products yet. Start exploring and find something you love!
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                    >
                        <ArrowLeft size={18} />
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                /* Cart Content */
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="flex-grow flex flex-col gap-4">
                        {products.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-28 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            {/* Summary Header */}
                            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                                <h2 className="text-white font-bold text-lg">
                                    Order Summary
                                </h2>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Items breakdown */}
                                <div className="space-y-3">
                                    {products.map((item) => (
                                        <div
                                            key={item._id}
                                            className="flex justify-between text-sm"
                                        >
                                            <span className="text-gray-500 truncate max-w-[200px]">
                                                {item.product.title}{" "}
                                                <span className="text-gray-400">
                                                    ×{item.count}
                                                </span>
                                            </span>
                                            <span className="font-semibold text-gray-700 flex-shrink-0 ml-2">
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

                                {/* Checkout Button */}
                                <Link href="/checkout" className="block w-full mt-4 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base rounded-xl hover:from-green-600 hover:to-green-700 active:scale-[0.98] transition-all shadow-lg shadow-green-200 cursor-pointer text-center">
                                    Proceed to Checkout
                                </Link>

                                {/* Continue Shopping */}
                                <Link
                                    href="/"
                                    className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-green-600 font-medium transition-colors mt-2"
                                >
                                    <ArrowLeft size={14} />
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
