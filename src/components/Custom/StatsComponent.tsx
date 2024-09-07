import React from "react";
import { ChevronRight } from "lucide-react";

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-5xl font-semibold text-gray-700">{value}</span>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center">
    <ChevronRight className="text-gray-300 w-6 h-6" />
  </div>
);

export default function StatsComponent() {
  const stats = [
    { label: "Projects", value: "0" },
    { label: "Keywords Tracked", value: "0" },
    { label: "Mentions", value: "0" },
    { label: "Leads", value: "0" },
    { label: "Link Clicks", value: "0" },
    { label: "Impressions", value: "0" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between mb-2">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <StatItem label={stat.label} value={stat.value} />
          {index < stats.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
}
