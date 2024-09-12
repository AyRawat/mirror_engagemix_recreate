import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomSheet from "./CustomSheet";
import GoalSettingForm from "./GoalSettingForm";
import Banner from "@/components/Custom/Banner";
import Header from "@/components/Custom/Header";
import NoAccountSection from "@/components/Custom/NoAccountSection";
import { useDispatch } from "@/hooks";
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
          title="Social Media"
          buttonText="+ Connect account"
          onButtonClick={handleNewSocialAccount}
        />
        <Banner />
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
