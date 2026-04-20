import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "./_components/Navbar/Navbar";
import NavbarTop from "./_components/navbartop/NavbarTop";
import { Toaster } from "@/components/ui/sonner"
import WrapperComponent from "./_components/wrapperComponent";
import AuthProvider from "./_components/AuthProvider";
import { getCart } from "@/Apis/cart.api";
import { getWishlist } from "@/Apis/wishlist.api";
import Footer from "./_components/Footer/Footer";

const exo = Exo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FreshCart",
  description: "FreshCart - Your online shopping destination",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch cart and wishlist counts securely on the server
  let cartCount = 0;
  let wishlistCount = 0;
  
  try {
    const [cartData, wishlistData] = await Promise.all([
      getCart(),
      getWishlist()
    ]);
    
    if (cartData?.numOfCartItems) {
        cartCount = cartData.numOfCartItems;
    }
    
    // Fix: wishlistData is a WishlistResponse object containing a count property
    if (wishlistData && typeof wishlistData.count === 'number') {
        wishlistCount = wishlistData.count;
    } else if (wishlistData?.data && Array.isArray(wishlistData.data)) {
        wishlistCount = wishlistData.data.length;
    }
  } catch (error) {
    console.error("Failed to fetch initial navbar counts:", error);
  }

  return (
    <html lang="en" className={exo.className}>
      <body className="min-h-full flex flex-col">
          <AuthProvider>
            <NavbarTop />
            <NavigationMenuDemo cartCount={cartCount} wishlistCount={wishlistCount} />
            <WrapperComponent>
              {children}
            </WrapperComponent>
            <Footer />
            <Toaster />
          </AuthProvider>
      </body>
    </html>
  );
}
