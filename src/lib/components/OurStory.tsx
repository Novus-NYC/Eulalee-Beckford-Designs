import { RibbonTrim } from "./RibbonTrim";
import { Reveal } from "./Reveal";

export function OurStory() {
  return (
    <section id="story" className="relative bg-espresso">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="text-xs font-medium tracking-widest2 uppercase text-gold mb-4">
          About
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream">
          A Milliner&rsquo;s Craft, Rooted in Brooklyn
        </h2>
        <p className="mt-6 text-cream/75 leading-relaxed">
          Hi, my name is Eulalee Beckford. I am a milliner who resides in
          Brooklyn, originally from the island of Jamaica, where my love for
          hats began with my father&rsquo;s adoration of them as part of his
          uniform as a calypso musician. Growing up in Jamaica, my hat
          obsession continued until I moved to New York in 1999, the fashion
          capital, where I couldn&rsquo;t pass a hat in a store without buying it.
          Eventually I came upon the Fashion Institute of Technology&rsquo;s
          millinery program, where I enrolled and started my journey to
          become a milliner, making my own hats and helping others fashion
          their perfect hat.
        </p>
      </Reveal>

      <RibbonTrim className="w-full h-1.5" />
    </section>
  );
}
