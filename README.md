# Masha Catering Services — Premium React.js Frontend

A complete, high-performance, mobile-responsive frontend web application built for **Masha Catering Services**, based in Melapalayam, Tirunelveli, Tamil Nadu.

Specializing in authentic Melapalayam dum biryani, Arabian mandi platters, party bucket biryanis, and grand wedding & Walima banquet feasts.

---

## 🌟 Live Features & Highlights

1. **Brand Identity & Luxury Aesthetic**:
   - Deep rich burgundy / maroon (`#72121E`, `#4A0B13`), metallic gold accents (`#C59B27`, `#E0B94A`), and warm cream ivory backgrounds (`#FAF7F2`).
   - Editorial font pairing with **Playfair Display**, **Cinzel**, and **Poppins**.
   - Floating food badges, ambient glowing gradient effects, and smooth backdrop-blur glassmorphism.

2. **Animated Text Slider & Hero Experience**:
   - Fullscreen hero with high-definition catering & dum biryani photography.
   - Animated headline: *"Every Celebration Deserves Exceptional Taste."*
   - Smooth text slider dynamically cycling through:
     - *Wedding & Walima Catering*
     - *Authentic Biryani & Mandi*
     - *Birthday & Family Celebrations*
     - *Corporate Event Catering*
     - *Customized Catering Menus*
   - Dual Call-To-Action buttons (*Explore Our Menu* & *Book Your Catering*).

3. **Multi-Page Architecture (React Router DOM)**:
   - **Home (`/`)**: Hero slider, Services Overview, Signature Food Spotlight, The Masha Standard ("Why Choose Us"), Interactive Culinary Gallery with Lightbox, Verified Customer Reviews Carousel, Service Coverage Across Tamil Nadu, Final Call To Action, and comprehensive Footer.
   - **About Us (`/about`)**: Image-led hero *"Our Passion Is Serving Great Food"*, Melapalayam culinary heritage introduction, 4 Core Pillars (Authentic Taste, Peak Freshness, Strict Hygiene, Guest Satisfaction), Catering Philosophy, Events Catered, Step-by-Step Food Preparation showcase, and direct enquiry CTAs.
   - **Menu (`/menu`)**: Dynamic category filter system (*All Items*, *Biryani*, *Mandi*, *Bucket Biryani*, *Event Catering*, *Customized Menus*), transparent pricing notice (featuring the verified Bucket Biryani reference price of ₹2,700 with serving size note, and *"Contact for Price"* for custom unverified items), and instant WhatsApp order inquiry triggers.
   - **Contact Us (`/contact`)**: Hero *"Let's Plan Your Perfect Feast"*, direct phone call integration (`+91 96000 82016`), WhatsApp direct chat link, business headquarters address, verified operating hours notice, interactive embedded Google Maps, and a comprehensive frontend-validated Catering Enquiry Form with one-click WhatsApp summary forwarding.
   - **Not Found (`*`)**: Custom 404 luxury culinary page with direct return links.

4. **Animations & Micro-Interactions**:
   - Page transitions powered by Framer Motion.
   - Staggered card entries and scroll-triggered animations (`useScrollReveal`).
   - Interactive Lightbox modal for gallery images with Next/Prev/Close buttons and keyboard arrow navigation.
   - Auto-cycling testimonial slider with manual controls and pause-on-hover.
   - Sticky navbar with background blur transition on scroll and mobile animated hamburger drawer.
   - Floating WhatsApp button with pulsing beacon animation.
   - Scroll-to-top on route changes and floating back-to-top button.
   - Full accessibility support for `prefers-reduced-motion`.

5. **100% Mobile Responsive**:
   - Mobile-first CSS architecture with Bootstrap 5 grid and custom responsive breakpoints.
   - Zero horizontal overflow.
   - Touch-friendly tap targets and scalable fluid typography (`clamp`).

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **React Router DOM 7**
- **Framer Motion 14**
- **Bootstrap 5.3 & Bootstrap Icons**
- **Lucide React Icons**
- **HTML5 & Modern CSS3**

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js (v18 or higher recommended; developed on Node v24)
- npm or yarn

### Steps

1. Clone or navigate into the project directory:
   ```bash
   cd "d:/masha- caterings"
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
d:/masha- caterings/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.jsx                 # Application entry point with styles
│   ├── App.jsx                  # Root router with AnimatePresence
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glassmorphism nav with mobile drawer
│   │   ├── Footer.jsx           # Comprehensive footer with links & hours note
│   │   ├── HeroSlider.jsx       # Fullscreen hero with animated text cycler
│   │   ├── AnimatedText.jsx     # Word-staggered headline animation
│   │   ├── ServiceCard.jsx      # Reusable catering service overview card
│   │   ├── FoodCard.jsx         # Signature food card with verified price note
│   │   ├── ReviewSlider.jsx     # Testimonial slider for 3 verified reviews
│   │   ├── Gallery.jsx          # Responsive gallery with full Lightbox modal
│   │   ├── WhatsAppButton.jsx   # Floating WhatsApp button with pulse
│   │   ├── ScrollToTop.jsx      # Route change scroll reset + back-to-top button
│   │   └── PageTransition.jsx   # Route animation wrapper using Framer Motion
│   ├── pages/
│   │   ├── Home.jsx             # Comprehensive 8-section homepage
│   │   ├── About.jsx            # Passion & heritage story, pillars & prep
│   │   ├── Menu.jsx             # Filterable menu with pricing transparency
│   │   ├── Contact.jsx          # Validated enquiry form & Google Maps
│   │   └── NotFound.jsx         # Custom 404 error page
│   ├── data/
│   │   ├── services.js          # Services list, coverage areas, why choose us
│   │   ├── menuItems.js         # Menu categories, dishes & verified prices
│   │   ├── testimonials.js      # 3 verified customer review excerpts
│   │   └── gallery.js           # Gallery images, categories & captions
│   ├── hooks/
│   │   └── useScrollReveal.js   # IntersectionObserver scroll animation hook
│   └── styles/
│       ├── global.css           # Brand tokens, luxury typography & buttons
│       ├── animations.css       # Keyframes, shimmer, pulses & floating shapes
│       ├── navbar.css           # Navigation & mobile sliding drawer styles
│       ├── home.css             # Hero, food cards, gallery & testimonial styles
│       ├── about.css            # About page story & pillars styling
│       ├── menu.css             # Menu category filters & grid styling
│       └── contact.css          # Form validation, contact cards & map styling
```

---

## 📍 Business Details Configured

- **Business Name**: Masha Catering Services
- **Hometown / Hub**: Melapalayam, Tirunelveli, Tamil Nadu
- **Full Address**: 7th Street, Hameempuram, Melapalayam, Tirunelveli, Tamil Nadu 627005
- **Phone Number**: `+91 96000 82016` (working `tel:+919600082016` links)
- **WhatsApp**: Connected to `+91 96000 82016` with pre-filled event inquiry text
- **Operating Hours**: Listed as *Open until 9 PM* with advisory note to confirm daily catering slots
- **Coverage Areas**: Melapalayam, Tirunelveli, Tenkasi, Madurai, Thoothukudi, Chennai, and surrounding areas in Tamil Nadu
- **Known Reference Price**: Bucket Biryani @ ₹2,700 (subject to confirmation of serving size and current rate). All other dishes appropriately display *"Contact for Price"*.
