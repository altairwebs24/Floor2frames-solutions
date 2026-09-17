import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Layers3, ShieldCheck, Sparkles, MoveRight } from "lucide-react";
import { media } from "../lib/media";
import { QuoteBand } from "../components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Floor 2 Frames | Premium Finishing Solutions" },
    { name: "description", content: "Premium flooring, wall finishes and aluminium solutions for exceptional residential and commercial spaces." },
    { property: "og:title", content: "Floor 2 Frames | Premium Finishing Solutions" },
    { property: "og:description", content: "Premium finishes. Exceptional frames. Perfect spaces." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const services = [
  { n: "01", title: "Epoxy flooring", text: "Sleek, durable and seamless surfaces engineered for residential, commercial and industrial demands." },
  { n: "02", title: "Cementitious finishes", text: "Modern, versatile floor and wall finishes with exceptional strength and architectural character." },
  { n: "03", title: "Wooden flooring", text: "Natural warmth and timeless elegance, installed with an uncompromising eye for detail." },
  { n: "04", title: "Aluminium solutions", text: "Precision-made frames, doors, windows and gates that complete contemporary spaces." },
];

function HomePage() {
  return <>
    <section className="relative min-h-[calc(92svh+5rem)] overflow-hidden bg-ink text-ivory">
      <video className="absolute inset-0 h-full w-full object-cover opacity-55" autoPlay muted loop playsInline aria-label="Floor 2 Frames completed interiors"><source src={media.heroVideo} type="video/webm" /></video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_70%,transparent)_48%,color-mix(in_oklab,var(--ink)_20%,transparent)_100%)]" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-24">
        <div className="max-w-4xl animate-rise">
          <p className="eyebrow">Premium interior & exterior finishing</p>
          <h1 className="mt-6 font-display text-6xl leading-[.9] md:text-8xl lg:text-[7.5rem]">Exceptional finishes.<br/><span className="text-gold">Perfect spaces.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-ivory/75 md:text-lg">We transform considered spaces through seamless floors, tactile walls and precision aluminium craftsmanship.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="btn-gold">Get your free quote <ArrowUpRight size={17}/></Link><Link to="/projects" className="btn-outline">View our work <MoveRight size={17}/></Link></div>
        </div>
      </div>
    </section>

    <section className="bg-ivory py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Crafted end to end</p><h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">One vision.<br/>Every surface.</h2></div><div className="grid gap-px bg-border sm:grid-cols-2">{services.map(s => <article key={s.n} className="bg-ivory p-7 md:p-9"><span className="font-display text-2xl text-gold">{s.n}</span><h3 className="mt-8 font-display text-3xl">{s.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{s.text}</p></article>)}</div></div>
      <div className="mt-12 text-right"><Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-luxe">Explore every service <ArrowUpRight size={16}/></Link></div>
    </div></section>

    <section className="bg-charcoal py-20 text-ivory md:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">Selected work</p><div className="mt-10 grid gap-5 md:grid-cols-12">
      <figure className="group md:col-span-7"><img className="aspect-[4/3] w-full object-cover" src={media.bathroom} alt="Seamless cementitious bathroom with black fixtures"/><figcaption className="mt-5 flex justify-between gap-4"><div><h3 className="font-display text-3xl">Quiet precision</h3><p className="mt-1 text-sm text-ivory/55">Seamless walls and floor · Residential bathroom</p></div><ArrowUpRight className="text-gold"/></figcaption></figure>
      <figure className="group md:col-span-5 md:pt-24"><img className="aspect-square w-full object-cover" src={media.wall} alt="Decorative polished grey feature wall"/><figcaption className="mt-5 flex justify-between gap-4"><div><h3 className="font-display text-3xl">Tactile restraint</h3><p className="mt-1 text-sm text-ivory/55">Decorative wall finish · Feature interior</p></div><ArrowUpRight className="text-gold"/></figcaption></figure>
      <figure className="md:col-span-9 md:col-start-3 md:mt-14"><img className="aspect-[16/8] w-full object-cover" src={media.commercial} alt="Commercial interior with concrete wall panels and wood flooring"/><figcaption className="mt-5 flex justify-between gap-4"><div><h3 className="font-display text-3xl">Commercial character</h3><p className="mt-1 text-sm text-ivory/55">Wall panels and wooden flooring · Workplace interior</p></div><ArrowUpRight className="text-gold"/></figcaption></figure>
    </div></div></section>

    <section className="bg-ivory py-20 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">{[[ShieldCheck,"Premium quality","Materials and finishes selected to perform beautifully."],[Sparkles,"Expert workmanship","Refined execution, from preparation to final detail."],[Layers3,"Complete solutions","Flooring, walls and frames delivered as one vision."]].map(([Icon,title,text]) => { const I=Icon as typeof ShieldCheck; return <div key={title as string} className="border-t border-ink pt-6"><I className="text-gold"/><h3 className="mt-8 font-display text-3xl">{title as string}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text as string}</p></div>})}</div></section>
    <QuoteBand />
  </>;
}