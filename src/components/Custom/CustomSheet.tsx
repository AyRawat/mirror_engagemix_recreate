// src/components/Custom/CustomSheet.tsx
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
  step: number; // Add step prop
  onNext: () => void; // Add onNext prop
  onBack: () => void; // Add onBack prop
}

export default function CustomSheet({
  isOpen,
  onClose,
  component: Component,
  onReset,
  step,
  onNext,
  onBack,
}: CustomSheetProps) {
  const handleClose = () => {
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
