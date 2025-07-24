import { Code, Brain, Smartphone, Cloud, Database, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using React, Node.js, TypeScript, and modern frameworks.",
      features: ["React & Next.js", "Node.js & Express", "TypeScript", "REST & GraphQL APIs"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Integration",
      description: "Intelligent features that enhance user experience and automate business processes.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines for optimal performance.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description: "Robust database architectures that grow with your business needs.",
      features: ["PostgreSQL & MongoDB", "Database Optimization", "Data Migration", "Backup Strategies"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Responsive web applications that deliver exceptional experiences across all devices.",
      features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Cross-platform"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for speed, SEO, and user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "Performance Monitoring", "Code Splitting"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business in the modern digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}