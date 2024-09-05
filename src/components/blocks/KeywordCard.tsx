import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const KeywordCard = () => {
  return (
    <div className="relative w-80 h-96">
      {" "}
      {/* Wrapper div for positioning */}
      <Card className="absolute top-0 left-0 w-full h-full transform rotate-[4deg] origin-top-left shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#E2E8F0" />
              <path
                d="M17 9L9.5 16.5L7 14"
                stroke="#4A5568"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Brand name
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">4th June 2024</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                A
              </div>
              <Input placeholder="Keyword" />
            </div>
            <Input placeholder="Keyword" />
            <Input placeholder="Keyword" />
          </div>
          <Button variant="outline" className="w-full mt-4">
            <ChevronRight className="mr-2 h-4 w-4" /> View all
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordCard;
