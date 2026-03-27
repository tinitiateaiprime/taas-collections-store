"use client";

import Container from "@/components/common/Container";
import { useCart } from "@/features/cart/CartContext";
import { useWishlist } from "@/features/wishlist/WishlistContext";
import Link from'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Header() {
  const { cart } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState("");

const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
const { wishlist } = useWishlist();
const totalWishlist = wishlist.length;
  return (
    <header className="border-b border-[#e8e2dd] bg-white">
      <Container className="flex items-center gap-6 py-4">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-wide text-[#8b3d2f]">
        TaaSCollections
        </div>

        {/* SEARCH */}
        <div className="flex-1">
       <input
  type="text"
  placeholder="Search for products"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${query}`);
    }
  }}
  className="h-11 w-full rounded-full border border-[#e6dfda] px-5 outline-none"
/>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm text-[#2f2f2f]">
          <button type="button">Help</button>
          <Link href="/wishlist" className="relative">
  ❤️

  {totalWishlist > 0 && (
    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
      {totalWishlist}
    </span>
  )}
</Link>
          {/* CART ICON */}
          <Link href='/cart' className="relative cursor-pointer">
            <span>🛒</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button type="button">Account</button>
        </nav>
      </Container>
    </header>
  );
}