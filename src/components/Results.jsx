export default function Results() {
  const logos = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Canva', 'Webflow'];
  const stats = [
    { kpi: 'Activation rate', before: '18%', after: '44%' },
    { kpi: 'CAC payback', before: '14 mo', after: '6 mo' },
    { kpi: 'Referral lift', before: '—', after: '3.2x' },
  ];

  return (
    <section id="results" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Results that compound</h2>
            <p className="mt-4 text-gray-600">We specialize in compounding growth mechanisms across product, content, and partnerships. The output: faster loops, cheaper CAC, and durable retention.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(s => (
                <div key={s.kpi} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-500">{s.kpi}</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-gray-900">{s.after}</span>
                    <span className="text-xs text-gray-500 line-through">{s.before}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-gray-500">Selected partners</div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {logos.map(l => (
                  <div key={l} className="flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 py-6 text-sm font-medium text-gray-600">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
