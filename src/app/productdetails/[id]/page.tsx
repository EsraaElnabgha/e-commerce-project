import { getProductDetails } from '@/Apis/productdetails.api';
import Image from 'next/image';
import React from 'react'
import MySlider from '@/app/_components/slider/slider';
import AddToCartBtn from '../../_components/cart/addToCartBtn';
import AddToWishlistBtn from '../../_components/wishlist/AddToWishlistBtn';
export default async function page({ params }: {
  params: Promise<{
    id: string
  }>
}) {
  const id = (await (params)).id;
  const product = await getProductDetails(id);
  return (
    <div className='container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row gap-8'>
      <div className='md:w-1/3 max-w-full p-4 '>
        <Image src={product.imageCover} alt={product.title} width={200} height={200} className="w-1/2 block mx-auto mb-4 cursor-pointer" />
        <div className='flex flex-wrap gap-2 overflow-hidden'>
          {/* {product.images.map((img) => (
            <Image key={img} src={img} alt={product.title} width={50} height={50} className="w-16 h-16 object-cover rounded-md cursor-pointer border border-gray-200 hover:border-green-500 transition-colors" />
          ))} */}
          <MySlider slidesPerView={2} PageList={product.images} />
        </div>
      </div>
      <div className='md:w-2/3 w-full p-4 py-20 justify-start '>
        <div className='flex items-center gap-2 mb-4'>
          <p className="text-start text-green-800 bg-green-100 p-1 rounded-md hover:bg-green-200 text-sm ">
            {product.category.name}
          </p>
          <p className="text-start line-clamp-2 p-1 text-gray-500 text-sm bg-gray-100 rounded-md hover:text-gray-800 hover:bg-gray-100 rounded-md">{product.brand.name}</p>
        </div>

        <p className="text-start line-clamp-2 text-4xl font-bold py-2">{product.title}</p>

        <p className="text-start line-clamp-2 mb-10">{product.description}</p>
        {/* price */}
        <div className="flex items-center justify-between mt-2 my-10">
          <p>total price:</p>
          {product.priceAfterDiscount ? (
            <div className="flex items-center gap-2">
              <p className="text-green-500 font-blod">{product.priceAfterDiscount} EGP</p>
              <p className="line-through text-gray-400 text-sm">{product.price} EGP</p>
            </div>
          ) : (
            <p>{product.price} EGP</p>
          )}
        </div>
        <div className="btns flex gap-2">
          <AddToCartBtn productId={product._id} variant="full" />
          <button className="w-1/2 h-8 rounded-md bg-black hover:bg-black/80 text-white text-xl flex items-center justify-center transition-colors cursor-pointer">
            Buy Now
          </button>
        </div>    
        <div className="mt-3">
          <AddToWishlistBtn productId={product._id} />
        </div>


      </div>
    </div>
  )
}
