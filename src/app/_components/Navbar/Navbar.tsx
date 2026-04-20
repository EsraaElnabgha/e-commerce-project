"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  Headset, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu,
  X
} from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import logo from "../../../assets/freshcart-logo.49f1b44d.svg";

const categories = [
  { title: "All Categories", href: "/categories" },
  { title: "Electronics", href: "/category/Electronics" },
  { title: "Woman's Fashion", href: "/category/Women's Fashion" },
  { title: "Man's Fashion", href: "/category/Men's Fashion" },
  { title: "Beauty & Health", href: "/category/Beauty & Health"},
];

export function NavigationMenuDemo({ cartCount = 0, wishlistCount = 0 }: { cartCount?: number, wishlistCount?: number }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between xl:justify-start gap-4 xl:gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="FreshCart Logo" width={160} height={40} priority />
        </Link>

        {/* Search Bar - Desktop */}
        <div className="flex-grow max-w-xl relative hidden lg:block">
          <Input 
            type="text" 
            placeholder="Search for products, brands and more." 
            className="w-full pl-4 pr-12 py-5 rounded-2xl border-gray-200 focus:ring-green-500 focus:border-green-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 p-2 rounded-2xl text-white hover:bg-green-700 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <NavigationMenu className="hidden xl:block">
          <NavigationMenuList className="gap-2">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={`${navigationMenuTriggerStyle()} text-gray-700 font-medium hover:text-green-600`}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/shop" className={`${navigationMenuTriggerStyle()} text-gray-700 font-medium hover:text-green-600`}>
                  Shop
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Categories */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 font-medium hover:text-green-600">
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2 w-[200px] p-4">
                  {categories.map((category) => (
                    <ListItem
                      key={category.title}
                      title={category.title}
                      href={category.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Brands */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/brands" className={`${navigationMenuTriggerStyle()} text-gray-700 font-medium hover:text-green-600`}>
                  Brands
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        

        {/* Right Actions */}
        <div className="flex items-center gap-4 xl:gap-6 ml-auto">
          {/* Support - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <Headset size={20} className="text-green-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 leading-tight">Support</span>
              <span className="text-sm font-bold text-gray-800 leading-tight">24/7 Help</span>
            </div>
          </div>

         

          {/* Sign In Button / User Name - Desktop */}
          {status === "authenticated" && session ? (
            <div className="hidden sm:flex items-center gap-4">
              <Link href="/account" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <User size={16} />
                </div>
                
              </Link>
              
            </div>
          ) : (
            <Button asChild className="hidden sm:flex bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-5 font-semibold text-sm gap-2">
              <Link href="/login">
                <User size={18} />
                Sign In
              </Link>
            </Button>
          )}
           {/* Icons */}
          <div className="flex items-center gap-4 xl:gap-6 mr-4">
            <Link href="/wishlist" className="text-gray-700 hover:text-red-500 transition-colors relative flex items-center justify-center">
              <Heart size={22} className="relative z-10" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm z-20">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-green-600 transition-colors relative flex items-center justify-center">
              <ShoppingCart size={22} className="relative z-10" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-green-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm z-20">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden bg-green-600 rounded-full p-2 text-white hover:bg-green-700 transition-colors"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Sidebar) */}
      <div 
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] sm:w-[60%] lg:w-[40%] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
        >
          {/* Header of Sidebar */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src={logo} alt="FreshCart Logo" width={140} height={35} priority />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Search Bar - Mobile */}
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-4 pr-12 py-6 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 p-2 rounded-2xl text-white">
                <Search size={20} />
              </button>
            </div>

            {/* Navigation Links - Mobile */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Menu</p>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Home</Link>
              <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Shop</Link>
              <Link href="/categories" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Categories</Link>
              <Link href="/brands" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Brands</Link>
            </div>

            {/* Account & Wishlist */}
            <div className="flex flex-col gap-1 pt-2 border-t">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2 mt-4">Account</p>
              {status === "authenticated" && (
                <Link href="/account" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <User size={18} className="text-green-600" /> 
                  </div>
                  <span>My Account</span>
                </Link>
              )}
              <Link href="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Heart size={18} className="text-red-600" /> 
                  </div>
                  <span>Wishlist</span>
                </div>
                {wishlistCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <ShoppingCart size={18} className="text-green-600" /> 
                  </div>
                  <span>Shopping Cart</span>
                </div>
                {cartCount > 0 && (
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Sign In/Out Buttons */}
            <div className="pt-6 flex gap-3">
              {status === "authenticated" && session ? (
                <>
                  <div className="w-1/2 flex items-center justify-center font-bold text-gray-800 border-2 border-transparent rounded-2xl py-7">
                    Hello, {session.user?.name}
                  </div>
                  <Button onClick={() => { signOut(); setIsMenuOpen(false); }} variant="outline" className="w-1/2 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-2xl py-7 font-bold text-base cursor-pointer">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild onClick={() => setIsMenuOpen(false)} className="w-1/2 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-7 font-bold text-base gap-2 shadow-sm shadow-green-200">
                    <Link href="/login">
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild variant="outline" onClick={() => setIsMenuOpen(false)} className="w-1/2 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-2xl py-7 font-bold text-base">
                    <Link href="/register">
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Support Info */}
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Headset size={24} className="text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Need Help?</span>
                <span className="text-sm font-bold text-gray-800">24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ListItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
