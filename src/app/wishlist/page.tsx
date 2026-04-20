import { getWishlist } from "@/Apis/wishlist.api"
import Image from "next/image"
import Link from "next/link"
import { HeartOff, ArrowLeft, Heart } from "lucide-react"
import AddToCartBtn from "../_components/cart/addToCartBtn"
import RemoveFromWishlistBtn from "../_components/wishlist/RemoveFromWishlistBtn"

export const metadata = {
    title: "My Wishlist | FreshCart",
    description: "Your saved items on FreshCart",
}

export default async function WishlistPage() {
    const wishlistResponse = await getWishlist()
    const products = wishlistResponse?.data ?? []

    if (products.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 rounded-full bg-red-50 flex items-center justify-center mb-6">
                    <HeartOff size={48} className="text-red-300" />
                </div>
                <h2 className="text-xl font-bold text-gray-700 mb-2">
                    Your wishlist is empty
                </h2>
                <p className="text-gray-400 mb-8 max-w-sm">
                    You haven&apos;t added any products to your wishlist yet.
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                    <Heart size={22} className="text-white fill-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
                    <p className="text-sm text-gray-400">
                        {products.length} {products.length === 1 ? "item" : "items"} saved
                    </p>
                </div>
            </div>

            {/* Table View */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider">
                            <th className="p-4 font-semibold">Product</th>
                            <th className="p-4 font-semibold text-center">Category</th>
                            <th className="p-4 font-semibold text-center">Price</th>
                            <th className="p-4 font-semibold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <Link href={`/productdetails/${product._id}`} className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center p-2">
                                            <Image 
                                                src={product.imageCover} 
                                                alt={product.title} 
                                                width={80} 
                                                height={80} 
                                                className="object-contain w-full h-full group-hover:scale-105 transition-transform" 
                                            />
                                        </Link>
                                        <div className="flex flex-col">
                                            <Link href={`/productdetails/${product._id}`}>
                                                <p className="font-semibold text-gray-800 hover:text-green-600 line-clamp-2 max-w-sm">
                                                    {product.title}
                                                </p>
                                            </Link>
                                            <p className="text-xs text-gray-400 mt-1">{product.brand?.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-center">
                                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.category?.name}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex flex-col items-center justify-center">
                                        {product.priceAfterDiscount ? (
                                            <>
                                                <span className="text-sm line-through text-gray-400">{product.price} EGP</span>
                                                <span className="text-lg font-bold text-gray-900">{product.priceAfterDiscount} EGP</span>
                                            </>
                                        ) : (
                                            <span className="text-lg font-bold text-gray-900">{product.price} EGP</span>
                                        )}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Action buttons wrapper */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 flex items-center justify-center">
                                                <AddToCartBtn productId={product._id} variant="icon" />
                                            </div>
                                            <div className="w-[1px] h-6 bg-gray-200"></div>
                                            <RemoveFromWishlistBtn productId={product._id} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
