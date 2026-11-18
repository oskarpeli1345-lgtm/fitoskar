import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl font-extrabold uppercase tracking-wide">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Catalogo consultabile di prodotti fitosanitari basato sui dati del {SITE.source}.
            Snapshot aggiornato al {SITE.snapshotDate}: non è una banca dati in tempo reale.
          </p>
        </div>
        <div>
          <h4 className="eyebrow text-accent">Esplora</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/come-funziona" className="hover:text-accent">Come funziona</Link></li>
            <li><Link to="/contatti" className="hover:text-accent">Richiedi informazioni</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow text-accent">Contatti</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-accent">
                {SITE.contactEmail}
              </a>
            </li>
            <li>
              <a href={SITE.chatgptUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
                Apri su ChatGPT
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs leading-relaxed text-primary-foreground/60 lg:px-8">
          Le informazioni hanno valore orientativo. Verificare sempre dosi, usi autorizzati e stato
          del prodotto sull'etichetta ufficiale aggiornata e sulle fonti del {SITE.source}.
          {" "}{SITE.name} non è un servizio ufficiale del Ministero.
        </p>
      </div>
    </footer>
  );
}
