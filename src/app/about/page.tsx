import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { address, phoneNumber, products } from "@/data/products";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Purepoly Essentials and its focus on reliable raw-material supply.",
};

const priorities = [
  ["Clear pricing", "Quick confirmation of current market price and available materials."],
  ["Reliable follow-up", "WhatsApp-first communication so buyers get practical answers faster."],
  ["Production focus", "Support for nylon, film, polythene, and packaging manufacturers."],
];

export default function AboutPage() {
  const materialCount = products.length;

  return (
    <main>
      <section className="border-b border-[#d8d3c6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-18">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">About Purepoly</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
              Raw materials supplied for manufacturers who need fewer delays.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#53604f]">
              Purepoly Essentials connects nylon and plastic-processing businesses with HDPE, LDPE, and related
              production inputs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message="Hello Purepoly Essentials, I want to learn more about your raw-material supply.">
                Speak With Purepoly
              </WhatsAppButton>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-[#f7f3ea]"
                href="/products"
              >
                View Materials
              </Link>
            </div>
          </div>

          <div className="grid content-start gap-5">
            <div className="rounded-lg bg-[#eef2e8] p-6">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#68785d]">What we do</p>
              <p className="mt-4 text-2xl font-black leading-tight text-[#102317]">
                We help production buyers confirm material availability, price, and next steps without a long wait.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-l-4 border-[#12a150] bg-[#fbfaf6] p-5">
                <p className="text-3xl font-black text-[#102317]">{materialCount}</p>
                <p className="mt-1 text-sm font-bold text-[#53604f]">listed HDPE and LDPE materials</p>
              </div>
              <div className="border-l-4 border-[#12a150] bg-[#fbfaf6] p-5">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68785d]">Contact</p>
                <a className="mt-2 block text-xl font-black text-[#102317] hover:text-[#0d8541]" href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </a>
                <p className="mt-2 text-sm leading-6 text-[#53604f]">{address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">How we help</p>
          <h2 className="mt-2 text-3xl font-black text-[#102317]">Simple support for everyday buying decisions.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {priorities.map(([title, detail]) => (
            <div className="border-t-2 border-[#12a150] pt-5" key={title}>
              <h3 className="text-xl font-black text-[#102317]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#53604f]">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
