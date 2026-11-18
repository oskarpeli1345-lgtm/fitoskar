import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, CalendarClock, Database, FilePlus2, Search, Tags } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { StatusBadge } from "@/components/site/StatusBadge";
import { SITE } from "@/lib/site";
import campi from "@/assets/campi.jpg";

export const Route = createFileRoute("/come-funziona")({
  head: () => ({
    meta: [
      { title: "Come funziona — FitoCatalogo" },
      {
        name: "description",
        content:
          "Come cercare nel catalogo dei prodotti fitosanitari, leggere lo stato del prodotto e aggiungere le voci mancanti. Dati aggiornati al 16 novembre 2026.",
      },
      { property: "og:title", content: "Come funziona — FitoCatalogo" },
      {
        property: "og:description",
        content: "Ricerca, stato amministrativo, aggiunte manuali e limiti dei dati: tutto quello che serve sapere.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComeFunziona,
});

const STEPS = [
  {
    icon: Search,
    title: "Cerca",
    text: "Scrivi il nome del prodotto, il numero di registrazione, la sostanza attiva o il titolare.",
  },
  {
    icon: Tags,
    title: "Confronta",
    text: "Nei risultati vedi registrazione, titolare e stato: distingui facilmente i prodotti con nomi simili.",
  },
  {
    icon: FilePlus2,
    title: "Integra",
    text: "Se manca una voce, aggiungi una riga manuale contrassegnata come tale, oppure segnalala.",
  },
];

const FAQ = [
  {
    q: "È una banca dati in tempo reale?",
    a: `No. Il catalogo è uno snapshot dei dati del ${SITE.source} aggiornato al ${SITE.snapshotDate}. Eventuali variazioni successive non sono incluse.`,
  },
  {
    q: "Posso fidarmi dello stato indicato?",
    a: "Lo stato riflette la fonte alla data indicata. Prima di acquistare o impiegare un prodotto, verifica sempre l'etichetta ufficiale aggiornata e le fonti ministeriali.",
  },
  {
    q: "Cosa succede quando aggiungo un prodotto a mano?",
    a: "La riga viene marcata come aggiunta manuale e resta distinta dai dati ufficiali, così non si confonde con le informazioni di fonte.",
  },
  {
    q: "Che cos'è una voce “da verificare”?",
    a: "È un'informazione incompleta o non ancora confermata: viene mostrata separatamente finché non viene controllata.",
  },
];

function ComeFunziona() {
  return (
    <>
      <PageHero image={campi} eyebrow="Come funziona" title="Tre passaggi, dal nome al prodotto giusto">
        Uno strumento semplice per orientarsi tra migliaia di prodotti fitosanitari.
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative rounded-md border border-border bg-card p-8 shadow-card">
              <span className="font-display text-7xl font-extrabold leading-none text-accent">0{i + 1}</span>
              <s.icon className="absolute right-8 top-8 h-7 w-7 text-primary" />
              <h2 className="mt-4 text-3xl font-extrabold uppercase text-primary-deep">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="accent-rule text-4xl font-extrabold uppercase text-primary-deep md:text-5xl">
              Tre tipi di informazione, mai mescolati
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Per sapere sempre da dove arriva un dato, il catalogo tiene separate le voci ufficiali
              dalle aggiunte manuali e da quelle ancora da verificare.
            </p>
          </div>
          <div className="space-y-4">
            <Layer icon={Database} title="Dati ufficiali" badge={<StatusBadge status="Autorizzato" />}>
              Provenienti dal {SITE.source}, con data della fonte indicata.
            </Layer>
            <Layer icon={FilePlus2} title="Aggiunte manuali" badge={<StatusBadge status="Manuale" />}>
              Righe inserite quando un prodotto non è presente nel catalogo.
            </Layer>
            <Layer icon={AlertTriangle} title="Voci da verificare" badge={<StatusBadge status="Da verificare" />}>
              Informazioni incomplete o in attesa di controllo.
            </Layer>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex items-start gap-4 rounded-md border-l-4 border-accent bg-card p-6 shadow-card">
          <CalendarClock className="mt-1 h-6 w-6 shrink-0 text-primary" />
          <div>
            <h2 className="text-2xl font-bold uppercase text-primary-deep">Snapshot al {SITE.snapshotDate}</h2>
            <p className="mt-2 text-muted-foreground">
              Il catalogo non si aggiorna in automatico. Schede, dosi e usi autorizzati vanno sempre
              verificati sull'etichetta ufficiale aggiornata.
            </p>
          </div>
        </div>

        <h2 className="accent-rule mt-20 text-4xl font-extrabold uppercase text-primary-deep md:text-5xl">
          Domande frequenti
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q} className="border-t-2 border-primary pt-5">
              <h3 className="text-2xl font-bold text-primary-deep">{f.q}</h3>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button asChild variant="solid" size="xl">
            <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer">
              Prova la ricerca <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="line" size="xl">
            <Link to="/contatti">Richiedi informazioni</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function Layer({
  icon: Icon,
  title,
  badge,
  children,
}: {
  icon: typeof Database;
  title: string;
  badge: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-md bg-card p-5 shadow-card">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold uppercase text-primary-deep">{title}</h3>
          {badge}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
