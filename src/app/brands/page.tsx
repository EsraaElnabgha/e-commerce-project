import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrands, BrandInterface } from "@/Apis/brands.api";

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <div className="container mx-auto px-6 md:px-12 py-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-green-600 underline">Brands</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore {brands.length} trusted brands we carry
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
}

function BrandCard({ brand }: { brand: BrandInterface }) {
  return (
    <Link href={`/brands/${brand._id}`} className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-green-400 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative w-full aspect-square bg-gray-50 flex items-center justify-center p-4">
        <Image
          src={brand.image}
          alt={brand.name}
          width={200}
          height={200}
          className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <div className="border-t border-gray-100 px-3 py-3 text-center bg-white group-hover:bg-green-50 transition-colors duration-300">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 truncate">
          {brand.name}
        </h2>
      </div>
    </Link>
  );
}
