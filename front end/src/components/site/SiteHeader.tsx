import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/come-funziona", label: "Come funziona" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-accent">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold uppercase tracking-wide text-primary-deep">
              {SITE.name}
            </span>
            <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="font-display text-base font-semibold uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="solid" size="sm" className="h-10 px-5">
            <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
              Prova la ricerca
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-lg font-semibold uppercase tracking-wider"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild variant="solid" className="w-full">
                <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                  Prova la ricerca
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
