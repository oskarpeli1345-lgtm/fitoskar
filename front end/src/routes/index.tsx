import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  FilePlus2,
  FlaskConical,
  Hash,
  ListChecks,
  ScanSearch,
  ShieldAlert,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchPreview } from "@/components/site/SearchPreview";
import { StatusBadge } from "@/components/site/StatusBadge";
import { SITE } from "@/lib/site";
import hero from "@/assets/hero-vigneto.jpg";
import etichetta from "@/assets/etichetta.jpg";
import campi from "@/assets/campi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitoCatalogo — Trova il prodotto fitosanitario che cerchi" },
      {
        name: "description",
        content:
          "Cerca tra i prodotti fitosanitari del Ministero della Salute per nome, numero di registrazione, sostanza attiva o titolare, con lo stato del prodotto ben visibile.",
      },
      { property: "og:title", content: "FitoCatalogo — Trova il prodotto fitosanitario che cerchi" },
      {
        property: "og:description",
        content: "Ricerca rapida per nome, registrazione, sostanza attiva o titolare. Snapshot dati al 16 novembre 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SEARCH_FIELDS = [
  { icon: Tag, label: "Denominazione", text: "Il nome commerciale del prodotto." },
  { icon: Hash, label: "N. registrazione", text: "Il codice che identifica senza ambiguità." },
  { icon: FlaskConical, label: "Sostanza attiva", text: "Tutti i prodotti con lo stesso principio." },
  { icon: Building2, label: "Titolare", text: "L'azienda che detiene l'autorizzazione." },
  { icon: ListChecks, label: "Stato", text: "Autorizzato, revocato, scaduto o sospeso." },
];

const BENEFITS = [
  {
    icon: ScanSearch,
    title: "Trovi subito quello che cerchi",
    text: "Niente più elenchi infiniti da scorrere: scrivi e ottieni i risultati pertinenti.",
  },
  {
    icon: Hash,
    title: "Distingui i nomi simili",
    text: "Numero di registrazione e titolare aiutano a riconoscere il prodotto giusto tra varianti quasi identiche.",
  },
  {
    icon: ShieldAlert,
    title: "Vedi lo stato a colpo d'occhio",
    text: "Individui subito prodotti revocati, scaduti o sospesi direttamente nei risultati.",
  },
  {
    icon: FilePlus2,
    title: "Integri le voci mancanti",
    text: "Se un prodotto non c'è, aggiungi una riga manuale contrassegnata come tale.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={hero}
          alt="Agronomo in un vigneto consulta un tablet"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
          <p className="eyebrow text-accent animate-rise">Catalogo prodotti fitosanitari</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold uppercase sm:text-6xl lg:text-7xl animate-rise">
            Trova il prodotto fitosanitario che cerchi, in pochi passaggi.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85 animate-rise">
            Ricerca per nome, numero di registrazione, sostanza attiva o titolare, su un catalogo
            basato sui dati del {SITE.source}.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 animate-rise">
            <Button asChild variant="hero" size="xl">
              <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                Prova la ricerca <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contatti">Richiedi informazioni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SNAPSHOT STRIP */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 lg:px-8">
          <CalendarClock className="h-5 w-5 shrink-0" />
          <p className="text-sm font-medium">
            <strong className="font-bold">Dati aggiornati al {SITE.snapshotDate}.</strong> Il catalogo
            è uno snapshot, non una banca dati in tempo reale: verifica sempre l'etichetta ufficiale.
          </p>
        </div>
      </section>

      {/* SEARCH FIELDS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="accent-rule text-4xl font-extrabold uppercase text-primary-deep md:text-5xl">
            Cerca come preferisci
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cinque modi per arrivare al prodotto giusto, partendo dall'informazione che hai sotto mano.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {SEARCH_FIELDS.map((f) => (
            <div key={f.label} className="group bg-card p-6 transition-colors hover:bg-primary hover:text-primary-foreground">
              <f.icon className="h-7 w-7 text-primary transition-colors group-hover:text-accent" />
              <h3 className="mt-5 text-2xl font-bold uppercase">{f.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PREVIEW + STATUS */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="eyebrow text-primary">Risultati chiari</p>
            <h2 className="mt-3 text-4xl font-extrabold uppercase text-primary-deep md:text-5xl">
              Lo stato del prodotto, sempre in vista
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ogni risultato mostra lo stato amministrativo. Così riconosci subito un prodotto
              revocato, scaduto o sospeso prima di fare una scelta.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {(["Autorizzato", "Revocato", "Scaduto", "Sospeso"] as const).map((s) => (
                <StatusBadge key={s} status={s} />
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Le aggiunte manuali e le voci da verificare restano separate dai dati ufficiali:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge status="Manuale" />
              <StatusBadge status="Da verificare" />
            </div>
          </div>
          <SearchPreview />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="accent-rule max-w-2xl text-4xl font-extrabold uppercase text-primary-deep md:text-5xl">
          Perché usarlo
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <article key={b.title} className="rounded-md border border-border bg-card p-7 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-accent">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl font-bold uppercase text-primary-deep">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE TILES */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <FeatureTile
          image={etichetta}
          eyebrow="Fonte e affidabilità"
          title="Dati ufficiali, ben separati"
          text={`Il catalogo si basa sui dati del ${SITE.source}, con la data della fonte sempre indicata. Le schede vanno verificate sull'etichetta ufficiale aggiornata.`}
          to="/come-funziona"
          cta="Scopri come funziona"
        />
        <FeatureTile
          image={campi}
          eyebrow="Catalogo aperto"
          title="Manca un prodotto? Segnalalo"
          text="Puoi inserire una riga manuale contrassegnata come tale oppure segnalarci la voce mancante per integrarla nel catalogo."
          to="/contatti"
          cta="Segnala un prodotto"
        />
      </section>

      {/* CTA BAND */}
      <section className="bg-band text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-4xl font-extrabold uppercase md:text-5xl">Pronto a cercare?</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Apri lo strumento su ChatGPT e trova il prodotto in pochi secondi.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
                Prova la ricerca <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contatti">Richiedi informazioni</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureTile({
  image,
  eyebrow,
  title,
  text,
  to,
  cta,
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  to: "/come-funziona" | "/contatti";
  cta: string;
}) {
  return (
    <Link to={to} className="group relative isolate flex min-h-[440px] overflow-hidden rounded-md text-primary-foreground">
      <img
        src={image}
        alt=""
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
      <div className="mt-auto p-8">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h3 className="mt-2 text-3xl font-extrabold uppercase md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm text-primary-foreground/85">{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-wider text-accent">
          {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
