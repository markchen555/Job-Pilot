import Image from "next/image";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 text-center sm:py-32">
      <p className="text-sm font-medium tracking-[0.08em] text-accent">SUCCESS STORIES</p>
      <blockquote className="mx-auto mt-8 max-w-5xl text-3xl font-medium leading-[1.35] tracking-[-0.035em] text-text-slate sm:text-4xl">
        “I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see interviews waiting. It feels like cheating. Had 3 offers on the table simultaneously.”
      </blockquote>
      <figcaption className="mt-8 flex items-center justify-center gap-3">
        <Image src="/images/user-icon.png" alt="Tom Wilson" width={52} height={52} className="rounded-lg" />
        <div className="text-left"><p className="text-base font-semibold text-text-black">Tom Wilson</p><p className="mt-1 text-sm text-text-secondary">Junior Developer</p></div>
      </figcaption>
    </section>
  );
}
