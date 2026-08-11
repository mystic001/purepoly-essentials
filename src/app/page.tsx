import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products, serviceAreas } from "@/data/products";

const customerTypes = [
  "Nylon manufacturing",
  "Polythene manufacturing",
  "Plastic film production",
  "Shopping bag manufacturing",
  "Printed nylon production",
  "Plastic packaging manufacturing",
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Available materials</p>
            <h2 className="mt-2 text-3xl font-black text-[#102317]">Raw materials supplied for production</h2>
          </div>
          <Link className="text-sm font-black text-[#0d8541] hover:text-[#102317]" href="/products">
            View all products
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#102317] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b9d8ac]">Who we serve</p>
            <h2 className="mt-2 text-3xl font-black">Built for manufacturers, not retail shoppers.</h2>
            <p className="mt-4 text-sm leading-6 text-[#d9e3d7]">
              The site is optimized for quote requests, price checks, and product-specific WhatsApp conversations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {customerTypes.map((type) => (
              <div className="rounded-lg border border-white/15 bg-white/8 p-5" key={type}>
                <p className="font-black">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Quotation request</p>
          <h2 className="mt-2 text-3xl font-black text-[#102317]">Send your material requirement</h2>
          <p className="mt-4 text-sm leading-6 text-[#53604f]">
            Share the material, quantity, and delivery location so Purepoly Essentials can respond with current price and
            availability.
          </p>
        </div>
        <QuoteForm />
      </section>

      <section className="border-t border-[#d8d3c6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Expansion focus</p>
            <h2 className="mt-2 text-3xl font-black text-[#102317]">Serving Lagos first, then Southwest Nigeria.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                className="rounded-md border border-[#d8d3c6] bg-[#f7f3ea] px-3 py-3 text-center font-black text-[#102317] transition hover:border-[#12a150]"
                href="/areas-we-serve"
                key={area}
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3c85a]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#36522f]">Ready to buy?</p>
            <h2 className="mt-2 text-3xl font-black text-[#102317]">Request price, availability, and delivery options.</h2>
          </div>
          <WhatsAppButton
            message="Hello Purepoly Essentials, I am a nylon/plastic manufacturer. Please send me current prices and availability."
            variant="dark"
          >
            Request Price on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
