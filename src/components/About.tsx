import { Users, Award, Globe, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Projects Delivered",
      description: "Successful digital transformations"
    },
    {
      icon: Award,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to excellence"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries Served",
      description: "Global reach, local expertise"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Elevating UK Businesses Through Digital Innovation
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Based in the heart of the UK, Elevence Digital is a cutting-edge technology company 
                specializing in full stack web development and AI integration. We believe in the power 
                of technology to transform businesses and create meaningful impact.
              </p>
              <p>
                Our team of expert developers and AI specialists work closely with clients to understand 
                their unique challenges and deliver bespoke solutions that drive growth, improve efficiency, 
                and create competitive advantages in the digital marketplace.
              </p>
              <p>
                From startups to enterprise-level organizations, we've helped businesses across various 
                industries leverage the latest technologies to achieve their goals. Our commitment to 
                quality, innovation, and client success sets us apart in the rapidly evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm text-center hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
                and create lasting value through the thoughtful integration of cutting-edge technology and artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}