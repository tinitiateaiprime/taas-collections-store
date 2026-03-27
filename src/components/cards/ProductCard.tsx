import Image from "next/image";

type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  category,
  price,
  image,
}: ProductCardProps) {

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-[24px] bg-[#f3ebe5]">
        <div className="relative h-[360px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="px-1 py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-[#9a7b63]">
          {category}
        </p>
        <h3 className="mt-2 text-[17px] font-medium leading-6 text-[#1f1f1f]">
          {title}
        </h3>
        <p className="mt-2 text-[16px] font-semibold text-[#7a2e2e]">{price}</p>
      </div>
      
    </article>
  );
}