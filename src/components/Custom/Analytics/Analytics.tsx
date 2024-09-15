import Banner from "@/components/common/Banner";
import AnalyticsBannerSVG from "@/assets/Analytics/Banner.svg";
import Header from "../../layout/Header";
import { useAuth } from "@/contexts/auth/AuthContext";

export default function Analytics() {
  const { user } = useAuth();

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-hidden">
      <main className="flex-1 max-w-7xl mx-auto overflow-hidden">
        <Header
          title={`Welcome, ${user?.name || "User"}.`}
          buttonText="No Button"
          onButtonClick={() => {}}
        />
        <div className="h-[235px]">
          <Banner bannerSvg={AnalyticsBannerSVG} />
        </div>
      </main>
    </div>
  );
}
