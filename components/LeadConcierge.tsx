"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, X, Send, MessageCircle } from 'lucide-react'

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
  // Always mount the widget; we no longer hide it when a global sentinel is present.
  const [mounted, setMounted] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [hasClosedOnce, setHasClosedOnce] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  // Only store the current input text; we no longer collect detailed form data here.
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  // Initialize on mount: ensure only one chat widget is active across the entire app
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const globalAny = window as any
      // If a chat is already active (on another page), do not mount this one
      if (globalAny.__garrisonChatActive) {
        setMounted(false)
        return
      }
      // Otherwise mark this instance as active
      globalAny.__garrisonChatActive = true
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
        addAgentMessage("Hi! I'm the Garrison AI Assistant. I'm here to provide general information about our services. For a cash offer, please use the “Get My Cash Offer” button on our website or call us at (239) 291‑3444. Our office is located at 7901 4th Street N, Suite 300, St Petersburg, FL 33702.")
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
    const handleSend = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    addAgentMessage(
      "Thank you for reaching out! To receive a cash offer, please fill out our secure form using the “Get My Cash Offer” button on our website or call us at (239) 291‑3444. Our office is located at 7901 4th Street N, Suite 300, St Petersburg, FL 33702."
    );
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
                  placeholder="Type your message..."
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
      {/* Chat opener button: shows when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true)
            // reset hasClosedOnce so greeting flows again
            setHasClosedOnce(false)
            addAgentMessage("Hi! I'm the Garrison AI Assistant. I'm here to provide general information about our services. For a cash offer, please use the “Get My Cash Offer” button on our website or call us at (239) 291‑3444. Our office is located at 7901 4th Street N, Suite 300, St Petersburg, FL 33702.")
          }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#C5A572] rounded-full shadow-xl flex items-center justify-center text-[#0F1C2E] z-50 hover:from-[#C5A572] hover:to-[#D4B896] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  )
}