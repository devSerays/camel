import React from "react";
import { ZoomAnimation } from "../../ZoomAnimation";

export const ToBuyBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ZoomAnimation className="w-full">
      <div className="bg-[#FFFFFF]/70 rounded-md w-full h-20 py-3 text-sm px-4 flex gap-x-3 items-center">
        {children}
      </div>
    </ZoomAnimation>
  );
};
