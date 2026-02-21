# Brackett Agency Website - Product Requirements Document

## Project Overview
**Project Name:** Brackett Agency Website Redesign  
**Last Updated:** December 2025  
**Status:** ✅ Complete - Major Restructuring Done

## Original Problem Statement
Create a cleaner, more business-oriented version of the Brackett Agency website with premium positioning for mid-market B2B strategic consulting services.

## Brand Identity
- **Tagline:** "Intelligence That Executes."
- **Positioning:** Fractional strategy partner for mid-market B2B companies ($10-50M revenue) needing senior strategic thinking backed by AI-powered intelligence
- **Target Audience:** CEOs, leadership teams, PE-backed portfolio companies, funded startups (Series A+)

## Brand Colors
- **Brackett Brown:** #8B6F47 (primary accent from logo)
- **Brackett Gold:** #B8975A 
- **Deep Charcoal:** #2C2C2C (headings)
- **Warm Gray:** #6B6B6B (body text)
- **Cream:** #F5F3EF (backgrounds)
- **Growth Teal:** #2D7B7B (CTAs)
- **Intelligence Blue:** #1E4D7B (technology sections)

## Typography
- **Headings:** Playfair Display (serif)
- **Body:** Montserrat (sans-serif)

---

## What's Been Implemented ✅

### December 2025 - Complete Website Restructuring

**Navigation Structure (8 Pages):**
1. ✅ **Home** - Hero, Problem section, Solution overview, Technology preview, Leadership, CTA
2. ✅ **How We Work** - 3-phase methodology (Intelligence → Strategy → Execution), Industries served
3. ✅ **Solutions** - Tabbed interface with 3 tabs:
   - Signature Programs (Revenue Clarity System™, Market Position Reset™, Growth Execution Accelerator™)
   - Strategic Partnerships (Executive & Growth retainers)
   - Diagnostic Audit (Strategic Blindspot Audit™)
4. ✅ **Brand & Design** - NEW PAGE with services, packages, industry expertise, approach
5. ✅ **Intelligence** - 3 platforms (Customer Choice Intelligence™, Brackett Intelligence Engine™, CX Analytics™)
6. ✅ **Insights** - Blog/resources with filter tabs and newsletter signup
7. ✅ **About** - Leadership bios (Erania Brackett, Dr. R. Sukumar), Our Story, OSG Partnership
8. ✅ **Contact** - JotForm link, Strategic Blindspot Audit CTA, FAQ accordion

**Components:**
- ✅ Navigation with responsive design (desktop + mobile)
- ✅ Footer with CTA banner, navigation links, contact info
- ✅ Animated counters for statistics
- ✅ Tab components for Solutions and Insights pages
- ✅ FAQ accordion for Contact and Brand & Design pages

**Technical Features:**
- ✅ React Router for navigation
- ✅ Framer Motion for animations
- ✅ Lucide React for icons
- ✅ CSS variables for theming
- ✅ Responsive design (mobile-first)
- ✅ External JotForm integration for contact

---

## Architecture

```
/app/frontend/src/
├── App.js                    # Main routing
├── App.css                   # Component styles
├── index.css                 # Global styles, CSS variables
├── components/
│   ├── Navigation.js         # Header navigation
│   ├── Footer.js             # Footer component
│   ├── AnimatedCounter.js    # Stats animation
│   └── ui/                   # Shadcn UI components
└── pages/
    ├── Home.js               # Homepage
    ├── HowWeWork.js          # Methodology page
    ├── Solutions.js          # Solutions with tabs
    ├── BrandDesign.js        # Brand & Design services
    ├── Intelligence.js       # Technology platforms
    ├── Insights.js           # Blog/resources
    ├── About.js              # Team & company info
    └── Contact.js            # Contact with FAQ
```

---

## External Integrations
- **JotForm:** https://form.jotform.com/252728460666061 (contact form)
- **No backend required** - Static frontend site

---

## Testing Status
- ✅ All 8 navigation pages working
- ✅ All CTAs link to JotForm correctly
- ✅ Solutions tabs functional
- ✅ FAQ accordions working
- ✅ Insights filter tabs working
- ✅ Mobile navigation working
- ✅ Footer links working

**Test Report:** `/app/test_reports/iteration_6.json` - 100% pass rate

---

## Future Considerations / Backlog

### P1 - Nice to Have
- [ ] Add actual case study content when available
- [ ] Add blog article content to Insights page
- [ ] Client logo carousel for social proof
- [ ] Testimonial quotes from actual clients

### P2 - Enhancement Ideas
- [ ] Newsletter integration (currently static form)
- [ ] Calendar widget for scheduling consultations
- [ ] Dark mode toggle
- [ ] More interactive data visualizations

### Squarespace Deployment Notes
For deploying to Squarespace:
1. Build the React app: `yarn build`
2. Options for deployment:
   - Use Squarespace Code Block for embedding
   - Use Developer Mode for full integration
   - Consider external hosting (Vercel/Netlify) with custom domain redirect
