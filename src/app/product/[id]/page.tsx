import MainLayout from "@/components/layout/MainLayout";
import ProductDetailsSection from "@/sections/product/ProductDetailsSection";
import { products } from "@/data/products";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <MainLayout>
      <ProductDetailsSection product={product} />
    </MainLayout>
  );
}