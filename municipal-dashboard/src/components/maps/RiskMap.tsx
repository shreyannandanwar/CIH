import CityMap from '@/components/maps/CityMap';

export default function RiskMap() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Infrastructure Risk Map</h1>
        <p className="text-muted-foreground">
          Live spatial overview of reported and assessed infrastructure risks
        </p>
      </div>

      <CityMap />
    </div>
  );
}
