"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#d8d3c6] bg-[#f7f3ea]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex min-w-fit items-center gap-3 text-lg font-black tracking-tight text-[#102317]"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image alt="Purepoly Essentials logo" height={34} priority src="/icon.svg" width={34} />
            <span>Purepoly Essentials</span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-bold text-[#53604f] md:flex">
            {links.map((link) => (
              <Link className="transition hover:text-[#102317]" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <WhatsAppButton message="Hello Purepoly Essentials, please send me today's price for available nylon and plastic raw materials.">
              Get Current Price
            </WhatsAppButton>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d8d3c6] bg-white text-[#102317] md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
              <span className="block h-0.5 w-5 rounded bg-current" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="mt-4 grid gap-3 border-t border-[#d8d3c6] pt-4 md:hidden">
            {links.map((link) => (
              <Link
                className="rounded-md bg-white px-4 py-3 text-sm font-black text-[#102317] shadow-sm"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton
              className="w-full"
              message="Hello Purepoly Essentials, please send me today's price for available nylon and plastic raw materials."
            >
              Get Current Price
            </WhatsAppButton>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
