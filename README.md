# Cartify

A full-stack social product marketplace where creators showcase, discover, and discuss products with an engaged community.

## 🚀 About

Cartify is a modern product sharing and discovery platform that bridges the gap between creators and consumers. Think of it as a social marketplace where users can showcase their products, build their brand presence, and engage with potential customers through an interactive community-driven experience.

**Live Demo:** [https://cartify-3r6u.onrender.com](https://cartify-3r6u.onrender.com)

## 🎯 Real-World Problem It Solves

In today's digital economy, independent creators and small businesses struggle with:

1. **High Barrier to Entry**: Traditional e-commerce platforms require complex setups, payment processing, and inventory management
2. **Limited Discovery**: Products get lost in oversaturated marketplaces without expensive advertising
3. **Lack of Community**: No way to build relationships with potential customers before making sales
4. **Fragmented Presence**: Creators must maintain profiles across multiple platforms (Instagram, Facebook, marketplaces)

**Cartify solves this by providing:**
- **Zero-friction product showcasing** - Share products with just a title, description, and image URL
- **Community engagement** - Build trust through comments and discussions before purchase
- **Personal brand building** - Users get a dedicated profile showcasing all their products
- **Discovery-first approach** - All products are visible on the homepage, promoting equal discovery
- **Social proof** - Comments and engagement help validate product quality and creator credibility

**Use Cases:**
- 🎨 **Digital creators** showcasing artwork, templates, or courses
- 🛍️ **Small business owners** testing product ideas before building full e-commerce
- 👨‍💻 **Developers** sharing side projects, tools, or SaaS products
- 📚 **Content creators** promoting books, guides, or educational content
- 🎮 **Indie game developers** showcasing games and gathering feedback

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 18** - Modern UI library with hooks
- **🔷 TypeScript** - Type-safe JavaScript for fewer bugs
- **🔄 TanStack Query (React Query)** - Powerful server state management
  - Automatic caching and background refetching
  - Optimistic updates for instant UI feedback
  - Request deduplication and retry logic
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **🧩 DaisyUI** - Beautiful component library built on Tailwind
- **⚡ Vite** - Next-generation frontend build tool (10x faster than webpack)
- **🛣️ React Router v7** - Client-side routing with nested routes
- **🔒 Clerk React** - Pre-built authentication components
- **📡 Axios** - HTTP client with interceptors

### Backend
- **🟢 Node.js 20+** - JavaScript runtime
- **🚂 Express 5** - Fast, minimalist web framework
- **🔷 TypeScript** - End-to-end type safety
- **🗄️ Drizzle ORM** - TypeScript-first ORM
  - Type-safe query builder
  - Zero-runtime overhead
  - Automatic TypeScript inference
  - SQL-like syntax
- **🐘 PostgreSQL** - Robust relational database
- **🛢️ Neon** - Serverless Postgres with autoscaling
- **🔐 Clerk Express** - Backend authentication middleware
- **🌐 CORS** - Cross-origin resource sharing configuration

### Database Schema
- **👤 Users** - Clerk-synced user profiles
- **📦 Products** - User-created product listings
- **💬 Comments** - Product discussion threads
- **🔗 Relations** - Drizzle ORM relational queries with cascade delete

### Authentication & Authorization
- **🔒 Clerk** - Complete authentication solution
  - Email/password authentication
  - Social OAuth (Google, GitHub, etc.)
  - User management dashboard
  - Session management
  - Protected API routes

### DevOps & Deployment
- **🚀 Vercel** - Serverless deployment platform (recommended)
- **📦 npm** - Package management
- **🔧 Nodemon** - Development server with hot reload
- **🔨 TypeScript Compiler** - tsc for production builds
- **📝 Drizzle Kit** - Database migrations and schema management

## ✨ Key Features

### 🔐 User Authentication & Authorization
- **Secure authentication** powered by Clerk
- **Social login** support (Google, GitHub, etc.)
- **Protected routes** - Only authenticated users can create/edit/delete products
- **Automatic user sync** - Seamlessly syncs Clerk user data to database

### 📦 Product Management
- **Create products** with title, description, and image URL
- **Edit your products** - Full CRUD operations for product owners
- **Delete products** - Remove products with cascade deletion of associated comments
- **Image preview** - Real-time preview while creating/editing products
- **Rich product display** - Beautiful card-based layout with responsive design

### 💬 Community Engagement
- **Comment system** - Users can discuss products and ask questions
- **Real-time updates** - TanStack Query ensures data stays fresh
- **Comment management** - Users can delete their own comments
- **Social proof** - Comment counts and timestamps build credibility
- **User profiles in comments** - Avatar and name display for better engagement

### 👤 Personal Profile
- **Dashboard view** - See all your products at a glance
- **Product statistics** - Track total number of products
- **Quick actions** - View, edit, or delete products from one place
- **Product preview cards** - Compact view of your portfolio

### 🎨 User Experience
- **Responsive design** - Works seamlessly on mobile, tablet, and desktop
- **Dark/Light theme** - DaisyUI theming support
- **Loading states** - Smooth loading spinners and skeleton screens
- **Error handling** - User-friendly error messages
- **Optimistic updates** - Instant UI feedback for better UX
- **Beautiful hero section** - Engaging landing page for new visitors

### 🚀 Performance & Developer Experience
- **Type-safe** - Full TypeScript implementation across frontend and backend
- **Optimized data fetching** - TanStack Query with caching and background refetching
- **SEO friendly** - Proper meta tags and semantic HTML
- **Fast builds** - Vite for lightning-fast development
- **Type-safe database** - Drizzle ORM with full TypeScript inference
- **API validation** - Express with type-safe route handlers

## Project Structure

```
cartify/
├── backend/          # Express API server
│   ├── src/
│   │   ├── config/   # Database configuration
│   │   ├── controllers/
│   │   ├── db/       # Drizzle schema and queries
│   │   └── routes/
│   └── dist/         # Compiled TypeScript
├── frontend/         # React application
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
│   └── dist/         # Production build
```

## Environment Variables

### Backend (.env)
```
PORT=3000
DB_URL=your_neon_database_url
NODE_ENV=production
FRONTEND_URL=your_frontend_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Frontend (.env)
```
VITE_API_URL=your_backend_api_url
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Installation

```bash
# Install dependencies
npm install --prefix backend
npm install --prefix frontend

# Run development servers
npm run dev --prefix backend
npm run dev --prefix frontend
```

## Build

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

## Database

The application uses Drizzle ORM with Neon Postgres. Database migrations are managed through Drizzle Kit.

```bash
# Push schema changes to database
npm run db:push --prefix backend
```

## Deployment

The application is configured for deployment on Render with the following build command:

```bash
npm run build
```

And start command:

```bash
npm start
```

Ensure all environment variables are set in your deployment platform.
