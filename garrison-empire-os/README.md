# Garrison Empire OS - Full Stack Web Platform

## Overview
Production-ready Next.js application integrating the complete Garrison Empire operating system (os).

## Architecture

### Public Website (garrisonpointsolutions.com)
- Marketing site for sellers & investors
- Navy/Gold military-precision design
- Lead capture → Notion Deals database
- PropStream property search integration

### Internal Dashboard (empire.garrisonpointsolutions.com)
- CEO Dashboard with live KPIs
- Complete Notion sync (bi-directional)
- Deal Pipeline CRM
- Entity Management
- Acquisitions HQ
- Dispositions HQ  
- Marketing HQ
- PropStream list pulling

## Notion Integration

### Connected Databases:
- Entities (🏛️) - Trust, Holdings, all LLCs
- Deals (💼) - Complete deal pipeline
- Properties (🏠) - Portfolio management
- Phases & Milestones - Empire build-out tracking
- Agreements - Contracts & MSAs
- Intercompany Loans
- Accounts
- GPS Master Pipeline
- GPS Action Items

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (Navy #000080, Gold #FFD700)
- Notion API (@notionhq/client)
- Recharts (KPI visualizations)
- Radix UI (Components)
- Zustand (State management)

## Design System
- Primary: Navy (#000080)
- Accent: Industrial Gold (#FFD700)
- Typography: Montserrat (headings), Roboto (body)
- Military precision aesthetic
- Lighthouse imagery & coastal themes

## Environment Variables
```env
NOTION_API_KEY=your_notion_integration_token
NOTION_DATABASE_ENTITIES=bc39dd0e-1d3e-428a-b53d-253e1e01271b
NOTION_DATABASE_DEALS=1ffbdaaf-1e3b-4ad7-b6ae-de730b1955c7
NOTION_DATABASE_PROPERTIES=3431b22b-81ff-404a-8ae7-a0677daa957e
PROPSTREAM_API_KEY=your_propstream_key (when available)
ZAPIER_WEBHOOK_URL=your_webhook_for_lead_capture
```

## Getting Started
```bash
npm install
npm run dev
```

## Deployment
- Vercel (recommended)
- Automatic HTTPS
- Edge functions for Notion API calls
- Environment variables managed in Vercel dashboard

