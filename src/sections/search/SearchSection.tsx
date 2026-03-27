"use client";

import Container from "@/components/common/Container";
import ListingProductCard from "@/components/cards/ListingProductCard";
import { products } from "@/data/products";

export default function SearchSection({ query }: { query: string }) {

  const cleanQuery = query.trim().toLowerCase();


const filtered = cleanQuery
  ? products.filter(
      (p) =>
        p.title.toLowerCase().includes(cleanQuery) ||
        p.category.join(" ").toLowerCase().includes(cleanQuery)
    )
  : [];

  return (
    <section className="bg-white py-8">
      <Container>

        {/* HEADER */}
        <h1 className="text-xl font-semibold">
          Search... 
        </h1>

        {/* EMPTY */}
        {filtered.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg">No results found</p>
            <p className="text-sm text-[#777] mt-2">
              Try different keywords
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ListingProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </Container>
    </section>
  );
}