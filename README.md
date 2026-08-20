# Purepoly Essentials Website

Official website for **Purepoly Essentials**, a supplier of raw materials used in nylon and plastic production.

The website is designed as a lead-generation platform for nylon manufacturers and plastic-processing businesses.

## Business Objectives

- Showcase available nylon-production raw materials.
- Generate enquiries from nylon and plastic manufacturers.
- Convert Facebook and Instagram advertising traffic into qualified leads.
- Direct potential customers to WhatsApp.
- Collect quotation requests.
- Establish trust and credibility online.
- Improve visibility on Google for relevant product searches.

## Implemented Phase 1

- Homepage with clear manufacturer-focused positioning and primary WhatsApp CTA
- Shared navigation and footer
- Products page
- Product landing pages for each listed HDPE and LDPE material
- About page
- Contact page
- Request quote page
- Product-specific WhatsApp messages
- Client-side quote form that opens a prefilled WhatsApp enquiry
- SEO metadata for the main routes and product landing pages
- Responsive mobile-first layout

## Technology Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Application Structure

```text
src/
|-- app/
|   |-- page.tsx
|   |-- layout.tsx
|   |-- products/
|   |   |-- page.tsx
|   |   `-- [slug]/page.tsx
|   |-- about/page.tsx
|   |-- contact/page.tsx
|   |-- request-quote/page.tsx
|
|-- components/
|   |-- Navbar.tsx
|   |-- Hero.tsx
|   |-- ProductCard.tsx
|   |-- WhatsAppButton.tsx
|   |-- QuoteForm.tsx
|   `-- Footer.tsx
|
`-- data/
    `-- products.ts
```

## Main Conversion Flow

```text
Facebook / Instagram Ad
        |
Product Landing Page
        |
Product Information
        |
WhatsApp / Quote Request
        |
Qualified Lead
        |
Quotation
        |
Customer
```

## Available Materials

- STL HDPE FS700
- Hivorex FL7000
- HDPE Lotrene TR144
- HDPE Marlex TR144
- HDPE Yulong TR144
- HDPE Sinopec TR144
- HDPE SK 8800
- HDPE Dow
- LDPE SABIC 4024W
- LDPE Exxon 4023AT
- LDPE Tasnee 4025AD
- LDPE Basell 2227K

Each product has a dedicated landing page so ads can point to the exact material being promoted.

## Product Images

Product images live in:

```text
public/images/products/
```

Use the product slug as the filename where possible, for example:

```text
public/images/products/hdpe-lotrene-tr144.jpg
```

The website reads image paths from `src/data/products.ts`.

## Target Customers

- Nylon manufacturing businesses
- Polythene manufacturers
- Plastic film producers
- Shopping bag manufacturers
- Printed nylon producers
- Plastic packaging manufacturers

## Future Roadmap

Phase 2:

- Lead database
- Email notifications
- Meta Pixel
- Google Analytics
- Google Search Console
- UTM tracking

Phase 3:

- CRM dashboard
- Product inventory status
- Customer accounts
- Order history
- Automated WhatsApp workflows
- Advanced analytics

## Development Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Local Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Purepoly Essentials

**Reliable Raw Materials. Reliable Production.**
