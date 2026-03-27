"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
};

export default function RoleCard({ title, image, slug }: Props) {
  return (
    <Link href={`/category/${slug}`}>
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
        
        {/* IMAGE */}
        <div className="relative h-[480px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* TEXT */}
        <div className="absolute top-5 left-5">
          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}