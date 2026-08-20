import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#d8d3c6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link className="block" href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f6ef]">
          {product.imageSrc ? (
            <Image
              alt={`${product.name} material`}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              fill
              sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
              src={product.imageSrc}
            />
          ) : (
            <div className="flex h-full items-end bg-[#eef2e8] p-5">
              <span className="break-words text-xl font-black text-[#102317]">{product.name}</span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#102317] shadow-sm">
            Available
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="break-words text-2xl font-black leading-tight text-[#102317] transition group-hover:text-[#0d8541]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#53604f]">{product.summary}</p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#102317] px-4 py-2 text-sm font-black text-[#102317] transition hover:bg-[#f7f3ea]"
            href={`/products/${product.slug}`}
          >
            Product Details
          </Link>
          <WhatsAppButton
            className="sm:flex-1"
            message={`Hello Purepoly Essentials, I'm interested in ${product.name}. Please send me your current price and availability.`}
          >
            Request Price
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
