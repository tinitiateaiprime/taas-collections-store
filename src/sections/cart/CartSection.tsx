"use client";

import Image from "next/image";
import Container from "@/components/common/Container";
import { useCart } from "@/features/cart/CartContext";
import { products } from "@/data/products";
export default function CartSection() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );

  return (
    <section className="bg-white py-10">
      <Container>

        <h1 className="text-2xl font-semibold">Shopping Cart</h1>

        {/* EMPTY STATE */}
        {cart.length === 0 ? (
          <div className="mt-10 text-center text-[#555]">
            Your cart is empty
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* LEFT: ITEMS */}
            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-6"
                >
                  {/* IMAGE */}
                  <div className="relative h-[120px] w-[100px] overflow-hidden rounded-md bg-[#f3ebe5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#7a2e2e]">
                        ₹{item.discountPrice}
                      </p>
                    </div>
                    {/* QUANTITY */}
            <div className="flex items-center gap-3">
  <button
    onClick={() => decreaseQty(item.id)}
    className="border px-2"
  >
    -
  </button>

  <span>{item.quantity}</span>
  <button
    onClick={() => increaseQty(item.id)}
    className="border px-2"
  >
    +
  </button>
</div>
                  </div>
                </div>
              ))}

            </div>

            {/* RIGHT: SUMMARY */}
            <div className="rounded-md border p-6 h-fit">
                          <h2 className="text-lg font-medium">Order Summary</h2>
              <div className="mt-4 flex justify-between text-sm">
                <span>Total</span>
                <span className="font-medium">₹{totalPrice}</span>
              </div>
              <button className="mt-6 w-full bg-black text-white py-3 text-sm">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}