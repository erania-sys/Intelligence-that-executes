import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Calendar, Share2, Linkedin, Twitter } from 'lucide-react';

const BlogArticle = () => {
  const { id } = useParams();
  
  const articles = {
    1: {
      id: 1,
      title: 'The Revenue Leaks Most Companies Miss',
      excerpt: 'Discover the hidden patterns that drain profitability—and how strategic intelligence can help you plug the gaps before they cost millions.',
      category: 'revenue',
      readTime: '8 min read',
      date: 'December 15, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85',
      content: `
        <p class="lead">Most mid-market companies are leaving substantial revenue on the table—not from obvious failures, but from hidden patterns that are nearly impossible to see from inside the business.</p>
        
        <p>After two decades of leading strategic transformations at Fortune 500 companies and working with dozens of mid-market organizations, I've identified the most common revenue leaks that executives miss.</p>
        
        <h2>The Three Hidden Revenue Leaks</h2>
        
        <h3>1. Customer Segment Misalignment</h3>
        <p>Most companies believe they know their most valuable customers. But when we apply behavioral analytics to customer data, we consistently find that the customers companies are chasing aren't the ones driving lifetime value.</p>
        <p>The problem isn't just targeting the wrong prospects—it's that your entire go-to-market motion is optimized for customers who look good on paper but drain resources in practice.</p>
        
        <h3>2. Pricing Architecture Gaps</h3>
        <p>Pricing is often set based on competitive analysis and cost-plus calculations. But these approaches miss the value-based opportunities hiding in your customer segments.</p>
        <p>We've seen companies leave 15-25% of potential revenue on the table simply because their pricing architecture doesn't capture the value they're actually delivering to different customer segments.</p>
        
        <h3>3. Channel Inefficiency</h3>
        <p>Your sales and marketing channels likely have significant friction points that are invisible to internal teams. These friction points don't show up in standard metrics—they require behavioral intelligence to identify.</p>
        
        <h2>The Intelligence Approach</h2>
        <p>Traditional consulting approaches these problems with frameworks and benchmarks. But every company's revenue leaks are unique—shaped by their specific customer base, competitive position, and operational reality.</p>
        <p>That's why we built our Strategic Intelligence Platform to process your actual customer behavioral data, not industry averages. The insights are specific to your business, validated by data, and actionable within weeks—not months.</p>
        
        <h2>Taking Action</h2>
        <p>If you suspect your company has hidden revenue leaks (and statistically, you almost certainly do), the Strategic Blindspot Audit is designed to identify them quickly. In a single intensive session, we can surface the specific opportunities hiding in your business and quantify the potential impact.</p>
        <p>The investment in the audit is fully credited toward any full engagement—so you get immediate value whether or not you decide to work with us further.</p>
      `
    },
    2: {
      id: 2,
      title: "If Your Sales Team Can't Pitch You in 30 Seconds, You Have a Positioning Problem",
      excerpt: "Why clear positioning isn't just a marketing issue—it's the foundation of your competitive advantage.",
      category: 'positioning',
      readTime: '6 min read',
      date: 'December 8, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85',
      content: `
        <p class="lead">Here's a test: Walk up to any member of your sales team and ask them to explain what makes your company different in 30 seconds or less. If they struggle—or if each person gives a different answer—you have a positioning problem.</p>
        
        <p>And that positioning problem is costing you deals, premium pricing, and market share every single day.</p>
        
        <h2>Why Positioning Matters More Than You Think</h2>
        <p>Positioning isn't a marketing exercise. It's the strategic foundation that determines:</p>
        <ul>
          <li>Which deals you win (and which you lose to competitors)</li>
          <li>Whether you can command premium pricing or get commoditized</li>
          <li>How efficiently your sales and marketing spend converts</li>
          <li>Which talent you attract and retain</li>
        </ul>
        
        <h2>The "Me-Too" Trap</h2>
        <p>Most mid-market companies fall into what I call the "me-too" trap. They describe themselves using the same language as their competitors, compete on the same dimensions, and wonder why deals come down to price.</p>
        <p>The solution isn't better messaging—it's finding the strategic position that's uniquely yours and defensible over time.</p>
        
        <h2>Finding Your Strategic Position</h2>
        <p>Effective positioning sits at the intersection of three factors:</p>
        <ul>
          <li><strong>Customer Value:</strong> What specific problem do you solve better than anyone else?</li>
          <li><strong>Competitive Differentiation:</strong> What can you claim that competitors cannot?</li>
          <li><strong>Operational Reality:</strong> What can you actually deliver consistently?</li>
        </ul>
        
        <p>Most positioning exercises fail because they focus only on the first two factors. They create aspirational positioning that the organization can't deliver—which leads to customer disappointment and internal cynicism.</p>
        
        <h2>The Test</h2>
        <p>When your positioning is right, three things happen:</p>
        <ol>
          <li>Your sales team can articulate it consistently and confidently</li>
          <li>Your customers can explain why they chose you (in the same terms)</li>
          <li>Your competitors can't credibly claim the same position</li>
        </ol>
        
        <p>If you're not passing all three tests, it's time for a positioning reset.</p>
      `
    },
    3: {
      id: 3,
      title: "What Your Customer Data Isn't Telling You",
      excerpt: "Traditional analytics show what customers did. Predictive intelligence reveals what they'll do next—and why.",
      category: 'intelligence',
      readTime: '7 min read',
      date: 'November 22, 2025',
      author: 'Dr. R. Sukumar',
      authorRole: 'President & Global CEO, OSG Analytics',
      image: 'https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzE4MTMzNTN8MA&ixlib=rb-4.1.0&q=85',
      content: `
        <p class="lead">Your dashboards are full of data. Revenue by segment. Conversion rates. Customer acquisition costs. But here's the uncomfortable truth: most of that data tells you what already happened—not what's about to happen.</p>
        
        <h2>The Backward-Looking Trap</h2>
        <p>Traditional business intelligence is fundamentally retrospective. It excels at answering "what happened?" but struggles with the questions that actually drive growth:</p>
        <ul>
          <li>Which customers are about to churn—before they show obvious signs?</li>
          <li>Which prospects are most likely to convert—and why?</li>
          <li>Which product features drive long-term retention vs. initial purchase?</li>
          <li>Where are the hidden segments with untapped potential?</li>
        </ul>
        
        <h2>Behavioral Intelligence: A Different Approach</h2>
        <p>At OSG Analytics, we've spent two decades developing predictive models that go beyond traditional analytics. The key insight: customer behavior follows patterns that are invisible to standard analysis but become clear with the right methodology.</p>
        
        <h3>The ASEMAP Framework</h3>
        <p>Our proprietary ASEMAP methodology (developed at Stanford and refined through thousands of engagements) processes behavioral data to surface actionable intelligence:</p>
        <ul>
          <li><strong>Acquisition Patterns:</strong> Which channels and messages attract high-value customers?</li>
          <li><strong>Segmentation Intelligence:</strong> What are the behavioral clusters that predict lifetime value?</li>
          <li><strong>Engagement Signals:</strong> Which behaviors indicate satisfaction vs. churn risk?</li>
          <li><strong>Monetization Opportunities:</strong> Where is pricing leaving money on the table?</li>
          <li><strong>Advocacy Indicators:</strong> Which customers will become referral sources?</li>
          <li><strong>Predictive Pathways:</strong> What sequence of experiences drives optimal outcomes?</li>
        </ul>
        
        <h2>From Data to Action</h2>
        <p>The goal isn't more data—it's better decisions. Our intelligence platform is designed to surface specific, actionable insights that your team can execute on immediately.</p>
        <p>When we partner with Brackett Agency, we combine this analytical power with strategic execution expertise. The result: intelligence that doesn't just sit in a presentation but drives measurable business outcomes.</p>
      `
    },
    4: {
      id: 4,
      title: 'Why Strategic Plans Fail (And How to Fix Yours)',
      excerpt: "The execution gap kills more strategies than bad ideas. Here's the operating system that drives high-growth companies.",
      category: 'execution',
      readTime: '10 min read',
      date: 'November 15, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/9304682/pexels-photo-9304682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      content: `
        <p class="lead">I've seen it dozens of times: A leadership team spends months developing a brilliant strategic plan. There's excitement, alignment, and commitment. Six months later, the plan is gathering dust while the organization fights daily fires.</p>
        
        <p>The strategy wasn't wrong. The execution system was.</p>
        
        <h2>The Execution Gap</h2>
        <p>Research consistently shows that 60-90% of strategic plans fail at execution. Not because the strategy was flawed, but because organizations lack the operating rhythm to translate strategy into daily decisions and actions.</p>
        
        <h2>The Three Execution Failures</h2>
        
        <h3>1. No Translation Layer</h3>
        <p>Strategic objectives like "increase market share" or "improve customer retention" are too abstract to drive daily behavior. Without a clear translation into specific initiatives, metrics, and accountabilities, strategy remains aspirational.</p>
        
        <h3>2. Competing Priorities</h3>
        <p>Most organizations have too many priorities, which means they effectively have none. When everything is important, nothing gets the focused attention required for breakthrough results.</p>
        
        <h3>3. No Feedback Loop</h3>
        <p>Strategy requires adaptation. But most organizations review strategic progress quarterly at best—far too slow to catch problems early or capitalize on emerging opportunities.</p>
        
        <h2>The Execution Operating System</h2>
        <p>High-performing organizations run on a consistent operating rhythm that keeps strategy alive:</p>
        
        <h3>Weekly: Tactical Alignment</h3>
        <ul>
          <li>What did we commit to last week? What did we deliver?</li>
          <li>What are the blockers we need to remove?</li>
          <li>What are the specific commitments for this week?</li>
        </ul>
        
        <h3>Monthly: Strategic Progress</h3>
        <ul>
          <li>Are we on track against our quarterly objectives?</li>
          <li>What's the data telling us about our assumptions?</li>
          <li>What adjustments do we need to make?</li>
        </ul>
        
        <h3>Quarterly: Strategic Refresh</h3>
        <ul>
          <li>What did we learn this quarter?</li>
          <li>What's changed in our market or competitive environment?</li>
          <li>What are our objectives for next quarter?</li>
        </ul>
        
        <h2>Making It Stick</h2>
        <p>The key to execution isn't complexity—it's consistency. The organizations that win are the ones that show up every week, every month, every quarter with discipline and focus.</p>
        <p>If your strategic plans keep failing at execution, you don't need a new strategy. You need a new operating system.</p>
      `
    },
    5: {
      id: 5,
      title: 'Why Customer Segmentation May Be Costing You Millions',
      excerpt: 'Most segmentation strategies optimize for the wrong metrics. Learn how to segment by what actually drives lifetime value.',
      category: 'revenue',
      readTime: '7 min read',
      date: 'October 28, 2025',
      author: 'Dr. R. Sukumar',
      authorRole: 'President & Global CEO, OSG Analytics',
      image: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzE4MTMzNTN8MA&ixlib=rb-4.1.0&q=85',
      content: `
        <p class="lead">Your customer segmentation is probably based on demographics, firmographics, or purchase history. And it's probably leaving millions of dollars on the table.</p>
        
        <h2>The Segmentation Problem</h2>
        <p>Traditional segmentation approaches share a common flaw: they segment based on who customers are rather than how they behave. But behavior—not demographics—predicts value.</p>
        
        <h2>Behavioral Segmentation</h2>
        <p>When we analyze customer data behaviorally, we consistently find that the highest-value segments don't match traditional demographic or firmographic categories. Instead, they're defined by patterns of engagement, usage, and decision-making.</p>
        
        <h2>The Value Gap</h2>
        <p>Companies that shift to behavioral segmentation typically find:</p>
        <ul>
          <li>20-30% of their "target" customers have low lifetime value potential</li>
          <li>High-value behavioral segments exist that they weren't targeting</li>
          <li>Acquisition costs can drop significantly by focusing on behavioral indicators</li>
          <li>Retention efforts can be redirected to actually at-risk customers</li>
        </ul>
        
        <h2>Making the Shift</h2>
        <p>Behavioral segmentation requires different data and different analysis. But the investment pays off quickly in improved marketing efficiency, sales effectiveness, and customer lifetime value.</p>
      `
    },
    6: {
      id: 6,
      title: 'Why "Me-Too" Positioning Kills Companies',
      excerpt: "In crowded markets, differentiation isn't optional—it's survival. Here's how to find your unique strategic position.",
      category: 'positioning',
      readTime: '5 min read',
      date: 'October 15, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/7172856/pexels-photo-7172856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      content: `
        <p class="lead">In every market, there are companies that command premium prices and win competitive deals—and companies that compete on price and watch margins erode. The difference is positioning.</p>
        
        <h2>The Commodity Trap</h2>
        <p>When your positioning sounds like everyone else's, you become a commodity. And commodities compete on price.</p>
        
        <h2>Finding Differentiation</h2>
        <p>True differentiation comes from the intersection of customer value, competitive uniqueness, and operational capability. It can't be manufactured through messaging alone—it has to be built into how you operate.</p>
        
        <h2>The Positioning Process</h2>
        <p>Effective positioning requires honest assessment of where you actually create unique value, validation with customers, and alignment across the organization. It's not a marketing exercise—it's a strategic one.</p>
      `
    },
    7: {
      id: 7,
      title: "Beyond NPS: Why Measuring Sentiment Isn't Enough",
      excerpt: "Net Promoter Score tells you how customers feel. It doesn't tell you what to do about it. That's where behavioral analytics comes in.",
      category: 'intelligence',
      readTime: '6 min read',
      date: 'September 22, 2025',
      author: 'Dr. R. Sukumar',
      authorRole: 'President & Global CEO, OSG Analytics',
      image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      content: `
        <p class="lead">NPS has become the gold standard for measuring customer satisfaction. But here's what your NPS score isn't telling you: why customers feel that way, what they'll do next, or how to change their behavior.</p>
        
        <h2>The Limitations of Sentiment</h2>
        <p>Sentiment metrics like NPS are lagging indicators. By the time a customer reports dissatisfaction, the damage is often done. And high satisfaction scores don't necessarily predict retention or advocacy.</p>
        
        <h2>Behavioral Prediction</h2>
        <p>Behavioral analytics can identify at-risk customers before they show sentiment decline, predict which satisfied customers will actually refer others, and reveal the specific experiences that drive both satisfaction and behavior.</p>
        
        <h2>From Measurement to Action</h2>
        <p>The goal isn't better measurement—it's better outcomes. When you understand the behavioral drivers behind your metrics, you can take targeted action to improve them.</p>
      `
    },
    8: {
      id: 8,
      title: 'The Operating Rhythm That Drives High-Growth Companies',
      excerpt: "Strategic planning is worthless without execution discipline. Here's the weekly/monthly cadence that turns strategy into results.",
      category: 'execution',
      readTime: '8 min read',
      date: 'September 10, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1758691736498-422201cc57da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3NzE4MTMzNTJ8MA&ixlib=rb-4.1.0&q=85',
      content: `
        <p class="lead">The difference between companies that execute strategy and those that don't isn't talent or resources—it's rhythm. High-growth organizations run on a consistent operating cadence that keeps strategy alive.</p>
        
        <h2>The Rhythm of Execution</h2>
        <p>Effective execution requires three interlocking cycles: weekly tactical reviews, monthly strategic check-ins, and quarterly strategic refreshes. Each serves a different purpose, and all three are essential.</p>
        
        <h2>Building the Discipline</h2>
        <p>The hardest part of execution isn't knowing what to do—it's doing it consistently. The operating rhythm provides the structure that makes consistency possible, even when daily pressures push in other directions.</p>
      `
    },
    9: {
      id: 9,
      title: 'From $10M to $50M: The Strategic Inflection Points',
      excerpt: "Growing mid-market companies hit predictable walls. Here's how to anticipate them—and break through.",
      category: 'revenue',
      readTime: '12 min read',
      date: 'August 25, 2025',
      author: 'Erania Brackett',
      authorRole: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/6476787/pexels-photo-6476787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      content: `
        <p class="lead">The journey from $10M to $50M in revenue isn't linear. It's marked by predictable inflection points where the strategies that got you here won't get you there. After working with dozens of mid-market companies through these transitions, I've mapped the walls they hit—and the breakthroughs that get them through.</p>
        
        <p>Here's the uncomfortable truth: most companies that reach $10M never make it to $50M. Not because they lack ambition or talent, but because they fail to recognize that growth requires transformation—not just more of what worked before.</p>
        
        <h2>The Growth Walls</h2>
        <p>Every growing company hits walls—moments when the current operating model stops scaling. These walls are predictable, but most companies don't see them coming until they've already stalled. Revenue plateaus. Margins compress. The team that built the company starts struggling to run it.</p>
        
        <p>The walls aren't random. They occur at predictable revenue levels because each stage of growth requires fundamentally different capabilities, structures, and strategies.</p>
        
        <h2>The First Inflection Point: $15M (Founder-Led to Leadership-Led)</h2>
        
        <h3>What's Happening</h3>
        <p>At $10-15M, the founder can no longer be involved in every major decision. The company has grown beyond what one person—or even a small founding team—can manage through direct involvement.</p>
        
        <h3>The Wall</h3>
        <p>Companies hit this wall when founders can't let go. They become bottlenecks for decisions, hiring, and customer relationships. Growth stalls because everything still flows through the same people who built the company from scratch.</p>
        
        <h3>The Breakthrough</h3>
        <ul>
          <li><strong>Build a leadership team:</strong> Not just managers, but true leaders who can own outcomes without constant oversight</li>
          <li><strong>Create decision frameworks:</strong> Document how decisions get made so others can make them</li>
          <li><strong>Establish operating rhythms:</strong> Weekly, monthly, and quarterly cadences that keep alignment without requiring founder involvement in everything</li>
          <li><strong>Accept imperfection:</strong> Others won't do it exactly like you would—and that's okay if results are achieved</li>
        </ul>
        
        <h2>The Second Inflection Point: $25M (Single Product to Portfolio)</h2>
        
        <h3>What's Happening</h3>
        <p>The product or service that got you to $25M is approaching market saturation—at least in your current positioning. Growth requires either expanding the offering or expanding the market.</p>
        
        <h3>The Wall</h3>
        <p>Companies hit this wall when they try to grow by doing more of the same. They push harder on the same sales motions, target the same customer profiles, and offer the same solutions—just with more people and more budget. Returns diminish rapidly.</p>
        
        <h3>The Breakthrough</h3>
        <ul>
          <li><strong>Segment ruthlessly:</strong> Understand which customer segments have the highest growth potential and lifetime value</li>
          <li><strong>Expand strategically:</strong> Add products, services, or market segments that leverage existing strengths</li>
          <li><strong>Build platform capabilities:</strong> Create the operational infrastructure to manage multiple offerings efficiently</li>
          <li><strong>Develop strategic planning muscles:</strong> Move from opportunistic growth to deliberate portfolio management</li>
        </ul>
        
        <h2>The Third Inflection Point: $40M (Regional to National/Global)</h2>
        
        <h3>What's Happening</h3>
        <p>You've maximized growth in your home market or region. The next level of scale requires geographic expansion or serving enterprise customers with national/global footprints.</p>
        
        <h3>The Wall</h3>
        <p>Companies hit this wall when they underestimate the complexity of expansion. They assume what worked in one market will work everywhere. They don't invest adequately in local presence, relationships, or adaptation.</p>
        
        <h3>The Breakthrough</h3>
        <ul>
          <li><strong>Invest in infrastructure:</strong> Systems, processes, and tools that work across geographies</li>
          <li><strong>Build local capabilities:</strong> Hire leaders who understand local markets and can adapt the model</li>
          <li><strong>Standardize what matters:</strong> Core processes and quality standards that don't vary by location</li>
          <li><strong>Localize what doesn't:</strong> Sales approaches, partnerships, and customer engagement that reflect local realities</li>
        </ul>
        
        <h2>The Hidden Inflection Point: Culture</h2>
        <p>There's one more inflection point that doesn't map to a specific revenue number but affects every transition: culture.</p>
        
        <p>The scrappy, all-hands-on-deck culture that built a $10M company often becomes toxic at $30M. What felt like family becomes cliquish. What felt like agility becomes chaos. What felt like passion becomes burnout.</p>
        
        <p>Successful companies deliberately evolve their culture at each stage:</p>
        <ul>
          <li><strong>From founder-centric to values-centric:</strong> The culture can't depend on the founder's presence</li>
          <li><strong>From implicit to explicit:</strong> Expectations and norms must be documented and onboarded</li>
          <li><strong>From heroic to systematic:</strong> Success comes from processes, not individual heroics</li>
        </ul>
        
        <h2>Why Most Companies Don't Make It</h2>
        <p>The companies that stall at these inflection points share common patterns:</p>
        <ul>
          <li><strong>They don't see the wall coming:</strong> They're so focused on current execution that they don't anticipate the transition</li>
          <li><strong>They resist change:</strong> "This is how we built the company" becomes a reason not to evolve</li>
          <li><strong>They under-invest in transition:</strong> They try to change incrementally when transformation is required</li>
          <li><strong>They wait too long:</strong> By the time they recognize the wall, momentum has stalled and talent has left</li>
        </ul>
        
        <h2>The Brackett Approach</h2>
        <p>At Brackett Agency, we help companies anticipate and navigate these inflection points before they become crises. Our Strategic Blindspot Audit identifies where you are in the growth journey, what walls are approaching, and what capabilities you need to build.</p>
        
        <p>The companies that successfully make the $10M to $50M journey are the ones that:</p>
        <ul>
          <li>Recognize that each stage requires different strategies</li>
          <li>Build capabilities ahead of when they're needed</li>
          <li>Make deliberate investments in leadership, systems, and culture</li>
          <li>Partner with advisors who've seen the patterns before</li>
        </ul>
        
        <h2>Taking Action</h2>
        <p>If you're approaching one of these inflection points—or if you've hit a wall and aren't sure why—it's time for an honest assessment of where you are and what needs to change.</p>
        
        <p>The Strategic Blindspot Audit is designed exactly for this moment: to surface the capabilities you need, identify the changes required, and create a roadmap for the next phase of growth.</p>
        
        <p>The companies that make it from $10M to $50M aren't the ones with the best products or the most funding. They're the ones that recognize when transformation is required—and have the courage to do it.</p>
      `
    }
  };

  const article = articles[id];

  const getCategoryColor = (category) => {
    const colors = {
      revenue: '#10B981',
      positioning: '#8B5CF6',
      intelligence: '#3B82F6',
      execution: '#F59E0B'
    };
    return colors[category] || '#6B7280';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      revenue: 'Revenue Strategy',
      positioning: 'Market Positioning',
      intelligence: 'Customer Intelligence',
      execution: 'Execution Excellence'
    };
    return labels[category] || category;
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A0A0A] mb-4">Article Not Found</h1>
          <Link to="/insights" className="text-[#C9A961] hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="blog-article-page">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/insights" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Insights
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: getCategoryColor(article.category), color: 'white' }}
                >
                  <Tag size={12} />
                  {getCategoryLabel(article.category)}
                </span>
                <span className="flex items-center gap-1 text-white/70 text-sm">
                  <Calendar size={14} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1 text-white/70 text-sm">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-10 pb-10 border-b border-[#E9ECEF]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A961] to-[#8B7340] flex items-center justify-center text-white font-bold text-lg">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-[#0A0A0A]">{article.author}</p>
                <p className="text-[#6C757D] text-sm">{article.authorRole}</p>
              </div>
            </motion.div>

            {/* Article Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-10 border-t border-[#E9ECEF]"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#6C757D] text-sm">Share this article:</span>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#C9A961] transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#C9A961] transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
                <Link 
                  to="/insights" 
                  className="inline-flex items-center gap-2 text-[#C9A961] font-medium hover:underline"
                >
                  <ArrowLeft size={16} />
                  Back to all articles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Apply These Insights?
            </h2>
            <p className="text-white/70 mb-8">
              Schedule a Strategic Consultation to discuss how these concepts apply to your specific situation.
            </p>
            <a
              href="https://form.jotform.com/252728460666061"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#8B7340] text-[#0A0A0A] font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(201,169,97,0.4)] transition-all"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
