type FeatureCardProps = {
  title: string;
  subtitle: string;
};

export default function FeatureCard({ title, subtitle }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-[#eee7e2] bg-white/80 p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#9a7b63]">
        {subtitle}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-6 text-[#1f1f1f]">
        {title}
      </h3>
    </div>
  );
}