import { Section } from '../ui/Section'

function StatTile({ title, highlight, text }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-yellow-300 to-accent" />
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">{title}</p>
      <p className="mt-3 inline-block rounded-full bg-accent/15 px-3 py-1 text-sm font-extrabold text-brand">{highlight}</p>
      <p className="mt-4 text-base font-medium leading-relaxed text-neutral-800">{text}</p>
    </div>
  )
}

export function FomoLiveStats() {
  const statLines = [
    {
      id: 'speed',
      title: 'Profitability boost',
      highlight: '60 days faster',
      text: 'Gold sellers become profitable up to 60 days faster than free seller.',
    },
    {
      id: 'revenue',
      title: 'Revenue lift',
      highlight: '8 times higher weekly revenue',
      text: 'Gold sellers generate 8 times higher weekly revenue compared to the free plan seller.',
    },
    {
      id: 'testing',
      title: 'Testing efficiency',
      highlight: '10 times less',
      text: 'A gold seller spends 10 times less amount on product testing',
    },
  ]

  return (
    <Section className="bg-white">
      <div>
        <div className="mb-6 text-center md:mb-8">
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            Sellers are buying gold subscription and generating huge profits
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {statLines.map((item) => (
            <StatTile key={item.id} title={item.title} highlight={item.highlight} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  )
}
