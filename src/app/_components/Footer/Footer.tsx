import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal
} from "react-icons/fa";
import logo from "../../../assets/freshcart-logo.49f1b44d.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 py-12 pb-6 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8 xl:gap-12 mb-12">
          
          {/* Brand & Info Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white inline-block p-2 rounded-xl">
              <Image src={logo} alt="FreshCart Logo" width={140} height={40} className="w-auto h-8" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>
            
            <ul className="space-y-4 text-sm mt-6">
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                <a href="tel:+18001234567" className="hover:text-green-400 transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="text-green-500 flex-shrink-0" />
                <a href="mailto:support@freshcart.com" className="hover:text-green-400 transition-colors">support@freshcart.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500 flex-shrink-0 text-lg" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-base tracking-wide">Shop</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/brands" className="hover:text-white transition-colors">Brands</Link></li>
              <li><Link href="/category/Electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link href="/category/Men's Fashion" className="hover:text-white transition-colors">Men's Fashion</Link></li>
              <li><Link href="/category/Women's Fashion" className="hover:text-white transition-colors">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Account Column */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-base tracking-wide">Account</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/allorders" className="hover:text-white transition-colors">Order History</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Create Account</Link></li>
            </ul>
          </div>

          {/* Support column*/}
          
            <div className="space-y-5">
              <h3 className="text-white font-bold text-base tracking-wide">Support</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
              </ul>
            </div>

            {/* Legal column*/}
            <div className="space-y-5">
              <h3 className="text-white font-bold text-base tracking-wide">Legal</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><FaCcVisa size={22} className="text-slate-400" /> Visa</span>
            <span className="flex items-center gap-1"><FaCcMastercard size={22} className="text-slate-400" /> Mastercard</span>
            <span className="flex items-center gap-1"><FaCcPaypal size={22} className="text-slate-400" /> PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
