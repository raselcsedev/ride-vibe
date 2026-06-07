# 🚗 RideVibe

> **RideVibe** is a modern car rental platform designed to provide a seamless vehicle booking experience for customers and a powerful management system for administrators. From vehicle discovery and online reservations to secure payments and booking management, RideVibe delivers a fast, scalable, and user-friendly rental experience.

## 🔐 Demo Credentials

Use the following demo credentials to explore the platform:

| Role     | Email                   | Password   |
| -------- | ----------------------- | ---------- |
| Customer | `customer@ridevibe.com` | `12345678` |
| Admin    | `admin@ridevibe.com`    | `12345678` |

---

## 🚀 Features

### 👤 Customer Features

* Secure user registration and authentication
* Browse and search available vehicles
* Advanced filtering by category, price, and availability
* Detailed vehicle information and image gallery
* Online vehicle booking and reservation management
* Booking history and status tracking
* Secure payment processing
* User profile management

### 🛡️ Admin Features

* Dashboard with booking and revenue analytics
* Vehicle inventory management
* Add, edit, and remove vehicles
* Booking approval and reservation management
* Customer management
* Role-based access control
* Reports and business insights

---

## 🚀 Tech Stack Overview

### 🧩 Core Technologies

* **Next.js** – Full-stack React framework
* **React.js** – Component-based UI development
* **TypeScript** – Type-safe JavaScript development

### 🎨 UI & UX

* **Tailwind CSS** – Utility-first CSS framework
* **Shadcn UI** – Accessible and reusable UI components
* **Framer Motion** – Smooth animations and transitions
* **Lucide React** – Modern icon library
* **Sonner** – Beautiful toast notifications

### ⚙️ State Management

* **TanStack Query** – Data fetching and caching
* **React Context API** – Global state management

### 🔄 API & Database

* **Axios** – API communication
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB ODM

### 📋 Forms & Validation

* **React Hook Form** – Form handling
* **Zod** – Schema validation

### 🛠️ Utilities & Integrations

* **Stripe / SSLCommerz** – Secure payment processing
* **Cloudinary** – Image storage and optimization
* **date-fns** – Date utility library
* **Recharts** – Analytics and reporting charts

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/raselcsedev/ride-vibe.git
cd ridevibe-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_API_URL=
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:3000
```

---

## 📊 Key Highlights

* Fully responsive design
* Secure authentication and authorization
* Real-time booking workflow
* Vehicle availability tracking
* Payment gateway integration
* Modern dashboard experience
* Scalable full-stack architecture

---

## 📁 Project Structure

```text
src
├── app
├── components
├── hooks
├── lib
├── services
├── types
├── utils
└── providers
```

---

## 📄 License

This project is provided for educational, portfolio, and customization purposes.
