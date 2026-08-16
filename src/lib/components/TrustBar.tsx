const facts = ["Custom, In-Shop Hats", "$250 – $450", "325 Flatbush Ave, Park Slope", "Caribbean Bohemian"];

export function TrustBar() {
  return (
    <div className="bg-surface border-y border-forest/20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-xs sm:text-sm tracking-wide">
        {facts.map((fact) => (
          <span key={fact} className="font-medium text-ink/75">
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}
