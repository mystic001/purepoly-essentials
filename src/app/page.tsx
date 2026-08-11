import { OrderBuilder } from "./components/OrderBuilder";

const products = [
  {
    name: "Stackable Storage Crates",
    description: "Rigid, washable crates for pantry, laundry, dorm, and stockroom organization.",
    price: "$18",
    tag: "Home",
    color: "from-emerald-500 to-teal-700",
  },
  {
    name: "Utility Food Containers",
    description: "BPA-free polypropylene tubs with tight lids for prep, leftovers, and dry goods.",
    price: "$12",
    tag: "Kitchen",
    color: "from-sky-500 to-indigo-700",
  },
  {
    name: "Modular Drawer Bins",
    description: "Low-profile dividers that keep tools, cosmetics, hardware, and office supplies sorted.",
    price: "$9",
    tag: "Work",
    color: "from-amber-400 to-rose-600",
  },
  {
    name: "Outdoor Multipurpose Tote",
    description: "Impact-resistant carryall for cleaning kits, gardening tools, and weekend errands.",
    price: "$24",
    tag: "Outdoor",
    color: "from-lime-500 to-green-800",
  },
];

const features = [
  "Dishwasher-safe and easy to sanitize",
  "Lightweight without feeling flimsy",
  "Reusable, recyclable polypropylene",
  "Color-coded options for quick sorting",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#20231f]">
      <header className="sticky top-0 z-20 border-b border-[#d8d1c2] bg-[#f7f4ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="text-lg font-bold tracking-wide" href="#top" aria-label="PurePoly Essentials home">
            PurePoly Essentials
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#596052] md:flex">
            <a className="hover:text-[#20231f]" href="#shop">
              Shop
            </a>
            <a className="hover:text-[#20231f]" href="#materials">
              Materials
            </a>
            <a className="hover:text-[#20231f]" href="#order">
              Order
            </a>
            <a className="hover:text-[#20231f]" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="rounded-md bg-[#20231f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3d4439]"
            href="#order"
          >
            Build Order
          </a>
        </nav>
      </header>

      <section id="top" className="border-b border-[#d8d1c2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64785b]">
              Everyday polypropylene goods
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Durable essentials for tidy homes, stocked kitchens, and busy workspaces.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#596052]">
                PurePoly Essentials curates practical polypropylene containers, bins, crates, and totes
                that are easy to clean, easy to reuse, and ready for daily wear.
              </p>
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {["BPA-free", "Reusable", "Bulk-ready", "Easy-clean"].map((item) => (
                <span key={item} className="border border-[#c8c0b0] bg-white/55 px-3 py-2 text-center font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-h-[440px] grid-cols-[1fr_0.8fr] gap-4">
            <div className="relative overflow-hidden rounded-lg bg-[#233327] p-5 text-white shadow-xl">
              <div className="absolute inset-x-8 top-8 h-24 bg-white/15 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c6ead0]">Featured kit</p>
                  <h2 className="mt-3 text-3xl font-black">Kitchen reset bundle</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-36 rounded-md bg-[#e8f2df] p-3 shadow-2xl">
                    <div className="h-full rounded border-4 border-[#3e8a63] bg-[#f9fff4]" />
                  </div>
                  <div className="mt-12 h-28 rounded-md bg-[#cfe0f8] p-3 shadow-2xl">
                    <div className="h-full rounded border-4 border-[#3d6fb6] bg-[#f6fbff]" />
                  </div>
                  <div className="col-span-2 h-24 rounded-md bg-[#ffe0a8] p-3 shadow-2xl">
                    <div className="h-full rounded border-4 border-[#b06a2f] bg-[#fff8e8]" />
                  </div>
                </div>
                <p className="max-w-sm text-sm leading-6 text-[#dce9db]">
                  Nine containers, matching lids, and drawer labels. Designed for fast pantry setups.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-[#f1b547] p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em]">Bulk orders</p>
                <p className="mt-4 text-4xl font-black">15%</p>
                <p className="mt-2 text-sm font-medium">off cartons of 24+</p>
              </div>
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#64785b]">Ships fast</p>
                <p className="mt-4 text-3xl font-black">2-4 day</p>
                <p className="mt-2 text-sm text-[#596052]">standard fulfillment for stocked colors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64785b]">Catalog</p>
            <h2 className="mt-2 text-3xl font-black">Shop the essentials</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#596052]">
            A focused starting range for the places that need sturdy, hygienic organization most.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="rounded-lg border border-[#d8d1c2] bg-white p-4 shadow-sm">
              <div className={`mb-4 h-44 rounded-md bg-gradient-to-br ${product.color} p-4`}>
                <div className="h-full rounded border-4 border-white/70 bg-white/30 shadow-inner" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#64785b]">{product.tag}</span>
                <span className="font-black">{product.price}</span>
              </div>
              <h3 className="mt-3 text-xl font-black">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#596052]">{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="materials" className="bg-[#20231f] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8d8a7]">Why polypropylene</p>
            <h2 className="mt-2 text-3xl font-black">Built for repeat use, spills, drops, and real routines.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-lg border border-white/15 bg-white/8 p-5">
                <p className="text-lg font-bold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64785b]">Order builder</p>
          <h2 className="mt-2 text-3xl font-black">Estimate a starter order</h2>
          <p className="mt-4 max-w-lg leading-7 text-[#596052]">
            Choose a product, quantity, and colorway to get a quick estimate. Larger orders can be
            quoted with carton pricing and mixed assortments.
          </p>
        </div>
        <OrderBuilder />
      </section>

      <section id="contact" className="border-t border-[#d8d1c2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-black">PurePoly Essentials</h2>
            <p className="mt-3 text-sm leading-6 text-[#596052]">
              Practical polypropylene products for homes, food prep, studios, offices, and teams.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Ordering</h3>
            <p className="mt-3 text-sm leading-6 text-[#596052]">orders@purepolyessentials.com</p>
            <p className="text-sm leading-6 text-[#596052]">(555) 013-4200</p>
          </div>
          <div>
            <h3 className="font-bold">Service promise</h3>
            <p className="mt-3 text-sm leading-6 text-[#596052]">
              Clear specs, practical packaging, and replacement support for defective arrivals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
