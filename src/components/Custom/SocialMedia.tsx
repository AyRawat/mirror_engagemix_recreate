import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomSheet from "./CustomSheet";
import GoalSettingForm from "./GoalSettingForm";
import Banner from "@/components/Custom/Banner";
import Header from "@/components/Custom/Header";
import NoAccountSection from "@/components/Custom/NoAccountSection";

export default function SocialMedia() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  function handleNewSocialAccount(): void {
    setIsSheetOpen(true);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-hidden">
      <main className="flex-1 p-8 max-w-7xl mx-auto overflow-hidden">
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
        component={GoalSettingForm}
      />
    </div>
  );
}
