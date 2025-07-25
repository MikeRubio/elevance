import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMjQwIDUuOSUgMTAlKSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
            <Sparkles className="w-3 h-3 mr-1" />
            UK-Based Digital Innovation
          </Badge>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
            Elevating Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge full stack web applications and integrate AI solutions 
            that transform businesses and deliver exceptional value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Our Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300">
              <Code2 className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2">Full Stack Development</h3>
              <p className="text-sm text-muted-foreground text-center">Modern web applications built with the latest technologies</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p className="text-sm text-muted-foreground text-center">Intelligent solutions that add real business value</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300">
              <Sparkles className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">Digital Innovation</h3>
              <p className="text-sm text-muted-foreground text-center">Transformative solutions for the digital age</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}