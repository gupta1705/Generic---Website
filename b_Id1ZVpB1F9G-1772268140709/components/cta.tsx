import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl opacity-90 text-balance max-w-2xl mx-auto">
          Join hundreds of satisfied customers and transform your online presence today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
