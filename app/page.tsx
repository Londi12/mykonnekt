import { Hero } from "@/components/hero"
import { DarkAboutSection } from "@/components/dark-about-section"
import { BentoPortfolio } from "@/components/bento-portfolio"
import { SimpleContact } from "@/components/simple-contact"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <DarkAboutSection />
      <BentoPortfolio />
      <SimpleContact />
    </main>
  )
}
