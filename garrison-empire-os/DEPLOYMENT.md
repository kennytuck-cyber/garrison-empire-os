# Garrison Empire OS - Deployment Guide

## 🚀 Quick Start (5 Minutes)

### 1. Set Up Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "**+ New integration**"
3. Name it "**Garrison Empire OS**"
4. Select your workspace
5. Copy the "**Internal Integration Token**" (starts with `secret_`)
6. **CRITICAL**: Share your databases with the integration:
   - Open your **Garrison Empire** page in Notion
   - Click the `...` menu in the top right
   - Select "**Connections**" → "**Connect to**" → Select "**Garrison Empire OS**"
   - This gives the integration access to ALL databases in that page

### 2. Deploy to Vercel (Recommended - It's Free!)

#### Option A: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/garrison-empire-os)

#### Option B: Manual Deploy
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd garrison-empire-os

# Deploy
vercel
```

### 3. Configure Environment Variables

In your Vercel dashboard (or `.env.local` for local development):

```env
NOTION_API_KEY=secret_your_integration_token_here
NOTION_DATABASE_ENTITIES=bc39dd0e-1d3e-428a-b53d-253e1e01271b
NOTION_DATABASE_DEALS=1ffbdaaf-1e3b-4ad7-b6ae-de730b1955c7
NOTION_DATABASE_PROPERTIES=3431b22b-81ff-404a-8ae7-a0677daa957e
```

**Where to find database IDs:**
- Open any database in Notion
- Copy the URL: `https://notion.so/[workspace]/[database_id]?v=[view_id]`
- The database_id is the part between the workspace and `?v=`

### 4. Test Locally First

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
# Edit .env.local with your actual keys

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🎯 What's Built

### Public Website (/)
- ✅ Navy/Gold brand design
- ✅ Hero section with CTAs
- ✅ Services overview
- ✅ Markets served (Lee, Polk, Mobile)
- ✅ Lead capture form → Creates deal in Notion
- ✅ Responsive mobile design
- ✅ Trust badges & footer

### Dashboard (/dashboard)
- ✅ CEO Dashboard with live KPIs
- ✅ Real-time Notion sync
- ✅ Deal pipeline visualization
- ✅ Recent deals table
- ✅ Sidebar navigation to all HQs

### Notion Integration
- ✅ Bi-directional sync ready
- ✅ Reads from Entities, Deals, Properties databases
- ✅ Creates new deals from form submissions
- ✅ API routes for data fetching

## 🔧 Next Steps to Complete

### Phase 1: Complete the Dashboard (2-4 hours)
1. **Deals Page** (`/dashboard/deals`)
   - Full CRUD operations
   - Filter by stage, county, strategy
   - Deal detail modals
   - Export to CSV

2. **Entities Page** (`/dashboard/entities`)
   - Display entire empire structure
   - Interactive org chart
   - Entity details and relationships

3. **Properties Page** (`/dashboard/properties`)
   - Portfolio overview
   - Property cards with valuations
   - NOI/DSCR metrics

### Phase 2: Operational HQs (4-6 hours)
4. **Acquisitions HQ** (`/dashboard/acquisitions`)
   - Lead scoring interface
   - MAO calculator
   - Follow-up automation triggers
   - Photo upload

5. **Dispositions HQ** (`/dashboard/dispositions`)
   - Buyer database
   - Dispo packet generator
   - Buyer blast email tool

6. **Marketing HQ** (`/dashboard/marketing`)
   - PropStream list pulling interface
   - Campaign manager
   - KPI dashboard

### Phase 3: PropStream Integration (2-3 hours)
7. **PropStream API Integration**
   - List pulling with GPS filters
   - Export to REISift
   - Auto-create deals from lists

### Phase 4: Automation (3-4 hours)
8. **Zapier/Make Webhooks**
   - Lead routing to SMS
   - Email confirmations
   - Follow-up cadence triggers

9. **Form Enhancements**
   - Success redirects
   - UTM tracking
   - Hidden fields for attribution

## 💡 Pro Tips

### Development Workflow
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Vercel Deployment Tips
- Set environment variables in Vercel dashboard under "**Settings → Environment Variables**"
- Each push to `main` branch auto-deploys
- Preview deployments for every PR
- Custom domains: Add in "**Settings → Domains**"

### Notion Integration Best Practices
1. **Rate Limits**: Notion API has rate limits (3 requests/second)
2. **Caching**: Consider adding Redis/Vercel KV for caching
3. **Webhooks**: Set up Notion webhooks for real-time updates
4. **Backup**: Export your Notion workspace weekly

## 🔐 Security

### Must Do:
- ✅ Never commit `.env` files
- ✅ Use Vercel environment variables for secrets
- ✅ Add dashboard authentication (NextAuth.js recommended)
- ✅ Implement rate limiting on public forms
- ✅ Add CAPTCHA to prevent spam

### Authentication (Recommended)
```bash
# Install NextAuth
npm install next-auth

# Add Google/Email auth
# See: https://next-auth.js.org/getting-started/example
```

## 📊 Monitoring & Analytics

### Recommended Services (All Free Tiers Available)
- **Vercel Analytics**: Built-in, just enable in dashboard
- **Sentry**: Error tracking
- **Posthog**: Product analytics
- **Better Uptime**: Uptime monitoring

## 🎨 Customization

### Brand Colors (Already Configured)
```css
Navy: #000080
Gold: #FFD700
Ink: #1A1A1A
Cloud: #F5F7FA
```

### Fonts (Already Loaded)
- Headings: Montserrat (Bold/Extra Bold)
- Body: Roboto (Regular)

### Adding Images
1. Add images to `/public` folder
2. Use Next.js `<Image>` component for optimization
3. Consider Unsplash for placeholder imagery

## 📞 Support & Questions

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Notion API Docs](https://developers.notion.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

### Common Issues

**"Notion API Error"**
→ Check integration token and database sharing

**"Build Failed"**
→ Run `npm run build` locally to debug

**"Form Not Submitting"**
→ Check API route logs in Vercel dashboard

## 🚢 Ready to Deploy?

```bash
# Final checklist
[ ] .env.local configured
[ ] Tested locally at localhost:3000
[ ] Notion integration connected
[ ] All databases shared with integration
[ ] Committed to Git
[ ] Pushed to GitHub
[ ] Deployed to Vercel
[ ] Environment variables set in Vercel
[ ] Tested production build
[ ] Custom domain configured (optional)

# Then launch! 🎉
```

---

**Built with military precision. Ready to execute.**
