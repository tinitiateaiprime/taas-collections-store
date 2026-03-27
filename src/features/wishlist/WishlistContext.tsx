"use client";

import { createContext, useContext, useState } from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  discountPrice: number;
  image: string;
};

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
};



const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };
  
  const isInWishlist = (id: string) => {
  return wishlist.some((item) => item.id === id);
};

const toggleWishlist = (product: Product) => {
  setWishlist((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.filter((item) => item.id !== product.id);
    }

    return [...prev, product];
  });
};
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
<WishlistContext.Provider
  value={{
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  }}
>
  {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}