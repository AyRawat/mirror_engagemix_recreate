// src/components/Custom/StatsComponent.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-5xl font-light text-gray-600">{value}</span>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center">
    <ChevronRight className="text-gray-300 w-6 h-6" />
  </div>
);

interface StatsComponentProps {
  stats: { label: string; value: string }[];
}

export default function StatsComponent({ stats }: StatsComponentProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between mb-2 border border-gray-300">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <StatItem label={stat.label} value={stat.value} />
          {index < stats.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
}
