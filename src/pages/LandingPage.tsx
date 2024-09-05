import React from "react";
import Navbar from "@/components/blocks/Navbar";
import Hero from "@/components/blocks/Hero";
import UserAvatars from "@/components/blocks/Avatar";
import Chart from "@/components/blocks/Chart";
import KeywordCard from "@/components/blocks/KeywordCard";
import ChatInterface from "@/components/blocks/ChartInterface";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 pb-12 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <Hero />
            <div>
              <UserAvatars />
              <p className="mt-4 text-sm text-gray-600">
                Join 2000+ Businesses using engagemix to boost sales
              </p>
            </div>
            <Chart />
          </div>
          <div className="space-y-8 transform translate-x-12 translate-y-1">
            {" "}
            {/* Shifted to the right */}
            <div className="h-72 translate-x-20">
              {" "}
              {/* Added margin to account for rotation */}
              <KeywordCard />
            </div>
            <div className="mb-12">
              {" "}
              {/* Added margin to account for rotation */}
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
