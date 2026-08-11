import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="border-b border-[#d8d3c6] bg-[#f7f3ea]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">
            Raw materials for nylon and plastic production
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl lg:text-6xl">
              Reliable Raw Materials for Nylon & Plastic Production
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#53604f]">
              Purepoly Essentials supplies quality materials including Hivorex, Malex, and related production inputs for
              nylon and plastic manufacturers in Lagos and across Southwest Nigeria.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message="Hello Purepoly Essentials, please send me today's price for Hivorex, Malex and other available materials.">
              Get Current Price on WhatsApp
            </WhatsAppButton>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-white"
              href="/products"
            >
              View Available Materials
            </Link>
          </div>
        </div>

        <div className="grid min-h-[430px] gap-4 sm:grid-cols-[1fr_0.75fr]">
          <div className="relative overflow-hidden rounded-lg bg-[#1c3524] p-5 text-white shadow-xl">
            <div className="absolute left-8 right-8 top-8 h-20 bg-[#f3c85a]/30 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b9d8ac]">Warehouse supply</p>
                <h2 className="mt-3 max-w-sm text-3xl font-black leading-tight">Materials ready for production teams</h2>
              </div>
              <div className="grid gap-3">
                {["Hivorex", "Malex", "Plastic processing inputs"].map((item, index) => (
                  <div className="rounded-md bg-white/12 p-4 shadow-lg" key={item}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-black">{item}</span>
                      <span className="rounded bg-[#f3c85a] px-2 py-1 text-xs font-black text-[#102317]">
                        Stock {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-6 text-[#d9e3d7]">
                Built for buyers who need price confirmation, availability, delivery discussion, and quick follow-up.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-lg bg-[#f3c85a] p-5 text-[#102317]">
              <p className="text-sm font-black uppercase tracking-[0.14em]">Primary market</p>
              <p className="mt-4 text-4xl font-black">Lagos</p>
              <p className="mt-2 text-sm font-bold">Pickup and delivery discussions available</p>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#68785d]">Lead channel</p>
              <p className="mt-4 text-3xl font-black text-[#102317]">WhatsApp-first</p>
              <p className="mt-2 text-sm leading-6 text-[#53604f]">Prefilled product messages for faster enquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
