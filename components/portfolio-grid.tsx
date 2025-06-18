"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap, BookOpen, Gamepad2, PenTool, ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "CVKonnekt",
    description: "Free CV builder with professional templates and career hacks to land your dream job.",
    icon: FileText,
    color: "from-emerald-500 to-teal-600",
    link: "#",
    features: ["Professional Templates", "Career Tips", "ATS Optimization"],
  },
  {
    title: "MatricKonnekt",
    description: "Comprehensive learning materials for R-12 students with interactive content.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    link: "#",
    features: ["Grade R-12 Content", "Interactive Learning", "Progress Tracking"],
  },
  {
    title: "BookKonnekt",
    description: "Free access to educational books and learning resources for all ages.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-600",
    link: "#",
    features: ["Free eBooks", "Study Guides", "Research Materials"],
  },
  {
    title: "GameKonnekt",
    description: "Educational and entertaining online games that make learning fun.",
    icon: Gamepad2,
    color: "from-orange-500 to-red-600",
    link: "#",
    features: ["Educational Games", "Skill Building", "Multiplayer Options"],
  },
  {
    title: "Blog & Stories",
    description: "Hustle tips, success interviews, and comprehensive guides for personal growth.",
    icon: PenTool,
    color: "from-teal-500 to-cyan-600",
    link: "#",
    features: ["Success Stories", "Hustle Tips", "Expert Interviews"],
  },
]

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Platforms</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our suite of tools and resources designed to empower your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${item.color} hover:shadow-lg transition-all duration-300 text-white border-0`}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Explore Platform
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
