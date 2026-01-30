"use client";

import AppShell from "@/components/layout/AppShell";
import { useQuery } from "@tanstack/react-query";
import { fetchBudgetScenario } from "@/lib/api";

export default function BudgetPage() {
  const { data } = useQuery({
    queryKey: ["budget"],
    queryFn: fetchBudgetScenario,
  });

  return (
    <AppShell>
      <h2 className="text-xl font-semibold mb-4">
        Budget Impact Simulator
      </h2>

      <div className="bg-white p-4 rounded-lg">
        <p>Total Budget: ₹{data?.budget.toLocaleString()}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Select repairs to see remaining risk
        </p>
      </div>
    </AppShell>
  );
}
