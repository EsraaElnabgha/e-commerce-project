import React from 'react'
import Image from 'next/image'
import LoginForm from './loginForm/loginForm'

export default function page() {
  return (
    <div className='flex min-h-[calc(100vh-80px)]'>
      {/* Left Side - Image & Info */}
      <div className='hidden md:flex w-1/2 bg-[#f0fdf4] flex-col items-center justify-center px-12 py-12'>
        <Image
          src="/shopping-illustration.png"
          alt="Shopping Illustration"
          width={450}
          height={450}
          className='object-contain mb-8'
        />
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Smarter with <span className='text-[#16A34A]'>FreshCart</span></h2>
        <p className='text-gray-500 text-center max-w-md mb-8'>
          Your trusted online grocery store — delivering fresh products right to your doorstep with unbeatable quality.
        </p>
        {/* Quick Stats */}
        <div className='flex gap-8'>
          <div className='text-center'>
            <p className='text-2xl font-bold text-[#16A34A]'>10K+</p>
            <p className='text-sm text-gray-500'>Products</p>
          </div>
          <div className='w-px bg-gray-300'></div>
          <div className='text-center'>
            <p className='text-2xl font-bold text-[#16A34A]'>50K+</p>
            <p className='text-sm text-gray-500'>Happy Customers</p>
          </div>
          <div className='w-px bg-gray-300'></div>
          <div className='text-center'>
            <p className='text-2xl font-bold text-[#16A34A]'>4.9</p>
            <p className='text-sm text-gray-500'>App Rating</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className='flex-1 flex items-center justify-center py-10 px-6 bg-gray-50'>
        <LoginForm />
      </div>
    </div>
  )
}
