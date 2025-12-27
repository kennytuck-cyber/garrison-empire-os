"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, X, Send } from 'lucide-react'

/**
 * LeadConcierge is an AI-powered chat widget that collects detailed
 * property information from visitors and submits it to the `/api/leads` endpoint.
 *
 * Features:
 * - Remembers if the user closed the chat so it doesn’t auto‑open again.
 * - Prevents multiple chat widgets on the same page/app by using a global
 *   sentinel attached to the `window` object.
 * - Asks a series of questions (name, contact info, address, ownership, etc.)
 *   and stores answers in a formData object.
 * - Provides a privacy notice before collecting data.
 * - Submits the completed lead to the server via fetch.
 */

type Message = { role: 'agent' | 'user'; text: string }

export default function LeadConcierge() {
  const [mounted, setMounted] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [hasClosedOnce, setHasClosedOnce] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    unit: '',
    city: '',
    state: 'FL',
    zip: '',
    county: '',
    isOwner: '',
    occupancy: '',
    reasonForSelling: '',
    askingPrice: '',
    timeline: ''
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Define the sequence of questions and the corresponding form field.
  const questions: { field: keyof typeof formData; question: string }[] = [
    { field: 'firstName', question: "What is your first name?" },
    { field: 'lastName', question: "What is your last name?" },
    { field: 'phone', question: "What's the best phone number to reach you?" },
    { field: 'email', question: "What's your email address?" },
    { field: 'address', question: "What's the street address of the property? (exclude unit)" },
    { field: 'unit', question: "Unit or apartment number (leave blank if none)?" },
    { field: 'city', question: "Which city is the property located in?" },
    { field: 'state', question: "Which state is it in? (2‑letter code)" },
    { field: 'zip', question: "What's the ZIP code?" },
    { field: 'county', question: "What county is the property in?" },
    { field: 'isOwner', question: "Are you the owner of the property? (yes/no)" },
    { field: 'occupancy', question: "What's the occupancy status? (Owner‑occupied, Tenant‑occupied, Vacant)" },
    { field: 'reasonForSelling', question: "Why are you considering selling? (Inherited, Pre‑Foreclosure, Divorce, Tired Landlord, Code Violations, Vacant, Behind on Payments, Relocating, Downsizing, Major Repairs Needed, Tax Liens, Other)" },
    { field: 'askingPrice', question: "What is your minimum asking price? (optional)" },
    { field: 'timeline', question: "What is your ideal timeline to sell? (e.g., ASAP, 30 days, 60 days)" }
  ]

  // Initialize on mount: check if chat already rendered or closed previously
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Prevent duplicate widgets across pages by checking a global flag
      const globalAny = window as any
      if (globalAny.__garrisonChatInitialized) {
        setMounted(false)
      } else {
        globalAny.__garrisonChatInitialized = true
      }
      try {
        const closed = localStorage.getItem('garrisonChatClosed')
        if (closed === 'true') {
          setHasClosedOnce(true)
        }
      } catch {
        /* ignore */
      }
    }
  }, [])

  // Auto-open chat after 5 seconds if it hasn't been closed before
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasClosedOnce) {
        setIsOpen(true)
        addAgentMessage("Hi! I'm the Garrison AI Assistant. Are you looking for a cash offer on a property?")
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [isOpen, hasClosedOnce])

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Helper to add a message from the agent
  const addAgentMessage = (text: string) => {
    setMessages(prev => [...prev, { role: 'agent', text }])
  }

  // Handle user sending a message/response
  const handleSend = async () => {
    if (!inputValue.trim()) return
    const userText = inputValue.trim()
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setInputValue('')

    // First message after greeting triggers privacy notice and first question
    if (questionIndex === 0) {
      addAgentMessage(
        "Great! Before we begin, please note that your information is kept confidential and used solely to evaluate your property sale options. Let's get started."
      )
      addAgentMessage(questions[0].question)
      setQuestionIndex(1)
      return
    }

    // Determine the index of the question just answered
    const answeredIndex = questionIndex - 1
    if (answeredIndex >= 0 && answeredIndex < questions.length) {
      const field = questions[answeredIndex].field
      setFormData((prev: any) => ({ ...prev, [field]: userText }))
    }

    // If there are more questions to ask
    if (questionIndex < questions.length) {
      addAgentMessage(questions[questionIndex].question)
      setQuestionIndex(questionIndex + 1)
    } else {
      // Completed all questions; submit lead
      addAgentMessage("Thanks! Submitting your information now. We'll be in touch shortly.")
      submitLead({ ...formData, [questions[answeredIndex].field]: userText })
      setQuestionIndex(questionIndex + 1)
    }
  }

  // Submit collected lead data to the server
  const submitLead = async (data: any) => {
    const fullAddress = `${data.address}${data.unit ? ' ' + data.unit : ''}, ${data.city}, ${data.state} ${data.zip}`
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          address: data.address,
          unit: data.unit,
          city: data.city,
          state: data.state,
          zip: data.zip,
          county: data.county,
          isOwner: data.isOwner,
          occupancy: data.occupancy,
          reasonForSelling: data.reasonForSelling,
          askingPrice: data.askingPrice,
          timeline: data.timeline,
          fullAddress,
          name: `${data.firstName} ${data.lastName}`,
          source: 'AI Concierge'
        })
      })
    } catch (err) {
      console.error(err)
    }
  }

  if (!mounted) return null

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#0F1C2E] border border-[#C5A572]/30 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ maxHeight: '500px', height: '500px' }}
          >
            {/* Header */}
            <div className="bg-[#1B365D] p-4 flex justify-between items-center border-b border-[#C5A572]/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#0F1C2E]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Garrison Assistant</h3>
                  <p className="text-[#C5A572] text-xs flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setHasClosedOnce(true)
                  try {
                    localStorage.setItem('garrisonChatClosed', 'true')
                  } catch {
                    /* ignore */
                  }
                }}
                className="text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0F1C2E]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-[#C5A572] text-[#0F1C2E] rounded-br-none'
                      : 'bg-[#1B365D] text-white border border-white/10 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Input */}
            <div className="p-4 bg-[#1B365D]/50 border-t border-[#C5A572]/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your answer..."
                  className="flex-1 bg-[#0F1C2E] border border-[#C5A572]/20 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#C5A572]"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-[#C5A572] rounded-full flex items-center justify-center text-[#0F1C2E] hover:bg-[#D4B896] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}