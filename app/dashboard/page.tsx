'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Users, DollarSign, Clock, TrendingUp } from 'lucide-react'

interface Deal {
  id: string
  name: string
  status: string
  phone: string
  email: string
  address: string
  timeline: string
  createdAt: string
}

export default function DashboardPage() {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/deals')
      .then(res => res.json())
      .then(data => {
        setDeals(data.deals || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading deals:', err)
        setLoading(false)
      })
  }, [])

  const stats = {
    totalLeads: deals.length,
    newLeads: deals.filter(d => d.status === 'New Lead').length,
    inProgress: deals.filter(d => d.status === 'In Progress' || d.status === 'Under Contract').length,
    closed: deals.filter(d => d.status === 'Closed' || d.status === 'Won').length,
  }

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-white">
      {/* Header */}
      <header className="bg-[#1B365D]/50 border-b border-[#C5A572]/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-[#C5A572] hover:text-[#D4B896] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-serif font-bold">CEO Dashboard</h1>
          </div>
          <span className="text-white/60 text-sm">Garrison Point Solutions</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#1B365D]/50 border border-[#C5A572]/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-[#C5A572]" />
            </div>
            <p className="text-3xl font-bold">{stats.totalLeads}</p>
            <p className="text-white/60 text-sm">Total Leads</p>
          </div>

          <div className="bg-[#1B365D]/50 border border-[#C5A572]/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-3xl font-bold">{stats.newLeads}</p>
            <p className="text-white/60 text-sm">New Leads</p>
          </div>

          <div className="bg-[#1B365D]/50 border border-[#C5A572]/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold">{stats.inProgress}</p>
            <p className="text-white/60 text-sm">In Progress</p>
          </div>

          <div className="bg-[#1B365D]/50 border border-[#C5A572]/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-3xl font-bold">{stats.closed}</p>
            <p className="text-white/60 text-sm">Closed Deals</p>
          </div>
        </div>

        {/* Deals Table */}
        <div className="bg-[#1B365D]/50 border border-[#C5A572]/10 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-[#C5A572]/10">
            <h2 className="text-xl font-bold">Recent Leads</h2>
          </div>

          {loading ? (
            <div className="p-12 text-center text-white/60">Loading deals...</div>
          ) : deals.length === 0 ? (
            <div className="p-12 text-center text-white/60">
              <p>No deals yet. Leads will appear here once submitted.</p>
              <p className="text-sm mt-2">Make sure your Notion API key is configured.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F1C2E]/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C5A572]/10">
                  {deals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-[#0F1C2E]/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">{deal.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          deal.status === 'New Lead' ? 'bg-blue-500/20 text-blue-300' :
                          deal.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                          deal.status === 'Closed' ? 'bg-green-500/20 text-green-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {deal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white/70">{deal.phone}</td>
                      <td className="px-6 py-4 text-white/70 max-w-xs truncate">{deal.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-white/70">{deal.timeline || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
