# Brackett Agency Website - Product Requirements Document

## Project Overview
**Project Name:** Brackett Agency Website Redesign  
**Last Updated:** March 2026  
**Status:** ✅ Complete - Solutions Page Design Enhanced

## Original Problem Statement
Create a cleaner, more business-oriented version of the Brackett Agency website with premium positioning for mid-market B2B strategic consulting services.

## Brand Identity
- **Tagline:** "Intelligence That Executes."
- **Positioning:** Fractional strategy partner for mid-market B2B companies ($10-50M revenue) needing senior strategic thinking backed by AI-powered intelligence
- **Target Audience:** CEOs, leadership teams, PE-backed portfolio companies, funded startups (Series A+)

## Brand Colors
- **Primary Black:** #0A0A0A (backgrounds, text)
- **Brackett Gold:** #C9A961 (accents, CTAs)
- **Gold Gradient:** from-[#C9A961] to-[#8B7340]
- **Warm Gray:** #6C757D (body text)
- **Light Background:** #FAFAF8 (page backgrounds)
- **Border Color:** #E9ECEF

## Typography
- **Font Family:** Inter (sans-serif)
- **Headings:** Bold, tracking-tight

---

## What's Been Implemented ✅

### March 2026 - Solutions Page Design Enhancement

**Solutions Page Redesigned (/solutions):**
- ✅ Enhanced hero section with:
  - Animated solution type badges with icons (Target, Users, BarChart3)
  - Dual decorative frames around hero image
  - Two floating animated cards (Measurable Results, 5x ROI)
  - Quick stats with hover effects
  - CTA buttons (Get Started, View Our Process)
- ✅ Quick value props bar with icons (Shield, Award, Sparkles)
- ✅ Signature Programs tab enhanced with:
  - Section header with gold subtitle
  - Gradient icon boxes for each program
  - Problem/Outcome cards with decorative overlays
  - Timeline-style process visualization with connection line
  - Enhanced deliverables, timeline (dark card), and ROI cards
  - Animated CTA buttons with Link to /how-we-work
- ✅ Strategic Partnerships tab redesigned with:
  - Two-column card layout
  - Dark gradient headers with icons
  - Organized support tiers with colored border accents
  - Premium access section with dark background
  - Full-width CTA buttons
- ✅ Diagnostic Audit tab enhanced with:
  - Diagnostic Service badge
  - Enhanced problem statement with icon
  - Numbered cards (01-04) for audit process
  - Value proposition section with Award icon
  - Premium dark CTA section with decorations

### February 2026 Updates

**Navigation Structure (9 Pages):**
1. ✅ **Home** - Hero, Problem section, Solution overview, Technology preview, Leadership, CTA
2. ✅ **How We Work** - 3-phase methodology (Intelligence → Strategy → Execution), Industries served
3. ✅ **Solutions** - Tabbed interface with 3 tabs (NOW ENHANCED)
4. ✅ **Brand & Design** - Services, packages, industry expertise, approach
5. ✅ **Intelligence** - 3 platforms with OSG Partnership
6. ✅ **Insights** - Blog/resources with filter tabs
7. ✅ **About** - Leadership bios with actual photos
8. ✅ **Contact** - JotForm link, FAQ accordion
9. ✅ **Media** - Podcast appearances, Speaking Topics

**Design Enhancements Completed:**
- ✅ Home page headline with creative typography
- ✅ About page with actual leadership photos and hover effects
- ✅ Brand & Design page with floating elements, process timeline
- ✅ Intelligence page with OSG Partnership, Fortune 500 logo wall
- ✅ How We Work page with process indicator, floating stat cards

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
│   └── ui/                   # Shadcn UI components
└── pages/
    ├── Home.js               # Homepage
    ├── HowWeWork.js          # Methodology page
    ├── Solutions.js          # Solutions with tabs (ENHANCED)
    ├── BrandDesign.js        # Brand & Design services
    ├── Intelligence.js       # Technology platforms
    ├── Insights.js           # Blog/resources
    ├── About.js              # Team & company info
    ├── Contact.js            # Contact with FAQ
    └── Media.js              # Podcast appearances
```

---

## External Integrations
- **JotForm:** https://form.jotform.com/252728460666061 (contact form)
- **Spotify, XRaised, Amazon Music:** External links on Media page
- **No backend required** - Static frontend site

---

## Testing Status
- ✅ All 9 navigation pages working
- ✅ Solutions page all 3 tabs functional
- ✅ All CTAs link to JotForm correctly
- ✅ Navigation links work correctly
- ✅ Mobile navigation working
- ✅ Footer links working

**Test Reports:** 
- `/app/test_reports/iteration_10.json` - 100% pass rate (Solutions page enhancement)

---

## Future Considerations / Backlog

### P0 - Pending Deliverables
- [ ] Formally deliver Squarespace deployment instructions to user

### P1 - Nice to Have
- [ ] Enhance Insights page design
- [ ] Add actual case study content when available
- [ ] Add blog article content to Insights page
- [ ] Client logo carousel for social proof

### P2 - Enhancement Ideas
- [ ] Refactor CSS into component-specific modules
- [ ] Newsletter integration (currently static form)
- [ ] Dark mode toggle

---

## Squarespace Deployment Instructions

Since Squarespace does not natively support React applications, you have **two main deployment options**:

### Option 1: External Hosting with iframe Embed (Recommended)

**Step 1: Deploy React App to a Static Hosting Service**

| Platform | How to Deploy | Result |
|----------|---------------|--------|
| **Vercel** | Connect GitHub repo → Auto-deploy | `yourapp.vercel.app` |
| **Netlify** | Connect GitHub repo → Auto-deploy | `yourapp.netlify.app` |

**For Vercel (Easiest):**
1. Go to https://vercel.com and sign up with GitHub
2. Click "New Project" → Import your repository
3. Vercel auto-detects React → Click "Deploy"
4. Your site is live at `https://your-project.vercel.app`

**Step 2: Embed in Squarespace**

1. Edit your Squarespace page
2. Add a **Code Block** where you want the website
3. Paste this code:

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

### Option 2: Full Domain Redirect

Deploy to Vercel/Netlify, add your custom domain, and update DNS records.

---

## Changelog

### March 5, 2026
- **Design Enhancement:** Complete redesign of Solutions page
  - Enhanced hero section with floating cards and animated badges
  - Redesigned Signature Programs tab with timeline-style process
  - Redesigned Strategic Partnerships tab with card grid layout
  - Redesigned Diagnostic Audit tab with numbered cards
  - Added motion animations throughout
  - Test report: iteration_10.json (100% pass)

### February 22, 2026
- **Bug Fix:** Fixed blank page rendering
- **New Feature:** Added Media page with podcast appearances
- **Design:** Enhanced multiple pages with black/gold theme

---
