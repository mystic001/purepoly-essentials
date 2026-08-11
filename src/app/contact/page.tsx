import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Purepoly Essentials for nylon and plastic raw-material prices and availability.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Contact</p>
          <h1 className="mt-2 text-4xl font-black leading-tight text-[#102317]">Request price and availability.</h1>
          <p className="mt-4 text-sm leading-6 text-[#53604f]">
            WhatsApp is the fastest contact channel for product-specific pricing and availability.
          </p>
          <WhatsAppButton
            className="mt-5"
            message="Hello Purepoly Essentials, please send me current prices and availability."
          >
            Open WhatsApp
          </WhatsAppButton>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
