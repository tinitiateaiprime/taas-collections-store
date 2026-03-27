type SectionHeadingProps = {
  title: string;
  className?: string;
};

export default function SectionHeading({
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-center text-[28px] font-semibold tracking-[0.02em] text-[#1f2a37] ${className}`}
    >
      {title}
    </h2>
  );
}