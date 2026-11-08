# CivicScan — AI-Powered Civic Infrastructure Intelligence

**See the Problem. Improve the City.**

CivicScan is an AI-powered civic infrastructure monitoring and intelligence platform that helps cities identify, map, organize, prioritize, and monitor infrastructure problems using AI, geolocation, image assessment, and structured reporting.

---

## Technology Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with CSS-first design tokens (`src/styles/index.css`)
- **Animations & Scroll:** GSAP + `@gsap/react` (`useGSAP`) + Lenis smooth scrolling
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod + `@hookform/resolvers`

---

## Project Architecture

```text
src/
  assets/
    images/
      hero-urban-infrastructure.jpg
      urban-road-infrastructure.jpg
      drainage-infrastructure.jpg
      infrastructure-inspection.jpg
      urban-maintenance.jpg
      city-aerial.jpg
  components/
    layout/
      Container.jsx
      Navbar.jsx
      Footer.jsx
      SectionHeader.jsx
    sections/
      Hero.jsx
      Problem.jsx
      HowItWorks.jsx
      Capabilities.jsx
      IntelligenceLoop.jsx
      Audience.jsx
      CityIntelligence.jsx
      Trust.jsx
      PilotProgramme.jsx
      FAQ.jsx
      FinalCTA.jsx
    ui/
      Accordion.jsx
      Button.jsx
      CivicScanLogo.jsx
      DashboardPreview.jsx
      FeatureCard.jsx
      MapPreview.jsx
      ReportCard.jsx
      Reveal.jsx
      SectionLabel.jsx
  data/
    siteData.js
  hooks/
    useSmoothScroll.js
  pages/
    Home.jsx
  styles/
    index.css
  App.jsx
  main.jsx
```

---

## Pilot Registration Form & API Configuration

The Pilot Programme registration form (`src/components/sections/PilotProgramme.jsx`) uses **React Hook Form** and **Zod** for schema validation.

To connect the form to a live backend endpoint, configure the `VITE_CIVICSCAN_API_URL` environment variable in a `.env` file at the project root:

```env
VITE_CIVICSCAN_API_URL=https://your-api-endpoint.example.com/pilot-registrations
```

- When `VITE_CIVICSCAN_API_URL` is configured, the form sends a `POST` request with a JSON payload containing `fullName`, `workEmail`, `organizationName`, `organizationType`, `cityOrLga`, `infrastructureChallenges`, and `submittedAt`.
- When `VITE_CIVICSCAN_API_URL` is **not** set, the form validates all inputs and displays a transparent configuration notice rather than faking a successful backend save.

---

## Development & Build Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint checks
npm run lint

# Preview production build
npm run preview
```
