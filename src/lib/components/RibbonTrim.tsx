type RibbonTrimProps = {
  className?: string;
};

export function RibbonTrim({ className = "" }: RibbonTrimProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #7D91A6 0 24px, #556B4E 24px 48px, #E3E8DE 48px 64px, #3E4737 64px 80px)",
      }}
    />
  );
}
