import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Simplifying technology to empower businesses to focus on what drives success.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Delivering personalized IT support designed around your business objectives",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Using cutting-edge technology to streamline IT and empower businesses",
  },
]

const achievements = [
  "2+ Successful Projects",
  "98% Client Satisfaction Rate",
  "Led by engineers with 10+ years experience",
  "24/7 Support Available",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">About Digilink IT Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DigiLink IT Solutions is a South African IT support and consulting company dedicated to helping individuals, home users, and small businesses navigate the digital world with clarity and confidence.
                
                
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether working remotely, managing a growing business, or seeking dependable technical assistance, DigiLink IT Solutions provides the expertise and support you can trust. Our solutions are designed to simplify technology, allowing you to focus on what truly matters.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center lg:text-left">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">{value.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
