type StoryCardProps = {
  title: string;
  subtitle: string;
};

export default function StoryCard({ title, subtitle }: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-[520px] overflow-hidden bg-[#d7c2b3]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/85">
            {subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-[30px]">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}