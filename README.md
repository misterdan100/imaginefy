# Imaginify - The AI-Powered Image Creative Suite

[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-latest-38B2AC.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black.svg)](https://ui.shadcn.com/)
[![Clerk](https://img.shields.io/badge/Clerk-latest-blueviolet.svg?logo=clerk)](https://clerk.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-latest-47A248.svg?logo=mongodb)](https://www.mongodb.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-latest-3448C5.svg?logo=cloudinary)](https://cloudinary.com/)
[![Stripe](https://img.shields.io/badge/Stripe-latest-626CD9.svg?logo=stripe)](https://stripe.com/)

Imaginify is a cutting-edge, AI-powered Software-as-a-Service (SaaS) platform engineered for advanced image processing. It integrates a secure payment infrastructure, powerful image search, and a suite of sophisticated AI features—including image restoration, recoloring, object removal, and generative fill. This repository serves not only as a showcase of a production-ready AI application but also as a comprehensive learning guide for your next venture.



## ✨ Core Functionalities

- 🔐 **Secure Authentication & Authorization:** Robust user management with Clerk, including registration, login, and protected routes.
- ✨ **AI Image Restoration:** Intelligently restore and enhance old, blurry, or damaged photographs to their former glory.
- 🎨 **AI Object Recolor:** Dynamically change the color of specific objects within an image with precision.
- 🪄 **AI Generative Fill:** Seamlessly fill in missing or removed parts of an image using generative AI.
- ✂️ **AI Object Removal:** Effortlessly erase unwanted objects or people from your images for a clean composition.
- 💨 **AI Background Removal:** Isolate subjects by automatically removing the background from any image.
- 💾 **High-Resolution Downloads:** Download your newly transformed images to save and share.
- ℹ️ **Transformation History:** Access detailed information about each applied image transformation.
- 🖼️ **Community Showcase:** A public gallery of user-generated image transformations, complete with pagination for easy browsing.
- 🔍 **Advanced Semantic Search:** A powerful search engine to find images based on their visual content and objects.
- 🪙 **Credit-Based Economy:** A flexible credit system for utilizing AI features, with options to purchase more.
- 👤 **User Profile Management:** A personalized dashboard for users to view their transformation history and manage their credit balance.
- 💳 **Secure Payments with Stripe:** Integrated, secure credit purchasing powered by the Stripe payment gateway.
- 📱 **Fully Responsive Design:** A flawless and intuitive user experience across desktop, tablet, and mobile devices.

## 🏗️ System Architecture

Imaginify is built as a modern, full-stack, monolithic application using Next.js. This architecture leverages Server-Side Rendering (SSR) and Server Components for optimal performance and SEO. API Routes and Server Actions handle all backend logic, database interactions, and communication with external AI and payment services.

```
 User Browser
     │
 ┌───▼──────────┐
 │  Next.js App │ (Hosted on Vercel)
 │ (UI & Logic) │
 └──────┬───────┘
        │
 ┌──────┴──────────────┬──────────────────┬──────────────────┬────────────────┐
 │                     │                  │                  │                │
 ▼                     ▼                  ▼                  ▼                ▼
┌─────────┐   ┌───────────────┐   ┌─────────────┐   ┌────────────────┐   ┌─────────────┐
│  Clerk  │   │ Cloudinary    │   │   MongoDB   │   │     Stripe     │   │   AI APIs   │
│ (Auth)  │   │ (Image Store) │   │ (Database)  │   │   (Payments)   │   │ (Various)   │
└─────────┘   └───────────────┘   └─────────────┘   └────────────────┘   └─────────────┘
```

## 🛠️ Technologies Employed

### Full-Stack Application

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Database:** MongoDB (with Mongoose for Object Data Modeling)
- **Authentication:** Clerk for comprehensive user management and JWT-based security.
- **File & Media Storage:** Cloudinary for robust image hosting, transformations, and delivery.
- **Payments:** Stripe for secure, PCI-compliant payment processing.
- **Styling:**
  - Tailwind CSS for utility-first styling.
  - Shadcn/UI for a modern, accessible, and composable component library.
- **UI/UX:** Fully responsive design, clean interface, and intuitive user flows.

### Infrastructure & Developer Tools

- **Deployment:** Vercel
- **Database Service:** MongoDB Atlas
- **Authentication Provider:** Clerk
- **Package Manager:** npm
- **Code Integrity:** ESLint & Prettier
- **Type System:** TypeScript

## 🚀 Local Setup Guide

Follow these steps to configure and run the project on your local machine.

**Prerequisites:**
- Git
- Node.js (v18 or later recommended)
- npm (Node Package Manager)

```bash
# 1. Clone the repository
git clone https://github.com/misterdan100/imaginefy
cd imaginefy

# 2. Install dependencies
npm install

# 3. Configure environment variables:
Create a .env.local file in the root of the project and add your credentials.
Obtain keys from Clerk, MongoDB Atlas, Cloudinary, and Stripe.
```

### Environment Variables (`.env.local`)

```
# Next.js Server URL
NEXT_PUBLIC_SERVER_URL=

# MongoDB Connection String
MONGODB_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Cloudinary Credentials
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe Credentials
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

```bash
# 4. Initiate the development server:
npm run dev

# 5. Open the application
Navigate to http://localhost:3000 in your browser.
```

## 🔒 Security Measures

- **Authentication:** JWT-based authentication and session management handled securely by Clerk.
- **Payment Security:** PCI-compliant payment processing via Stripe, ensuring no sensitive card data ever touches the application server.
- **API Security:** All incoming webhooks (from Clerk, Stripe) are protected with signature verification to prevent spoofing.
- **Data Protection:** Secure handling of user data and image assets, with clear separation of concerns.
- **Secure Environment Variable Practices:** All secret keys, API tokens, and credentials are managed through `.env` files and are never exposed on the client-side.
- **XSS Defense:** Leverages React's inherent protections against Cross-Site Scripting attacks.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.