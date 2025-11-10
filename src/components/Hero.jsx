import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Dominate Growth hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to ensure text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Harness exponential growth beyond traditional marketing
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            We engineer compounding distribution loops and product-led systems that scale faster than ad spend. It’s not magic—it's designed dominance.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">$250M+</span> client revenue influenced
            </div>
            <div>
              <span className="font-semibold text-gray-900">9.7x</span> average growth within 6 months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
