"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";
import { heroSlides } from "@/data/hero";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE (5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pb-8">
      <Container>
        <div className="overflow-hidden rounded-[24px] bg-[#f3ece7]">
          <div className="grid min-h-[420px] items-center gap-8 px-8 py-10 md:grid-cols-2 md:px-12">
            
            {/* LEFT CONTENT */}
            <div>
              {/* <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#b07b52]">
                Eid Exclusives
              </p> */}

              <h1 className="text-4xl font-semibold leading-tight text-[#8b2e52] md:text-6xl">
                Festive Styles
              </h1>

              <p className="mt-4 max-w-[460px] text-base leading-7 text-[#5b4a42]">
                Discover elegant looks, occasion wear, and standout collections.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-md bg-[#d6a800] px-5 py-3 text-sm font-semibold">
                  Salwar Suits
                </button>
                <button className="rounded-md bg-[#d6a800] px-5 py-3 text-sm font-semibold">
                  Sarees
                </button>
                <button className="rounded-md bg-[#d6a800] px-5 py-3 text-sm font-semibold">
                  Kurta Pajama
                </button>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-[20px]">
              
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt="Hero"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* DOTS */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === current ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}