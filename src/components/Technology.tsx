import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function Technology() {
  const technologies = {
    "Frontend": [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"
    ],
    "Backend": [
      "Node.js", "Express.js", "Python", "Django", "FastAPI", "PostgreSQL"
    ],
    "AI & ML": [
      "OpenAI GPT", "TensorFlow", "PyTorch", "Langchain", "Hugging Face", "Computer Vision"
    ],
    "Cloud & DevOps": [
      "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"
    ],
    "Mobile": [
      "React Native", "Flutter", "PWA", "Responsive Design", "Ionic", "Capacitor"
    ],
    "Tools": [
      "Git", "VS Code", "Figma", "Jest", "Cypress", "Storybook"
    ]
  }

  return (
    <section
      id="technology"
      className="py-24 bg-gradient-to-br from-background/50 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, performant,
            and future-proof solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <Card
              key={category}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techs.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-400 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Always Learning, Always Evolving
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team stays at the forefront of technology trends,
                continuously learning and adapting to ensure we deliver
                solutions using the most effective and modern tools available.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}