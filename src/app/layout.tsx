import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Purepoly Essentials | Nylon & Plastic Raw Materials",
    template: "%s | Purepoly Essentials",
  },
  description:
    "Supplier of HDPE, LDPE, and other raw materials for nylon and plastic manufacturers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
