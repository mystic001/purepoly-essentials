import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Available HDPE, LDPE, and nylon or plastic production raw materials from Purepoly Essentials.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="border-b border-[#d8d3c6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Products</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
            Available materials for nylon and plastic manufacturers
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#53604f]">
            Product pages are built for direct Facebook and Instagram ad traffic, so each material can generate a clear,
            trackable enquiry.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="rounded-lg bg-[#102317] p-6 text-white">
          <h2 className="text-2xl font-black">Need a material not listed?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d9e3d7]">
            Send a WhatsApp enquiry with the product name, quantity, and delivery location.
          </p>
          <WhatsAppButton
            className="mt-5"
            message="Hello Purepoly Essentials, I need a nylon or plastic production material that is not listed on the website."
            variant="secondary"
          >
            Ask on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
