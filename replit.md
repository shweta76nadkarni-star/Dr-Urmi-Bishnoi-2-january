# Dr. Urmil Bishnoi - Psychologist Website

## Overview

This is a professional website for Dr. Urmil Bishnoi, a psychologist and hypnotherapist based in Jaipur, India. The site serves as a marketing and lead generation platform for mental health services including therapy for anxiety, depression, PTSD, hypnotherapy, and career counseling. The website is SEO-optimized with a focus on local search terms like "best psychologist in Jaipur" and includes a blog section with mental health content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom CSS variables for brand colors (primary: #2E8B57 teal green)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express static middleware serves built frontend in production

### Data Storage
- **Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Drizzle-Zod for schema validation
- **Current Schema**: Basic users table (application primarily static content)
- **Storage Pattern**: In-memory storage class with interface for future database integration

### Project Structure
- `/client` - React frontend application
  - `/src/pages` - Page components (Home, About, Services, Blog, BlogPost, Contact, BookAppointment)
  - `/src/components` - Reusable UI components (layout, sections, ui)
  - `/src/lib` - Utilities, data, and query client
- `/server` - Express backend server
- `/shared` - Shared TypeScript types and database schema
- `/attached_assets` - Static images and assets
- `/migrations` - Drizzle database migrations

### Page Routes
- `/` - Home page with hero, services overview, testimonials
- `/about` - Detailed about page with mission, values, therapeutic approach, qualifications
- `/services` - Comprehensive services page with 6 detailed service sections
- `/blog` - Blog listing page with all articles
- `/blog/:slug` - Individual blog post with SEO-friendly slugs
- `/contact` - Contact page with form, map, FAQ accordion
- `/book-appointment` - Dedicated booking page with comprehensive form

### SEO Implementation
- Dynamic meta tags per page using document manipulation in useEffect
- SEO-friendly blog URL slugs (e.g., `/blog/best-psychologist-in-jaipur`)
- JSON-LD structured data for blog articles
- robots.txt and sitemap configuration
- OpenGraph and Twitter card meta tags

### Build System
- Development: Vite dev server with HMR
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Custom Vite plugins for meta image handling and Replit integration

## External Dependencies

### Third-Party Services
- **WhatsApp Integration**: Floating WhatsApp button linking to `wa.me/918042756155` for appointment booking
- **Google Fonts**: Preconnected for typography

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database (requires `DATABASE_URL` environment variable)

### UI Libraries
- **Radix UI**: Full suite of accessible component primitives
- **Embla Carousel**: For image galleries and testimonial carousels
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, and runtime error overlay for Replit environment
- **TypeScript**: Strict mode enabled with path aliases (@/, @shared/, @assets/)