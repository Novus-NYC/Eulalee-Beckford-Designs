import type { Metadata } from "next";
import { fraunces, workSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eulalee Beckford Designs | Brooklyn Millinery",
  description:
    "Custom fur felt hats handcrafted in-shop in Park Slope, Brooklyn. Caribbean Bohemian millinery, jewelry, and fashion by Eulalee Beckford Designs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body bg-cream text-ink">{children}</body>
    </html>
  );
}
