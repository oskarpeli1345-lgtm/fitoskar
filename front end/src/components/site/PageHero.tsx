import type { ReactNode } from "react";

export function PageHero({ image, eyebrow, title, children }: { image: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
      <img src={image} alt="" width={1600} height={912} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow text-accent animate-rise">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-extrabold uppercase md:text-6xl animate-rise">{title}</h1>
        {children && <div className="mt-5 max-w-xl text-lg text-primary-foreground/85 animate-rise">{children}</div>}
      </div>
    </section>
  );
}
