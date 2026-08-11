import { whatsappHref } from "@/data/products";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary: "bg-[#12a150] text-white hover:bg-[#0d8541]",
  secondary: "bg-white text-[#102317] hover:bg-[#edf7ef]",
  dark: "bg-[#102317] text-white hover:bg-[#1e3d29]",
};

export function WhatsAppButton({ message, children, variant = "primary", className = "" }: WhatsAppButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-black transition ${variants[variant]} ${className}`}
      href={whatsappHref(message)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
