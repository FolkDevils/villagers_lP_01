# Villagers Landing Page

A modern, responsive landing page built with Next.js 16 for Villagers - connecting local businesses with their communities.

## 🚀 Overview

This project features two distinct landing pages:
- **Store Owner Page** (`/page_owner`) - For local business owners
- **Customer Page** (`/page_customer`) - For community members and shoppers

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP with ScrollTrigger
- **Fonts:** Playfair Display (serif) & Poppins (sans-serif)
- **Image Optimization:** Next.js Image component

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Villagers-LP-01
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── BarChart.tsx
│       │   ├── Button.tsx
│       │   ├── CircularChart.tsx
│       │   ├── DonutChart.tsx
│       │   ├── Footer.tsx
│       │   ├── Form.tsx
│       │   ├── FormPopup.tsx
│       │   ├── HeroSection.tsx
│       │   ├── NavBar.tsx
│       │   ├── NewsletterSignup.tsx
│       │   ├── Pricing.tsx
│       │   ├── RoundedImage.tsx
│       │   ├── StickyBottomCTA.tsx
│       │   └── UniversalCarousel.tsx
│       ├── page_customer/       # Customer-focused landing page
│       ├── page_owner/          # Business owner landing page
│       ├── globals.css          # Global styles and Tailwind config
│       ├── layout.tsx           # Root layout
│       └── page.tsx             # Home page (design selector)
├── public/                      # Static assets (images, SVGs)
└── package.json
```

## 🎨 Key Features

### Animations
- Smooth scroll-triggered animations using GSAP
- Dynamic background color transitions
- Chart animations (circular, donut, and bar charts)
- Parallax effects on images
- Slide-in carousel transitions

### Components
- **UniversalCarousel:** Supports multiple slide types (charts, images, quotes)
- **HeroSection:** Full-width hero with responsive backgrounds
- **Pricing:** Three-tier pricing display with feature lists
- **FormPopup:** Modal form with animations
- **StickyBottomCTA:** Scroll-aware bottom call-to-action

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl)
- Touch-friendly carousel navigation
- Responsive typography and spacing

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
npm run type-check   # Run TypeScript type checking
```

## 🎯 Pages

### Home (`/`)
Simple navigation page to access either landing page variant.

### Store Owner Page (`/page_owner`)
- Hero section with store owner messaging
- Circular chart showing local impact statistics
- Feature carousel with business tools
- Customer testimonials with business logos
- Pricing tiers
- Newsletter signup

### Customer Page (`/page_customer`)
- Hero section with customer messaging
- Bar chart showing local economic impact
- Feature carousel with community benefits
- Customer testimonials
- Sticky bottom CTA

## 🔧 Configuration

### Fonts
Configured in `src/app/layout.tsx`:
- Playfair Display (headings)
- Poppins (body text)

### Colors
Defined in `src/app/globals.css`:
- Cream: `#FCFBF5`
- Coral: `#FF4930`
- Charcoal: `#2D2D2D`

### Animation Triggers
GSAP ScrollTrigger settings can be adjusted in individual page files.

## 🚧 Known TODOs

- [ ] Implement form submission backend integration
- [ ] Add form validation and error handling
- [ ] Set up analytics tracking
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add comprehensive testing suite
- [ ] Set up CI/CD pipeline

## 📝 Development Notes

### Form Submission
Currently, forms are set up with UI/UX but require backend integration. Connect to your preferred email service or CRM:
- Sendgrid
- Mailchimp
- Custom API endpoint

### Environment Variables
See `.env.example` for required configuration.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

[Add your license information]

## 👥 Contact

[Add contact information]
