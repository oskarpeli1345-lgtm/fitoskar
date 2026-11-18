import { cn } from "@/lib/utils";

export type Status = "Autorizzato" | "Revocato" | "Scaduto" | "Sospeso" | "Manuale" | "Da verificare";

const STYLES: Record<Status, string> = {
  Autorizzato: "bg-status-ok-soft text-status-ok",
  Revocato: "bg-status-bad-soft text-status-bad",
  Scaduto: "bg-status-bad-soft text-status-bad",
  Sospeso: "bg-status-warn-soft text-status-warn",
  Manuale: "bg-status-manual-soft text-status-manual",
  "Da verificare": "bg-status-warn-soft text-status-warn",
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
        STYLES[status],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
