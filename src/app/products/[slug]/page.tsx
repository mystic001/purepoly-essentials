import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${product.name} Material`,
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
      <section className="bg-[#fbfaf6]">
        <div className="mx-auto max-w-7xl px-5 pt-7 sm:px-8">
          <Link className="text-sm font-black text-[#53604f] transition hover:text-[#102317]" href="/products">
            Back to materials
          </Link>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:pb-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Available material</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
              {product.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#53604f]">{product.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={message}>Get Current Price on WhatsApp</WhatsAppButton>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-[#f7f3ea]"
                href="/request-quote"
              >
                Request Formal Quote
              </Link>
            </div>

            <div className="mt-8 border-l-4 border-[#12a150] pl-5">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68785d]">For faster response</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#53604f]">
                Send the quantity you need, your preferred pickup or delivery option, and when production needs to start.
              </p>
            </div>
          </div>

          <div className="self-center">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[#d8d3c6]">
              <div className="relative aspect-[4/3] bg-[#f8f6ef]">
                {product.imageSrc ? (
                  <Image
                    alt={`${product.name} material`}
                    className="h-full w-full object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    src={product.imageSrc}
                  />
                ) : (
                  <div className="flex h-full items-end bg-[#e9ede2] p-5 text-[#102317]">
                    <span className="break-words text-3xl font-black">{product.name}</span>
                  </div>
                )}
                <span className="absolute left-5 top-5 rounded bg-white/90 px-3 py-2 text-sm font-black text-[#102317] shadow-sm">
                  Available
                </span>
              </div>
              <div className="p-5">
                <h2 className="break-words text-2xl font-black text-[#102317]">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-[#53604f]">{product.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
