# Overview

This is a full-stack web application built for showcasing "Vocab Frenzy Fr", a French vocabulary learning mobile app. The project consists of a React frontend serving as a marketing landing page and an Express.js backend API. The frontend features a modern, responsive design with sections for app features, screenshots, download links, developer information, and support resources. The backend provides a foundation for future API endpoints and user management functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript for type safety across the full stack
- **Development**: TSX for running TypeScript directly in development
- **Production**: ESBuild for fast compilation and bundling

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL configured through Neon Database serverless driver
- **Migration**: Drizzle Kit for database schema migrations and management
- **Current Implementation**: In-memory storage with interface-based design for easy database integration

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Current State**: User schema defined but authentication endpoints not yet implemented
- **Future Ready**: Database schema includes user table with username/password fields

## Project Structure
- **Monorepo Layout**: Shared schema and types between client and server
- **Client Directory**: Contains React application with organized component structure
- **Server Directory**: Express API with modular route and storage architecture
- **Shared Directory**: Common TypeScript types and database schemas

## Development Experience
- **Hot Reload**: Vite HMR for instant frontend updates
- **Type Checking**: Strict TypeScript configuration across all packages
- **Path Aliases**: Configured import paths for cleaner code organization
- **Error Handling**: Runtime error overlay for development debugging

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

## UI and Styling
- **Shadcn/ui**: Pre-built component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless UI components for accessibility and customization
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TanStack Query**: Data fetching and caching library for React
- **Wouter**: Minimalist routing library for React applications
- **Class Variance Authority**: Utility for managing component variants

## Replit Integration
- **Cartographer Plugin**: Vite plugin for Replit development environment
- **Runtime Error Modal**: Enhanced error reporting in Replit environment
- **Development Banner**: Automatic banner injection for external access

## Form and Validation
- **React Hook Form**: Performant form library with validation support
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## External App Links
- **App Store**: Direct links to "Vocab Frenzy Fr" iOS application
- **Support Website**: Canva-hosted support and privacy policy pages