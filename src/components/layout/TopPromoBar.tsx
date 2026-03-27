type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TopPromoBar() {
  return (
    <div className="bg-[#ecd2cb] text-center text-sm text-[#3b2f2f]">
      <div className="mx-auto max-w-[1600px] px-4 py-2">
        Up to 25% Off + Free Stitching | Rated 4.1 out of 5 based on 4122 reviews on Trustpilot
      </div>
    </div>
  );
}