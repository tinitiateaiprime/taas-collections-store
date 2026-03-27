"use client";

import Image from "next/image";
import { useWishlist } from "./WishlistContext";

type Props = {
  product: {
    id: string;
    title: string;
    price: number;
    discountPrice: number;
    image: string;
  };
};

export default function WishlistItemCard({ product }: Props) {
  const { removeFromWishlist } = useWishlist();

  return (
    <article className="group border rounded-xl p-4">
      
      {/* IMAGE */}
      <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-[#f3ebe5]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="mt-4">
        <h3 className="text-sm font-medium">{product.title}</h3>

        <p className="mt-1 text-sm text-[#7a2e2e]">
          ₹{product.discountPrice}
        </p>

        {/* REMOVE */}
        <button
          onClick={() => removeFromWishlist(product.id)}
          className="mt-3 text-xs text-red-500"
        >
          Remove
        </button>
      </div>

    </article>
  );
}