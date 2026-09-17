import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, QuoteBand } from "../components/site-shell";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "Premium Finishing Services | Floor 2 Frames" }, { name: "description", content: "Explore epoxy, cementitious, wooden flooring, decorative walls and aluminium solutions." },
  { property: "og:title", content: "Premium Finishing Services | Floor 2 Frames" }, { property: "og:description", content: "Architectural surfaces and precision framing for exceptional spaces." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ServicesPage });

const items = [
  ["01","Epoxy flooring","A seamless, durable finish with high gloss and outstanding chemical resistance. Ideal for modern homes, showrooms and demanding commercial environments.","From R550/m² excl. VAT"],
  ["02","Cementitious flooring & walls","A strong, water-resistant architectural finish that brings calm, continuous texture to floors and vertical surfaces.","From R550/m² excl. VAT"],
  ["03","Wooden flooring","Warm, comfortable and naturally beautiful flooring, expertly installed for longevity and effortless maintenance.","From R500/m² excl. VAT"],
  ["04","Stucco & decorative walls","Breathable, low-maintenance feature finishes with depth, movement and an elegant handcrafted quality.","From R450/m² excl. VAT"],
  ["05","Aluminium solutions","Bespoke doors, windows, gates and frames built for clean lines, durability and a precise architectural fit.","Quoted to specification"],
];

function ServicesPage(){ return <><PageIntro eyebrow="Our expertise" title="Finishes that define the room.">A carefully resolved collection of surface and framing solutions, delivered with technical discipline and a designer’s eye.</PageIntro><section className="bg-ivory py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">{items.map(([n,title,text,price]) => <article key={n} className="grid gap-6 border-t border-ink/20 py-10 md:grid-cols-[100px_1fr_1fr_auto] md:items-start"><span className="font-display text-3xl text-gold">{n}</span><h2 className="font-display text-4xl leading-none">{title}</h2><p className="text-sm leading-7 text-muted-foreground">{text}</p><div className="md:text-right"><p className="text-xs font-bold uppercase tracking-brand text-gold">{price}</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase">Enquire <ArrowUpRight size={15}/></Link></div></article>)}</div></section><QuoteBand/></> }