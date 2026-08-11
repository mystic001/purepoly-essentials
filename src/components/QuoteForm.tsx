"use client";

import { useMemo, useState } from "react";
import { products, whatsappHref } from "@/data/products";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [material, setMaterial] = useState(products[0].name);
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState("");

  const message = useMemo(() => {
    return [
      "Hello Purepoly Essentials, I want to request a quote.",
      `Name: ${name || "-"}`,
      `Company: ${company || "-"}`,
      `Phone/WhatsApp: ${phone || "-"}`,
      `Email: ${email || "-"}`,
      `Material: ${material}`,
      `Quantity: ${quantity || "-"}`,
      `Delivery Location: ${location || "-"}`,
      `Additional Information: ${info || "-"}`,
    ].join("\n");
  }, [company, email, info, location, material, name, phone, quantity]);

  return (
    <form className="rounded-lg border border-[#d8d3c6] bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Name
          <input className="field" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Company Name
          <input className="field" value={company} onChange={(event) => setCompany(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Phone / WhatsApp
          <input className="field" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Email
          <input className="field" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Material Required
          <select className="field" value={material} onChange={(event) => setMaterial(event.target.value)}>
            {products.map((product) => (
              <option key={product.slug}>{product.name}</option>
            ))}
            <option>Other nylon or plastic raw material</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317]">
          Quantity Required
          <input className="field" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317] sm:col-span-2">
          Delivery Location
          <input className="field" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#102317] sm:col-span-2">
          Additional Information
          <textarea className="field min-h-28 py-3" value={info} onChange={(event) => setInfo(event.target.value)} />
        </label>
      </div>
      <a
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#12a150] px-4 py-2 text-sm font-black text-white transition hover:bg-[#0d8541] sm:w-auto"
        href={whatsappHref(message)}
        rel="noopener noreferrer"
        target="_blank"
      >
        Send Quote Request on WhatsApp
      </a>
    </form>
  );
}
