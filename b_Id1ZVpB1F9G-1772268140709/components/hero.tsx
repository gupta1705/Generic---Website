import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">
          Build Something{' '}
          <span className="text-primary">Amazing</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto">
          Create beautiful, responsive websites with TypeScript, Next.js, and modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
