# Brackett Agency Website - Product Requirements Document

## Project Overview
**Project Name:** Brackett Agency Website Redesign  
**Last Updated:** February 2026  
**Status:** ✅ Complete - Solutions Page Redesigned

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

**Test Reports:** 
- `/app/test_reports/iteration_6.json` - 100% pass rate (restructuring)
- `/app/test_reports/iteration_7.json` - 100% pass rate (design updates)
- `/app/test_reports/iteration_8.json` - 100% pass rate (imagery & headline fix)

---

## February 2026 Updates

### ✅ Hero Images Added to All Pages
- **Home** - Business strategy meeting image (executives)
- **How We Work** - Team collaboration in modern office
- **Solutions** - Business strategy meeting
- **Brand & Design** - Branding & marketing concept
- **Intelligence** - AI chip on circuit board (tech-focused)
- **Insights** - Data analytics visualization
- **About** - Professional leadership team portrait
- **Contact** - Team collaboration and discussion

### ✅ Bug Fix: "Our Guarantee" Section Headline
- Fixed missing headline on the /how-we-work page
- Added "WHY CHOOSE BRACKETT" gold subtitle
- Added "Our Guarantee" white headline
- Section now properly displays above the three cards (Outcome Commitment, Technology Advantage, Senior Execution)

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

---

## ✅ Squarespace Deployment Instructions

Since Squarespace does not natively support React applications, you have **two main deployment options**:

### Option 1: External Hosting with iframe Embed (Recommended)

**Step 1: Deploy React App to a Static Hosting Service**

Choose one of these free options:

| Platform | How to Deploy | Result |
|----------|---------------|--------|
| **Vercel** | Connect GitHub repo → Auto-deploy | `yourapp.vercel.app` |
| **Netlify** | Connect GitHub repo → Auto-deploy | `yourapp.netlify.app` |
| **GitHub Pages** | `yarn build` then push `build/` folder | `username.github.io/repo` |

**For Vercel (Easiest):**
1. Go to https://vercel.com and sign up with GitHub
2. Click "New Project" → Import your repository
3. Vercel auto-detects React → Click "Deploy"
4. Your site is live at `https://your-project.vercel.app`

**Step 2: Embed in Squarespace**

Requirements: Business, Commerce Basic, or higher Squarespace plan

1. Edit your Squarespace page
2. Add a **Code Block** where you want the website
3. Paste this code (replace URL with your deployed app URL):

```html
<iframe 
  src="https://your-app.vercel.app" 
  width="100%" 
  height="100vh" 
  frameborder="0" 
  style="border:none; min-height:100vh; max-width:100%;"
  loading="lazy">
</iframe>
```

4. Save and publish

### Option 2: Full Domain Redirect

If you want the React app to BE your entire site:

1. Deploy to Vercel/Netlify
2. Add your custom domain (e.g., `brackett.agency`) in Vercel's domain settings
3. Update your domain's DNS records to point to Vercel
4. Cancel/pause your Squarespace subscription

### Option 3: Squarespace Developer Mode (Advanced)

For partial integration (e.g., specific pages):

1. Enable Developer Mode in Squarespace settings
2. Run `yarn build` locally
3. Upload built files (`build/static/`) to Squarespace Assets
4. Add script/link tags in Page Header Code Injection

**Note:** This option has limitations with React Router and requires more maintenance.

### Custom Domain Setup (Optional)

For either option, to use your own domain:
1. In Vercel: Settings → Domains → Add `brackett.agency`
2. Update DNS records:
   - Type A: `@` → `76.76.21.21`
   - Type CNAME: `www` → `cname.vercel-dns.com`

---

## Test Reports

| Iteration | Date | Status | Notes |
|-----------|------|--------|-------|
| 6 | Dec 2025 | ✅ 100% pass | Website restructuring complete |
| 7 | Dec 2025 | ✅ 100% pass | Design updates complete |
| 8 | Feb 2026 | ✅ 100% pass | Imagery & headline fix |
| 9 | Feb 2026 | ✅ 100% pass | JavaScript icon fixes - all pages render |
| 10 | Feb 2026 | ✅ 100% pass | Solutions page redesign complete |

---

## Changelog

### February 23, 2026
- **Verification:** Confirmed app is fully functional after fork handoff
- **Blog Content:** Article #9 "From $10M to $50M: The Strategic Inflection Points" content expansion verified complete
- **App Status:** All pages rendering correctly, no syntax errors present

### February 22, 2026
- **Solutions Page Redesign:** Complete visual overhaul to match HowWeWork and BrandDesign pages
  - Enhanced hero section with badges, stats, and floating image card
  - Redesigned Signature Programs tab with gradient Problem/Outcome cards, process timeline with numbered phase badges, and enhanced deliverables grid
  - Redesigned Strategic Partnerships tab with "Recommended for Enterprise" banners, dark/light card variations for support tiers
  - Redesigned Diagnostic Audit tab with numbered step sections, gradient backgrounds, and dramatic CTA section
  - Added final CTA section with gradient background
  - All hover animations and transitions working
  - Test Report: `/app/test_reports/iteration_10.json` - 100% pass rate

- **Bug Fix:** Fixed blank page rendering on multiple pages
  - Added missing icon imports in `About.js` (Award, GraduationCap, Shield, Building)
  - Fixed undefined `phase.icon` in `HowWeWork.js` methodology section
  - Fixed undefined `program.icon` and added missing imports (TrendingUp, Users, Calendar, Target, Compass, Zap) in `Solutions.js`
- **Documentation:** Added comprehensive Squarespace deployment instructions

### February 2026 (Previous Session)
- Added hero images to all 8 pages
- Fixed "Our Guarantee" section headline on How We Work page
- Implemented dynamic animations and black/gold color scheme
