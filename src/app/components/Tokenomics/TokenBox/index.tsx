import React from "react";
import { ZoomAnimation } from "../../ZoomAnimation";

interface props {
  percent: string;
  title: string;
  children?: React.ReactNode;
}
export const TokenBox: React.FC<props> = ({ percent, title, children }) => {
  return (
    <ZoomAnimation>
      <div className="bg-[url('/Vectors/paper.png')] bg-contain bg-no-repeat w-[150px] h-[110px] lg:w-[250px] lg:h-[170px] mt-12 mx-auto relative flex items-center justify-center animate-zoom">
        <div className="md:text-[45px] text-4xl font-extrabold">{percent}</div>
        {children}
      </div>
      <div className="text-center font-bold  md:text-xl text-[#341800]">
        <strong>{title}</strong>
      </div>
    </ZoomAnimation>
  );
};
