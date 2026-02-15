# Brackett Agency Website - PRD

## Original Problem Statement
Create a cleaner version of the Brackett Agency website (https://brackett.agency/) for business purposes. Ensure the messaging is clear, the services offered are clear, and that the code can be redeployed to Squarespace.

## User Choices
- **Design**: Modern & Bold with dynamic sections and strong typography
- **Color Scheme**: Keep current brand colors (dark/black backgrounds with white text)
- **Pages**: Home + About + Services + Case Studies + Contact (all pages)
- **Contact Form**: External JotForm (https://form.jotform.com/252728460666061)
- **Updates**: New tagline and service descriptions
- **Intelligence Partner**: OSG Analytics platforms (o360, PatientX360, ASEMAP) - not mentioned by company name

## Target Audience
Corporate executives, startup founders, and small business owners seeking strategic consulting powered by advanced customer analytics.

## Tech Stack
- **Frontend**: React 19 with React Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Syne (headings) + Manrope (body) via Google Fonts

---

## What's Been Implemented (January 2026)

### Intelligence Platform Integration
The website now explains that Brackett's strategic intelligence is powered by three advanced platforms:
- **o360**: Comprehensive customer intelligence platform for real-time analytics
- **PatientX360**: Healthcare-specific intelligence for patient choice and behavior
- **ASEMAP**: Proprietary choice analytics revealing behavioral/cognitive drivers behind decisions

### Core Pages
1. **Home Page**
   - Hero section with tagline: "Strategic Intelligence for the Modern Age"
   - NEW: "Our Intelligence Engine" section showcasing o360, PatientX360, ASEMAP
   - Philosophy section highlighting approach
   - Services overview with 3 key categories
   - Testimonials from industry leaders
   - CTA sections with JotForm integration

2. **About Page**
   - Company story and intelligence-powered approach
   - NEW: Platform cards explaining o360, PatientX360, ASEMAP capabilities
   - Core values grid (Insight-Driven, Execution-Focused, Client-Centric, Technology-Enabled)
   - Key strengths with visual design

3. **Services Page** (Updated - Removed Executive Coaching/Leadership)
   - Strategic Intelligence Advisory (Customer Intelligence, Choice Analytics, Predictive Intelligence)
   - Customer Experience & Brand (CX Strategy, Execution Planning, Brand Positioning)
   - Healthcare Intelligence (Patient Choice Analytics, Healthcare Experience, Market Intelligence)
   - Platform-Powered Insights capabilities section

4. **Case Studies Page**
   - Stats section (50+ Projects, 3x ROI, 95% Retention, 12+ Industries)
   - 3 featured case studies with challenge/solution/result format
   - Industry partners section

5. **Contact Page**
   - Main CTA linking to external JotForm
   - Resource downloads (Advisory Overview, One Page Brochure)
   - Engagement process steps

### Removed Services
- Executive Leadership Development
- Executive Coaching
- Leadership Transformation
- Organizational Transformation Advisory

### Design System (Updated January 2026)
- **No cartoon icons**: Replaced all Lucide icons with sophisticated typography-based elements
- **Numbers**: 01, 02, 03 numbering system for cards and lists
- **Roman Numerals**: I, II, III for major service categories
- **Alphanumeric IDs**: I.A, I.B, I.C for sub-services
- **Labels**: PLATFORM, HEALTHCARE, ANALYTICS category labels
- **Accent Lines**: Gradient lines (blue-to-transparent) for visual hierarchy
- **Quotation Marks**: Large typographic quotes for testimonials

### Components
- **Navigation**: Floating glassmorphism navbar with mobile responsive menu
- **Footer**: Full footer with navigation, resources, and copyright

---

## External Links (Preserved)
- JotForm Contact: https://form.jotform.com/252728460666061
- Advisory Overview PDF: https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf
- One Page Brochure PDF: https://brackett.agency/s/brackett_agency_one_pager_1.pdf

---

## Future Backlog (P1/P2)

### P1 - High Priority
- Add demo request form or platform showcase
- Add analytics tracking (Google Analytics/Plausible)

### P2 - Medium Priority
- Add individual case study detail pages
- Blog/Insights section for thought leadership
- Platform integration demos or videos

### P3 - Nice to Have
- Newsletter signup integration
- Live chat widget
- CRM integration for leads

---

## Squarespace Redeployment Notes
The current React implementation would need to be either:
1. Exported as static HTML/CSS/JS and imported to Squarespace
2. Rebuilt using Squarespace's native page builder following this design system
3. Hosted externally and embedded via Squarespace

Recommended: Consider hosting on Vercel/Netlify for full functionality, or recreate the design in Squarespace's builder using this as reference.
