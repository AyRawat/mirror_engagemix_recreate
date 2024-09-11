import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ProductAnalysis from "@/components/blocks/ProductAnalysis";
import SearchConfiguration from "@/components/blocks/SearchConfiguration";
import KeywordConfiguration from "@/components/blocks/KeywordConfiguration";

interface CustomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  component?: React.ComponentType<any | null>;
  onReset: () => void; // Add onReset prop
}

export default function CustomSheet({
  isOpen,
  onClose,
  component: Component,
  onReset,
}: CustomSheetProps) {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1); // Reset step to 1
    onReset(); // Call the reset function
    onClose(); // Close the sheet
  };

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center"
          : ""
      }
    >
      <Sheet open={isOpen} onOpenChange={handleClose}>
        <SheetContent className="rounded-lg shadow-lg p-6 bg-white m-6 w-full max-w-3xl">
          <div className="m-2 mt-6">
            {Component ? (
              <Component onClose={handleClose} />
            ) : (
              <>
                {step === 1 && (
                  <ProductAnalysis onNext={handleNextStep} onBack={handleClose} />
                )}
                {step === 2 && (
                  <KeywordConfiguration
                    onNext={handleNextStep}
                    onBack={handleBackStep}
                  />
                )}
                {step === 3 && (
                  <SearchConfiguration
                    onNext={handleClose}
                    onBack={handleBackStep}
                  />
                )}
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}