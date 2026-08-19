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

const southwestLocations = ["Lagos", "Ogun", "Oyo", "Osun", "Ondo", "Ekiti"];

function createMaterialProduct({
  slug,
  name,
  materialType,
  grade,
}: {
  slug: string;
  name: string;
  materialType: "HDPE" | "LDPE";
  grade?: string;
}): Product {
  const gradeText = grade ? ` grade ${grade}` : "";
  const filmText = materialType === "HDPE" ? "film, bag, packaging, and plastic-processing" : "film, packaging, and flexible plastic";

  return {
    slug,
    name,
    headline: `${name} Available for Production`,
    description: `${name} supply for manufacturers that need dependable ${materialType}${gradeText} material for nylon, ${filmText} operations.`,
    summary: `Available for B2B buyers that need current pricing, stock confirmation, and reliable ${materialType} supply support.`,
    uses:
      materialType === "HDPE"
        ? ["Nylon production", "Polythene film", "Shopping bag manufacturing", "Plastic packaging"]
        : ["Nylon production", "Flexible film production", "Plastic packaging", "Polythene applications"],
    benefits: ["Current price on request", "Bulk supply support", "Pickup and delivery support", "WhatsApp-first response"],
    locations: southwestLocations,
  };
}

export const products: Product[] = [
  createMaterialProduct({ slug: "stl-hdpe-fs700", name: "STL HDPE FS700", materialType: "HDPE", grade: "FS700" }),
  createMaterialProduct({ slug: "hivorex-fl7000", name: "Hivorex FL7000", materialType: "HDPE", grade: "FL7000" }),
  createMaterialProduct({ slug: "hdpe-lotrene-tr144", name: "HDPE Lotrene TR144", materialType: "HDPE", grade: "TR144" }),
  createMaterialProduct({ slug: "hdpe-marlex-tr144", name: "HDPE Marlex TR144", materialType: "HDPE", grade: "TR144" }),
  createMaterialProduct({ slug: "hdpe-yulong-tr144", name: "HDPE Yulong TR144", materialType: "HDPE", grade: "TR144" }),
  createMaterialProduct({ slug: "hdpe-sinopec-tr144", name: "HDPE Sinopec TR144", materialType: "HDPE", grade: "TR144" }),
  createMaterialProduct({ slug: "hdpe-sk-8800", name: "HDPE SK 8800", materialType: "HDPE", grade: "8800" }),
  createMaterialProduct({ slug: "hdpe-dow", name: "HDPE Dow", materialType: "HDPE" }),
  createMaterialProduct({ slug: "ldpe-sabic-4024w", name: "LDPE SABIC 4024W", materialType: "LDPE", grade: "4024W" }),
  createMaterialProduct({ slug: "ldpe-exxon-4023at", name: "LDPE Exxon 4023AT", materialType: "LDPE", grade: "4023AT" }),
  createMaterialProduct({ slug: "ldpe-tasnee-4025ad", name: "LDPE Tasnee 4025AD", materialType: "LDPE", grade: "4025AD" }),
  createMaterialProduct({ slug: "ldpe-basell-2227k", name: "LDPE Basell 2227K", materialType: "LDPE", grade: "2227K" }),
];

export const serviceAreas = ["Lagos State", "Ogun State", "Oyo State", "Osun State", "Ondo State", "Ekiti State"];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
