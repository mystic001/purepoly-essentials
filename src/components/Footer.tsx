import Image from "next/image";
import Link from "next/link";
import { address, phoneNumber } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-[#d8d3c6] bg-[#102317] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image alt="Purepoly Essentials logo" height={40} src="/icon.svg" width={40} />
            <h2 className="text-2xl font-black">Purepoly Essentials</h2>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#d9e3d7]">
            Reliable raw materials for nylon, polythene, plastic film, and plastic packaging manufacturers.
          </p>
          <div className="mt-4 grid gap-2 text-sm text-[#d9e3d7]">
            <a className="hover:text-white" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
            <p>{address}</p>
          </div>
          <WhatsAppButton
            className="mt-5"
            message="Hello Purepoly Essentials, I want to request current price and availability."
            variant="secondary"
          >
            Contact on WhatsApp
          </WhatsAppButton>
        </div>
        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-3 grid gap-2 text-sm text-[#d9e3d7]">
            <Link className="hover:text-white" href="/products">
              Products
            </Link>
            <Link className="hover:text-white" href="/request-quote">
              Request Quote
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-black">Support</h3>
          <p className="mt-3 text-sm leading-6 text-[#d9e3d7]">
            Send your material name, quantity, and delivery preference for a quick response.
          </p>
          <p className="mt-4 text-sm leading-6 text-[#d9e3d7]">Reliable Raw Materials. Reliable Production.</p>
        </div>
      </div>
    </footer>
  );
}
