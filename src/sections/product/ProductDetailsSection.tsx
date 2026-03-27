"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import { useCart } from "@/features/cart/CartContext";
import { useWishlist } from "@/features/wishlist/WishlistContext";
import { useState } from "react";

type Product = {
  id: string;
  title: string;
  category: string[];
  price: number;
  discountPrice: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductDetailsSection({ product }: Props) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [added, setAdded] = useState(false);

  return (
    <section className="bg-white py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-[20px] bg-[#f3ebe5]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">

            {/* CATEGORY */}
            <p className="text-sm uppercase tracking-wide text-[#9a7b63]">
              {product.category.join(", ")}
            </p>

            {/* TITLE */}
            <h1 className="mt-3 text-2xl font-semibold text-[#1f1f1f]">
              {product.title}
            </h1>

            {/* PRICE */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xl font-semibold text-[#7a2e2e]">
                ₹{product.discountPrice}
              </span>
              <span className="text-sm line-through text-[#888]">
                ₹{product.price}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm text-[#555]">
              Premium quality outfit designed for modern occasions.
              Elegant, comfortable, and crafted with fine materials.
            </p>

            {/* SIZE OPTIONS */}
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Select Size</p>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="rounded-md border px-4 py-2 text-sm hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* TOAST MESSAGE */}
            {added && (
              <div className="fixed top-6 right-6 z-50 rounded-md bg-black px-4 py-2 text-sm text-white shadow-lg">
                Added to cart
              </div>
            )}

            {/* ADD TO CART */}
            <button
              onClick={() => {
                addToCart(product);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
              className="mt-8 rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-[#333]"
            >
              Add to Cart
            </button>

            {/* WISHLIST TOGGLE */}
            <button
              onClick={() => toggleWishlist(product)}
              className="mt-4 rounded-md border px-6 py-3 text-sm"
            >
              {isInWishlist(product.id)
                ? "❤️ Remove from Wishlist"
                : "🤍 Add to Wishlist"}
            </button>

          </div>

        </div>
      </Container>
    </section>
  );
}