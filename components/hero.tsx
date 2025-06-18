"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute w-[40rem] h-[40rem] rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 320,
            top: mousePosition.y - 320,
            background: "var(--primary-glow)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-6">
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--primary-gradient)" }}
            >
              My
            </span>
            <span className="text-white">Konnekt</span>
          </h1>
          <div 
            className="h-1 w-32 mx-auto rounded-full"
            style={{ backgroundImage: "var(--primary-gradient)" }}
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-3 font-normal">Your digital hub for essential tools and resources</p>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 font-normal">
          <span 
            className="font-medium"
            style={{ color: "#8b5cf6" }}
          >Organized and accessible</span> for everyday use
        </p>

        <button
          onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          className="group flex items-center mx-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300"
        >
          <span className="mr-3 text-lg">Explore Platforms</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  )
}
