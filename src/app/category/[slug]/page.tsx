import MainLayout from "@/components/layout/MainLayout";
import CategoryListingSection from "@/sections/shop/CategoryListingSection";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

 const filteredProducts = products.filter((product) =>
    product.category.map((c) => c.toLowerCase()).includes(slug)
  );
  
  return (
    <MainLayout>
      <CategoryListingSection
        products={filteredProducts}
        slug={slug}   // ✅ pass slug
      />
    </MainLayout>
  );
}