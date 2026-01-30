import { Badge } from "@/components/ui/badge";
import { PRIORITY_META } from "@/lib/constants";

export default function PriorityBadge({ level }: { level: "P1" | "P2" | "P3" }) {
  const meta = PRIORITY_META[level];

  return (
    <Badge variant={meta.color as any}>
      {level} · {meta.label}
    </Badge>
  );
}
