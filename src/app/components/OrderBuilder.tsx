"use client";

import { useMemo, useState } from "react";

const options = [
  { name: "Stackable Storage Crates", price: 18 },
  { name: "Utility Food Containers", price: 12 },
  { name: "Modular Drawer Bins", price: 9 },
  { name: "Outdoor Multipurpose Tote", price: 24 },
];

const colors = ["Clear", "Forest", "Marine", "Citrus"];

export function OrderBuilder() {
  const [product, setProduct] = useState(options[0].name);
  const [quantity, setQuantity] = useState(12);
  const [color, setColor] = useState(colors[0]);

  const selected = options.find((option) => option.name === product) ?? options[0];
  const subtotal = selected.price * quantity;
  const discount = quantity >= 24 ? subtotal * 0.15 : 0;
  const total = subtotal - discount;

  const message = useMemo(() => {
    return `Hello PurePoly Essentials, I would like a quote for ${quantity} ${color.toLowerCase()} ${product}. Estimated total: $${total.toFixed(2)}.`;
  }, [color, product, quantity, total]);

  return (
    <form className="rounded-lg border border-[#d8d1c2] bg-white p-5 shadow-sm">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold">
          Product
          <select
            className="h-12 rounded-md border border-[#c8c0b0] bg-[#fbfaf7] px-3 font-medium outline-none focus:border-[#64785b]"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
          >
            {options.map((option) => (
              <option key={option.name}>{option.name}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Quantity
          <input
            className="h-12 rounded-md border border-[#c8c0b0] bg-[#fbfaf7] px-3 font-medium outline-none focus:border-[#64785b]"
            min="1"
            max="500"
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
          />
        </label>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-bold">Color</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {colors.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-[#c8c0b0] px-3 py-3 text-sm font-semibold"
              >
                <input
                  checked={color === item}
                  name="color"
                  type="radio"
                  value={item}
                  onChange={(event) => setColor(event.target.value)}
                />
                {item}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 rounded-lg bg-[#20231f] p-5 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-[#cfd8cc]">Estimated total</p>
            <p className="mt-1 text-4xl font-black">${total.toFixed(2)}</p>
          </div>
          {discount > 0 ? (
            <span className="rounded-md bg-[#f1b547] px-3 py-2 text-sm font-black text-[#20231f]">15% off</span>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-6 text-[#dce9db]">{message}</p>
        <a
          className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-4 py-2 text-sm font-black text-[#20231f] transition hover:bg-[#f1b547]"
          href={`mailto:orders@purepolyessentials.com?subject=PurePoly%20order%20quote&body=${encodeURIComponent(
            message,
          )}`}
        >
          Request Quote
        </a>
      </div>
    </form>
  );
}
