import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ProductAnalysis = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Tell us about your business</h1>
    <form className="space-y-4">
      <div>
        <label
          htmlFor="domain"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company domain
        </label>
        <Input id="domain" type="url" placeholder="https://" />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company description
        </label>
        <Textarea
          id="description"
          placeholder="Autogenerated by AI"
          className="h-40"
          value="Travelcoup specializes in organizing group trips and providing comprehensive travel planning services. Whether you're looking to join a group trip, seek personal travel advice, or explore destinations, Kaijago aims to make travel planning hassle-free and enjoyable..."
        />
        <div className="flex justify-end space-x-2 mt-2">
          <Button variant="outline" size="sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Regenerate
          </Button>
        </div>
      </div>
      <div className="flex space-x-4">
        <Button variant="secondary" className="w-full" onClick={onBack}>
          Go back
        </Button>
        <Button
          variant="outline"
          style={{
            background:
              "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
            border: "transparent",
            borderRadius: "10px",
          }}
          className="text-white w-full"
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </form>
  </div>
);

export default ProductAnalysis;
