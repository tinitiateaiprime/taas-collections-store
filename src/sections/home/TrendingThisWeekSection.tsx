import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/cards/ProductCard";

type Product = {
  id: string;
  title: string;
  category: string[];
  price: number;
  discountPrice: number;
  image: string;
};

type Props = {
  products: Product[];
};

export default function TrendingThisWeekSection({ products }: Props) {
  return (
    <section className="bg-white py-14 md:py-18">
      <Container>
        <SectionHeading
          title="Trending This Week"
          className="mb-10 md:mb-12"
        />

        {/* EMPTY STATE */}
        {products.length === 0 ? (
          <div className="text-center text-sm text-[#777]">
            No trending products available
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category.join(", ")}
                price={`₹${product.discountPrice}`}
                image={product.image}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}