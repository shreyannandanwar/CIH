export async function fetchDashboardStats() {
  return {
    highRisk: 12,
    pending: 37,
    budgetUsed: "62%",
    avgTime: "18 days"
  };
}

export async function fetchRepairs() {
  return [
    {
      id: "R-102",
      asset: "Road Segment A12",
      priority: "P1",
      score: 0.91,
      cost: 120000,
      explanation: "High severity damage near hospital zone",
    },
    {
      id: "R-221",
      asset: "Bridge Joint B4",
      priority: "P2",
      score: 0.68,
      cost: 80000,
      explanation: "Moderate damage with growing reports",
    },
  ];
}

export async function fetchPriorityStats() {
  return [
    { priority: "P1", count: 8 },
    { priority: "P2", count: 14 },
    { priority: "P3", count: 15 },
  ];
}

export async function fetchRiskMapData() {
  return [
    {
      id: "A12",
      lat: 18.5204,
      lng: 73.8567,
      priority: "P1",
      score: 0.92,
      asset: "Road Segment A12",
    },
    {
      id: "B07",
      lat: 18.528,
      lng: 73.859,
      priority: "P2",
      score: 0.67,
      asset: "Drainage Line B07",
    },
  ];
}

export async function fetchBudgetScenario() {
  return {
    budget: 500000,
    repairs: [
      { id: "R-102", cost: 120000, priority: 0.91 },
      { id: "R-221", cost: 80000, priority: 0.68 },
      { id: "R-331", cost: 200000, priority: 0.85 },
    ],
  };
}
