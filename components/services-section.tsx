import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NONAME } from "dns"
import { Brain, Cloud, Shield, Smartphone, Database, Settings, Users, TrendingUp, Phone, ServerCog, Headset } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Modern Work (Microsoft 365)",
    description: "We help organizations boost productivity and collaboration with expert Microsoft 365 implementation and management. Your team benefits from essential apps like Teams, Word, Excel, and OneDrive, while AI-powered tools such as Copilot streamline workflows with intelligent assistance.",
  },
  {
    icon: Phone,
    title: "Voice on Teams",
    description: "We turn Microsoft Teams into a full VoIP phone system, letting users call, receive, transfer, and manage voicemail within Teams. With features like auto-attendants, call history, and custom hold music, your business gains a seamless and professional telephony solution.",
  },
  {
    icon: Shield,
    title: "Mimecast Email Security",
    description: "Mimecast delivers advanced email security, blocking phishing and other threats before they reach your network. Protecting this critical channel creates a strong first line of defense against malware, ransomware, and cyber attacks.",
  },
  {
    icon: Cloud,
    title: "Migration: A Seamless Transition to the Cloud",
    description: "Our migration strategy leverages BitTitan MigrationWiz to ensure smooth email and data transfers across platforms. It handles mailboxes, documents, archives, shared drives, and Teams, providing secure, efficient, and scalable migration tailored to your business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup Solutions",
    description: "Cloud Backup Solutions secure and protect data across virtual, physical, and cloud environments. With flexible pay-as-you-grow pricing and customizable schedules, businesses gain reliable backup and recovery using leading technologies like Acronis and Dropsuite.",
  },

  {
    icon: Headset,
    title: "Outsourced IT Support",
    description: "Our Outsourced IT Support service delivers the expertise of a full IT department with the benefits of outsourcing. It reduces operational burdens, lowers costs, provides access to the latest technology, and ensures experts manage your IT infrastructure.",
  },

]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 neural-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>

      <div className="absolute top-10 right-10 h-20 w-20 rounded-full border border-primary/20 animate-float animate-circuit"></div>
      <div className="absolute bottom-20 left-10 h-16 w-16 rounded-full border border-primary/30 animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 h-12 w-12 rounded-full border border-primary/25 animate-circuit delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">Our IT Consulting Services</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our cloud solutions are engineered to create flexible, collaborative, and secure work environment. We focus on integrating powerful tools that empower your team and drive business efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border-primary/10 hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 animate-circuit group-hover:animate-glow">
                    <Icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
