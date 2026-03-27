import SearchSection from "@/sections/search/SearchSection";
import MainLayout from "@/components/layout/MainLayout";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q || "";

  return (
    <MainLayout>
      <SearchSection query={query} />
    </MainLayout>
  );
}