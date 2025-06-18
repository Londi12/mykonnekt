"use client"

import { useState } from "react"
import { FileText, GraduationCap, BookOpen, Gamepad2, PenTool, ExternalLink } from "lucide-react"

const platforms = [
  {
    id: "cv",
    title: "CVKonnekt",
    subtitle: "Professional CV Builder",
    description: "Create ATS-friendly CVs with professional templates and get career hacks to land your dream job",
    icon: FileText,
    gradient: "var(--primary-gradient)",
    bgGradient: "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
    stats: "10K+ CVs Created",
  },
  {
    id: "matric",
    title: "MatricKonnekt",
    subtitle: "Learning Hub",
    description: "Complete R-12 educational materials with interactive content and progress tracking",
    icon: GraduationCap,
    gradient: "var(--secondary-gradient)",
    bgGradient: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(45, 212, 191, 0.05))",
    stats: "500+ Resources",
  },
  {
    id: "books",
    title: "BookKonnekt",
    subtitle: "Free Library",
    description: "Access thousands of free educational books, study materials, and research papers",
    icon: BookOpen,
    gradient: "var(--primary-gradient)",
    bgGradient: "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))",
    stats: "2K+ Books",
  },
  {
    id: "games",
    title: "GameKonnekt",
    subtitle: "Learn Through Play",
    description: "Educational games that make learning fun with skill building and leaderboards",
    icon: Gamepad2,
    gradient: "var(--accent-gradient)",
    bgGradient: "linear-gradient(to bottom right, rgba(245, 158, 11, 0.05), rgba(239, 68, 68, 0.05))",
    stats: "50+ Games",
  },
  {
    id: "blog",
    title: "Stories & Tips",
    subtitle: "Growth Content",
    description: "Hustle tips, success interviews, and comprehensive guides for personal growth",
    icon: PenTool,
    gradient: "var(--secondary-gradient)",
    bgGradient: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(45, 212, 191, 0.05))",
    stats: "100+ Articles",
  },
]

export function BentoPortfolio() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-400">Our</span>{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--primary-gradient)" }}
            >
              Platforms
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A cohesive collection of digital tools designed to help you learn, create, and grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => {
            const IconComponent = platform.icon
            const isHovered = hoveredCard === platform.id

            return (
              <div
                key={platform.id}
                className={`
                  group relative overflow-hidden rounded-2xl cursor-pointer h-80
                  bg-white/5 backdrop-blur-sm border border-white/10
                  hover:border-white/20 hover:translate-y-[-4px]
                  transition-all duration-300 ease-out
                  ${isHovered ? "shadow-lg" : ""}
                `}
                onMouseEnter={() => setHoveredCard(platform.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
                                       radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
                    }}
                  />
                </div>

                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-60" 
                  style={{ background: platform.bgGradient }}
                />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: platform.gradient }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 font-medium">{platform.stats}</div>
                      <ExternalLink
                        className={`w-4 h-4 text-gray-500 mt-1 group-hover:text-white transition-all duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-auto">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{platform.title}</h3>
                    <div
                      className="h-1 w-12 rounded-full mb-3 group-hover:w-20 transition-all duration-300"
                      style={{ backgroundImage: platform.gradient }}
                    />
                    <p className="text-gray-300 text-sm font-medium mb-3">{platform.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{platform.description}</p>
                  </div>

                  {/* Bottom section */}
                  <div className="mt-4">
                    <button
                      className="inline-flex items-center px-4 py-2 rounded-full text-white text-xs font-medium opacity-90 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundImage: platform.gradient }}
                    >
                      Explore Platform
                    </button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundImage: platform.gradient }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
