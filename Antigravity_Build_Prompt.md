# Antigravity Build Prompt — Refurbished PC Parts E-Commerce Website

## PROJECT OVERVIEW

Build a fully responsive e-commerce storefront for refurbished PC parts using **React + Vite + Tailwind CSS** (or plain CSS). The design is extracted from a Figma file. All text content, colors, spacing, and component structure must match the specs below exactly.

**Font:** Poppins (300/400/500/600/700) from Google Fonts. Use Inter (400/500/600) only for small UI labels (condition text, button text).

**Responsive breakpoints:** Desktop 1200px+, Tablet 890px, Mobile 390px.

**Image folder:** Create a folder `/public/images/` to store all product and section images manually. Reference images as `/images/<filename>.jpg` in code.

---

## DESIGN TOKENS (CSS Variables)

```css
--color-white: #FFFFFF;
--color-bg-main: #F8FAFC;
--color-bg-elevated: #F1F5F9;
--color-border: #E2E8F0;
--color-border-hover: #CBD5E1;
--color-text-primary: #0F172A;
--color-text-secondary: #475569;
--color-text-muted: #64748B;
--color-text-gray-light: #94A3B8;
--color-dark: #0F172A;
--color-dark-2: #1E293B;
--color-dark-3: #111C33;
--color-accent: #FFB53E;
--color-accent-hover: #F59E0B;
--color-accent-yellow: #FFE27A;
--color-purple: #8A38F5;
--color-blue: #2563EB;
--color-green: #10B981;
--color-red: #EF4444;

--font-primary: 'Poppins', system-ui, sans-serif;
--font-ui: 'Inter', system-ui, sans-serif;

--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-full: 9999px;

--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 16px -2px rgba(0,0,0,0.08);
--shadow-card: 0 4px 12px rgba(0,0,0,0.08);
--shadow-card-hover: 0 2px 6px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.30);
--shadow-lg: 0 10px 30px rgba(0,0,0,0.12);

--shadow-btn-add-cart: 0 4px 12px rgba(0,0,0,0.10);
```

---

## TYPOGRAPHY SCALE (from Figma)

| Style Name | Font | Weight | Size | Line Height | Usage |
|---|---|---|---|---|---|
| H1 | Poppins | SemiBold (600) | 40px | 48px | Hero title |
| H2 | Poppins | SemiBold (600) | 32px | 48px | Section titles |
| H4 | Poppins | Medium (500) | 20px | 30px | Card titles, subsections |
| Body Large | Poppins | Medium (500) | 18px | 27px | Nav links, prices, hero desc |
| Body | Poppins | Regular (400) | 16px | 19.2px | General body text |
| Body Small | Poppins | Regular (400) | 14px | 21px | Product titles |
| Label | Inter | Regular (400) | 10px | 12px | Condition label (centered) |
| Button | Inter | Medium (500) | 16px | — | Add to Cart button text |

---

## PAGE STRUCTURE (top to bottom)

```
<Header>           — Navbar (sticky)
<Hero>             — Hero section with headline + CTAs + trust badges
<CategoryBar>      — Horizontal scrollable category chips
<Catalog>          — Section title + Filter sidebar (left) + Product grid (right)
<Deals>            — Limited Time Deal with 2 promo banners + View All
<Refurbishment>    — 4-step process: Used → Tested → Certified → Ready to Ship
<Reviews>          — Customer review cards (6 items) + View All
<FAQ>              — Accordion with 7 questions
<Footer>           — Newsletter + Social + App Download + Company links + Quick Links
<CartDrawer>       — Slide-out cart from right (overlay)
<ProductModal>     — Quick-view product detail modal (overlay)
```

---

## COMPONENT 1: NAVBAR (sticky header)

### Structure
```
┌──────────────────────────────────────────────────────────┐
│  [LOGO]    Home  Shop  Deals  About    [🔍 Search...]  🛒(badge)  ☰  │
└──────────────────────────────────────────────────────────┘
```

### Specs
- **Header background:** #FFFFFF
- **Border bottom:** 1px solid #E2E8F0
- **Shadow:** 0 2px 8px rgba(0,0,0,0.04)
- **Position:** Sticky, top: 0, z-index: 50
- **Padding:** 14px 0 (main bar)

### Logo
- Text: "LOGO" (placeholder text, not an image)
- Font: Poppins ExtraBold, 1.4rem (22px)
- Color: #0F172A
- Cursor: pointer (scrolls to top on click)

### Nav Links (desktop only, hidden below 768px)
- Links: Home, Shop, Deals, About
- Font: Poppins Medium 18px, color #0F172A
- Each link has a **2px solid black underline** that appears on hover (scale from left)
- Padding: 8px 2px
- "Home" → scroll to top, "Shop" → scroll to catalog, "Deals" → scroll to deals section

### Search Bar
- Placeholder: "Search PC Component"
- Background: #F1F5F9
- Border: 1px solid #E2E8F0
- Border radius: 9999px (pill)
- Padding: 10px 16px
- Search icon (lucide-react `Search`, 18px, color #64748B) on left
- Clear button (lucide-react `X`, 14px) appears when text entered
- On focus: background turns white, border becomes #FFB53E, box-shadow 0 0 0 3px rgba(255,181,62,0.15)
- Max width: 520px, flex: 1

### Cart Button
- Icon: lucide-react `ShoppingBag`, 20px
- Border: 1px solid #E2E8F0, border-radius: 9999px, background: #FFFFFF
- Padding: 10px 14px
- Badge: absolute, top: -4px, right: -4px, background #FFB53E, color #000, font 0.68rem bold, border 2px solid #FFF, border-radius 9999px
- On click: opens CartDrawer

### Mobile Hamburger (below 768px)
- Icon: lucide-react `Menu` (24px), toggles to `X` when open
- Only visible below 768px
- Opens a dropdown nav with links listed vertically

### Mobile Nav (below 768px)
- Display: none by default, block when `.open`
- Background: #FFFFFF
- Border-top: 1px solid #E2E8F0
- Links displayed vertically, padding 10px 0
- Font: Poppins Medium 0.95rem, color #475569

---

## COMPONENT 2: HERO SECTION

### Structure
```
┌─────────────────────────────────────────────────────┐
│  ┌─────────────────────┐   ┌──────────────────────┐  │
│  │ Powerful PC Parts.  │   │                      │  │
│  │ Smarter Prices.      │   │     [Hero Image]    │  │
│  │                      │   │  (refurbished GPU)  │  │
│  │ Certified refur...   │   │                      │  │
│  │                      │   │                      │  │
│  │ [Shop Refurb Parts]  │   │                      │  │
│  │ [Explore Deals]      │   │                      │  │
│  │                      │   │                      │  │
│  │ 🏷 Save Up to 40%    │   │                      │  │
│  │ 🛡 Up to 12 months   │   │                      │  │
│  └─────────────────────┘   └──────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Specs
- **Background:** linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)
- **Border bottom:** 1px solid #E2E8F0
- **Padding:** 48px 0 36px
- **Layout:** CSS Grid, 2 columns (1.15fr 0.85fr), gap 40px, align-items: center
- **On tablet/mobile (≤1024px):** single column, text centered

### Left Column — Text Content

**Hero Title:**
- "Powerful PC Parts." (line 1, black #0F172A)
- "Smarter Prices." (line 2, color #F59E0B)
- Font: Poppins SemiBold 40px (2.5rem), line-height 1.12, letter-spacing -0.03em
- `<br />` between the two lines

**Hero Description:**
- Text: "Certified refurbished components tested for performance and reliability"
- Font: Poppins Medium 18px (1.05rem), line-height 1.6, color #475569
- Max width: 580px
- Margin bottom: 28px

**Hero Actions (buttons):**
- Two buttons side by side, gap 14px, margin bottom 32px
- On mobile: stack vertically, full width

  **Button 1 — Primary:**
  - Text: "Shop Refurbished Parts"
  - Icon: lucide-react `ArrowRight` (18px) after text
  - Background: linear-gradient(135deg, #FFB53E 0%, #F59E0B 100%)
  - Color: #FFFFFF
  - Padding: 12px 24px
  - Border radius: 10px
  - Box shadow: 0 4px 14px rgba(255,181,62,0.35)
  - Hover: brightness(1.06), translateY(-2px), shadow 0 6px 20px rgba(255,181,62,0.45)
  - On click: scroll to catalog section

  **Button 2 — Outline:**
  - Text: "Explore Deals"
  - Background: #FFFFFF, border 1px solid #E2E8F0, color #0F172A
  - Padding: 12px 24px, border radius 10px
  - Hover: background #F1F5F9, border #CBD5E1
  - On click: scroll to deals section

**Trust Badges (below buttons):**
- Two badges, stacked vertically, gap 10px
- Each badge: icon (18px, color #F59E0B) + text (Poppins 0.88rem, color #475569)

  Badge 1:
  - Icon: lucide-react `BadgePercent`
  - Text: "Certified Refurbished PC Parts - Save Up to 40%"

  Badge 2:
  - Icon: lucide-react `ShieldCheck`
  - Text: "Up to 12 months warranty"

### Right Column — Hero Image
- Container: border-radius 16px, overflow hidden, border 1px solid #E2E8F0, background #0F172A, box-shadow 0 10px 30px rgba(0,0,0,0.12)
- Image: full width, aspect-ratio 16/11, object-fit cover
- **Image source:** `/images/hero-pc-parts.jpg` (save manually in /public/images/)
- Fallback: `https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&auto=format&fit=crop&q=80`
- Hover: image scales 1.03 over 0.5s

---

## COMPONENT 3: CATEGORY BAR (horizontal chips)

### Structure
```
┌──────────────────────────────────────────────────────────────────┐
│  Categories                                                      │
│  [All] [Laptop] [Processor] [Graphics Card] [RAM] [SSD] [HDD] →  │
│  [Monitor] [Keyboard] [Mouse] [Motherboard] [Cooler] [PC Cases]  │
│  [Power Supplies]                                                │
└──────────────────────────────────────────────────────────────────┘
```

### Specs
- **Section padding:** 36px 0 24px
- **Title:** "Categories" — Poppins SemiBold 32px (H2)
- **Chips container:** flex, gap 8px, overflow-x: auto, horizontal scroll
- **Each chip:**
  - Font: Poppins Medium 0.85rem (14px)
  - Color: #475569
  - Background: #FFFFFF
  - Border: 1px solid #E2E8F0
  - Border radius: 9999px (pill)
  - Padding: 8px 18px
  - White-space: nowrap, flex-shrink: 0
  - Hover: border #CBD5E1, background #F1F5F9
  - **Active state:** background #0F172A, color #FFFFFF, border #0F172A, font-weight 600

### Category List (14 items, exact order)
1. All
2. Laptop
3. Processor
4. Graphics Card
5. RAM
6. SSD
7. HDD
8. Monitor
9. Keyboard
10. Mouse
11. Motherboard
12. Cooler
13. PC Cases
14. Power Supplies

---

## COMPONENT 4: CATALOG SECTION (filter + product grid)

### Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Best Seller Product                                        │
│  ┌──────────┐  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐            │
│  │ FILTER   │  │ P1  │ │ P2  │ │ P3  │ │ P4  │            │
│  │          │  └─────┘ └─────┘ └─────┘ └─────┘            │
│  │ Sort ▼   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐            │
│  │          │  │ P5  │ │ P6  │ │ P7  │ │ P8  │            │
│  │ Price    │  └─────┘ └─────┘ └─────┘ └─────┘            │
│  │ ○ Under  │                                               │
│  │   5,000  │          [View All]                            │
│  │ ○ 5000-  │                                               │
│  │   9,999  │                                               │
│  │ ○ 10K-   │                                               │
│  │   49,999 │                                               │
│  │          │                                               │
│  │ Condition│                                               │
│  │ ○ New    │                                               │
│  │ ○ Excell │                                               │
│  │ ○ V Good │                                               │
│  │ ○ Good   │                                               │
│  │          │                                               │
│  │ Component│                                               │
│  │ ☐ Proc   │                                               │
│  │ ☐ GPU    │                                               │
│  │ ☐ RAM    │                                               │
│  │ ...      │                                               │
│  │          │                                               │
│  │ [Apply]  │                                               │
│  └──────────┘                                               │
└─────────────────────────────────────────────────────────────┘
```

### Specs
- **Section padding:** 20px 0 60px
- **Section title:** "Best Seller Product" (or "{CategoryName} Components" when filtered) — Poppins SemiBold 32px
- **Layout:** CSS Grid, 2 columns (260px 1fr), gap 32px, align-items flex-start
- **On tablet/mobile (≤1024px):** single column, filter goes on top

---

## COMPONENT 4A: FILTER SIDEBAR (left column)

### Specs
- **Background:** #FFFFFF
- **Border:** 1px solid #E2E8F0
- **Border radius:** 10px
- **Padding:** 22px
- **Box shadow:** 0 1px 3px rgba(0,0,0,0.06)
- **Position:** sticky, top 90px (desktop only)

### Header
- Flex, space-between, padding-bottom 14px, border-bottom 1px solid #E2E8F0
- Title: icon `SlidersHorizontal` (18px) + text "Filter" — Poppins Bold 1rem

### Sort Dropdown
- Group title: "Sort" — Poppins Bold 0.85rem
- Toggle button: full width, flex space-between, padding 10px 14px, border 1px solid #E2E8F0, border-radius 10px, background #F1F5F9, font 0.85rem
- Chevron icon: `ChevronDown` 16px, rotates 180deg when open
- Options list: absolute, full width, background #FFF, border 1px solid #E2E8F0, border-radius 10px, box-shadow 0 4px 16px rgba(0,0,0,0.08), z-index 10
- Each option: padding 10px 14px, font 0.84rem, color #475569, hover background #F1F5F9
- Active option: background #FFFBEB, color #F59E0B, font-weight 600

**Sort options (6):**
1. Relevance
2. Latest
3. Ascending: A to Z
4. Descending: Z to A
5. Price: Low to High
6. Price: High to Low

### Price Filter (radio buttons)
- Group title: "Price"
- Radio labels: flex, gap 10px, font 0.84rem, color #475569, accent-color #F59E0B, radio 16x16px

**Price ranges (6):**
1. Under 5,000
2. 5,000 - 9,999
3. 10,000 - 49,999
4. 50,000 - 99,999
5. 1,00,000 - 4,99,999
6. Above 5,00,000

### Condition Filter (radio buttons)
- Group title: "Condition"
- Options (4): New, Excellent, Very Good, Good

### Component Filter (checkboxes)
- Group title: "Component"
- Options (12): Processor, Graphics Card, RAM, SSD, Hard Disk, Monitor, Keyboard, Mouse, Motherboard, Cooler, Laptop, Power Supplies

### Apply Button
- Full width, primary style (gradient orange), padding 12px 24px, border-radius 10px, margin-top 16px

---

## COMPONENT 4B: PRODUCT CARD (in the grid)

### Structure
```
┌─────────────────────────┐
│                         │
│    [Product Image]      │  ← 140px height, FILL
│                         │
├─────────────────────────┤
│  Condition : Very Good   │  ← Inter 10px, centered
│  MSI RTX 3080 10GB...   │  ← Poppins 14px/21px, 2 lines
│  $405.95        ★★★★☆ 4.5│  ← Price left, rating right
│  $653.74      Save 38%   │  ← Strikethrough left, Save badge right
│  ┌─────────────────────┐ │
│  │  🛒 Add to Cart      │ │  ← Full width, #F8FAFC bg, Inter 16px
│  └─────────────────────┘ │
└─────────────────────────┘
```

### Exact Specs
- **Card container:**
  - Background: #FFFFFF
  - Border: 1px solid #E2E8F0
  - Border radius: **12px**
  - Box shadow: 0 4px 12px rgba(0,0,0,0.08)
  - Display: flex, flex-direction: column
  - Transition: box-shadow 0.25s, transform 0.25s

- **Card hover:**
  - Transform: translateY(-3px)
  - Box shadow: 0 2px 6px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.30)

- **Image container:**
  - Height: **140px** (fixed, not aspect-ratio)
  - Background: #0F172A
  - Overflow: hidden
  - Image: width 100%, height 100%, object-fit cover
  - Hover: image scales 1.05 over 0.4s

- **Content body:**
  - Padding: **12px** (all sides)
  - Display: flex, flex-direction: column
  - Gap: **8px** (between each child element)

- **Condition label:**
  - Text: "Condition : Very Good"
  - Font: **Inter Regular 10px**, line-height 12px
  - Color: #0F172A
  - Text-align: center

- **Product title:**
  - Font: **Poppins Regular 14px**, line-height 21px
  - Color: #0F172A
  - 2 lines max (line-clamp: 2)
  - Min height: 42px
  - Cursor: pointer (opens quick-view modal)

- **Price row 1** (flex, space-between):
  - Left: sale price — Poppins Medium 18px, color #0F172A
  - Right: rating stars (5 stars, 12px each, filled #F59E0B, empty #E2E8F0) + score number

- **Price row 2** (flex, space-between):
  - Left: original price — 0.85rem, color #64748B, line-through
  - Right: "Save X%" badge — Inter 0.75rem, font-weight 600, color #EF4444

- **Add to Cart button:**
  - Full width (width: 100%)
  - Background: **#F8FAFC**
  - Border: none
  - Color: **#0F172A** (black text)
  - Font: **Inter Medium 16px**
  - Padding: 8px 12px
  - Border radius: **8px**
  - Box shadow: **0 4px 12px rgba(0,0,0,0.10)**
  - Display: flex, center, gap 8px
  - Icon: `ShoppingCart` 16px
  - Text: "Add to Cart"
  - Hover: background #FFFFFF, shadow 0 2px 6px rgba(0,0,0,0.15) + 0 1px 2px rgba(0,0,0,0.30), translateY(-1px)

### Product Grid
- Display: grid
- Grid template: repeat(auto-fill, minmax(280px, 1fr))
- Gap: 24px
- Below 480px: single column

### Products Data (12 items)

| # | Name | Brand | Category | Condition | Price | Original Price | Rating |
|---|---|---|---|---|---|---|---|
| 1 | LG ULTRAGEAR - 27GP850 - 27 inch WQHD 165Hz - PC Monitor | LG | monitor | Very Good | $201.07 | $347.11 | 4.5 |
| 2 | MSI RTX 3080 10GB Ventus 3X - PC Components | MSI | gpu | Very Good | $405.95 | $653.74 | 4.5 |
| 3 | GALAX RTX 3080 10GB 1-Click OC - PC Components | GALAX | gpu | Very Good | $378.53 | $601.02 | 4.5 |
| 4 | Ryzen 7 3800XT - PC Components | AMD | processor | Very Good | $158.16 | $226.69 | 4.5 |
| 5 | CORSAIR Vengeance LPX 1x8GB DDR4 3200MHz - RAM | CORSAIR | ram | Very Good | $49.55 | $63.26 | 4.5 |
| 6 | ASUS TUF - VG27AQL1A - 27 inch WQHD 170Hz - PC Monitor | ASUS | monitor | Very Good | $189.79 | $284.69 | 4.5 |
| 7 | ASUS ROG - PG32UQ - 32 inch UHD 144Hz - PC Monitor | ASUS | monitor | Very Good | $738.10 | $1112.42 | 4.5 |
| 8 | BENQ MOBIUZ - EX3210U - 32 inch UHD 144Hz - PC Monitor | BENQ | monitor | Very Good | $506.12 | $738.10 | 4.5 |
| 9 | GIGABYTE AORUS - FI25F - 24.5 inch FHD 240Hz - PC Monitor | GIGABYTE | monitor | Very Good | $152.88 | $242.51 | 4.5 |
| 10 | ASUS RTX 3080 TUF 10GB Gaming - PC Components | ASUS | gpu | Very Good | $405.95 | $653.74 | 4.5 |
| 11 | Meta Quest 3 512 GB - PC Components (Pre-owned) | Meta | gpu | Very Good | $442.85 | $579.93 | 4.5 |
| 12 | ADATA XPG Spectrix D60G 2x8GB DDR4 3600MHz - RAM | ADATA | ram | Very Good | $126.52 | $168.70 | 4.5 |

**Product images:** Save manually in `/public/images/products/` as `product-1.jpg` through `product-12.jpg`. Fallback: use Unsplash URLs (GPU/monitor/RAM themed photos).

### View All Button
- Below the grid, centered, margin-top 36px
- Shows when filtered results > 8 (initially show 8, click to show 4 more)
- Style: outline button (white bg, border #E2E8F0, Poppins 0.95rem)

---

## COMPONENT 5: DEALS / LIMITED TIME DEAL

### Structure
```
┌─────────────────────────────────────────────────────┐
│  Limited Time Deal                                  │
│  "Upgrade your Setup Without Breaking the Bank"     │
│                                                     │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │ DEALS            │  │ DEALS            │        │
│  │ DEALS ON MONITORS│  │ DEALS ON CABINET │        │
│  │ [Shop Monitors →]│  │ [Shop Cabinets →]│        │
│  └──────────────────┘  └──────────────────┘        │
│                                                     │
│              [View All Deals]                       │
└─────────────────────────────────────────────────────┘
```

### Specs
- **Section padding:** 20px 0 50px
- **Title:** "Limited Time Deal" — Poppins SemiBold 32px
- **Tagline:** "Upgrade your Setup Without Breaking the Bank" — italic, 1rem, #475569

### Deal Cards (2 side by side)
- **Grid:** 2 columns, gap 24px. Single column on tablet/mobile.
- Each card: grid 2 columns (1.2fr 0.8fr) — text content left, image right

**Deal Card 1 — Monitors:**
- Background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%)
- Text color: white
- "DEALS" label: color #FFB53E, font 0.8rem bold, letter-spacing 0.06em
- Heading: "DEALS ON MONITORS" — Poppins Bold 1.5rem, white
- CTA button: "Shop Monitors" + `ArrowRight` icon, bg rgba(255,255,255,0.15), border rgba(255,255,255,0.25), border-radius 10px, padding 8px 16px
- Image: `/images/deal-monitors.jpg` (save manually)
- On click: set category to "monitor", scroll to catalog

**Deal Card 2 — Cabinet:**
- Background: linear-gradient(135deg, #2D1515 0%, #0F172A 100%)
- Same structure, heading "DEALS ON CABINET"
- CTA: "Shop Cabinets"
- Image: `/images/deal-cabinet.jpg` (save manually)
- On click: set category to "case", scroll to catalog

### View All Deals Button
- Centered, margin-top 32px
- Style: outline button

---

## COMPONENT 6: REFURBISHMENT PROCESS

### Structure
```
┌──────────────────────────────────────────────────┐
│            Refurbishment Process                  │
│  How we guarantee desktop-grade performance...   │
│                                                  │
│  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐│
│  │ 01     │   │ 02     │   │ 03     │   │ 04     ││
│  │ 📦     │   │ 🛡     │   │ ✨     │   │ ✅     ││
│  │ Used   │   │ Tested │   │ Certif │   │ Ready  ││
│  │        │   │        │   │        │   │ to Ship││
│  │ We     │   │ Every  │   │ Only   │   │ Cleaned││
│  │ source..│   │ undergo│   │ pass.. │   │ packed ││
│  └────────┘   └────────┘   └────────┘   └────────┘│
└──────────────────────────────────────────────────┘
```

### Specs
- **Section background:** #FFFFFF
- **Border top + bottom:** 1px solid #E2E8F0
- **Padding:** 60px 0
- **Title:** "Refurbishment Process" — centered, Poppins SemiBold 32px
- **Subtitle:** "How we guarantee desktop-grade performance at a fraction of retail prices"
- **Grid:** repeat(auto-fit, minmax(250px, 1fr)), gap 24px, margin-top 40px

### Card Specs
- Background: #F8FAFC, border 1px solid #E2E8F0, border-radius 10px, padding 28px 20px
- Hover: translateY(-4px), border #FFB53E, background #FFFFFF, shadow 0 4px 16px rgba(0,0,0,0.08)
- Top row: icon wrapper (52x52px, border-radius 10px, background #FFF7ED, color #F59E0B) on left + step number "01"/"02"/"03"/"04" (font 1.4rem, weight 900, color #CBD5E1) on right
- Title: Poppins Bold 1.05rem, #0F172A
- Description: 0.85rem, #475569, line-height 1.55

### 4 Steps (exact text)

**Step 01 — Used**
- Icon: `Truck`
- Text: "We carefully source pre-owned, open-box, and enterprise hardware from trusted channels."

**Step 02 — Tested**
- Icon: `ShieldCheck`
- Text: "Every component undergoes multi-point stress, voltage, and thermal benchmark checks."

**Step 03 — Certified**
- Icon: `Sparkles`
- Text: "Only components that pass 100% of our strict quality standards receive our stamp of approval."

**Step 04 — Ready to Ship**
- Icon: `CheckCircle2`
- Text: "Cleaned, safely packed in anti-static protective gear, and ready to power your setup."

---

## COMPONENT 7: CUSTOMER REVIEWS

### Structure
```
┌──────────────────────────────────────────────────┐
│              Customer Review                      │
│  Real feedback from gamers, creators, and...     │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ ★★★★★ 4.5│ │ ★★★★ 4.0 │ │ ★★★★ 4.0 │         │
│  │ "comment"│ │ "comment"│ │ "comment"│         │
│  │ Name     │ │ Name     │ │ Name     │         │
│  └──────────┘ └──────────┘ └──────────┘         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ ...      │ │ ...      │ │ ...      │         │
│  └──────────┘ └──────────┘ └──────────┘         │
│                [View All]                        │
└──────────────────────────────────────────────────┘
```

### Specs
- **Section padding:** 60px 0
- **Title:** "Customer Review" — centered, Poppins SemiBold 32px
- **Subtitle:** "Real feedback from gamers, creators, and builders who saved on certified hardware"
- **Grid:** repeat(auto-fit, minmax(300px, 1fr)), gap 24px, margin-top 36px

### Review Card Specs
- Background: #FFFFFF, border 1px solid #E2E8F0, border-radius 10px, padding 24px
- Box shadow: 0 1px 3px rgba(0,0,0,0.06)
- Display: flex, flex-direction: column, justify-content: space-between

**Stars row:**
- 5 stars (16px each), filled #F59E0B, empty #E2E8F0
- Rating text: "4.5/5" — 0.8rem, bold, #0F172A, margin-left 6px

**Comment:**
- Font: 0.92rem, color #475569, line-height 1.6, italic, margin-bottom 16px
- Wrapped in quotes

**Author row** (border-top 1px solid #E2E8F0, padding-top 12px):
- Left: reviewer name — Poppins Bold 0.88rem, #0F172A
- Right: date — 0.72rem, #64748B

### Review Data (6 items)

| Name | Rating | Comment | Date |
|---|---|---|---|
| Subhasis Banerjee | 5 | Ordered a mini PC from this platform. Received in great condition and it is running great. Would definitely suggest others. | Jan 2026 |
| Ayan Ghosh | 4 | Ordered an Asus RTX 3090 Turbo, got a good deal on the price and the card arrived in good condition. | Dec 2025 |
| Rebanta Paul | 4 | Keeping it brief. Had a GPU I had been using for a long time and one I was looking to sell after upgrading. Found a few marketplaces to choose from and... | Dec 2025 |
| Ahan Ganguly | 4 | The website is great for many refurbished products which will be delivered directly at your door step with amazing warranty. I have recently ordered an i5-3470 processor and... | Nov 2025 |
| Soumili Mandal | 4 | Great platform for refurbished PC parts. The quality and service exceeded my expectations. Highly recommended for budget builders. | Nov 2025 |
| Soumyojit Sengupta | 5 | Awesome deals, quick response with follow-ups when troubleshooting. Will definitely buy again. | Oct 2025 |

### View All Button
- Centered, margin-top 32px, outline style

---

## COMPONENT 8: FAQ ACCORDION

### Structure
```
┌──────────────────────────────────────────────────┐
│          Questions on your mind?                  │
│  Everything you need to know about refurbished...│
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │ What is a Refurbished Product?        ▼    │  │
│  │ This is a used or open box product that    │  │
│  │ has been professionally repaired...         │  │
│  └────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────┐  │
│  │ Do these products include warranty?   ▼    │  │
│  └────────────────────────────────────────────┘  │
│  ... (7 total)                                   │
└──────────────────────────────────────────────────┘
```

### Specs
- **Section background:** #F8FAFC
- **Padding:** 60px 0
- **Container max-width:** 820px, centered
- **Title:** "Questions on your mind?" — centered, Poppins SemiBold 32px
- **Subtitle:** "Everything you need to know about refurbished products, warranty, and more"
- **Accordion gap:** 12px, margin-top 36px

### FAQ Item Specs
- **Default:** background #FFFFFF, border 1px solid #E2E8F0, border-radius 10px, overflow hidden, shadow 0 1px 3px rgba(0,0,0,0.06)
- **Open:** border #CBD5E1, shadow 0 4px 16px rgba(0,0,0,0.08)
- **Question button:** full width, flex space-between, padding 18px 20px, text-align left, font Poppins SemiBold 0.98rem, color #0F172A
- **Chevron:** `ChevronDown` 18px, color #64748B, rotates 180deg when open (color changes to #F59E0B)
- **Answer:** padding 0 20px 20px, font 0.9rem, color #475569, line-height 1.6
- **First item is open by default**

### 7 Questions (exact text)

1. **Q:** What is a Refurbished Product?
   **A:** This is a used or open box product that has been professionally repaired, restored, cleaned and put into perfect condition — you get maximum performance like it is brand new but at significantly lower prices!

2. **Q:** Do these products include warranty?
   **A:** Up to 12 months warranty covers every single component and you can buy the products without fear and worries.

3. **Q:** Are the Low Prices actually real, or are they just a gimmick?
   **A:** Absolutely real! We provide you with open-box items and enterprise hardware and that is why the price is significantly lower than usual.

4. **Q:** What is the return policy?
   **A:** There is always an opportunity for you to return an item that you ordered if it does not satisfy your requirements or does not fit into your configuration.

5. **Q:** How is the packaging?
   **A:** The packaging is professional and reliable. Every single product is packaged using anti-static ESD shields and special shock-proof material.

6. **Q:** Is the performance thoroughly tested?
   **A:** The performance is tested and even rigorously tested. Stress test, thermal testing and voltage testing are carried out by multiple points.

7. **Q:** What do other customers say?
   **A:** You can read the opinions of other satisfied builders in our verified buyer reviews section.

---

## COMPONENT 9: FOOTER

### Structure
```
┌──────────────────────────────────────────────────────────┐
│  FOOTER (background: #0F172A)                           │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ "Get the best PC deals in your inbox"              │  │
│  │ Best Deal Always!       [📧 Enter your email] [Subscribe]│
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ LOGO         │  │ COMPANY   │  │ QUICK LINKS│       │
│  │              │  │           │  │            │       │
│  │ Follow us on │  │ About US  │  │ Privacy... │       │
│  │ f t in yt    │  │ Awards... │  │ Shipping..│       │
│  │              │  │ Media     │  │ Return...  │       │
│  │ DOWNLOAD APP │  │ Contact   │  │ Cancellat.│       │
│  │ [G. Play]    │  │ FAQ       │  │ Terms...  │       │
│  │ [App Store]  │  │           │  │ RMA Service│       │
│  └──────────────┘  └────────────┘  └────────────┘       │
│                                                          │
│  © 2026 Refurbished PC Parts. All rights reserved.      │
└──────────────────────────────────────────────────────────┘
```

### Newsletter Bar
- **Background:** #111C33
- **Border bottom:** 1px solid #1E293B
- **Padding:** 36px 0
- **Layout:** flex, space-between, align center, gap 32px

**Left side:**
- Quote: "Get the best PC deals in your inbox" — italic, 0.9rem, #94A3B8
- Title: "Best Deal Always!" — Poppins SemiBold 1.4rem, white

**Right side — email input:**
- Container: flex, background #1E293B, border 1px solid #334155, border-radius 9999px, padding 4px 6px 4px 14px, min-width 360px
- Mail icon: `Mail` 18px, color #94A3B8
- Input: transparent, no border, padding 8px, font 0.85rem, color white, placeholder "Enter your email"
- Subscribe button: background #FFB53E, color #000, font-weight 700, 0.82rem, padding 8px 16px, border-radius 9999px, icon `Send` 14px
- On success: show green checkmark + "You're subscribed!"

### Main Footer Links
- **Background:** #0F172A
- **Grid:** 3 columns (1.5fr 1fr 1fr), gap 40px, padding 50px 24px

**Column 1 — Brand + Social + App:**
- Logo: "LOGO" text, Poppins ExtraBold 1.4rem, color white
- "Follow us on" label: 0.78rem, bold, white, uppercase, letter-spacing 0.08em
- Social icons: 4 circular buttons (36x36px, border-radius 9999px, bg #1E293B, hover bg #FFB53E + color black)
  - Represent: Facebook, Twitter, LinkedIn, YouTube (use single-letter labels f/t/in/yt or lucide icons)
- "DOWNLOAD OUR APP" label: same style as social label
- App buttons (2, stacked vertically):
  - Google Play: icon `Smartphone` + "GET IT ON" (0.6rem, gray) / "Google Play" (0.82rem, white, bold)
  - Apple App Store: icon `Apple` + "Download on the" (0.6rem, gray) / "Apple App Store" (0.82rem, white, bold)
  - Each: flex, gap 10px, padding 8px 14px, bg #1E293B, border 1px solid #334155, border-radius 10px

**Column 2 — COMPANY:**
- Title: "COMPANY" — 0.9rem, bold, white, uppercase, letter-spacing 0.05em, margin-bottom 16px
- Links (list, gap 10px, 0.85rem, color #94A3B8, hover color #FFB53E):
  1. About US
  2. Awards & Recognitions
  3. Media
  4. Contact Us
  5. FAQ

**Column 3 — QUICK LINKS:**
- Title: "QUICK LINKS"
- Links:
  1. Privacy Policy
  2. Shipping Policy
  3. Return & Replacement Policy
  4. Cancellation Policy
  5. Terms & Condition
  6. RMA Service

### Footer Bottom
- Border-top: 1px solid #1E293B
- Padding: 24px
- Text: "© 2026 Refurbished PC Parts. All rights reserved." — centered, 0.8rem, color #64748B

---

## COMPONENT 10: CART DRAWER (slide-out overlay)

### Structure
```
                    ┌──────────────────────┐
                    │ Your Cart (3)     ✕  │
                    ├──────────────────────┤
                    │ ┌──────────────────┐ │
                    │ │ [img] Name    🗑 │ │
                    │ │       Condition  │ │
                    │ │ [- 1 +]  $405.95 │ │
                    │ └──────────────────┘ │
                    │ ┌──────────────────┐ │
                    │ │ [img] Name    🗑 │ │
                    │ └──────────────────┘ │
                    ├──────────────────────┤
                    │ Subtotal      $811.90│
                    │ 🛡 12-Month Warranty │
                    │ [Proceed to Checkout]│
                    └──────────────────────┘
```

### Specs
- **Backdrop:** fixed, full screen, background rgba(15,23,42,0.6), backdrop-filter blur(4px), z-index 100, flex, justify-content flex-end
- **Drawer:** width 100%, max-width 440px, height 100%, background #FFFFFF, border-left 1px solid #E2E8F0, flex column, shadow -10px 0 30px rgba(0,0,0,0.15), animation slideIn 0.25s

**Header:**
- Padding 20px, flex space-between, border-bottom 1px solid #E2E8F0
- Title: `ShoppingBag` icon (20px) + "Your Cart (N)" — bold 1.05rem
- Close button: `X` icon 20px, color #64748B, hover bg #F1F5F9

**Items list:**
- Flex: 1, overflow-y auto, padding 20px
- Each item: flex, gap 12px, padding 12px, bg white, border 1px solid #E2E8F0, border-radius 10px, shadow 0 1px 3px rgba(0,0,0,0.06)
- Image: 72x72px, border-radius 6px, bg #0F172A
- Name: 0.85rem, bold 600
- Condition: "Condition : Very Good" — 0.7rem, #64748B
- Qty controls: minus button + number + plus button, bg #F1F5F9, border 1px solid #E2E8F0, border-radius 6px
- Price: 0.95rem, bold, #0F172A
- Remove button: `Trash2` 16px, color #64748B, hover #EF4444

**Empty state:**
- `ShoppingBag` icon 48px, gray
- "Your cart is empty" — bold 1.1rem
- "Explore tested PC components..." — 0.85rem, gray
- "Start Shopping" button (primary, small)

**Footer:**
- Padding 20px, border-top 1px solid #E2E8F0, bg #F8FAFC
- Subtotal row: flex space-between, 1.05rem, bold
- Amount: 1.3rem, ExtraBold, #0F172A
- Warranty notice: `Shield` 14px + "Includes Free 12-Month Hardware Warranty" — 0.72rem, gray
- Checkout button: full width, padding 14px, gradient orange bg, white text, bold 0.95rem, border-radius 10px, `ArrowRight` icon

---

## COMPONENT 11: PRODUCT DETAIL MODAL (quick view)

### Structure
```
┌─────────────────────────────────────────────────────┐
│                                              ✕      │
│  ┌──────────────┐  ┌──────────────────────────┐     │
│  │              │  │ MSI                      │     │
│  │  [Product    │  │ MSI RTX 3080 10GB...     │     │
│  │   Image]     │  │ ★★★★☆ 4.5 (89 reviews)  │     │
│  │              │  │                          │     │
│  │ [Condition]  │  │ $405.95 $653.74 Save 38% │     │
│  │ [Warranty]   │  │                          │     │
│  │              │  │ Specifications:          │     │
│  │              │  │ [10GB] [Ventus 3X] [3080]│     │
│  │              │  │                          │     │
│  │              │  │ 🛡 Certification Pass    │     │
│  │              │  │ ✓ Thermal stress tested  │     │
│  │              │  │ ✓ Heatsink cleaned       │     │
│  │              │  │ ✓ Ports verified         │     │
│  │              │  │                          │     │
│  │              │  │ [🛒 Add To Cart - $405]  │     │
│  └──────────────┘  └──────────────────────────┘     │
└─────────────────────────────────────────────────────┘
```

### Specs
- **Backdrop:** same as cart (rgba(15,23,42,0.6), blur 4px, z-index 100)
- **Dialog:** 90% width, max-width 820px, bg white, border-radius 16px, shadow 0 20px 40px rgba(0,0,0,0.25), margin auto, animation modalScale 0.2s
- **Close button:** absolute, top 16px, right 16px, 36x36px, border-radius 9999px, bg #F1F5F9, `X` 20px
- **Grid:** 2 columns (1fr 1.15fr)

**Left column (image):**
- Background: #0F172A, padding 24px, flex column, center
- Image: width 100%, max-height 340px, object-fit cover, border-radius 10px
- Badge row: flex, gap 10px, margin-top 16px
  - Condition badge: bg #F0F9FF, color #0369A1, border 1px solid #BAE6FD, padding 4px 10px, border-radius 9999px, 0.72rem bold uppercase
  - Warranty badge: bg rgba(255,255,255,0.15), color white, 0.75rem, padding 4px 10px, border-radius 9999px

**Right column (info):**
- Padding: 32px, flex column
- Brand: 0.78rem, ExtraBold, #2563EB, uppercase
- Title: Poppins ExtraBold 1.35rem, line-height 1.3, margin 6px 0 10px
- Rating: 5 stars (15px) + score + "(N reviews)" — flex, gap 8px, margin-bottom 16px
- Price box: flex baseline, gap 10px, margin-bottom 20px
  - Sale price: 1.75rem, ExtraBold
  - Original: 1rem, gray, line-through
  - Save badge: bg #FEF2F2, color #DC2626, 0.75rem, padding 3px 8px, border-radius 6px
- Specs block: bold label "Specifications:" + flex wrap chips (bg #F1F5F9, 0.7rem, padding 3px 8px, border-radius 6px, gap 6px)
- Inspection card: bg #F0FDF4, border 1px solid #BBF7D0, border-radius 10px, padding 14px, margin-bottom 20px
  - Header: `ShieldCheck` 18px + "Certification Pass" — color #15803D, bold 0.85rem
  - List: 3 items, each with `Check` 14px + text, color #166534, 0.8rem
- Add to Cart: full width, primary gradient button, `ShoppingCart` 18px + "Add To Cart - $price"

---

## IMAGE FOLDER STRUCTURE

Create this folder structure and save images manually:

```
/public/
  images/
    hero-pc-parts.jpg          ← Hero section right-side image (GPU/PC hardware photo, landscape 16:11)
    deal-monitors.jpg          ← Deals banner 1 image (gaming monitor photo, portrait)
    deal-cabinet.jpg           ← Deals banner 2 image (PC case/cabinet photo, portrait)
    products/
      product-1.jpg            ← LG ULTRAGEAR monitor
      product-2.jpg            ← MSI RTX 3080 GPU
      product-3.jpg            ← GALAX RTX 3080 GPU
      product-4.jpg            ← AMD Ryzen 7 CPU
      product-5.jpg            ← CORSAIR RAM
      product-6.jpg            ← ASUS TUF monitor
      product-7.jpg            ← ASUS ROG monitor
      product-8.jpg            ← BENQ MOBIUZ monitor
      product-9.jpg            ← GIGABYTE AORUS monitor
      product-10.jpg           ← ASUS RTX 3080 TUF GPU
      product-11.jpg           ← Meta Quest 3
      product-12.jpg           ← ADATA XPG RAM
```

Reference in code as: `/images/hero-pc-parts.jpg`, `/images/products/product-1.jpg`, etc.

Fallback if images not available — use these Unsplash URLs:
```
hero:     https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000
monitor:  https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600
gpu:      https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600
cpu:      https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600
ram:      https://images.unsplash.com/photo-1562976540-1502c2145186?w=600
```

---

## RESPONSIVE BEHAVIOR

| Breakpoint | Changes |
|---|---|
| **≤1024px (tablet)** | Hero becomes single column, centered text. Catalog becomes single column (filter on top). Deals become single column. Footer links become 2 columns. |
| **≤768px (mobile)** | Desktop nav hidden, hamburger menu appears. Search bar hidden. Hero title shrinks to 2.2rem. Hero buttons stack vertically, full width. Footer links become 1 column. Modal becomes single column. |
| **≤480px (small mobile)** | Container padding reduces to 16px. Hero title shrinks to 1.8rem. Product grid becomes single column. Deal card image hidden, text only. |

---

## TECH STACK

- **React 18** (functional components, hooks: useState, useEffect, useMemo)
- **Vite** as build tool
- **CSS** — plain CSS with CSS variables (no Tailwind required, but can be adapted)
- **lucide-react** for all icons
- **No external state library** — use React useState + localStorage for cart persistence
- **localStorage keys:** `refurb_cart` for cart items

## STATE MANAGEMENT

```
App state:
- cart: array of {id, name, price, image, condition, quantity}
- isCartOpen: boolean
- quickViewProduct: product object or null
- selectedCategory: string (default 'all')
- searchQuery: string
- selectedCondition: string (default '')
- selectedPriceRange: string (default '')
- selectedComponents: array of strings
- sortOption: string (default 'relevance')
- visibleCount: number (default 8, for pagination)
```

## BUILD THE APP IN THIS ORDER

1. Set up project (Vite + React), install lucide-react
2. Create `/public/images/` folder, save images manually
3. Write `index.css` with all CSS variables and base styles
4. Build Navbar component
5. Build Hero component
6. Build CategoryBar component
7. Build ProductCard component (most important — get the specs exact)
8. Build FilterSidebar component
9. Build DealsBanner component
10. Build QualityAssurance component
11. Build Reviews component
12. Build FAQ component
13. Build Footer component
14. Build CartDrawer component
15. Build ProductDetailModal component
16. Write App.jsx that assembles everything with state management
17. Test responsive at 390px, 890px, 1200px
