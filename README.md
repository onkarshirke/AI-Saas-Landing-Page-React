# AI SaaS Landing Page Tutorial

<div align="center">
  <br />
  <br />
  <h3 align="center">Build a Beautiful, Modern Landing Page for Your AI SaaS</h3>
  <div align="center">
    Follow along with our detailed tutorial on 
    <a href="https://github.com/onkarshirke" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Quick Start](#quick-start)
6. [Code Snippets](#code-snippets)
7. [Assets & More](#assets--more)

---

## 🚀 Introduction

In this video tutorial, you'll learn how to build a beautiful, modern landing page tailored for your AI SaaS company. This project uses React, Vite, Tailwind CSS, and Zustand to deliver a sleek, responsive website designed to showcase your product and convert visitors into customers.

---

## ⚙️ Tech Stack

- **React** – For building the user interface  
- **Vite** – For fast development and optimized builds  
- **Tailwind CSS** – For rapid, responsive styling using a design token system  
- **TypeScript** – For type safety and modern JavaScript features  
- **Zustand** – For lightweight state management and theme persistence  

---

## ⚡️ Features

- **Modern Landing Page Design:**  
  A sleek, responsive design that highlights your AI SaaS product’s unique value proposition.

- **Dark/Light Mode:**  
  Seamlessly toggle between dark and light themes with Zustand and Tailwind CSS design tokens.

- **Interactive Components:**  
  Build reusable sections such as Hero, Features, Pricing, and CTA using React components.

- **Animated Elements:**  
  Smooth hover animations and gradient effects for a dynamic user experience.

- **State Management:**  
  Global UI state management with Zustand ensures persistent theme settings across sessions.

---

## 🖼️ Screenshots

Below are some key screenshots of the landing page:

<p align="center">
  <img src="https://github.com/onkarshirke/AI-Saas-Landing-Page-React/blob/main/images/reporta.png" alt="Screenshot A" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/AI-Saas-Landing-Page-React/blob/main/images/reportb.png" alt="Screenshot B" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/AI-Saas-Landing-Page-React/blob/main/images/reportc.png" alt="Screenshot C" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/AI-Saas-Landing-Page-React/blob/main/images/reportd.png" alt="Screenshot D" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/AI-Saas-Landing-Page-React/blob/main/images/reporte.png" alt="Screenshot E" width="800" />
</p>

---

## 👌 Quick Start

### Prerequisites

- Git  
- Node.js  
- npm  

### Cloning the Repository

```bash
git clone https://github.com/onkarshirke/ai-saas-landing-page.git
cd ai-saas-landing-page
```

### Installing Dependencies

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Your site will be running at [http://localhost:3000](http://localhost:3000).

---

## 💻 Code Snippets

Here’s a quick example of a reusable **Button** component:

```tsx
export const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 rounded-full bg-violet-600 text-white hover:scale-105 transition">
      {children}
    </button>
  );
};
```

---

## 🎨 Assets & More

* **Images:**  
  Use high-quality images from Unsplash or Pexels to showcase your product.

* **SVG Icons:**  
  Import SVG icons using packages like `vite-plugin-svgr` or directly reference them as React components.

* **Design Tokens:**  
  The design tokens for colors, shadows, and typography are defined in the global CSS file using the `@theme` directive, ensuring consistent dark/light mode styling.

---

Feel free to customize this README to suit your project's needs. Happy coding and enjoy building your modern AI SaaS landing page!
