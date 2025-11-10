import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold text-gray-900">Ready to dominate your category?</h3>
              <p className="mt-2 text-gray-600">Get a custom growth blueprint. We’ll map compounding loops tailored to your product and stage.</p>
            </div>
            <a
              href="mailto:hello@dominategrowth.com?subject=Growth%20Strategy%20Call"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black transition-colors"
            >
              Book your strategy call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
