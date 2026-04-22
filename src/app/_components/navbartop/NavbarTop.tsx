"use client";

import Link from 'next/link';
import { FaTruck, FaGift, FaPhone, FaEnvelope, FaUser, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { useSession, signOut } from "next-auth/react";

export default function NavbarTop() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden lg:block text-sm border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center gap-8 text-gray-600">
            <span className="flex items-center gap-2">
              <FaTruck className="text-green-600 text-sm" />
              <span className="text-[13px]">Free Shipping on Orders over 500 EGP</span>
            </span>
            <span className="flex items-center gap-2">
              <FaGift className="text-green-600 text-sm" />
              <span className="text-[13px]">New Arrivals Daily</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 text-gray-500">
              <a href="tel:+18001234567" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <FaPhone className="text-sm" />
                <span className="text-[13px] font-medium">+201012345678</span>
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <FaEnvelope className="text-sm" />
                <span className="text-[13px] font-medium">[EMAIL_ADDRESS]</span>
              </a>
            </div>
            <span className="w-px h-4 bg-gray-200 mx-2"></span>
            <div className="flex items-center gap-5">
              {status === "authenticated" && session ? (
                <>
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <FaUser className="text-sm" />
                    <span className="text-[13px]">Hello, {session.user?.name}</span>
                  </span>
                  <button onClick={() => signOut()} className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-medium cursor-pointer">
                    <FaSignOutAlt className="text-sm" />
                    <span className="text-[13px]">Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-medium" href="/login">
                    <FaUser className="text-sm" />
                    <span className="text-[13px]">Sign In</span>
                  </Link>
                  <Link className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors font-medium" href="/register">
                    <FaUserPlus className="text-sm" />
                    <span className="text-[13px]">Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
