import { Search } from "lucide-react";
import { SITE } from "@/lib/site";
import { StatusBadge, type Status } from "./StatusBadge";

// Righe puramente illustrative: nomi e numeri fittizi, non dati reali.
const ROWS: { name: string; reg: string; substance: string; holder: string; status: Status }[] = [
  { name: "Prodotto Esempio 20 SC", reg: "00001", substance: "Sostanza A", holder: "Titolare Alfa S.p.A.", status: "Autorizzato" },
  { name: "Prodotto Esempio 20 WG", reg: "00002", substance: "Sostanza A", holder: "Titolare Beta S.r.l.", status: "Revocato" },
  { name: "Prodotto Esempio Plus", reg: "00003", substance: "Sostanza A + B", holder: "Titolare Alfa S.p.A.", status: "Sospeso" },
  { name: "Prodotto Esempio (aggiunto)", reg: "—", substance: "Sostanza A", holder: "Da completare", status: "Manuale" },
];

export function SearchPreview() {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-float">
      <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-2.5">
        <span className="eyebrow text-muted-foreground">Esempio illustrativo</span>
        <span className="text-xs text-muted-foreground">Fonte: {SITE.source} · {SITE.snapshotDate}</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-sm border-2 border-primary bg-background px-3 py-2.5">
          <Search className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground">sostanza A</span>
          <span className="ml-auto rounded-sm bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">
            Sostanza attiva
          </span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">4 risultati · stesso principio, titolari e stati diversi</p>
      </div>
      <ul className="divide-y divide-border">
        {ROWS.map((r) => (
          <li key={r.name} className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 px-4 py-3">
            <span className="font-semibold text-foreground">{r.name}</span>
            <StatusBadge status={r.status} className="justify-self-end" />
            <span className="col-span-2 text-xs text-muted-foreground">
              Reg. n. {r.reg} · {r.substance} · {r.holder}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
