import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PurePoly Essentials",
  description:
    "Durable polypropylene containers, crates, totes, and bins for homes, kitchens, and workspaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
