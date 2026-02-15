# Brackett Agency Website - PRD

## Original Problem Statement
Create a cleaner version of the Brackett Agency website (https://brackett.agency/) for business purposes. Ensure the messaging is clear, the services offered are clear, and that the code can be redeployed to Squarespace.

## User Choices
- **Design**: Modern & Bold with dynamic sections and strong typography
- **Color Scheme**: Keep current brand colors (dark/black backgrounds with white text)
- **Pages**: Home + About + Services + Case Studies + Contact (all pages)
- **Contact Form**: External JotForm (https://form.jotform.com/252728460666061)
- **Updates**: New tagline and service descriptions

## Target Audience
Corporate executives, startup founders, and small business owners seeking strategic consulting and advisory services.

## Tech Stack
- **Frontend**: React 19 with React Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Syne (headings) + Manrope (body) via Google Fonts

---

## What's Been Implemented (January 2026)

### Core Pages
1. **Home Page**
   - Hero section with new tagline: "Strategic Intelligence for the Modern Age"
   - Philosophy section highlighting approach
   - Services overview with 3 key categories
   - Testimonials from industry leaders
   - CTA sections with JotForm integration

2. **About Page**
   - Company story and approach
   - Core values grid (Insight-Driven, Execution-Focused, Client-Centric, Transformative)
   - Key strengths with visual design

3. **Services Page**
   - Strategic Intelligence Advisory (3 sub-services)
   - Customer Experience & Brand (3 sub-services)
   - Transformation & Leadership (3 sub-services)
   - Bento grid layout for service cards

4. **Case Studies Page**
   - Stats section (50+ Projects, 3x ROI, 95% Retention, 12+ Industries)
   - 3 featured case studies with challenge/solution/result format
   - Industry partners section

5. **Contact Page**
   - Main CTA linking to external JotForm
   - Resource downloads (Advisory Overview, One Page Brochure)
   - Engagement process steps

### Components
- **Navigation**: Floating glassmorphism navbar with mobile responsive menu
- **Footer**: Full footer with navigation, resources, and copyright

### Design Features
- Dark mode theme (#050505 background)
- Glassmorphism cards with backdrop blur
- Subtle glow orbs for ambient lighting
- Noise texture overlay for depth
- Smooth animations via Framer Motion
- Custom scroll behavior

---

## External Links (Preserved)
- JotForm Contact: https://form.jotform.com/252728460666061
- Advisory Overview PDF: https://brackett.agency/s/brackett_strategic_intelligence_deck.pdf
- One Page Brochure PDF: https://brackett.agency/s/brackett_agency_one_pager_1.pdf

---

## Future Backlog (P1/P2)

### P1 - High Priority
- Add actual client logos/partner images
- Implement form validation feedback for embedded forms
- Add analytics tracking (Google Analytics/Plausible)

### P2 - Medium Priority
- Add individual case study detail pages
- Blog/Insights section
- Team members page with bios
- Add testimonial carousel for mobile

### P3 - Nice to Have
- Dark/light theme toggle
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
