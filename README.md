# ☕ CafeCraft – Crafted Coffee, Cozy Moments

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![AOS](https://img.shields.io/badge/AOS-2.3-FF6F61?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A premium, single-page cafe landing website built with React and Vite — featuring smooth scroll animations, a filterable menu, table reservations, an image gallery, customer testimonials, and a fully responsive design.**

[Live Demo](#) · [Report Bug](https://github.com/gopalwadhwani/cafe-craft/issues) · [Request Feature](https://github.com/gopalwadhwani/cafe-craft/issues)

</div>

---

## 📖 Description

**CafeCraft** is a modern, visually rich landing page for a premium artisanal cafe. It showcases the cafe's menu, story, special offers, gallery, and customer reviews through an elegant single-page experience. The site is designed with a warm, coffee-themed aesthetic, premium typography (Playfair Display & Inter), and scroll-triggered animations powered by the AOS library — delivering a polished, professional feel suitable for a real-world business.

---

## ✨ Features

- **🧭 Responsive Navbar** — Sticky navigation bar with smooth-scroll links, mobile hamburger toggle, and a "Book Table" CTA button
- **🖼️ Hero Section** — Full-screen hero with background image overlay, animated entrance, and call-to-action buttons
- **📖 About Section** — Brand story with barista image, establishment badge, and animated statistics (10+ years, 50+ varieties, 5000+ customers)
- **🍽️ Filterable Menu** — Dynamic menu with category filters (All, Coffee, Tea, Desserts, Snacks) and beautifully styled menu cards with pricing
- **🎁 Special Offers** — Promotional cards highlighting deals (Happy Hour, Birthday Treat, Morning Combo)
- **📸 Image Gallery** — Grid-based gallery with hover overlays and captions showcasing cafe interiors, coffee, pastries, and beans
- **⭐ Testimonials** — Customer review cards with star ratings, avatars, and quotes from a data-driven testimonial system
- **📅 Table Reservation** — Interactive booking form with fields for name, phone, date, time, and guest count — with instant confirmation
- **📍 Location & Contact** — Embedded Google Maps, address, phone, email, and weekly opening hours
- **🔗 Footer** — Multi-column footer with brand info, quick links, support links, social media icons, and copyright bar
- **🎞️ Scroll Animations** — AOS (Animate On Scroll) library for fade, zoom, and slide-in effects on every section
- **📱 Fully Responsive** — Mobile-first design that adapts seamlessly across all screen sizes
- **🔍 SEO Optimized** — Open Graph meta tags, semantic HTML, descriptive meta description, and proper heading hierarchy

---

## 🛠️ Tech Stack

| Layer       | Technology                                                                 |
|-------------|----------------------------------------------------------------------------|
| **Framework**   | [React 19](https://react.dev/) — Component-based UI library           |
| **Build Tool**  | [Vite 7](https://vite.dev/) — Lightning-fast dev server & bundler     |
| **Styling**     | Vanilla CSS — Modular, component-scoped stylesheets                   |
| **Animations**  | [AOS 2.3](https://michalsnik.github.io/aos/) — Animate On Scroll     |
| **Icons**       | [Font Awesome 6.5](https://fontawesome.com/) — Icon library (CDN)    |
| **Fonts**       | [Google Fonts](https://fonts.google.com/) — Playfair Display & Inter |
| **Linting**     | [ESLint 9](https://eslint.org/) — Code quality & consistency         |
| **Language**    | JavaScript (ES Modules)                                               |

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher recommended) — [Download](https://nodejs.org/)
- **npm** (comes bundled with Node.js) or **yarn**

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/gopalwadhwani/cafe-craft.git
   cd cafe-craft
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173` (Vite's default port).

---

## ▶️ How to Run

| Command             | Description                                     |
|---------------------|-------------------------------------------------|
| `npm run dev`       | Start the Vite dev server with hot module reload |
| `npm run build`     | Build for production (output in `dist/`)         |
| `npm run preview`   | Preview the production build locally             |
| `npm run lint`      | Run ESLint to check code quality                 |

---

## 📁 Project Structure

```
cafeCraft/
├── public/
│   ├── images/                  # Static image assets
│   │   ├── hero-bg.png          # Hero section background
│   │   ├── about-barista.png    # About section barista image
│   │   ├── gallery-interior.png # Gallery — cafe interior
│   │   ├── gallery-coffee.png   # Gallery — artisan coffee
│   │   ├── gallery-pastries.png # Gallery — fresh pastries
│   │   └── gallery-beans.png    # Gallery — premium beans
│   └── vite.svg                 # Default Vite favicon
│
├── src/
│   ├── assets/
│   │   └── react.svg            # React logo asset
│   │
│   ├── components/              # Reusable React components
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── About.jsx            # Brand story & stats
│   │   ├── Menu.jsx             # Filterable menu section
│   │   ├── MenuCard.jsx         # Individual menu item card
│   │   ├── SpecialOffers.jsx    # Promotional offer cards
│   │   ├── Gallery.jsx          # Image gallery grid
│   │   ├── Testimonials.jsx     # Customer review cards
│   │   ├── Reservation.jsx      # Table booking form
│   │   ├── Location.jsx         # Google Maps & contact info
│   │   └── Footer.jsx           # Multi-column footer
│   │
│   ├── data/                    # Static data modules
│   │   ├── menuData.js          # Menu items (12 items, 4 categories)
│   │   └── testimonialsData.js  # Customer testimonials (6 reviews)
│   │
│   ├── pages/
│   │   └── Home.jsx             # Main page composing all sections
│   │
│   ├── styles/                  # Component-scoped CSS files
│   │   ├── global.css           # Global styles, variables & resets
│   │   ├── navbar.css           # Navbar styles
│   │   ├── hero.css             # Hero section styles
│   │   ├── about.css            # About section styles
│   │   ├── menu.css             # Menu section styles
│   │   ├── gallery.css          # Gallery styles
│   │   ├── testimonials.css     # Testimonials styles
│   │   ├── reservation.css      # Reservation form styles
│   │   └── footer.css           # Footer styles
│   │
│   ├── App.jsx                  # Root component (AOS init)
│   └── main.jsx                 # Entry point (React DOM render)
│
├── index.html                   # HTML template with SEO meta tags
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Lockfile
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

---

## 📸 Screenshots

> _Replace the placeholders below with actual screenshots of the running application._

| Section | Preview |
|---------|---------|
| **Hero** | ![Hero Section Screenshot](screenshots/hero.png) |
| **Menu** | ![Menu Section Screenshot](screenshots/menu.png) |
| **About** | ![About Section Screenshot](screenshots/about.png) |
| **Gallery** | ![Gallery Section Screenshot](screenshots/gallery.png) |
| **Testimonials** | ![Testimonials Screenshot](screenshots/testimonials.png) |
| **Reservation** | ![Reservation Form Screenshot](screenshots/reservation.png) |
| **Footer** | ![Footer Screenshot](screenshots/footer.png) |

---

## 🔮 Future Improvements

- [ ] **Backend Integration** — Connect the reservation form to a real backend (Node.js/Express) with database storage
- [ ] **Authentication** — Add user accounts for loyalty rewards and order history
- [ ] **Online Ordering** — Enable add-to-cart functionality and checkout flow
- [ ] **CMS Integration** — Allow dynamic menu updates via a content management system
- [ ] **Blog Section** — Coffee tips, brewing guides, and cafe news
- [ ] **Multi-language Support** — Internationalization (i18n) for global audiences
- [ ] **Dark/Light Theme Toggle** — User-selectable color scheme
- [ ] **Performance Optimization** — Image lazy loading with blur placeholders, code splitting
- [ ] **PWA Support** — Service worker for offline access and installability
- [ ] **Accessibility Audit** — Full WCAG 2.1 AA compliance review
- [ ] **Email Notifications** — Automated reservation confirmations via email
- [ ] **Review System** — Allow customers to submit and display live reviews

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Guidelines

- Follow existing code style and component patterns
- Use meaningful commit messages (follow [Conventional Commits](https://www.conventionalcommits.org/))
- Ensure the app builds without errors before submitting
- Add/update CSS in component-scoped files under `src/styles/`
- Test responsiveness across mobile, tablet, and desktop viewports

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ and ☕ by **CafeCraft**

</div>
