"use client";

import Container from "@/components/common/Container";
import { useWishlist } from "@/features/wishlist/WishlistContext";
import WishlistItemCard from "@/features/wishlist/WishlistItemCard";

export default function WishlistSection() {
  const { wishlist } = useWishlist();

  return (
    <section className="bg-white py-10">
      <Container>

        {/* HEADER */}
        <h1 className="text-2xl font-semibold">My Wishlist</h1>

        {/* EMPTY STATE */}
        {wishlist.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg font-medium">Your wishlist is empty</p>
            <p className="mt-2 text-sm text-[#777]">
              Save items you like to view them later
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
              <WishlistItemCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </Container>
    </section>
  );
}