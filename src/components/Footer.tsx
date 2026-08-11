import Link from "next/link";
import { products, serviceAreas } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-[#d8d3c6] bg-[#102317] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-black">Purepoly Essentials</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#d9e3d7]">
            Reliable raw materials for nylon, polythene, plastic film, and plastic packaging manufacturers across Lagos
            and Southwest Nigeria.
          </p>
          <WhatsAppButton
            className="mt-5"
            message="Hello Purepoly Essentials, I want to request current price and availability."
            variant="secondary"
          >
            Contact on WhatsApp
          </WhatsAppButton>
        </div>
        <div>
          <h3 className="font-black">Materials</h3>
          <div className="mt-3 grid gap-2 text-sm text-[#d9e3d7]">
            {products.map((product) => (
              <Link className="hover:text-white" href={`/products/${product.slug}`} key={product.slug}>
                {product.name}
              </Link>
            ))}
            <Link className="hover:text-white" href="/products">
              View all materials
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-black">Markets</h3>
          <p className="mt-3 text-sm leading-6 text-[#d9e3d7]">{serviceAreas.join(", ")}</p>
          <p className="mt-4 text-sm leading-6 text-[#d9e3d7]">Reliable Raw Materials. Reliable Production.</p>
        </div>
      </div>
    </footer>
  );
}
