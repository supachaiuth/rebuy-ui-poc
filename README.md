# Demo-Rebuy

> Premium Device Buyback UI Prototype

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red?style=flat-square)

เว็บไซต์ UI prototype สำหรับบริการรับซื้ออุปกรณ์ Apple ที่ใช้แล้ว (MacBook, iPhone, iPad, Apple Watch)

## 🎯 Overview

Demo-Rebuy เป็น UI prototype ที่ออกแบบมาเพื่อแสดงความเป็น premium, cinematic, minimal และใช้ dark warm palette เหมาะสำหรับธุรกิจรับซื้ออุปกรณ์ electronics ระดับ luxury

**Design Direction:**
- Premium & Cinematic
- Minimal & Clean
- Dark Warm Neutral Palette
- Elegant Whitespace
- Subtle Motion

**Avoid:**
- Generic SaaS UI
- Crowded Layouts
- Bright Gradients
- Flashy Animations

## 📸 Screenshots

### Home Page
![Home Page](/public/screenshots/home-hero.png)

### Device Form Page
![Device Form](/public/screenshots/device-form.png)

### Summary Page
![Summary](/public/screenshots/summary.png)

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm**, **yarn**, **pnpm**, หรือ **bun**

### Installation

```bash
# 1. Clone repository
git clone https://github.com/supachaiuth/rebuy-ui-poc.git
cd rebuy-ui-poc

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
test-project/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens & base styles
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Home page (/)
│   │   ├── device-form/
│   │   │   └── page.tsx        # Device details form (/device-form)
│   │   └── summary/
│   │       └── page.tsx         # Summary/Review (/summary)
│   └── components/
│       ├── ui/                  # Reusable UI components
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   ├── Select.tsx
│       │   ├── Card.tsx
│       │   ├── Badge.tsx
│       │   ├── Textarea.tsx
│       │   └── Checkbox.tsx
│       ├── layout/              # Layout components
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── sections/            # Page sections
│       │   ├── Hero.tsx
│       │   ├── TrustStats.tsx
│       │   ├── DeviceGrid.tsx
│       │   └── Features.tsx
│       └── form/                 # Form components
│           └── StepIndicator.tsx
├── public/
│   └── screenshots/            # UI screenshots
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0A0908` | Main background |
| Surface | `#161412` | Cards, elevated areas |
| Surface Elevated | `#1E1C19` | Hover states |
| Border | `#2A2724` | Borders, dividers |
| Accent | `#C4A882` | Primary accent (warm gold) |
| Accent Muted | `#A68B6A` | Hover accent |
| Text Primary | `#F2EDE4` | Main text |
| Text Secondary | `#9A9690` | Muted text |
| Text Muted | `#6B6860` | Disabled text |

### Typography

- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Fallback:** system-ui, sans-serif

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, trust stats, device grid, features |
| `/device-form` | Device details input form with step indicator |
| `/summary` | Review & estimated offer display |

### Page Flow

```
Home → "Get an Offer" → Device Form → "Check Offer" → Summary
                                              ↓
                                    "Submit Request" (placeholder)
                                    "Start Over" → Home
```

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.0 | Framework (App Router) |
| React | 19.2.4 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |
| Lucide React | 0.577.0 | Icons |

## ⚠️ Important Notes

> **UI POC Only**
> 
> - นี่เป็น **UI prototype** เท่านั้น — ยังไม่มี backend logic
> - Buttons เป็น placeholder ยังไม่มี real functionality
> - ข้อมูลในหน้า Summary เป็น mock data
> - ยังไม่มี form validation
> - ยังไม่มี real API integration

## 🔧 Future Development

- [ ] Backend API integration
- [ ] Form validation
- [ ] Real offer calculation logic
- [ ] User authentication
- [ ] Email notification system
- [ ] Admin dashboard
- [ ] Database integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

© 2026–{new Date().getFullYear()} TryCatchr Tech. All rights reserved.

## 👥 Team

Developed with ❤️ by TryCatchr Tech

---

**Repository:** https://github.com/supachaiuth/rebuy-ui-poc
