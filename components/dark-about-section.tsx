"use client"

import { useState } from "react"
import { User, Target, Calendar } from "lucide-react"

const timelineItems = [
  {
    year: "2023",
    event: "MyKonnekt Vision Born",
    description: "Identified the need for accessible tools and resources",
  },
  { year: "2024", event: "Platform Development", description: "Built CVKonnekt and MatricKonnekt foundations" },
  { year: "2024", event: "Community Growth", description: "Expanded to BookKonnekt and GameKonnekt" },
  { year: "2025", event: "Future Expansion", description: "Scaling impact and reaching more communities" },
]

export function DarkAboutSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section id="about" className="py-24 px-4 relative">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">About</span>{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--primary-gradient)" }}
            >
              MyKonnekt
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our story, vision, and the journey toward connecting communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Founder & Vision */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div
                className="p-3 rounded-xl shadow-md"
                style={{ backgroundImage: "var(--primary-gradient)" }}
              >
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white ml-4">Who Started It</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              MyKonnekt was founded by passionate individuals who believe that everyone deserves access to quality
              tools and resources, regardless of their background or financial situation.
            </p>
            <div className="flex items-start">
              <Target className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white mb-2">Our Vision</h4>
                <p className="text-gray-400 italic">"Connecting everyday people with everyday tools."</p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Our Mission</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div 
                  className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0"
                  style={{ backgroundImage: "var(--primary-gradient)" }}
                />
                <p className="text-gray-300">Democratize access to educational and professional tools</p>
              </div>
              <div className="flex items-start">
                <div 
                  className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0"
                  style={{ backgroundImage: "var(--secondary-gradient)" }}
                />
                <p className="text-gray-300">Build supportive communities around learning and growth</p>
              </div>
              <div className="flex items-start">
                <div 
                  className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0"
                  style={{ backgroundImage: "var(--accent-gradient)" }}
                />
                <p className="text-gray-300">Empower individuals to achieve their personal and professional goals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
          <div className="flex items-center mb-8">
            <div
              className="p-3 rounded-xl shadow-md"
              style={{ backgroundImage: "var(--secondary-gradient)" }}
            >
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white ml-4">Our Journey</h3>
          </div>

          <div className="relative">
            <div 
              className="absolute left-4 top-0 bottom-0 w-0.5"
              style={{ backgroundImage: "var(--primary-gradient)" }}
            />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div 
                    className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredItem === index ? 'scale-110' : ''}`}
                    style={{ backgroundImage: "var(--primary-gradient)" }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="ml-12">
                    <div className="flex items-center mb-2">
                      <span 
                        className="text-sm font-semibold px-3 py-1 rounded-full mr-4"
                        style={{ backgroundImage: "var(--primary-gradient)" }}
                      >
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold text-white">{item.event}</h4>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}