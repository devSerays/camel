import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center w-full">
      <div className={`lg:max-w-[1440px] w-[90%]   ${className ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
