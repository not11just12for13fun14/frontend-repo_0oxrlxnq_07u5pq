import { Rocket, LineChart, Repeat } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Breakout growth, engineered',
    desc: 'We stack acquisition loops, not just channels—turning momentum into compounding growth.',
  },
  {
    icon: LineChart,
    title: 'Signals over noise',
    desc: 'We prioritize the highest-leverage signals from your funnel to unlock asymmetric outcomes.',
  },
  {
    icon: Repeat,
    title: 'Scalable distribution',
    desc: 'Systematic experiments that compound distribution across product, content, and partnerships.',
  },
];

export default function ValueProps() {
  return (
    <section id="solutions" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">What makes Dominate Growth different</h2>
          <p className="mt-4 text-gray-600">Not another agency. We design, measure, and scale compounding systems that outperform ads alone.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-rose-100 p-2 text-rose-600 ring-1 ring-rose-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
