import Container from "@/components/common/Container";

const items = [
  "1500+ New Products Added Weekly",
  "Top Trending Styles",
  "View Your Personalized Favorites",
];

export default function InfoStripSection() {
  return (
    <section className="bg-white py-4">
      <Container>
        <div className="grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full bg-[#efe1d6] px-4 py-3 text-center text-sm font-medium text-[#8a633f]"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}