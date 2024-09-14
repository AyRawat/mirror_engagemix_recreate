import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function UpgradePlan() {
  return (
    <div className="w-56 h-52 p-3 rounded-3xl bg-custom-linear">
      <h2 className="text-xs font-semibold text-[#101928] mb-2">
        Upgrade your plan to unlock
      </h2>
      <p className="text-[8px] text-[#475367] mb-6 text-balance">
        You are now using the free plan,
        Upgrade plan to continue using
      </p>
      <div className="flex justify-between items-center text-sm text-gray-600 my-1">
        <span>Free plan</span>
        <span>3 trials left</span>
      </div>
      <Progress value={33} color="#3A88E3" className="h-2 mb-5 bg-[#F3F4F6]" />
      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
        Upgrade now
      </Button>
    </div>
  );
}
