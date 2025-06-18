"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Send, Users } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setEmail("")
    alert("Thanks for subscribing!")
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setMessage("")
    alert("Message sent successfully!")
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Stay connected and be part of the MyKonnekt journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Newsletter Signup */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-3 text-purple-400" />
                Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6">
                Get the latest updates, tips, and resources delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="newsletter-email" className="text-slate-300">
                    Email Address
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <MessageCircle className="w-6 h-6 mr-3 text-teal-400" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-message" className="text-slate-300">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your ideas, feedback, or questions..."
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Community Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Join Our Communities</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open("https://wa.me/your-whatsapp-number", "_blank")}
            >
              <Users className="mr-2 w-5 h-5" />
              WhatsApp Group
            </Button>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open("https://t.me/your-telegram-group", "_blank")}
            >
              <Send className="mr-2 w-5 h-5" />
              Telegram Channel
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-slate-400">© 2024 MyKonnekt. Connecting everyday people with everyday tools.</p>
        </div>
      </div>
    </section>
  )
}
