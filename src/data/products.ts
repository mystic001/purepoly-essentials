export type Product = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  summary: string;
  uses: string[];
  benefits: string[];
  locations: string[];
};

export const whatsappNumber = "234XXXXXXXXXX";

export const products: Product[] = [
  {
    slug: "hivorex",
    name: "Hivorex",
    headline: "Hivorex Available in Lagos",
    description:
      "Reliable Hivorex supply for nylon and plastic manufacturers that need consistent material availability for production.",
    summary:
      "Suitable for nylon, polythene, shopping bag, and plastic packaging manufacturers buying in production quantities.",
    uses: ["Nylon production", "Polythene film", "Plastic packaging", "Shopping bag manufacturing"],
    benefits: ["Bulk quantities available", "Reliable Lagos supply", "Pickup and delivery support", "Competitive market pricing"],
    locations: ["Lagos", "Ogun", "Oyo"],
  },
  {
    slug: "malex",
    name: "Malex",
    headline: "Malex Available for Nylon Production",
    description:
      "Malex supply for manufacturers that need dependable raw materials for nylon, plastic film, and packaging operations.",
    summary:
      "A practical material option for businesses that need current pricing, quick confirmation, and reliable follow-up.",
    uses: ["Nylon production", "Printed nylon production", "Plastic film production", "Packaging operations"],
    benefits: ["Current price on request", "Bulk supply support", "Southwest Nigeria enquiries welcome", "WhatsApp-first response"],
    locations: ["Lagos", "Ogun", "Osun"],
  },
];

export const serviceAreas = ["Lagos State", "Ogun State", "Oyo State", "Osun State", "Ondo State", "Ekiti State"];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
