import { createFileRoute } from "@tanstack/react-router";
import bathroom from "../assets/seamless-bathroom.jpg.asset.json";
import commercial from "../assets/commercial-finish.jpg.asset.json";
import wall from "../assets/decorative-wall.jpg.asset.json";
import { PageIntro, QuoteBand } from "../components/site-shell";

export const Route = createFileRoute("/projects")({ head: () => ({ meta: [
  { title: "Selected Projects | Floor 2 Frames" }, { name: "description", content: "Explore completed residential and commercial finishing projects by Floor 2 Frames." },
  { property: "og:title", content: "Selected Projects | Floor 2 Frames" }, { property: "og:description", content: "A portfolio of seamless surfaces, statement walls and refined interiors." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ProjectsPage });

const projects = [
  { image: bathroom.url, alt: "Minimal seamless bathroom finish", title: "The seamless suite", type: "Cementitious finish", detail: "A restrained palette flows continuously from wall to floor, paired with architectural black fittings and concealed lighting." },
  { image: commercial.url, alt: "Commercial room with concrete panels and wood floor", title: "Workplace rhythm", type: "Commercial interior", detail: "Warm wood flooring balances precise concrete-effect wall panels for a polished, hard-wearing workplace." },
  { image: wall.url, alt: "Hand-finished grey statement wall", title: "Silver movement", type: "Decorative wall", detail: "A hand-applied metallic finish gives this feature wall subtle movement, depth and a quietly luxurious presence." },
];
function ProjectsPage(){ return <><PageIntro eyebrow="Selected work" title="Spaces, resolved in every detail.">Our work is guided by the way a finish looks, feels and performs—long after installation.</PageIntro><section className="bg-charcoal py-16 text-ivory md:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">{projects.map((p,i)=><article key={p.title} className={`grid gap-8 border-t border-ivory/15 py-12 lg:grid-cols-2 lg:items-center ${i%2 ? "" : ""}`}><img src={p.image} alt={p.alt} className={`aspect-[4/3] w-full object-cover ${i%2 ? "lg:order-2" : ""}`}/><div className="lg:px-12"><p className="eyebrow">0{i+1} · {p.type}</p><h2 className="mt-5 font-display text-5xl">{p.title}</h2><p className="mt-5 max-w-lg text-sm leading-8 text-ivory/60">{p.detail}</p></div></article>)}</div></section><QuoteBand/></> }