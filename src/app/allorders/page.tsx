import { getUserOrders, Order, OrderItem } from "@/Apis/orders.api"
import Image from "next/image"
import Link from "next/link"
import {
    Package,
    CreditCard,
    Banknote,
    CheckCircle2,
    Clock,
    Truck,
    PackageOpen,
    ArrowLeft,
} from "lucide-react"

export const metadata = {
    title: "My Orders | FreshCart",
    description: "View your order history at FreshCart",
}

export default async function AllOrdersPage() {
    const orders = await getUserOrders()

    if (orders.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                    <PackageOpen size={48} className="text-gray-300" />
                </div>
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                    No orders yet
                </h2>
                <p className="text-gray-400 mb-8 max-w-sm">
                    You haven&apos;t placed any orders yet. Start shopping and your orders will appear here!
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                >
                    <ArrowLeft size={18} />
                    Start Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                    <Package size={22} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
                    <p className="text-sm text-gray-400">
                        {orders.length} {orders.length === 1 ? "order" : "orders"} placed
                    </p>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-6">
                {orders.map((order) => (
                    <OrderCard key={order._id} order={order} />
                ))}
            </div>
        </div>
    )
}

function OrderCard({ order }: { order: Order }) {
    const date = new Date(order.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Order Header */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="text-sm">
                        <span className="text-gray-400">Order </span>
                        <span className="font-mono font-semibold text-gray-700">
                            #{order._id.slice(-8).toUpperCase()}
                        </span>
                    </div>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>

                <div className="flex items-center gap-3">
                    {/* Payment Method */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                        {order.paymentMethodType === "card" ? (
                            <CreditCard size={13} />
                        ) : (
                            <Banknote size={13} />
                        )}
                        {order.paymentMethodType === "card" ? "Card" : "Cash"}
                    </span>

                    {/* Payment Status */}
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            order.isPaid
                                ? "bg-green-50 text-green-600"
                                : "bg-amber-50 text-amber-600"
                        }`}
                    >
                        {order.isPaid ? <CheckCircle2 size={13} /> : <Clock size={13} />}
                        {order.isPaid ? "Paid" : "Pending"}
                    </span>

                    {/* Delivery Status */}
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            order.isDelivered
                                ? "bg-green-50 text-green-600"
                                : "bg-gray-100 text-gray-500"
                        }`}
                    >
                        {order.isDelivered ? (
                            <CheckCircle2 size={13} />
                        ) : (
                            <Truck size={13} />
                        )}
                        {order.isDelivered ? "Delivered" : "In Transit"}
                    </span>
                </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
                <div className="space-y-4">
                    {order.cartItems.map((item) => (
                        <div key={item._id} className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.product.imageCover}
                                    alt={item.product.title}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow min-w-0">
                                <p className="text-sm font-medium text-gray-700 truncate">
                                    {item.product.title}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {item.product.brand?.name} · Qty: {item.count}
                                </p>
                            </div>
                            <span className="font-semibold text-sm text-gray-700 flex-shrink-0">
                                {item.price * item.count} EGP
                            </span>
                        </div>
                    ))}
                </div>

                {/* Order Total */}
                <div className="mt-4 pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="text-lg font-extrabold text-green-600">
                        {order.totalOrderPrice} EGP
                    </span>
                </div>
            </div>
        </div>
    )
}
