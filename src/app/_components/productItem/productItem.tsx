import { ProductInterface } from "@/interfaces/products.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartBtn from "../cart/addToCartBtn";
import AddToWishlistBtn from "../wishlist/AddToWishlistBtn";

export default function ProductItem({ prod }: { prod: ProductInterface }) {
  return (
    <div className="p-4 rounded-[10px] border border-gray-300 hover:shadow-lg hover:border-green-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer relative group">
      {/* Wishlist Button Absolute Top Right */}
      <div className="absolute top-3 right-3 z-10 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <AddToWishlistBtn productId={prod._id} variant="icon" />
      </div>

      <Link href={`/productdetails/${prod._id}`}>
        <Image
          src={prod.imageCover}
          alt={prod.title}
          width={300}
          height={300}
          className="w-1/2 block mx-auto"
        />
      </Link>
      
      <h5 className="text-center text-gray-400 text-sm font-light mt-2">
        {prod.category.name}
      </h5>
      <p className="text-center line-clamp-2">{prod.title}</p>
      {/* price */}
      <div className="flex items-center justify-between mt-2">
        {prod.priceAfterDiscount ? (
          <div className="flex items-center gap-2">
            <p className="text-green-500 font-blod">{prod.priceAfterDiscount} EGP</p>
            <p className="line-through text-gray-400 text-sm">{prod.price} EGP</p>
          </div>
        ) : (
          <p>{prod.price} EGP</p>
        )}
        <AddToCartBtn productId={prod._id} />
      </div>
    </div>
  );
}
