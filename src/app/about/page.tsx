import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Purepoly Essentials and its focus on reliable B2B raw-material supply.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">About Purepoly</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
            Reliable raw-material supply for manufacturers that cannot afford production delays.
          </h1>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#53604f]">
          <p>
            Purepoly Essentials connects nylon and plastic-processing businesses with raw materials such as Hivorex,
            Malex, and related production inputs.
          </p>
          <p>
            The business is focused on clear price communication, availability confirmation, and fast follow-up through
            WhatsApp for buyers across Lagos and Southwest Nigeria.
          </p>
          <WhatsAppButton message="Hello Purepoly Essentials, I want to learn more about your raw-material supply.">
            Speak With Purepoly
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
