import { Card, CardContent } from "@/components/ui/card"
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

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About MyKonnekt</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our story, vision, and the journey toward connecting communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Founder & Vision */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Who Started It</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                MyKonnekt was founded by passionate individuals who believe that everyone deserves access to quality
                tools and resources, regardless of their background or financial situation.
              </p>
              <div className="flex items-start">
                <Target className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Vision</h4>
                  <p className="text-slate-600 italic">"Connecting everyday people with everyday tools."</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-emerald-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-teal-500 mr-4 mt-2 flex-shrink-0" />
                  <p className="text-slate-600">Democratize access to educational and professional tools</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-4 mt-2 flex-shrink-0" />
                  <p className="text-slate-600">Build supportive communities around learning and growth</p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 mr-4 mt-2 flex-shrink-0" />
                  <p className="text-slate-600">Empower individuals to achieve their personal and professional goals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center mb-8">
              <Calendar className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-800">Our Journey</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-teal-600" />

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div className="ml-12">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mr-4">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-semibold text-slate-800">{item.event}</h4>
                      </div>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
