export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h1 className="text-xl font-semibold mb-6">
        InfraPrioritizer
      </h1>

      <nav className="space-y-3">
        <div>Dashboard</div>
        <div>Risk Map</div>
        <div>Repairs</div>
        <div>Budget</div>
      </nav>
    </aside>
  );
}
