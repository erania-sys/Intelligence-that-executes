# Brackett Agency Website - Product Requirements Document

## Original Problem Statement
Create a cleaner, more business-oriented version of the agency website with comprehensive restructuring based on a new brand identity: "Intelligence That Executes."

## Product Overview
A multi-page React application for Brackett Agency featuring:
- Fractional strategic services (CSO/CMO)
- Proprietary AI technology partnership with OSG Analytics (ASEMAP)
- Case studies and thought leadership content
- Black and gold design theme with Inter font
- **AI-powered chatbot** for visitor assistance

## Target Audience
- Mid-market companies ($10M-$100M revenue)
- B2B and B2C clients
- Companies seeking fractional executive leadership

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Framer Motion
- **Backend:** FastAPI, MongoDB
- **AI Integration:** OpenAI GPT-4o via Emergent LLM key
- **Icons:** lucide-react
- **UI Components:** shadcn/ui
- **Deployment:** Vercel with custom domain (Squarespace managed)

## Site Architecture
```
/app/
├── backend/
│   ├── server.py (FastAPI with /api/chat endpoint)
│   ├── requirements.txt
│   └── .env (MONGO_URL, EMERGENT_LLM_KEY)
└── frontend/
    └── src/
        ├── App.js (routes)
        ├── components/
        │   ├── Navigation.js
        │   ├── Footer.js
        │   ├── ScrollToTop.js
        │   ├── IntelligenceAdvantage.js (reusable callout)
        │   └── ChatWidget.js (AI chatbot)
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
            ├── OurApproach.js ("Why Intelligence Matters")
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
- [x] **Our Approach page** ("Why Intelligence Matters")
- [x] Insights (blog) page with JotForm newsletter signup
- [x] Case Studies page + Intelligence Advantage callout
- [x] Careers page
- [x] Customer Experience page

### AI Chatbot (NEW)
- [x] GPT-4o powered conversational assistant
- [x] Floating chat widget with gold/black theme
- [x] Welcome message and suggested questions
- [x] Session-based conversation history (MongoDB)
- [x] Comprehensive knowledge base covering all services
- [x] "Powered by OSG Analytics Intelligence" branding

### Blog System
- [x] Dynamic blog routes (/insights/:id)
- [x] 15+ blog articles across categories
- [x] Expanded content for all articles
- [x] Share functionality (LinkedIn, Substack)
- [x] Intelligence-focused blog titles

### Reusable Components
- [x] **IntelligenceAdvantage** - 4 variants (inline, compact, standard, full)
- [x] **ChatWidget** - AI-powered assistant widget

### AI SEO Optimization
- [x] ProfessionalService schema
- [x] Organization schema
- [x] FAQ schema with 5 key questions for AI search engines
- [x] Service schema
- [x] Enhanced meta tags (keywords, Open Graph, Twitter cards)

## Pending Tasks

### P1 (Medium Priority)
1. **Enhance All Team Bios** - Only Erania's bio updated, others need intelligence context
2. **Create Visual Intelligence Badges** ("Stanford-Born AI", "60+ Country Validated")
3. **Create Comparison Infographic** (Traditional vs Brackett Fractional Executive)

### P2 (Lower Priority)
4. Site-wide Micro-copy & CTA Audit
5. Final Design Polish & Consistency Check
6. Enhance Contact Page styling

## API Endpoints
- `POST /api/chat` - AI chatbot endpoint
  - Request: `{message: string, session_id?: string}`
  - Response: `{response: string, session_id: string}`

## External Integrations
- **OpenAI GPT-4o:** AI chatbot via Emergent LLM key
- **JotForm:** Newsletter signup and contact forms
- **Vercel:** Deployment platform
- **Squarespace:** Domain management
- **MongoDB:** Chat session storage

## Design System
- **Primary Colors:** Black (#0A0A0A), Gold (#C9A961)
- **Font:** Inter
- **Theme:** Dark, professional, premium feel
- **Components:** shadcn/ui base components

## Key Files Reference
- `/app/backend/server.py` - API with chat endpoint
- `/app/frontend/src/components/ChatWidget.js` - AI chatbot component
- `/app/frontend/src/pages/OurApproach.js` - "Why Intelligence Matters" page
- `/app/frontend/src/components/IntelligenceAdvantage.js` - Reusable component
- `/app/frontend/src/pages/BlogArticle.js` - All blog content storage
- `/app/frontend/public/index.html` - SEO structured data
- `/app/frontend/vercel.json` - Vercel deployment config
