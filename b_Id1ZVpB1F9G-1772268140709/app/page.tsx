import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
