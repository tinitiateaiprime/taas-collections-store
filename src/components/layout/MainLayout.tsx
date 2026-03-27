import type { ReactNode } from "react";
import TopPromoBar from "@/components/layout/TopPromoBar";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/layout/CategoryNav";
import Footer from "@/components/layout/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <TopPromoBar />
      <Header />
      <CategoryNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}