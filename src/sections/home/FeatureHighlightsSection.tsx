import Container from "@/components/common/Container";
import FeatureCard from "@/components/cards/FeatureCard";

const items = [
  {
    title: "Get INR 500 Off",
    subtitle: "Sign Up",
  },
  {
    title: "Stylish Trends",
    subtitle: "Just Arrived",
  },
  {
    title: "Ready To Shop",
    subtitle: "Ready To Ship",
  },
  {
    title: "The Global Favorites",
    subtitle: "Best Sellers",
  },
];

export default function FeatureHighlightsSection() {
  return (
    <section className="bg-white py-8 md:py-10">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}