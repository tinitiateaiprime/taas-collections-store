"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ListingHeader from "@/components/shop/ListingHeader";
import SortBar from "@/components/shop/SortBar";
import ListingProductCard from "@/components/cards/ListingProductCard";

type Product = {
  id: string;
  title: string;
  category: string[];
  color?: string;
  type?: string;
  price: number;
  discountPrice: number;
  image: string;
  isNew?: boolean;
};

type Props = {
  products: Product[];
  slug: string;
};

export default function CategoryListingSection({ products, slug }: Props) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sort, setSort] = useState("new");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // 🔹 FILTER
  const filteredProducts = products.filter((product) => {
    // COLOR
    const matchColor =
      selectedColors.length === 0 ||
      selectedColors.includes(product.color || "");

    // TYPE
    const matchType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type || "");

    // PRICE
    let matchPrice = true;

    if (priceRange === "low") {
      matchPrice = product.discountPrice < 3000;
    } else if (priceRange === "mid") {
      matchPrice =
        product.discountPrice >= 3000 &&
        product.discountPrice <= 10000;
    } else if (priceRange === "high") {
      matchPrice = product.discountPrice > 10000;
    }

    return matchColor && matchType && matchPrice;
  });

  // 🔹 SORT (THIS WAS MISSING ❗)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") {
      return a.discountPrice - b.discountPrice;
    }

    if (sort === "high") {
      return b.discountPrice - a.discountPrice;
    }

    // default: new arrivals
    return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
  });

  return (
    <section className="bg-white py-6">
      <Container>
<div className="flex w-full items-start gap-8">
  
  {/* SIDEBAR */}
  <aside className="hidden w-[260px] shrink-0 lg:block">
    <FilterSidebar
      selectedColors={selectedColors}
      setSelectedColors={setSelectedColors}
      selectedTypes={selectedTypes}
      setSelectedTypes={setSelectedTypes}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
    />
  </aside>

  {/* CONTENT */}
  <div className="flex-1 min-w-0">

    {/* ✅ MOBILE HEADER (inside content) */}
    <div className="mb-4 flex items-center justify-between lg:hidden">
      <button
        onClick={() => setIsFilterOpen(true)}
        className="rounded-md border px-4 py-2 text-sm"
      >
        Filters
      </button>

      <SortBar sort={sort} setSort={setSort} />
    </div>

    {/* HEADER */}
    <ListingHeader slug={slug} count={sortedProducts.length} />

    {/* DESKTOP SORT */}
    <div className="hidden lg:block">
      <SortBar sort={sort} setSort={setSort} />
    </div>

    {/* GRID */}
    <div className="mt-6 w-full min-h-[500px]">
      {sortedProducts.length === 0 ? (
        <div className="flex h-full items-center justify-center text-center">
          <div>
            <p className="text-lg font-medium text-[#333]">
              No products found
            </p>
            <p className="mt-2 text-sm text-[#777]">
              Try changing filters or categories
            </p>
          </div>
        </div>
      ) : (
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ListingProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>

  </div>
</div>
      </Container>

      {/* MOBILE FILTER DRAWER */}
{isFilterOpen && (
  <div className="fixed inset-0 z-50 flex">
    
    {/* BACKDROP */}
    <div
      className="flex-1 bg-black/40"
      onClick={() => setIsFilterOpen(false)}
    />

    {/* DRAWER */}
    <div className="w-[300px] bg-white p-4 overflow-y-auto">
      
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        <button onClick={() => setIsFilterOpen(false)}>Close</button>
      </div>

      <FilterSidebar
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </div>
  </div>
)}
    </section>
  );
}