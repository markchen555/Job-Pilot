import Image from "next/image";

const searchBenefits = [
  ["Find jobs that actually fit", "Search by title and location or paste a job link. Get matched roles you can quickly scan."],
  ["Know the Company Before You Apply", "Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence."],
  ["Keep track of every application", "Keep a clear view of every job you’ve found, tailored. Your activity and progress all stay in one simple place."],
];

const confidenceBenefits = [
  ["Understand your match score", "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what’s missing."],
  ["AI-Powered Job Matching", "Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter."],
  ["Focus on the right roles", "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying."],
];

type BenefitListProps = {
  benefits: string[][];
  accentClass: string;
};

function BenefitList({ benefits, accentClass }: BenefitListProps) {
  return (
    <div className="divide-y divide-border">
      {benefits.map(([title, copy], index) => (
        <article key={title} className={`p-8 ${index === 0 ? accentClass : ""}`}>
          <h3 className="text-xl font-semibold tracking-[-0.025em] text-text-slate">{title}</h3>
          <p className="mt-3 max-w-xl text-lg leading-8 text-text-secondary">{copy}</p>
        </article>
      ))}
    </div>
  );
}

export function FeatureSpotlight() {
  return (
    <section className="mx-auto max-w-[1440px] border-x border-border">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-r border-border bg-surface p-8 sm:p-16 lg:border-b-0">
          <h2 className="max-w-md text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-text-slate">Manage Your Job Search With Ease</h2>
        </div>
        <div className="flex items-center bg-surface-tertiary p-7 sm:p-12">
          <Image src="/images/jobs-lists.png" alt="A list of job matches with scores and salary estimates" width={1182} height={889} className="w-full" />
        </div>
        <BenefitList benefits={searchBenefits} accentClass="border-l-2 border-accent" />
        <div className="hidden border-l border-border bg-surface-tertiary lg:block" />
      </div>
      <div className="diagonal-rule h-24 border-y border-border" aria-hidden="true" />
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center bg-surface-tertiary p-7 sm:p-12">
          <Image src="/images/agnet-log.png" alt="JobPilot agent activity log" width={1072} height={828} className="w-full" />
        </div>
        <div className="border-l border-border bg-surface">
          <div className="p-8 sm:p-16"><h2 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-text-slate">Apply With More Confidence, Every Time</h2></div>
          <BenefitList benefits={confidenceBenefits} accentClass="border-l-2 border-success" />
        </div>
      </div>
      <div className="diagonal-rule h-24 border-t border-border" aria-hidden="true" />
    </section>
  );
}
