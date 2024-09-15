// src/components/Custom/CustomSheet.tsx
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import ProductAnalysis from "@/components/forms/ProductAnalysis";
import SearchConfiguration from "@/components/forms/SearchConfiguration";
import KeywordConfiguration from "@/components/forms/KeywordConfiguration";
import Loader from "@/components/common/Loader";

interface CustomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  component?: React.ComponentType<any | null> | null;
  onReset: () => void;
  step: number;
  onNext: () => void;
  onBack: () => void;
  isLoading: boolean;
  loadingText: string;
}

export default function CustomSheet({
  isOpen,
  onClose,
  component: Component,
  onReset,
  step,
  onNext,
  onBack,
  isLoading,
  loadingText,
}: CustomSheetProps) {
  const handleClose = () => {
    onReset();
    onClose();
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
        <SheetContent className="rounded-2xl shadow-lg p-6 bg-white m-6 w-full max-w-3xl">
          <div className="m-2 mt-6">
            {isLoading ? (
              <div className="ml-40 mt-40">
                <Loader
                  text={loadingText}
                  helperText="This will only take a few seconds.."
                />
              </div>
            ) : Component ? (
              <Component onClose={handleClose} />
            ) : (
              <>
                {step === 1 && (
                  <ProductAnalysis onNext={onNext} onBack={handleClose} />
                )}
                {step === 2 && (
                  <KeywordConfiguration onNext={onNext} onBack={onBack} />
                )}
                {step === 3 && (
                  <SearchConfiguration onNext={onNext} onBack={onBack} />
                )}
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
