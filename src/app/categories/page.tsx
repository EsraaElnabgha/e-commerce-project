import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategories, CategoryInterface } from "@/Apis/categories.api";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-6 md:px-12 py-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Shop By <span className="text-green-600 underline">Categories</span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Browse through {categories.length} categories to find what you need
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: CategoryInterface }) {
  return (
    <Link
      href={`/categories/${category._id}`}
      className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-green-400 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          width={300}
          height={300}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <div className="border-t border-gray-100 px-3 py-3 text-center bg-white group-hover:bg-green-50 transition-colors duration-300">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 truncate">
          {category.name}
        </h2>
      </div>
    </Link>
  );
}
