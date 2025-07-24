import { Zap, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-background to-background/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Elevence Digital
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Elevating businesses through cutting-edge full stack development and AI integration. 
              Based in the UK, serving clients globally.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border border-border/50 hover:border-border transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border border-border/50 hover:border-border transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border border-border/50 hover:border-border transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors duration-200">Full Stack Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors duration-200">AI Integration</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors duration-200">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors duration-200">Mobile Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elevence Digital. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Proudly based in the United Kingdom 🇬🇧
          </p>
        </div>
      </div>
    </footer>
  )
}