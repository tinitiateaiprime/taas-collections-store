Here is the **complete current folder structure** for the way we are developing this project right now.

We are keeping it **production-oriented**, **frontend-first**, and **not locking backend yet**.

## Current recommended folder structure

```txt
clothing-store/
├── public/
│   ├── images/
│   │   ├── banners/
│   │   ├── products/
│   │   ├── categories/
│   │   └── brand/
│   ├── icons/
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   │
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   │
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   │
│   │   ├── account/
│   │   │   └── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx
│   │   │
│   │   ├── search/
│   │   │   └── page.tsx
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Loader.tsx
│   │   │   └── EmptyState.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── TopBar.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductImage.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductInfo.tsx
│   │   │   ├── ProductPrice.tsx
│   │   │   ├── ProductVariantSelector.tsx
│   │   │   └── AddToCartButton.tsx
│   │   │
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── QuantityControl.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   ├── CheckoutForm.tsx
│   │   │   └── SearchForm.tsx
│   │   │
│   │   └── account/
│   │       ├── AccountSidebar.tsx
│   │       ├── ProfileCard.tsx
│   │       └── OrderHistory.tsx
│   │
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedCategories.tsx
│   │   │   ├── NewArrivals.tsx
│   │   │   ├── BestSellers.tsx
│   │   │   ├── PromoBanner.tsx
│   │   │   └── NewsletterSection.tsx
│   │   │
│   │   ├── shop/
│   │   │   ├── ShopToolbar.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ShopResults.tsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductDetailsSection.tsx
│   │   │   ├── RelatedProducts.tsx
│   │   │   └── ProductDescription.tsx
│   │   │
│   │   ├── cart/
│   │   │   └── CartSection.tsx
│   │   │
│   │   └── checkout/
│   │       └── CheckoutSection.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   ├── formatCurrency.ts
│   │   ├── helpers.ts
│   │   └── config.ts
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── categories.ts
│   │   ├── products.ts
│   │   ├── banners.ts
│   │   └── footer.ts
│   │
│   └── types/
│       ├── product.ts
│       ├── category.ts
│       ├── cart.ts
│       ├── user.ts
│       └── order.ts
│
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── eslint.config.mjs
```

## Important note

This is the **working structure we should follow**, but that does **not** mean we create all files immediately.

We create:

* folders first
* then only the files needed for the current step

That keeps the project clean.

---

## What we are following

This is the development approach we are using for this client project:

### 1. Frontend first

We are **not confirming backend yet** because:

* database may be **MySQL** or **PostgreSQL**
* backend architecture is still not finalized
* you also have a **sample website design** to follow first

So right now we are focusing on:

* project structure
* layout foundation
* reusable UI
* page and section planning

### 2. Production-style structure

We are **not treating this like a student project**.

That means:

* not everything inside `app`
* proper separation of routes, components, sections, data, and types
* minimal but scalable structure
* reusable architecture from the beginning

### 3. App Router convention

We are using **Next.js App Router**.

So:

* `app/` = routes and page-level files
* `components/` = reusable UI blocks
* `sections/` = page composition blocks
* `lib/` = helpers and utilities
* `types/` = shared TypeScript types
* `data/` = temporary/mock/static data until backend is finalized

### 4. Step-by-step development

We are going **slowly**, one step at a time.

Current style:

* first setup project
* then clean starter project
* then create proper folder structure
* then create layout foundation
* then build sections/pages based on sample design
* only later confirm backend and database

### 5. No backend lock yet

Right now we are **not** locking:

* Prisma
* Auth
* API routes
* MySQL
* PostgreSQL

We will decide that after:

* frontend structure is clearer
* sample design/pages are understood
* product flow is clearer

---

## Summary you can paste later to remind me

Use this when you come back after a gap:

```txt
We are building a production clothing brand shopping website in Next.js using App Router and TypeScript.

Current approach:
- frontend first
- backend not confirmed yet
- database not confirmed yet (may be MySQL or PostgreSQL)
- we are following production folder structure, not student project style
- app folder only for routes/pages/layout
- reusable UI goes into components
- page blocks go into sections
- helpers go into lib
- temporary static/mock content goes into data
- shared interfaces go into types

We are developing slowly, step by step.
We already:
- created the Next.js project
- cleaned starter code
- created src folder
- moved app into src
- set project to use src
- created base production-style folders

Next work should continue from layout foundation and sample-design-based page building.
```

---

## Very short memory version

```txt
Production Next.js clothing website.
Frontend first.
Backend/database not finalized.
Using src-based clean structure.
app = routes only.
components = reusable UI.
sections = page sections.
lib = helpers.
data = mock/static.
types = TS types.
Proceed step by step based on sample design.
```
