import { Card } from '@/components/ui/card'
import { Zap, Shield, Smartphone, Layers } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with Next.js 16 and modern tooling',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built-in security features and best practices',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Works beautifully on all devices and screen sizes',
  },
  {
    icon: Layers,
    title: 'Component Library',
    description: 'Shadcn/ui components for rapid development',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
