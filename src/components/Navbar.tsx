import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/areas-we-serve", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d8d3c6] bg-[#f7f3ea]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link className="min-w-fit text-lg font-black tracking-tight text-[#102317]" href="/">
          Purepoly Essentials
        </Link>
        <div className="hidden items-center gap-6 text-sm font-bold text-[#53604f] md:flex">
          {links.map((link) => (
            <Link className="transition hover:text-[#102317]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <WhatsAppButton message="Hello Purepoly Essentials, please send me today's price for available nylon and plastic raw materials.">
          Get Current Price
        </WhatsAppButton>
      </nav>
    </header>
  );
}
