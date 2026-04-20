import React from "react"
import { getProducts } from "@/Apis/products.api"
import ProductItem from "../_components/productItem/productItem"

export const metadata = {
    title: "Shop | FreshCart",
    description: "Browse all fresh products and electronics on FreshCart",
}

export default async function ShopPage() {
    // Fetch all products using the existing API function
    const products = await getProducts()

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 min-h-[70vh]">
            <div className="mb-8 border-b border-gray-100 pb-4">
                <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                <p className="text-gray-500 mt-2 text-sm">
                    Showing all {products.length} {products.length === 1 ? 'product' : 'products'} available on FreshCart
                </p>
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.map((prod) => (
                        <ProductItem key={prod._id} prod={prod} />
                    ))}
                </div>
            ) : (
                <div className="py-20 flex flex-col items-center justify-center text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <h3 className="text-xl font-bold text-gray-700">No Products Available</h3>
                    <p className="text-gray-500 mt-2 max-w-sm mb-6">
                        We couldn't load any products right now. Please check back later.
                    </p>
                </div>
            )}
        </div>
    )
}
