"use client";

import { collections } from "@/lib/site-data";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";

function CollectionCard({
  item,
  tilt,
}: {
  item: (typeof collections)[number];
  tilt: string;
}) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* TODO: replace with real product photography from Eulalee once available */}
      <div
        className={`aspect-[4/5] bg-surface border border-gold/15 rounded-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] flex items-center justify-center ${tilt}`}
      >
        <div className="w-16 h-16 rounded-full border border-gold/40" />
      </div>
      <h3 className="mt-5 font-display text-xl text-cream">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-cream/70 leading-relaxed">
        {item.description}
      </p>
      {item.priceRange && (
        <p className="mt-2 text-sm font-medium text-gold">
          {item.priceRange}
        </p>
      )}
    </div>
  );
}

const tilts = ["rotate-[-0.6deg]", "rotate-0", "rotate-[0.6deg]"];

export function Collection() {
  return (
    <section id="collection" className="bg-espresso">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest2 uppercase text-gold mb-4">
          The Collection
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream max-w-xl">
          Fur Felt Hats, Kimonos &amp; Jewelry
        </h2>
        <p className="mt-4 text-cream/70 max-w-xl leading-relaxed">
          A look at the pieces in the studio: custom hats made one at a time,
          with kimonos and jewelry selected to complete the Caribbean
          Bohemian styling.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, i) => (
            <CollectionCard key={item.id} item={item} tilt={tilts[i % tilts.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
