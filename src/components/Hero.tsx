import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  const featuredMaterial = products.find((product) => product.slug === "hivorex-fl7000") ?? products.find((product) => product.imageSrc);

  return (
    <section className="border-b border-[#d8d3c6] bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-18">
        <div className="flex flex-col justify-center gap-7">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">
            HDPE and LDPE supply for manufacturers
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl lg:text-6xl">
              Production materials, priced fast and supplied reliably.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#53604f]">
              Purepoly Essentials helps nylon, film, and packaging producers confirm available grades, current pricing,
              and delivery options without a long back-and-forth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Hello Purepoly Essentials, please send me today's price for your available HDPE and LDPE materials.">
              Get Current Price on WhatsApp
            </WhatsAppButton>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-white"
              href="/products"
            >
              View Available Materials
            </Link>
          </div>
          <div className="grid max-w-xl gap-5 border-y border-[#d8d3c6] py-5 sm:grid-cols-3">
            {[
              ["12", "listed materials"],
              ["HDPE", "film and bag grades"],
              ["LDPE", "flexible packaging grades"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-black text-[#102317]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#68785d]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="self-center">
          <div className="overflow-hidden rounded-lg bg-[#f2f4ed]">
            <div className="px-5 pt-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68785d]">Featured material</p>
              <h2 className="mt-2 break-words text-3xl font-black text-[#102317]">
                {featuredMaterial?.name ?? "HDPE Material"}
              </h2>
            </div>
            {featuredMaterial?.imageSrc ? (
              <Image
                alt={`${featuredMaterial.name} material packaging`}
                className="mx-auto h-[360px] w-full object-contain px-5 pb-6 pt-3"
                height={560}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={featuredMaterial.imageSrc}
                width={820}
              />
            ) : null}
          </div>
          <div className="mt-5 flex flex-col gap-3 border-l-4 border-[#12a150] pl-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold leading-6 text-[#53604f]">
              Ask for stock, price, pickup, or delivery options in one message.
            </p>
            <Link className="text-sm font-black text-[#0d8541] hover:text-[#102317]" href="/request-quote">
              Request a formal quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
