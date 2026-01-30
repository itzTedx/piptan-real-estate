# 🏠 Piptan Investment - Luxury Real Estate Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity_CMS-3.92.0-orange?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A premium luxury real estate investment platform built for Piptan Investment, specializing in Dubai's most sought-after properties. This modern web application showcases exclusive residential and commercial properties with advanced search, interactive galleries, and seamless user experience.

## ✨ Features

### 🏢 Property Management

- **Comprehensive Property Listings** - Residential, commercial, and investment properties
- **Advanced Property Details** - Detailed descriptions, amenities, and specifications
- **Interactive Image Galleries** - High-quality property photos with zoom and pan functionality
- **Property Status Tracking** - Available, sold, and coming soon statuses
- **Developer Information** - Complete developer profiles and project details

### 🎨 User Experience

- **Modern Design** - Clean, luxury-focused interface with premium aesthetics
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Smooth Animations** - GSAP and Framer Motion powered interactions
- **Interactive Elements** - Hover effects, transitions, and micro-interactions
- **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML

### 🔍 Search & Discovery

- **Property Categories** - Filter by residential, commercial, luxury, and investment
- **Location-based Search** - Find properties in specific Dubai areas
- **Advanced Filtering** - Price range, bedrooms, area, and amenities
- **Featured Properties** - Highlighted premium listings
- **Related Properties** - Smart recommendations

### 📱 Content Management

- **Sanity CMS Integration** - Headless CMS for content management
- **Rich Text Editor** - WYSIWYG content editing
- **Media Management** - Optimized image handling and storage
- **SEO Optimization** - Meta tags, structured data, and sitemaps
- **Multi-language Support** - Ready for internationalization

### 💼 Business Features

- **Investment Focus** - ROI calculations and investment strategies
- **Contact Forms** - Lead generation and inquiry management
- **WhatsApp Integration** - Direct property inquiries
- **Testimonials** - Client reviews and success stories
- **Market Insights** - Real estate market analysis and trends

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Professional animations
- **Radix UI** - Accessible component primitives

### Backend & CMS

- **Sanity CMS** - Headless content management
- **Next.js API Routes** - Server-side functionality
- **GROQ** - Query language for Sanity

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Turbopack** - Fast development bundler

### Performance & SEO

- **Next.js Image Optimization** - Automatic image optimization
- **Static Site Generation** - Fast loading times
- **SEO Metadata** - Comprehensive SEO setup
- **Structured Data** - Schema.org markup
- **Sitemap Generation** - Automatic sitemap creation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Sanity account (for CMS)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/real-estate.git
   cd real-estate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Sanity Studio Setup

1. **Access Sanity Studio**
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)

2. **Configure Content Types**
   - Set up property schemas
   - Configure categories and developers
   - Add media assets

3. **Generate Types**

   ```bash
   npm run sanity:types
   ```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (root)/            # Main application routes
│   ├── api/               # API routes
│   ├── studio/            # Sanity Studio
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── animation/        # Animation components
├── features/             # Feature-based modules
│   ├── home/            # Homepage features
│   ├── properties/      # Property management
│   ├── projects/        # Project showcase
│   └── forms/           # Form handling
├── lib/                  # Utility libraries
│   ├── sanity/          # Sanity configuration
│   └── utils/           # Helper functions
├── constants/            # Application constants
└── assets/              # Static assets
```

## 🎯 Key Features Implementation

### Property Showcase

- Dynamic property cards with hover effects
- Image galleries with zoom functionality
- Detailed property pages with comprehensive information
- Related properties suggestions

### Content Management

- Sanity Studio for content editing
- Rich text content with custom blocks
- Media optimization and management
- SEO-friendly content structure

### Performance Optimization

- Static site generation for fast loading
- Image optimization and lazy loading
- Code splitting and bundle optimization
- Caching strategies

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run sanity:types` - Generate Sanity TypeScript types
- `npm run sanity:extract` - Extract Sanity schema
- `npm run analyze` - Analyze bundle size

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms

- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **DigitalOcean App Platform** - Containerized deployment

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Automatic WebP conversion and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About Piptan Investment

Piptan Investment is a premium real estate investment and development company specializing in Dubai's luxury property market. We provide expert guidance and exclusive access to the most sought-after properties in the UAE.

## 📞 Contact

- **Website**: [https://www.piptan.ae](https://www.piptan.ae)
- **Email**: <hello@piptan.com>
- **Location**: Dubai, UAE

---

**Web Design & Development by [Ziron Media](https://www.zironmedia.com)**
