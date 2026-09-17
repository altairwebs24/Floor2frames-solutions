import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "../assets/floor2frames-logo.png.asset.json";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center" aria-label="Floor 2 Frames home">
      <img
        src={logoAsset.url}
        alt="Floor 2 Frames Solutions"
        className={compact ? "h-12 w-12 rounded-full object-cover" : "h-14 w-36 object-contain object-left md:w-44"}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn-gold hidden lg:inline-flex">
          Request a quote <ArrowUpRight size={16} />
        </Link>
        <button className="icon-button lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ivory/10 bg-ink px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-ivory/10 py-4 text-sm uppercase tracking-luxe text-ivory">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div><BrandMark /><p className="mt-6 max-w-sm text-sm leading-7 text-ivory/60">Premium interior and exterior finishing for residential, commercial and industrial spaces.</p></div>
        <div><p className="eyebrow">Explore</p><div className="mt-5 grid gap-3">{navigation.slice(1).map(item => <Link key={item.to} to={item.to} className="text-sm text-ivory/70 hover:text-gold">{item.label}</Link>)}</div></div>
        <div><p className="eyebrow">Start a project</p><div className="mt-5 grid gap-4 text-sm text-ivory/70"><a className="flex gap-3 hover:text-gold" href="tel:+27683701039"><Phone size={17}/>068 370 1039</a><a className="flex gap-3 hover:text-gold" href="mailto:info@floor2frames.co.za"><Mail size={17}/>info@floor2frames.co.za</a><span className="flex gap-3"><MapPin size={17}/>Serving residential, commercial & industrial projects</span></div></div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-6 text-center text-xs tracking-wide text-ivory/40">© 2026 Floor 2 Frames Solutions. Crafted for exceptional spaces.</div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.03] text-ivory md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-ivory/65 md:text-lg">{children}</p></div></section>;
}

export function QuoteBand() {
  return <section className="bg-gold text-ink"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-luxe">Your space, elevated</p><h2 className="mt-2 font-display text-3xl md:text-4xl">Let’s discuss your next finish.</h2></div><Link to="/contact" className="btn-dark">Get your free quote <ArrowUpRight size={18}/></Link></div></section>;
}