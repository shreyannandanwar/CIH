import { mockAssets } from '@/data/mockAssets';
import { calculatePriorityScore } from '@/utils/prioritization';
import PriorityBadge from '@/components/common/PriorityBadge';

export default function RepairTable() {
  const rankedAssets = [...mockAssets]
    .map(asset => ({
      ...asset,
      decisionScore: calculatePriorityScore(asset),
    }))
    .sort((a, b) => b.decisionScore - a.decisionScore);

  return (
    <div className="rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Rank</th>
            <th className="p-3 text-left">Asset</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Risk</th>
            <th className="p-3">Impact</th>
            <th className="p-3">ETA</th>
          </tr>
        </thead>
        <tbody>
          {rankedAssets.map((asset, index) => (
            <tr key={asset.id} className={index < 3 ? 'bg-red-50' : ''}>
              <td className="p-3 font-semibold">{index + 1}</td>
              <td className="p-3">{asset.name}</td>
              <td className="p-3 text-center">
                <PriorityBadge priority={asset.priority} />
              </td>
              <td className="p-3 text-center">{asset.riskScore}</td>
              <td className="p-3 text-center">{asset.impact}/10</td>
              <td className="p-3 text-center">{asset.slaDays} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
