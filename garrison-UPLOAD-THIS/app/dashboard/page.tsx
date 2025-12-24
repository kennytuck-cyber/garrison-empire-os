'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  Home, 
  TrendingUp, 
  Users,
  Target,
  DollarSign,
  Anchor,
  Shield,
  ArrowLeft,
  RefreshCw
} from 'lucide-react'

interface Deal {
  id: string
  dealName: string
  stage: string
  propertyAddress: string
  sellerName: string
  assignmentFee: number | null
  county: string
}

export default function DashboardPage() {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)
  const [lastSync, setLastSync] = useState<Date>(new Date())

  const fetchDeals = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/deals')
      const data = await response.json()
      if (data.success) {
        setDeals(data.deals)
        setLastSync(new Date())
      }
    } catch (error) {
      console.error('Error fetching deals:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDeals()
  }, [])

  // Calculate KPIs
  const totalDeals = deals.length
  const activeDeals = deals.filter(d => 
    ['Analyze', 'Offer', 'Contract'].includes(d.stage)
  ).length
  const totalValue = deals.reduce((sum, d) => sum + (d.assignmentFee || 0), 0)

  const stageOrder = ['Lead', 'Analyze', 'Offer', 'Contract', 'Assign/Close', 'Post-close']
  const dealsByStage = stageOrder.map(stage => ({
    stage,
    count: deals.filter(d => d.stage === stage).length,
    deals: deals.filter(d => d.stage === stage),
  }))

  return (
    <div className="min-h-screen bg-neutral-cloud">
      {/* Navigation */}
      <nav className="bg-brand-navy border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Anchor className="w-8 h-8 text-brand-gold" />
              <span className="font-heading text-xl font-bold text-white">
                GARRISON EMPIRE OS
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={fetchDeals}
                className="flex items-center space-x-2 text-white/70 hover:text-brand-gold transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span className="text-sm">Sync Notion</span>
              </button>
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-white/70 hover:text-brand-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Public Site</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-white border-r border-neutral-line min-h-screen">
          <div className="p-6">
            <h3 className="text-xs font-semibold text-neutral-ink/50 uppercase tracking-wider mb-4">
              Empire OS
            </h3>
            <nav className="space-y-2">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-brand-navy text-white"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="font-medium">CEO Dashboard</span>
              </Link>
              <Link 
                href="/dashboard/deals" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <FileText className="w-5 h-5" />
                <span>Deal Pipeline</span>
              </Link>
              <Link 
                href="/dashboard/entities" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <Building2 className="w-5 h-5" />
                <span>Entities</span>
              </Link>
              <Link 
                href="/dashboard/properties" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <Home className="w-5 h-5" />
                <span>Properties</span>
              </Link>
            </nav>

            <h3 className="text-xs font-semibold text-neutral-ink/50 uppercase tracking-wider mt-8 mb-4">
              Operations
            </h3>
            <nav className="space-y-2">
              <Link 
                href="/dashboard/acquisitions" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <Target className="w-5 h-5" />
                <span>Acquisitions HQ</span>
              </Link>
              <Link 
                href="/dashboard/dispositions" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <DollarSign className="w-5 h-5" />
                <span>Dispositions HQ</span>
              </Link>
              <Link 
                href="/dashboard/marketing" 
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-cloud transition-colors text-neutral-ink"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Marketing HQ</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-brand-navy mb-2">
              CEO Dashboard
            </h1>
            <p className="text-neutral-ink/70">
              Central operations command center • Last sync: {lastSync.toLocaleTimeString()}
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-brand-navy/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-ink/70">Total Deals</h3>
                <FileText className="w-5 h-5 text-brand-navy" />
              </div>
              <p className="text-3xl font-heading font-bold text-brand-navy">{totalDeals}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-brand-gold/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-ink/70">Active Pipeline</h3>
                <Target className="w-5 h-5 text-brand-gold" />
              </div>
              <p className="text-3xl font-heading font-bold text-brand-gold">{activeDeals}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-green-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-neutral-ink/70">Assignment Fees</h3>
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-heading font-bold text-green-600">
                ${totalValue.toLocaleString()}
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white/70">Conversion Rate</h3>
                <TrendingUp className="w-5 h-5 text-brand-gold" />
              </div>
              <p className="text-3xl font-heading font-bold text-white">
                {totalDeals > 0 ? Math.round((activeDeals / totalDeals) * 100) : 0}%
              </p>
            </div>
          </div>

          {/* Pipeline View */}
          <div className="bg-white rounded-xl p-6 border-2 border-neutral-line mb-8">
            <h2 className="font-heading text-xl font-bold text-brand-navy mb-6">Deal Pipeline</h2>
            <div className="grid grid-cols-6 gap-4">
              {dealsByStage.map(({ stage, count, deals: stageDeals }) => (
                <div key={stage} className="space-y-2">
                  <div className="bg-neutral-cloud rounded-lg p-4 text-center">
                    <h3 className="text-xs font-semibold text-neutral-ink/70 mb-1">{stage}</h3>
                    <p className="text-2xl font-bold text-brand-navy">{count}</p>
                  </div>
                  <div className="space-y-2">
                    {stageDeals.slice(0, 3).map((deal) => (
                      <div 
                        key={deal.id} 
                        className="bg-neutral-cloud p-3 rounded text-xs hover:bg-brand-gold/10 transition-colors cursor-pointer"
                      >
                        <p className="font-semibold text-brand-navy truncate">{deal.dealName}</p>
                        <p className="text-neutral-ink/50 truncate">{deal.propertyAddress}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Deals Table */}
          <div className="bg-white rounded-xl p-6 border-2 border-neutral-line">
            <h2 className="font-heading text-xl font-bold text-brand-navy mb-6">Recent Deals</h2>
            {loading ? (
              <div className="text-center py-12">
                <RefreshCw className="w-8 h-8 text-brand-navy animate-spin mx-auto mb-4" />
                <p className="text-neutral-ink/70">Syncing with Notion...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-line">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-ink/70">Deal</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-ink/70">Address</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-ink/70">Seller</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-ink/70">Stage</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-ink/70">County</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-neutral-ink/70">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deals.slice(0, 10).map((deal) => (
                      <tr key={deal.id} className="border-b border-neutral-line/50 hover:bg-neutral-cloud/50 transition-colors">
                        <td className="py-3 px-4 font-medium text-brand-navy">{deal.dealName}</td>
                        <td className="py-3 px-4 text-neutral-ink">{deal.propertyAddress}</td>
                        <td className="py-3 px-4 text-neutral-ink">{deal.sellerName}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-navy/10 text-brand-navy">
                            {deal.stage}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-neutral-ink">{deal.county}</td>
                        <td className="py-3 px-4 text-right font-semibold text-green-600">
                          {deal.assignmentFee ? `$${deal.assignmentFee.toLocaleString()}` : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
