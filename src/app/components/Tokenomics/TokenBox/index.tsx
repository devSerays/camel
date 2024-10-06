import Image from "next/image";
import React from "react";

interface props {
  percent: string;
  title: string;
  children?: React.ReactNode;
}
export const TokenBox: React.FC<props> = ({ percent, title, children }) => {
  return (
    <div>
      <div className="bg-[url('/Vectors/paper.png')] bg-contain bg-no-repeat w-[250px] h-[170px] mt-12 mx-auto relative flex items-center justify-center">
        <div className="text-[45px] font-extrabold">{percent}</div>
        {children}
      </div>
      <div className="text-center font-bold text-xl">
        <strong>{title}</strong>
      </div>
    </div>
  );
};
