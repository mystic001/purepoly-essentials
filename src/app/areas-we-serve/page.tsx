import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { serviceAreas } from "@/data/products";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: "Purepoly Essentials serves Lagos and other Southwest Nigerian markets.",
};

export default function AreasWeServePage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Areas we serve</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
          Supporting nylon and plastic manufacturers across Lagos and Southwest Nigeria.
        </h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <div className="rounded-lg border border-[#d8d3c6] bg-white p-5 shadow-sm" key={area}>
              <h2 className="text-xl font-black text-[#102317]">{area}</h2>
              <p className="mt-3 text-sm leading-6 text-[#53604f]">
                Enquiries are welcome for Hivorex, Malex, and related nylon or plastic production raw materials.
              </p>
            </div>
          ))}
        </div>
        <WhatsAppButton
          className="mt-8"
          message="Hello Purepoly Essentials, I want to confirm supply options for my location."
        >
          Confirm Supply for My Area
        </WhatsAppButton>
      </section>
    </main>
  );
}
