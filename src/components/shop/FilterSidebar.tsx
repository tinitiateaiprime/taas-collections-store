type Props = {
  selectedColors: string[];
  setSelectedColors: (v: string[]) => void;

  selectedTypes: string[];
  setSelectedTypes: (v: string[]) => void;

  priceRange: string;
  setPriceRange: (v: string) => void;
};

export default function FilterSidebar({
  selectedColors,
  setSelectedColors,
  selectedTypes,
  setSelectedTypes,
  priceRange,
  setPriceRange,
}: Props) {
  const colors = ["red", "blue", "green"];
  const types = ["woven", "printed", "embroidered"];

  // ✅ FIXED TYPE
  const toggle = (
    value: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  return (
    <div className="space-y-8 text-sm">
      
      {/* COLOR */}
      <div>
        <h4 className="mb-3 font-semibold">Color</h4>
        <div className="space-y-2">
          {colors.map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-2 capitalize"
            >
              <input
                type="checkbox"
                checked={selectedColors.includes(c)}
                onChange={() => toggle(c, selectedColors, setSelectedColors)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div>
        <h4 className="mb-3 font-semibold">Type</h4>
        <div className="space-y-2">
          {types.map((t) => (
            <label
              key={t}
              className="flex cursor-pointer items-center gap-2 capitalize"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggle(t, selectedTypes, setSelectedTypes)}
              />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h4 className="mb-3 font-semibold">Price</h4>

        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              checked={priceRange === "all"}
              onChange={() => setPriceRange("all")}
            />
            All
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              checked={priceRange === "low"}
              onChange={() => setPriceRange("low")}
            />
            Below ₹3000
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              checked={priceRange === "mid"}
              onChange={() => setPriceRange("mid")}
            />
            ₹3000 - ₹10000
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              checked={priceRange === "high"}
              onChange={() => setPriceRange("high")}
            />
            Above ₹10000
          </label>
        </div>
      </div>

    </div>
  );
}