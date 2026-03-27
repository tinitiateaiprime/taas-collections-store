"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/features/wishlist/WishlistContext";

type Product = {
  id: string;
  title: string;
  price: number;
  discountPrice: number;
  image: string;
  isNew?: boolean;
};

type Props = {
  product: Product;
};

export default function ListingProductCard({ product }: Props) {
  const { toggleWishlist, isInWishlist } = useWishlist(); // ✅ FIX

  const discountPercent = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );

  return (
    <article className="group text-sm relative">

      {/* ❤️ WISHLIST BUTTON (OUTSIDE LINK) */}
      <button
        onClick={(e) => {
          e.preventDefault(); // ✅ STOP navigation
          toggleWishlist(product);
        }}
        className="absolute top-3 right-3 z-20 text-xl"
      >
        {isInWishlist(product.id) ? "❤️" : "🤍"}
      </button>

      {/* LINK */}
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-[16px] bg-[#f3ebe5]">
          
          {/* IMAGE */}
          <div className="relative h-[300px] w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* DISCOUNT BADGE */}
          <span className="absolute left-2 top-2 rounded bg-[#2e7d32] px-2 py-1 text-xs font-medium text-white">
            {discountPercent}% OFF
          </span>

          {/* NEW BADGE */}
          {product.isNew && (
            <span className="absolute right-2 top-2 rounded bg-black px-2 py-1 text-xs text-white">
              New
            </span>
          )}

        </div>

        {/* TEXT */}
        <div className="pt-3">
          <h3 className="line-clamp-2 text-[14px] font-medium text-[#1f1f1f]">
            {product.title}
          </h3>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-[15px] font-semibold text-[#7a2e2e]">
              ₹{product.discountPrice}
            </span>
            <span className="text-xs text-gray-500 line-through">
              ₹{product.price}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}