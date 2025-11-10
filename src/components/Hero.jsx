import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Dominate Growth hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to ensure text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900"
          >
            Dominate your category with compounding growth systems
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-lg text-gray-700"
          >
            We design and scale distribution loops, product-led acquisition, and partner engines that compound week over week.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors"
            >
              Book a strategy call
            </a>
            <a
              href="#results"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              See how we scale
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex items-center gap-8 text-sm text-gray-600"
          >
            <div>
              <span className="font-semibold text-gray-900">$250M+</span> client revenue influenced
            </div>
            <div>
              <span className="font-semibold text-gray-900">9.7x</span> avg. growth within 6 months
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
