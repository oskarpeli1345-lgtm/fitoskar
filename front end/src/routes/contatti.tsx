import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { SITE } from "@/lib/site";
import etichetta from "@/assets/etichetta.jpg";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Richiedi informazioni sul catalogo — FitoCatalogo" },
      {
        name: "description",
        content: "Chiedi informazioni sul catalogo dei prodotti fitosanitari o segnala un prodotto mancante.",
      },
      { property: "og:title", content: "Richiedi informazioni sul catalogo — FitoCatalogo" },
      {
        property: "og:description",
        content: "Scrivici per informazioni sul catalogo o per segnalare un prodotto fitosanitario mancante.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contatti,
});

type Kind = "info" | "segnala";

function Contatti() {
  const [kind, setKind] = useState<Kind>("info");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const nome = get("nome");
    const email = get("email");
    const messaggio = get("messaggio");
    if (!nome || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Inserisci nome ed email valida.");
      return;
    }
    if (kind === "segnala" && !get("prodotto")) {
      setError("Indica almeno la denominazione del prodotto mancante.");
      return;
    }
    setError(null);
    const subject = kind === "info" ? "Richiesta informazioni sul catalogo" : `Segnalazione prodotto mancante: ${get("prodotto")}`;
    const lines = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      get("organizzazione") && `Organizzazione: ${get("organizzazione")}`,
      kind === "segnala" && `Denominazione: ${get("prodotto")}`,
      kind === "segnala" && get("registrazione") && `N. registrazione: ${get("registrazione")}`,
      kind === "segnala" && get("titolare") && `Titolare: ${get("titolare")}`,
      "",
      messaggio,
    ].filter((l): l is string => typeof l === "string");
    window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <>
      <PageHero image={etichetta} eyebrow="Contatti" title="Richiedi informazioni sul catalogo">
        Hai domande sui dati o hai trovato un prodotto che manca? Scrivici.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <aside>
          <h2 className="accent-rule text-4xl font-extrabold uppercase text-primary-deep">Come possiamo aiutarti</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li>Informazioni su contenuti, fonte e aggiornamento del catalogo.</li>
            <li>Segnalazione di prodotti mancanti da integrare.</li>
            <li>Correzioni su voci da verificare.</li>
          </ul>
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wider text-primary hover:text-primary-deep"
          >
            <Mail className="h-5 w-5" /> {SITE.contactEmail}
          </a>
        </aside>

        <form onSubmit={onSubmit} noValidate className="rounded-md border border-border bg-card p-7 shadow-card md:p-9">
          <div role="radiogroup" aria-label="Tipo di richiesta" className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border-2 border-primary bg-primary">
            {(
              [
                ["info", "Richiedi informazioni"],
                ["segnala", "Segnala un prodotto"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={kind === k}
                onClick={() => setKind(k)}
                className="bg-card px-3 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary transition-colors aria-checked:bg-primary aria-checked:text-primary-foreground"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field id="nome" label="Nome e cognome *"><Input id="nome" name="nome" autoComplete="name" /></Field>
            <Field id="email" label="Email *"><Input id="email" name="email" type="email" autoComplete="email" /></Field>
            <Field id="organizzazione" label="Azienda / organizzazione" className="sm:col-span-2">
              <Input id="organizzazione" name="organizzazione" autoComplete="organization" />
            </Field>
            {kind === "segnala" && (
              <>
                <Field id="prodotto" label="Denominazione prodotto *" className="sm:col-span-2">
                  <Input id="prodotto" name="prodotto" />
                </Field>
                <Field id="registrazione" label="N. registrazione"><Input id="registrazione" name="registrazione" /></Field>
                <Field id="titolare" label="Titolare"><Input id="titolare" name="titolare" /></Field>
              </>
            )}
            <Field id="messaggio" label="Messaggio" className="sm:col-span-2">
              <Textarea id="messaggio" name="messaggio" rows={5} />
            </Field>
          </div>

          {error && <p className="mt-4 text-sm font-medium text-destructive">{error}</p>}

          <Button type="submit" variant="solid" size="xl" className="mt-7 w-full sm:w-auto">
            <Send /> Invia richiesta
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            L'invio apre il tuo programma di posta con il messaggio già compilato.
          </p>
        </form>
      </section>
    </>
  );
}

function Field({ id, label, className, children }: { id: string; label: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</Label>
      {children}
    </div>
  );
}
