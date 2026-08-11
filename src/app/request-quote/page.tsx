import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request Quote",
  description: "Submit a quotation request for Hivorex, Malex, and other nylon or plastic raw materials.",
};

export default function RequestQuotePage() {
  return (
    <main>
      <section className="border-b border-[#d8d3c6] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#68785d]">Request quote</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-[#102317] sm:text-5xl">
            Tell us the material, quantity, and delivery location.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#53604f]">
            Your request opens a prefilled WhatsApp message so the sales conversation can begin immediately.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <QuoteForm />
      </section>
    </main>
  );
}
