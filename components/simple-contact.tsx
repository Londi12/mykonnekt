"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MessageSquare } from "lucide-react"

export function SimpleContact() {
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ email: "", message: "" })
    alert("Message sent!")
  }

  return (
    <section className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our platforms or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-300 text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20"
                />
              </div>
              <div className="md:row-span-2">
                <label className="flex items-center text-gray-300 text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-gray-400" />
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project or question..."
                  required
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 focus:border-white/30 focus:ring-white/20 h-32 md:h-full resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 rounded-full text-white transition-all duration-300"
              style={{ backgroundImage: "var(--primary-gradient)" }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>

        {/* Simple footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500">© 2024 MyKonnekt | All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}
