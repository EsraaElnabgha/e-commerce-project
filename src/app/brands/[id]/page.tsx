import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBrandDetails } from "@/Apis/brands.api";

export default async function BrandDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const brand = await getBrandDetails(id);

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link
          href="/brands"
          className="hover:text-green-600 transition-colors"
        >
          Brands
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">{brand.name}</span>
      </nav>

      {/* Brand Detail Card */}
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
        {/* Brand Image */}
        <div className="bg-gray-50 flex items-center justify-center p-12">
          <Image
            src={brand.image}
            alt={brand.name}
            width={300}
            height={300}
            className="object-contain w-64 h-64"
          />
        </div>

        {/* Brand Info */}
        <div className="border-t border-gray-100 p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{brand.name}</h1>
          <p className="text-gray-500 text-sm">
            Slug: <span className="text-gray-700">{brand.slug}</span>
          </p>

          <Link
            href="/brands"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            ← Back to all brands
          </Link>
        </div>
      </div>
    </div>
  );
}
