import Link from "next/link";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-lg border border-[#d8d3c6] bg-white p-5 shadow-sm">
      <div className="mb-5 h-36 rounded-md bg-[#e9ede2] p-4">
        <div className="flex h-full items-end justify-between rounded border-2 border-[#9faa90] bg-[#f8faf5] p-3">
          <span className="break-words text-xl font-black text-[#102317]">{product.name}</span>
          <span className="rounded bg-[#f3c85a] px-2 py-1 text-xs font-black text-[#102317]">B2B</span>
        </div>
      </div>
      <h3 className="break-words text-2xl font-black text-[#102317]">{product.name}</h3>
      <p className="mt-3 text-sm leading-6 text-[#53604f]">{product.summary}</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-[#f7f3ea]"
          href={`/products/${product.slug}`}
        >
          Product Details
        </Link>
        <WhatsAppButton message={`Hello Purepoly Essentials, I'm interested in ${product.name}. Please send me your current price and availability.`}>
          Request Price
        </WhatsAppButton>
      </div>
    </article>
  );
}
