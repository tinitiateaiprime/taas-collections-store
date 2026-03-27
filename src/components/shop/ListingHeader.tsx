type Props = {
  slug: string;
  count: number;
};

export default function ListingHeader({ slug, count }: Props) {
  // Convert slug → Title (saree → Saree)
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="mb-4">
      {/* BREADCRUMB */}
      <p className="text-sm text-[#7a7a7a]">
        Home / {title}
      </p>

      {/* TITLE */}
      <h1 className="mt-2 text-2xl font-semibold">
        Buy {title} Online
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-2 max-w-3xl text-sm text-[#555]">
        Discover the latest {title} collection with premium quality and modern styles.
      </p>

      {/* COUNT */}
      <p className="mt-3 text-sm text-[#777]">
        {count} Items
      </p>
    </div>
  );
}