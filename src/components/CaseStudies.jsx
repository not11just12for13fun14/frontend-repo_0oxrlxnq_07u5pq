import React from 'react';

const cases = [
  {
    tag: 'B2B SaaS',
    headline: 'From plateaued trials to 3.2x paid activations in 90 days',
    bullets: [
      'Onboarding rewired with progressive friction and aha-moments',
      'Lifecycle emails + in-app nudges orchestrated via events',
      'PLG referral loop added — 18% of new MRR now from invites',
    ],
    metric: '+220% activation rate',
  },
  {
    tag: 'Ecommerce',
    headline: 'Systemized UGC + micro-influencers to triple new customer revenue',
    bullets: [
      'Creator pipeline automated with enrichment + outreach',
      'Content-to-checkout flows with dynamic offers',
      'Paid amplification only on proven winners',
    ],
    metric: '3.1x ROAS sustained',
  },
  {
    tag: 'Marketplaces',
    headline: 'Cold-start solved via balanced supply-demand loops',
    bullets: [
      'Targeted seeding with score-based incentives',
      'Trust and retention mechanics increased repeat usage',
      'Feedback loops reduced time-to-liquid by 47%',
    ],
    metric: 'GMV 2.4x in 6 months',
  },
];

const CaseCard = ({ tag, headline, bullets, metric }) => (
  <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div>
      <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs font-medium text-neutral-700">{tag}</span>
      <h3 className="mt-3 text-lg font-semibold text-neutral-900">{headline}</h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
    <div className="mt-5 text-sm font-medium text-neutral-900">{metric}</div>
  </div>
);

const CaseStudies = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="cases">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Outcomes, not outputs</h2>
        <p className="mt-3 text-neutral-600">
          A glimpse into the kinds of compounding results we engineer across categories.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <CaseCard key={c.headline} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
