// src/components/Custom/Loader.tsx
import React, { useState, useEffect } from "react";
import LoaderSvg from "@/assets/icons/loader.svg";
import { Progress } from "@/components/ui/progress";

interface LoaderProps {
  text?: string;
  helperText?: string;
}

const Loader: React.FC<LoaderProps> = ({ text, helperText }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 20) % 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-72">
      <object type="image/svg+xml" data={LoaderSvg}></object>
      {text && (
        <div className="mt-4 text-lg text-center font-semibold">{text}</div>
      )}
      {helperText && (
        <div className="mt-2 text-sm text-gray-500">{helperText}</div>
      )}
      <div className="w-full mt-4">
        <Progress value={progress} />
      </div>
    </div>
  );
};

export default Loader;
