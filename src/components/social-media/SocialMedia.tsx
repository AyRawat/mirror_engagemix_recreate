import { useState } from "react";
import CustomSheet from "@/components/Custom/CustomSheet";
import GoalSettingForm from "../social-media/GoalSettingForm";
import Banner from "@/components/common/Banner";
import Header from "@/components/layout/Header";
import NoAccountSection from "@/components/Custom/NoAccountSection";
import SocialMediaBanner from "@/assets/SocialMedia/Banner.svg";
import { useDispatch } from "@/hooks/DispatchHook";
import { useAuth } from "@/contexts/auth/AuthContext";

import {
  setAccountData,
  setProductData,
  setKeywords,
  setSearchConfig,
  setProjectName,
} from "@/store/formSlice";

export default function SocialMedia() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  function handleNewSocialAccount(): void {
    setIsSheetOpen(true);
  }

  const handleResetForms = () => {
    dispatch(
      setAccountData({ email: "", password: "", firstName: "", lastName: "" })
    );
    dispatch(
      setProductData({
        companyName: "",
        companyDomain: "",
        companyDescription: "",
      })
    );
    dispatch(setKeywords([]));
    dispatch(setSearchConfig({ platforms: [] }));
    dispatch(setProjectName(""));
  };

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-hidden">
      <main className="flex-1 max-w-7xl mx-auto overflow-hidden">
        <Header
          title={`Welcome, ${user?.name || "User"}.`}
          buttonText="+ Connect account"
          onButtonClick={handleNewSocialAccount}
        />
        <Banner bannerSvg={SocialMediaBanner} />
        <NoAccountSection />
      </main>
      <CustomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onReset={handleResetForms} // Pass the reset function
        component={GoalSettingForm}
      />
    </div>
  );
}
