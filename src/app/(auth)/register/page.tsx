import React from 'react'
import RegisterForm from './registerForm/RegisterForm'

export default function page() {
  return (
    <div className='flex min-h-[calc(100vh-80px)]'>
      {/* Left Side - Welcome & Features */}
      <div className='hidden md:flex w-1/2 bg-white border-r border-gray-200 flex-col justify-center px-16 py-12'>
        <h1 className='text-4xl font-bold mb-4'>
          Welcome to <span className='text-green-500'>FreshCart</span>
        </h1>
        <p className='text-gray-500 text-lg mb-10 leading-relaxed'>
          Your one-stop destination for fresh groceries and premium products. Create an account to unlock exclusive deals and a seamless shopping experience.
        </p>

        {/* Features */}
        <div className='space-y-6'>
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Fast Delivery"
            description="Get your orders delivered to your doorstep in record time."
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Secure Payments"
            description="Your transactions are protected with end-to-end encryption."
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            title="Premium Quality"
            description="We source only the finest and freshest products for you."
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            title="Customer Reviews"
            description="Trusted by thousands — rated 4.9/5 by our happy customers."
          />
        </div>

        {/* Review Section */}

        <div className='mt-10 p-5 bg-gray-50 rounded-xl border border-gray-100'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm'>S</div>
            <div>
              <p className='font-semibold text-sm text-gray-900'>Sarah Ahmed</p>
              <p className='text-xs text-gray-400'>Verified Customer</p>
            </div>
          </div>
          <div className='flex items-center gap-1 mb-2'>
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            ))}
          </div>
          <p className='text-gray-600 text-sm italic mb-3'>
            &quot;FreshCart has completely changed the way I shop for groceries. The quality is amazing and delivery is always on time!&quot;
          </p>          
        </div>
      </div>

      {/* Right Side - Form */}
      <div className='flex-1 flex items-center justify-center py-10 px-6'>
        <div className='w-full max-w-lg'>
          <h2 className='text-2xl font-bold mb-2 text-center'>Create Your Account</h2>
          <p className='text-center mb-6 text-gray-500'>Join us and enjoy exclusive benefits</p>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className='flex items-start gap-4'>
      <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500'>
        {icon}
      </div>
      <div>
        <h3 className='font-semibold text-lg text-gray-900'>{title}</h3>
        <p className='text-gray-500 text-sm'>{description}</p>
      </div>
    </div>
  )
}
