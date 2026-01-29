# AnyTechPros - Consulting Website 🏜️

A modern, responsive consulting website built with React, Vite, and Tailwind CSS featuring a sophisticated warm sandstone color palette. The site showcases strategic consulting and technology solutions with smooth animations, dark mode support, and a professional aesthetic.

![AnyTechPros](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss)

## 🎨 Features

- **Modern Design**: Warm sandstone color palette that evokes professionalism and trust
- **Dark Mode**: Seamless light/dark theme switching with persistent storage
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Scroll animations, hover effects, and transitions
- **SEO Optimized**: Semantic HTML and meta tags for better search rankings
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessible**: WCAG AA compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Git (optional)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
anytechpros3/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── context/           # React Context providers
│   │   └── ThemeContext.jsx
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── ...
│   ├── App.jsx           # Main app component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles & Tailwind imports
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Project dependencies

```

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#C4915E` (Warm Sandstone)
- **Primary Dark**: `#8B5E34` (Deep Terracotta)
- **Primary Light**: `#D4A574` (Light Sand)

### Accent Colors
- **Accent Warm**: `#D99F6C` (Sunset Orange)
- **Accent Highlight**: `#F4E4D7` (Cream)
- **Accent Deep**: `#8B6F47` (Bronze)

### Background & Text
- **Light Background**: `#FDFBF7` (Off-White Warm)
- **Dark Background**: `#2B2520` (Dark Chocolate)
- See `tailwind.config.js` for complete color system

## 🧩 Key Components

### Header
- Sticky navigation with blur effect
- Mobile-responsive hamburger menu
- Dark/light mode toggle
- Smooth scroll to sections

### Hero Section
- Full viewport height
- Animated background patterns
- Dual CTA buttons
- Statistics display

### Services
- 12+ service offerings
- Interactive cards with hover effects
- Icon-based design
- Links to detailed service pages

### Contact Form
- Form validation
- Success/error messaging
- Contact information display
- Multiple contact methods

### Footer
- Multi-column layout
- Newsletter signup
- Social media links
- Quick navigation

## 🔧 Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3+
- **Routing**: React Router DOM 6.20
- **Animations**: Framer Motion (optional) + CSS animations
- **Icons**: SVG-based custom icons
- **Fonts**: Google Fonts (Inter & Playfair Display)

## 📱 Pages & Routes

- `/` - Home page with all sections
- `/about` - About company and team
- `/services` - Services overview
- `/services/[service-name]` - Individual service pages
- `/platform` - Platform features
- `/industries` - Industries served
- `/products` - Products overview
- `/careers` - Job openings
- `/contact` - Contact form and info

## 🎯 Services Offered

1. Software Development
2. Digital Marketing
3. Cyber Security
4. IT Consulting
5. Management Consulting
6. Business Consulting
7. HR Consulting
8. Telecom Consulting
9. E-Governance
10. Market Research
11. WhatsApp Marketing
12. AI & Automation

## 🌙 Dark Mode

The website includes a fully functional dark mode that:
- Persists across sessions (localStorage)
- Respects system preferences
- Smooth color transitions
- Optimized for both themes

Toggle using the sun/moon icon in the header.

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

The included `vercel.json` handles SPA routing.

### Deploy to Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🔒 Environment Variables

Create a `.env` file for sensitive data:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 🤝 Contributing

This is a commercial project template. Customize as needed for your consulting business.

## 📝 Customization Guide

### Change Colors
Edit `tailwind.config.js` to modify the color palette.

### Add New Service
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update services list in relevant components

### Modify Content
- Update text in component files
- Change images in `public/` folder
- Modify contact information in `Footer.jsx`

## 🐛 Known Issues

- None at this time

## 📄 License

MIT License - feel free to use this template for your projects.

## 💡 Credits

- Design inspired by executive consulting aesthetics
- Color palette: Warm sandstone theme
- Icons: Custom SVG implementations
- Fonts: Google Fonts (Inter, Playfair Display)

## 📧 Support

For questions or support, contact: info@anytechpros.com

## 🚀 Future Enhancements

- [ ] Blog section with CMS integration
- [ ] Client portal
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Chat widget integration
- [ ] Video testimonials

---

**Built with ❤️ by AnyTechPros Team**

🌐 [Website](https://anytechpros.com) | 💼 [LinkedIn](https://linkedin.com) | 🐦 [Twitter](https://twitter.com)
