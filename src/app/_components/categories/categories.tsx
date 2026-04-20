import React from 'react'
import { getCategories } from '@/Apis/categories.api'
import Image from 'next/image'
import { CategoryInterface } from '@/Apis/categories.api'
import Link from 'next/link';

export default async function Categories() {
    const categories = await getCategories();
    return (
        <div className='grid text-center grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4'>
            {categories.map((category) => (
                <CatItem key={category._id} category={category} />
            ))}
        </div>
    )
}

function CatItem({ category }: { category: CategoryInterface }) {
    return (
        <Link href={`/categories/${category._id}`}>
            <div className='cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
                <Image className='mx-auto rounded-full object-cover size-25' width={100} height={100} src={category.image} alt={category.name} />
                <p className='text-center text-sm font-semibold mt-3 text-gray-700 hover:text-green-600 transition-colors'>{category.name}</p>
            </div>
        </Link>
    )
}
