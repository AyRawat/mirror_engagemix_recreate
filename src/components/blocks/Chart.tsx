import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Chart = () => {
  const data = [
    { name: "Mon", leads: 30, replies: 40 },
    { name: "Tue", leads: 50, replies: 30 },
    { name: "Wed", leads: 20, replies: 60 },
    { name: "Thu", leads: 40, replies: 40 },
    { name: "Fri", leads: 60, replies: 20 },
  ];

  return (
    <div className="relative w-full h-96">
      <Card className="absolute top-0 left-0 w-full h-full transform -rotate-[4deg] origin-top-left shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex justify-between h-64 mb-4">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col justify-end space-x-1">
                <div
                  className="w-12 bg-black"
                  style={{ height: `${item.leads}%` }}
                ></div>
                <div
                  className="w-12 bg-white border border-gray-300"
                  style={{ height: `${item.replies}%` }}
                ></div>
                <div className="text-center mt-2 text-sm">{item.name}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-black mr-2"></div>
              <span className="text-sm">Leads</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-white border border-gray-300 mr-2"></div>
              <span className="text-sm">Replies</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chart;
