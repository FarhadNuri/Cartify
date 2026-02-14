# Cartify

A full-stack product sharing application built with modern web technologies.

## About

Cartify is a modern product sharing platform that allows users to create, browse, and comment on products. Built with a focus on type safety and developer experience, the application leverages cutting-edge technologies to deliver a fast and reliable user experience.

**Live Demo:** [https://cartify-3r6u.onrender.com](https://cartify-3r6u.onrender.com)

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **TanStack Query** - Server state management and data fetching
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Vite** - Build tool and development server

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Drizzle ORM** - Type-safe database toolkit
- **Neon** - Serverless Postgres database

### Authentication
- **Clerk** - User authentication and management

## Features

- User authentication and authorization
- Product catalog with CRUD operations
- Product comments and reviews
- Responsive design with Tailwind CSS and DaisyUI
- Type-safe API with TypeScript
- Optimized data fetching with TanStack Query

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
