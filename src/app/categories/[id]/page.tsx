import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategoryDetails } from "@/Apis/categories.api";
import { getProductsByCategory } from "@/Apis/products.api";
import ProductItem from "@/app/_components/productItem/productItem";
import { PackageOpen } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const category = await getCategoryDetails(id);
    return {
        title: `${category.name} | FreshCart Categories`,
    }
}

export default async function CategoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // Fetch category info and its products in parallel
  const [category, products] = await Promise.all([
    getCategoryDetails(id),
    getProductsByCategory(id)
  ]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 min-h-[70vh]">
      {/* Dynamic Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gray-900 mb-12 shadow-xl border border-gray-100">
        <div className="absolute inset-0 opacity-40">
            <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover blur-sm"
            />
        </div>
        <div className="relative z-10 px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center backdrop-blur-md bg-white/10 text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 p-2 backdrop-blur-lg mb-6 shadow-2xl border border-white/30">
                <Image 
                    src={category.image} 
                    alt={category.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover rounded-full" 
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                {category.name}
            </h1>
            <div className="flex items-center gap-3 text-white/90 font-medium">
                <Link href="/" className="hover:text-green-300 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/categories" className="hover:text-green-300 transition-colors">Categories</Link>
                <span>/</span>
                <span className="text-green-400">{category.name}</span>
            </div>
        </div>
      </div>

      {/* Title & Product Count */}
      <div className="mb-8 flex items-end justify-between border-b border-gray-100 pb-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-900">Explore {category.name}</h2>
            <p className="text-gray-500 mt-1">{products.length} {products.length === 1 ? 'Product' : 'Products'} available</p>
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((prod) => (
                <ProductItem key={prod._id} prod={prod} />
            ))}
        </div>
      ) : (
        <div className="py-20 flex flex-col items-center justify-center text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-gray-300 shadow-sm mb-4">
                <PackageOpen size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-700">No Products Found</h3>
            <p className="text-gray-500 mt-2 max-w-sm mb-6">
                We couldn't find any products in the {category.name} category right now.
            </p>
            <Link
                href="/categories"
                className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold shadow-lg shadow-green-200"
            >
                Browse Other Categories
            </Link>
        </div>
      )}
    </div>
  );
}
