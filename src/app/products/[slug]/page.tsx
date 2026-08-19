import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProduct, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} Supplier in Lagos`,
    description: `${product.name} supply for nylon and plastic manufacturers. Request current price and availability from Purepoly Essentials.`,
  };
}

export default async function ProductLandingPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const message = `Hello Purepoly Essentials, I'm interested in ${product.name}. Please send me your current price and availability.`;

  return (
    <main>
      <section className="border-b border-[#d8d3c6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">{product.name} supplier</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
              {product.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#53604f]">{product.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={message}>Get Current Price on WhatsApp</WhatsAppButton>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-[#f7f3ea]"
                href="/request-quote"
              >
                Request Formal Quote
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-[#102317] p-5 text-white shadow-xl">
            <div className="h-48 rounded-md bg-[#f7f3ea] p-4">
              <div className="flex h-full items-end justify-between rounded border-2 border-[#9faa90] bg-[#e9ede2] p-4 text-[#102317]">
                <span className="break-words text-3xl font-black">{product.name}</span>
                <span className="rounded bg-[#f3c85a] px-3 py-2 text-sm font-black">Available</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#d9e3d7]">{product.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:px-8 lg:grid-cols-3">
        <div className="rounded-lg border border-[#d8d3c6] bg-white p-5">
          <h2 className="text-xl font-black text-[#102317]">Production Uses</h2>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-[#53604f]">
            {product.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[#d8d3c6] bg-white p-5">
          <h2 className="text-xl font-black text-[#102317]">Supply Notes</h2>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-[#53604f]">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[#d8d3c6] bg-white p-5">
          <h2 className="text-xl font-black text-[#102317]">Service Areas</h2>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-[#53604f]">
            {product.locations.map((location) => (
              <li key={location}>{location}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
