"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const slides = [
  {
    id: 1,
    title: "Celebration Wear",
    discount: "30% - 50% OFF",
    description: "Detailed & elaborate festive looks for one and all",
    buttonText: "Start Shopping!",
    bgClass: "bg-[#f3ddd5]",
    accentClass: "text-[#c2185b]",
    image: "/assets/images/Designer-Party-Saree.png",
  },
  {
    id: 2,
    title: "Festive Favorites",
    discount: "Up to 40% OFF",
    description: "Premium occasionwear styles curated for every celebration",
    buttonText: "Explore Now",
    bgClass: "bg-[#efe3d8]",
    accentClass: "text-[#a03a5d]",
    image: "/assets/images/Festive-Anarkali-Suit.png",
  },
  {
    id: 3,
    title: "Wedding Edit",
    discount: "Flat 25% OFF",
    description: "Elegant festive designs crafted for timeless celebrations",
    buttonText: "Discover",
    bgClass: "bg-[#eed9d0]",
    accentClass: "text-[#b12a58]",
    image: "/assets/images/Men's-Wedding-Sherwani.png",
  },
];

export default function MiddlePromoSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // ✅ 5 seconds

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div
          className={`overflow-hidden rounded-[28px] ${activeSlide.bgClass} transition-all duration-500`}
        >
          <div className="grid min-h-[260px] items-center gap-8 px-6 py-8 md:min-h-[320px] md:grid-cols-3 md:px-10 lg:px-14">
            
            {/* LEFT */}
            <div className="text-center md:text-left">
              <h2
                className={`text-3xl font-semibold leading-tight md:text-5xl ${activeSlide.accentClass}`}
              >
                {activeSlide.title}
              </h2>

              <p className="mt-4 text-2xl font-semibold text-[#1f1f1f] md:text-4xl">
                {activeSlide.discount}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex items-center justify-center">
              <div className="relative h-[240px] w-[190px] overflow-hidden rounded-[20px] shadow-lg md:h-[300px] md:w-[230px]">
                
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />

              </div>
            </div>

            {/* RIGHT */}
            <div className="text-center md:text-left">
              <p className="mx-auto max-w-[360px] text-lg leading-8 text-[#4b403b] md:mx-0 md:text-[32px] md:leading-[1.3]">
                {activeSlide.description}
              </p>

              <button
                type="button"
                className="mt-6 rounded-xl bg-[#c5004f] px-8 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                {activeSlide.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="mt-4 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#b35b5b]"
                  : "w-2.5 bg-[#d8c5bf]"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}