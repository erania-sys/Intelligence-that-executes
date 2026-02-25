# Brackett Agency Website - Product Requirements Document

## Original Problem Statement
Create a cleaner, more business-oriented version of the agency website with comprehensive restructuring based on a new brand identity: "Intelligence That Executes."

## Product Overview
A multi-page static React application for Brackett Agency featuring:
- Fractional strategic services (CSO/CMO)
- Proprietary AI technology partnership with OSG Analytics (ASEMAP)
- Case studies and thought leadership content
- Black and gold design theme with Inter font

## Target Audience
- Mid-market companies ($10M-$100M revenue)
- B2B and B2C clients
- Companies seeking fractional executive leadership

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Framer Motion
- **Icons:** lucide-react
- **UI Components:** shadcn/ui
- **Deployment:** Vercel with custom domain (Squarespace managed)
- **Data:** Static JavaScript arrays (no backend/database)

## Site Architecture
```
/app/frontend/src/
├── App.js (routes)
├── components/
│   ├── Navigation.js
│   ├── Footer.js
│   ├── ScrollToTop.js
│   └── IntelligenceAdvantage.js (NEW - reusable callout)
└── pages/
    ├── Home.js
    ├── About.js
    ├── BrandDesign.js
    ├── Careers.js
    ├── CaseStudies.js
    ├── Contact.js
    ├── CustomerExperience.js
    ├── HowWeWork.js
    ├── Insights.js
    ├── Intelligence.js
    ├── OurApproach.js (NEW - "Why Intelligence Matters" page)
    ├── Solutions.js
    └── BlogArticle.js
```

## Completed Features (as of Feb 25, 2026)

### Core Pages
- [x] Homepage with predictive intelligence narrative
- [x] Solutions page with signature programs + Intelligence Advantage callout
- [x] About page with team bios
- [x] Contact page with JotForm integration
- [x] How We Work page
- [x] Brand & Design page with a la carte services
- [x] Intelligence page (detailed tech specs)
- [x] **Our Approach page** (NEW - "Why Intelligence Matters")
- [x] Insights (blog) page with JotForm newsletter signup
- [x] Case Studies page (2 detailed studies) + Intelligence Advantage callout
- [x] Careers page
- [x] Customer Experience page

### Blog System
- [x] Dynamic blog routes (/insights/:id)
- [x] 15+ blog articles across categories
- [x] Expanded content for all articles
- [x] Share functionality (LinkedIn, Substack)
- [x] Category filtering on Insights page
- [x] **Updated blog titles** to match intelligence-focused plan

### Reusable Components
- [x] **IntelligenceAdvantage** - 4 variants (inline, compact, standard, full)
  - Deployed on: Solutions, Case Studies, Our Approach pages

### AI SEO Optimization
- [x] ProfessionalService schema (services, expertise, founder info)
- [x] Organization schema
- [x] FAQ schema with 5 key questions for AI search engines
- [x] Service schema for Strategic Blindspot Audit
- [x] Enhanced meta tags (keywords, Open Graph, Twitter cards)
- [x] robots meta directives for AI crawlers

### Technical Implementations
- [x] ScrollToTop component for navigation
- [x] Vercel deployment with vercel.json for React Router
- [x] Responsive design across all pages
- [x] JotForm external links for contact/newsletter

## Pending Tasks

### P1 (Medium Priority)
1. **Enhance All Team Bios** - Only Erania's bio updated, others need intelligence context
2. **Create Visual Intelligence Badges** ("Stanford-Born AI", "60+ Country Validated")
3. **Create Comparison Infographic** (Traditional vs Brackett Fractional Executive)

### P2 (Lower Priority)
4. Site-wide Micro-copy & CTA Audit
5. Final Design Polish & Consistency Check
6. Enhance Contact Page styling

## External Integrations
- **JotForm:** Newsletter signup and contact forms (external links only)
- **Vercel:** Deployment platform
- **Squarespace:** Domain management

## Design System
- **Primary Colors:** Black (#0A0A0A), Gold (#C9A961)
- **Font:** Inter
- **Theme:** Dark, professional, premium feel
- **Components:** shadcn/ui base components

## Key Files Reference
- `/app/frontend/src/pages/OurApproach.js` - NEW "Why Intelligence Matters" page
- `/app/frontend/src/components/IntelligenceAdvantage.js` - NEW reusable component
- `/app/frontend/src/pages/BlogArticle.js` - All blog content storage
- `/app/frontend/src/pages/Solutions.js` - Signature programs
- `/app/frontend/src/pages/About.js` - Team bios
- `/app/frontend/public/index.html` - SEO structured data
- `/app/frontend/vercel.json` - Vercel deployment config

## Notes
- All content is static (no backend/database)
- Blog and case study data stored in JS arrays within components
- Forms link to external JotForm service
- Navigation updated: "Intelligence" renamed to "Our Approach"
