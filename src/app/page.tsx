import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const customerTypes = [
  "Nylon manufacturing",
  "Polythene manufacturing",
  "Plastic film production",
  "Shopping bag manufacturing",
  "Printed nylon production",
  "Plastic packaging manufacturing",
];

const supplySteps = [
  ["Share requirement", "Send the grade, quantity, delivery location, and timeline."],
  ["Confirm availability", "Purepoly checks current stock position and market pricing."],
  ["Arrange supply", "Pickup or delivery discussion continues directly on WhatsApp."],
];

const featuredProducts = products.filter((product) => product.imageSrc).slice(0, 5);
const leadProduct = featuredProducts[0];
const secondaryProducts = featuredProducts.slice(1);

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="border-b border-[#d8d3c6] bg-[#eef2e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm font-black text-[#102317] sm:flex-row sm:flex-wrap sm:px-8">
          {["Current price checks", "Bulk supply enquiries", "Pickup and delivery discussion"].map((item) => (
            <p className="border-l-2 border-[#12a150] pl-3" key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-18 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Available materials</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-black text-[#102317]">
              Fast access to the grades buyers ask for most.
            </h2>
          </div>
          <Link className="text-sm font-black text-[#0d8541] hover:text-[#102317]" href="/products">
            View all products
          </Link>
        </div>
        <div className="grid gap-8 border-t border-[#d8d3c6] pt-8 lg:grid-cols-[0.9fr_1.1fr]">
          {leadProduct ? (
            <Link
              className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[#d8d3c6] transition hover:shadow-md"
              href={`/products/${leadProduct.slug}`}
            >
              <div className="relative aspect-[5/4] bg-[#f8f6ef]">
                {leadProduct.imageSrc ? (
                  <Image
                    alt={`${leadProduct.name} material`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    src={leadProduct.imageSrc}
                  />
                ) : null}
                <span className="absolute left-5 top-5 rounded bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#102317] shadow-sm">
                  Featured
                </span>
              </div>
              <div className="p-5">
                <h3 className="break-words text-2xl font-black leading-tight text-[#102317]">{leadProduct.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53604f]">{leadProduct.summary}</p>
                <p className="mt-5 text-sm font-black text-[#0d8541]">View details</p>
              </div>
            </Link>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2 lg:h-full lg:grid-rows-2">
            {secondaryProducts.map((product) => (
              <Link
                className="group flex h-full min-h-[230px] flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[#d8d3c6] transition hover:-translate-y-0.5 hover:shadow-md"
                href={`/products/${product.slug}`}
                key={product.slug}
              >
                {product.imageSrc ? (
                  <div className="relative h-40 overflow-hidden bg-[#f8f6ef] lg:flex-1">
                    <Image
                      alt={`${product.name} material`}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                      fill
                      sizes="(min-width: 1024px) 26vw, (min-width: 640px) 46vw, 100vw"
                      src={product.imageSrc}
                    />
                  </div>
                ) : null}
                <div className="p-4">
                  <h3 className="break-words text-lg font-black leading-tight text-[#102317]">{product.name}</h3>
                  <p className="mt-2 text-sm font-black text-[#0d8541]">View details</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d3c6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">How supply starts</p>
            <h2 className="mt-2 text-3xl font-black text-[#102317]">Clear steps from enquiry to confirmed supply.</h2>
            <p className="mt-4 text-sm leading-6 text-[#53604f]">
              The buying flow is built for production teams that need practical answers: grade, price, availability, and
              delivery discussion.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {supplySteps.map(([title, detail], index) => (
              <li className="border-t-2 border-[#12a150] pt-5" key={title}>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68785d]">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-black text-[#102317]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#53604f]">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Who we serve</p>
          <h2 className="mt-3 text-3xl font-black">Built for manufacturers, not retail shoppers.</h2>
          <p className="mt-4 text-sm leading-6 text-[#53604f]">
            Purepoly focuses on quote requests, price checks, and product-specific WhatsApp conversations for production
            buyers.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-l border-[#d8d3c6] pl-6">
          {customerTypes.map((type) => (
            <p className="text-sm font-black text-[#102317]" key={type}>
              {type}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Quotation request</p>
          <h2 className="mt-2 text-3xl font-black text-[#102317]">Send your material requirement.</h2>
          <p className="mt-4 text-sm leading-6 text-[#53604f]">
            Share the material, quantity, and delivery location so Purepoly Essentials can respond with current price and
            availability.
          </p>
        </div>
        <QuoteForm />
      </section>

      <section className="bg-[#102317]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 text-white sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">Ready to buy?</p>
            <h2 className="mt-2 text-3xl font-black">Request price, availability, and delivery options.</h2>
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
