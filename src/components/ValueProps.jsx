import { Rocket, LineChart, Repeat, Compass, Sparkles, Layers, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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

const process = [
  { icon: Compass, title: 'Diagnose', desc: 'Identify constraint, ICP, and velocity levers.' },
  { icon: Layers, title: 'Design', desc: 'Architect loops across product, content, and partners.' },
  { icon: Sparkles, title: 'Experiment', desc: 'Prioritized sprints with clear success criteria.' },
  { icon: TrendingUp, title: 'Scale', desc: 'Double down on winners; automate and amplify.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ValueProps() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">What makes Dominate Growth different</h2>
          <p className="mt-4 text-gray-600">Not another agency. We design, measure, and scale compounding systems that outperform ads alone.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-rose-100 p-2 text-rose-600 ring-1 ring-rose-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div id="process" className="mt-12">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xl font-semibold text-gray-900">
            Our process, compressed
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-2 text-gray-600 max-w-2xl">
            Ship faster with clarity. Every sprint compounds into distribution advantages.
          </motion.p>
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map(({ icon: Icon, title, desc }, idx) => (
              <motion.li key={title} variants={item} className="relative rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-semibold">{idx + 1}</span>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-gray-900" />
                    <span className="font-medium text-gray-900">{title}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
