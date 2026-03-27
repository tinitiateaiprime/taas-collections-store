// type StoryPanelProps = {
//   title: string;
//   subtitle: string;
//   className?: string;
// };

// export default function StoryPanel({
//   title,
//   subtitle,
//   className = "",
// }: StoryPanelProps) {
//   return (
//     <article
//       className={`group relative overflow-hidden rounded-[28px] bg-[#d8c2b4] ${className}`}
//     >
//       <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent transition duration-300 group-hover:scale-[1.02]" />

//       <div className="absolute inset-0 bg-[#d8c2b4] transition duration-500 group-hover:scale-105" />

//       <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-7">
//         <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/85">
//           {subtitle}
//         </p>
//         <h3 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-[30px]">
//           {title}
//         </h3>
//       </div>
//     </article>
//   );
// }













import Image from "next/image";

type StoryPanelProps = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
};

export default function StoryPanel({
  title,
  subtitle,
  image,
  className = "",
}: StoryPanelProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] ${className}`}
    >
      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-7">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/85">
          {subtitle}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white md:text-[30px]">
          {title}
        </h3>
      </div>
    </article>
  );
}