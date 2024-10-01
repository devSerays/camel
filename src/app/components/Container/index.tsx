import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`lg:w-[1440px] mx-auto ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;
