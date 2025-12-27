'use client'
import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, Shield, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Message = { role: 'agent' | 'user'; text: string }

export default function LeadConcierge() {
  /**
   * `isOpen` controls whether the chat window is currently visible.
   * `hasClosedOnce` tracks if the user has previously closed the chat during this
   * session. We persist this flag to localStorage so the chat does not auto‑open
   * repeatedly on every page visit, which can be annoying for users. When
   * `hasClosedOnce` is true we disable the auto‑open effect.
   */
  const [isOpen, setIsOpen] = useState(false)
  const [hasClosedOnce, setHasClosedOnce] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // On mount, read the closed flag from localStorage so the chat remembers if
  // it was dismissed previously.  Use a try/catch to avoid errors during SSR.
  useEffect(() => {
    try {
      const closed = localStorage.getItem('garrisonChatClosed')
      if (closed === 'true') {
        setHasClosedOnce(true)
      }
    } catch {
      /* ignore */
    }
  }, [])

  // Auto-open after 5 seconds, but only if the chat hasn't been closed before.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && step === 0 && !hasClosedOnce) {
        setIsOpen(true)
        addAgentMessage("Hi! I'm the Garrison AI Assistant. Are you looking for a cash offer on a property?")
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [isOpen, step, hasClosedOnce])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addAgentMessage = (text: string) => {
    setMessages(prev => [...prev, { role: 'agent', text }])
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return
    const userText = inputValue
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setInputValue('')

    const lower = userText.toLowerCase()

    // Provide helpful answers for common questions before collecting lead info
    if (step === 0) {
      const faqResponses: { triggers: string[]; reply: string }[] = [
        { triggers: ['foreclosure', 'pre-foreclosure'], reply: "It sounds like you're concerned about foreclosure. Selling your house before the process completes can stop the auction, protect your credit and preserve any equity. We can often close in days to help. Would you like a cash offer?" },
        { triggers: ['code violation', 'code violations', 'liens'], reply: "We buy houses even if they have code violations, liens or open permits. We handle negotiations with the city and take the property as-is. Would you like to discuss an offer?" },
        { triggers: ['probate', 'inherited'], reply: "Inherited a house? We understand probate can be confusing. You can usually sell during probate. We buy inherited houses as-is and handle the clean-out so you don't have to travel. Interested in learning more?" },
        { triggers: ['tenant', 'tenants', 'rental'], reply: "Tired of dealing with tenants? We buy rental properties with tenants in place so you don't need to evict anyone. Would you like a no-obligation offer?" },
        { triggers: ['divorce'], reply: "Going through a divorce is hard enough. A quick cash sale can help both parties split the proceeds and move on without a lengthy listing. Would you like to see what we can offer?" },
        { triggers: ['as-is', 'as is'], reply: "We buy properties exactly as they sit—no repairs or cleaning needed. You can leave unwanted belongings behind. Want to know your cash offer?" },
        { triggers: ['hello', 'hi', 'hey'], reply: "Hi there! I'm here to help you explore selling options for your property. Are you looking for a cash offer?" }
      ]
      for (const faq of faqResponses) {
        if (faq.triggers.some(t => lower.includes(t))) {
          addAgentMessage(faq.reply)
          return
        }
      }
    }

    // Simple Logic Flow
    setTimeout(() => {
      if (step === 0) {
        addAgentMessage("Great. I can help with that. First, what is the property address?")
        setStep(1)
      } else if (step === 1) {
        setFormData(prev => ({ ...prev, address: userText }))
        addAgentMessage("Got it. And what is your full name?")
        setStep(2)
      } else if (step === 2) {
        setFormData(prev => ({ ...prev, name: userText }))
        addAgentMessage("Thanks. Last question - what's the best phone number to reach you at?")
        setStep(3)
      } else if (step === 3) {
        setFormData(prev => ({ ...prev, phone: userText }))
        addAgentMessage("Perfect. sending this to our senior acquisition officer now. They will call you shortly!")
        submitLead({ ...formData, phone: userText })
        setStep(4)
      }
    }, 1000)
  }

  const submitLead = async (data: any) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ')[1] || '',
          phone: data.phone,
          email: 'collected-via-chat@example.com',
          address: data.address,
          city: 'Chat Lead',
          zip: '00000',
          source: 'AI Concierge'
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

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

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#C5A572] rounded-full flex items-center justify-center shadow-lg shadow-[#C5A572]/20 z-50 hover:scale-110 transition-transform"
        >
          <MessageSquare className="w-7 h-7 text-[#0F1C2E]" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0F1C2E]" />
        </motion.button>
      )}
    </>
  )
}
