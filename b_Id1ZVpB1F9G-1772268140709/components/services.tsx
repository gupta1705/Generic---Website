import { Card } from '@/components/ui/card'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences',
  },
  {
    number: '03',
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and smooth interactions',
  },
  {
    number: '04',
    title: 'Responsive Design',
    description: 'Perfect functionality across all devices',
  },
  {
    number: '05',
    title: 'Accessibility',
    description: 'Inclusive design for everyone',
  },
  {
    number: '06',
    title: 'Deployment & Hosting',
    description: 'Reliable deployment and scaling solutions',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your web needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.number} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary/20 mb-2">
                {service.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
