type Props = {
  sort: string;
  setSort: (value: string) => void;
};

export default function SortBar({ sort, setSort }: Props) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div />

      <div className="flex items-center gap-2 text-sm">
        <span className="text-[#666]">Sort By:</span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-md border px-3 py-1"
        >
          <option value="new">New Arrivals</option>
          <option value="low">Price: High to Low</option>
          <option value="high">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}