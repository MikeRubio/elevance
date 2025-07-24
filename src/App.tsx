import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Technology } from '@/components/Technology'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import { Products } from '@/components/Products'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <Products />
        <Services />
        <Technology />
        <About />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App