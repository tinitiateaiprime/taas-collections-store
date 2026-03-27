import Container from "@/components/common/Container";
import Link from "next/link";

const categories = [
  "Saree",
  "Salwar Kameez",
  "Lehenga",
  "Men",
  "Indowestern",
  "Plus",
  "Jewelry",
  "Concepts",
  "Kids",
  "Discover",
];

// convert "Salwar Kameez" → "salwar-kameez"
const getSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export default function CategoryNav() {
  return (
    <div className="border-b border-[#ece6e1] bg-white">
      <Container>
        <nav className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-4 text-[15px] text-[#2d2d2d]">
          {categories.map((item) => (
            <Link
              key={item}
              href={`/category/${getSlug(item)}`}   // ✅ navigation
              className="transition hover:text-[#8b3d2f]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}