# Shreenithi Ladies Hostel — Full Codebase Documentation

## Application Flow

```
Browser Request
    ↓
index.html (SEO meta tags, structured data, loads React)
    ↓
main.jsx (mounts <App /> inside #root)
    ↓
App.jsx (React Router — picks correct page based on URL)
    ↓
Layout.jsx (wraps every page with Navbar + Footer + EnquireNow)
    ↓
Page Component (HomePage, AboutPage, etc.)
    ↓
Section Components (Hero, About, Facilities, etc.)
```

---

## Config & Entry Files

### `index.html`
The main HTML file that the browser loads first.
- Contains all **SEO meta tags** (description, keywords, Open Graph, Twitter Card)
- Has **3 JSON-LD structured data blocks** for Google rich results (Organization + 3 LocalBusiness for each branch)
- Loads the Poppins font from Google Fonts
- Preloads the first hero image for faster page load
- Sets the favicon to `favicon.svg`

### `package.json`
Lists all project dependencies:
- **react** + **react-dom** — Core React library (v19)
- **react-router-dom** — URL-based page navigation
- **framer-motion** — Smooth animations and transitions
- **react-icons** — Icon library (Font Awesome icons)
- **tailwindcss** — Utility-first CSS framework
- **vite** — Build tool and dev server

### `vite.config.js`
Build configuration:
- Uses React and Tailwind CSS plugins
- Splits code into chunks: `vendor` (react/router) and `motion` (framer-motion) for better caching
- Enables CSS minification and esbuild minification for production

### `src/main.jsx`
The JavaScript entry point. Mounts the `<App />` component inside the `#root` div of index.html.

### `src/index.css`
Global styles and Tailwind CSS configuration:
- Defines the color theme: primary (#ff6b35 orange), accent (#1a1a2e dark), grays
- Sets Poppins as the default font
- Custom scrollbar styling (orange thumb)
- Text selection color (orange)

### `src/App.jsx`
The router — decides which page to show based on the URL:
- `/` → HomePage
- `/about` → AboutPage
- `/facilities` → FacilitiesPage
- `/rooms` → RoomsPage
- `/branches` → BranchesPage
- `/contact` → ContactPage
- Any other URL → NotFoundPage (404)

All pages are **lazy loaded** (only downloaded when visited) with a spinner shown while loading.

---

## Layout Components

### `src/components/Layout.jsx`
Wraps every page with the common elements:
- **ScrollToTop** — scrolls to top when navigating between pages
- **Navbar** — shown at the top
- **Page content** — rendered via `<Outlet />`
- **Footer** — shown at the bottom
- **EnquireNow** — floating phone button

### `src/components/Navbar.jsx`
The navigation bar at the top of every page.
- **Transparent on homepage** hero, turns **white on scroll**
- On other pages, always white background
- 6 navigation links: Home, About, Facilities, Rooms & Pricing, Branches, Contact
- "Enquire Now" CTA button linking to contact page
- Mobile: hamburger menu with slide-in navigation
- Active page shown with an orange underline indicator

### `src/components/Footer.jsx`
The footer shown on every page. 4-column layout:
- **Brand** — logo, description, phone CTA button
- **Quick Links** — navigation links to all pages
- **Branches** — 3 branch addresses
- **Contact** — phone numbers, email, general address
- Dynamic copyright year

### `src/components/EnquireNow.jsx`
A floating orange phone button in the bottom-right corner.
- Only appears after scrolling 500px down the page
- Links to `tel:+919884446317` for direct calling
- Has a hover scale animation

### `src/components/PageBanner.jsx`
A dark header banner shown at the top of sub-pages (About, Facilities, Rooms, Branches, Contact).
- Accepts `title`, `subtitle`, and `breadcrumb` props
- Shows breadcrumb navigation: Home > Current Page
- Decorative orange blur circles in the background

---

## Homepage Components

### `src/components/Hero.jsx`
Full-screen image carousel on the homepage.
- **5 slides**, each with a background image, title, subtitle, and CTA button
- Auto-rotates every **5 seconds**
- Manual navigation with left/right arrows and dot indicators
- Animated transitions using Framer Motion
- Images used: room-twin.jpg, room-shared.jpg, common-area.jpg, building.jpg, room-premium.jpg

### `src/components/StatsStrip.jsx`
Dark stats bar below the hero.
- 4 statistics: **25+ Years**, **200+ Residents**, **3 Branches**, **4.8★ Rating**
- Dark accent background with orange numbers

### `src/components/FeatureShowcase.jsx`
"Why Choose Us" section with alternating left-right layout.
- 4 features, each with an image, icon, title, description, and highlight badges:
  1. **Uncompromised Security** — CCTV, warden, secure gates
  2. **Homely Warmth & Comfort** — food, furnished rooms, hygiene
  3. **Ideal for Professionals & Students** — near IT hubs, colleges
  4. **Complete Amenities & Wellness** — WiFi, water, laundry
- Images alternate sides (left-right-left-right)

### `src/components/RoomGallery.jsx`
Visual room image grid.
- 4 room/area images in a grid with hover zoom effect
- Shows room type name and starting price
- "View All Rooms & Pricing" CTA button linking to /rooms

### `src/components/Testimonials.jsx`
Testimonial carousel.
- **6 testimonials** from residents (professionals and students)
- Shows one at a time, auto-rotates every **6 seconds**
- Manual navigation with arrows and dots
- Displays name, role, branch, star rating, and quote

### `src/components/SpecialOffer.jsx`
Promotional discount banner.
- **10% OFF** first month rent promotion
- CTA: "Claim This Offer" linking to /contact
- Disclaimer: minimum 2 months stay, limited period

---

## Content Components

### `src/components/About.jsx`
About section used on the About page.
- Left: building image with floating "25+ Years of Trust" badge
- Right: company description, 6 highlight checkmarks, quick info boxes (Rate, Room Types, For)

### `src/components/Facilities.jsx`
Grid of 16 facility cards used on the Facilities page.
- Each card has an icon, title, and description
- Facilities include: AC/Non-AC rooms, furnished rooms, food, WiFi, CCTV, laundry, power backup, etc.
- 4-column grid on desktop, 2 columns on mobile

### `src/components/RoomTypes.jsx`
Room type cards used on the Rooms page.
- **7 room types** with images, prices, bed count, AC indicator
- "Popular" badge on 3-bedded room
- "Enquire Now" button (tel link) on each card
- Bottom section: list of 8 common amenities included in all rooms

### `src/components/PricingTable.jsx`
Detailed pricing comparison table used on the Rooms page.
- **3 branch tabs**: Pallikaranai, Mylapore, Mount Road
- Each branch shows: registration fee, caution deposit, room-by-room pricing
- Facility matrix with ✓/✗ for each room type
- Branch-specific disclaimers

### `src/components/Branches.jsx`
Branch location cards used on the Branches page.
- **3 branches**: Mylapore, Mount Road, Pallikaranai
- Each shows: description, full address, nearby areas, landmarks
- CTA: Call button with phone number

### `src/components/Contact.jsx`
Contact section used on the Contact page.
- Left: contact info (2 phone numbers, email, address, availability)
- Right: WhatsApp enquiry form (name, phone, message)
- Form submission opens WhatsApp with pre-formatted message to +91 98844 46317

### `src/components/MapSection.jsx`
Google Maps embed used on Branches and Contact pages.
- Shows Pallikaranai branch location on embedded map
- "View on Google Maps" button

---

## Page Components

### `src/pages/HomePage.jsx`
Landing page. Sections in order:
1. Hero (carousel)
2. StatsStrip (stats)
3. FeatureShowcase (why choose us)
4. RoomGallery (room photos)
5. Testimonials (reviews)
6. SpecialOffer (discount banner)

### `src/pages/AboutPage.jsx`
About page: PageBanner → About

### `src/pages/FacilitiesPage.jsx`
Facilities page: PageBanner → Facilities

### `src/pages/RoomsPage.jsx`
Rooms page: PageBanner → RoomTypes → PricingTable

### `src/pages/BranchesPage.jsx`
Branches page: PageBanner → Branches → MapSection

### `src/pages/ContactPage.jsx`
Contact page: PageBanner → Contact → MapSection

### `src/pages/NotFoundPage.jsx`
404 error page. Shows "404" heading, message, and "Back to Home" link.

---

## Public Files

### `public/images/`
Contains 5 hostel images used across the site:
- `room-twin.jpg` — Twin sharing room
- `room-shared.jpg` — Shared/multi-bed room
- `room-premium.jpg` — Premium AC room
- `common-area.jpg` — Common area
- `building.jpg` — Hostel building exterior

### `public/favicon.svg`
Orange "S" logo used as the browser tab icon.

### `public/robots.txt`
Tells search engines to crawl all pages and provides the sitemap URL.

### `public/sitemap.xml`
Lists all 6 pages with their priority and update frequency for Google/Bing.

### `public/_redirects`
Netlify SPA routing — sends all URLs to index.html so React Router handles navigation.

---

## Key Business Data

| Item | Value |
|------|-------|
| Business Name | Shreenithi Ladies Hostel |
| Founded | 1995 |
| Total Residents | 200+ |
| Rating | 4.8★ |
| Primary Phone | +91 98844 46317 |
| Secondary Phone | +91 98416 20753 |
| Email | shreenithihostels@gmail.com |
| Price Range | ₹4,500 – ₹8,500/month |
| Branches | Mylapore, Mount Road, Pallikaranai |
| Room Types | 7 (from 7-bed shared to 2-bed AC) |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| React Router 7 | Page navigation |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| React Icons | Icons |
| Vite 6 | Build tool & dev server |
