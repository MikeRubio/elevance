import { Brain, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import chatterwiseLogo from '../assets/chatterwise_logo_mini_nobg.png'
import { Badge } from '@/components/ui/badge'

export function Products() {
  const products = [
    {
      logo: chatterwiseLogo,
      title: "ChatterWise",
      description: "An AI-powered platform empowering organisations to build, train, and deploy chatbots using their internal knowledge in minutes—no coding required.",
      features: ["Learns Directly from Documents", "24/7 Conversational Support", "Seamless Integration Options", "Multi-lingual Support"],
      status: "Launching soon!"
    },
    {
      icon: Eye,
      title: "PersonaLens",
      description: "An AI-powered accessibility and UX testing platform that helps teams experience their website through the lens of diverse users—instantly testing for real-world conditions like colour blindness, language barriers, and cognitive differences.",
      features: ["Available as a Google Chrome extension", "Growing range of relevant persona", "Actionable guidance for each user group"],
      status: "In development"
    },
    {
      icon: Brain,
      title: "Libitum",
      description: "Libitum is an AI-powered platform for audience discovery and content strategy, combining cultural data from Qloo with OpenAI to deliver real-time insights and predictive marketing intelligence.",
      features: ["AI-Generated Audience Personas with Cultural Affinities", "Real-Time Trend Prediction and Confidence Scoring", "RESTful API for Developer Integration", "Real-time analytics"],
      status: "In development"
    },
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our suite of innovative products designed to empower your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-4 gap-3">
                  {product.logo ? (
                    <img src={product.logo} alt={`${product.title} logo`} className="w-12 h-12 object-contain" />
                  ) : product.icon ? (
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <product.icon className="w-9 h-9 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                  ) : null}
                  <Badge 
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default text-xs px-3 py-1"
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-400 transition-colors duration-300">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
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