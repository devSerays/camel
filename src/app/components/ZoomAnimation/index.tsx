"use client";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

interface ZoomProps {
  className?: string;
  children: ReactNode;
}

export const ZoomAnimation: FC<ZoomProps> = ({ className, children }) => {
  const sectionRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsZoomed(true);
        } else {
          setIsZoomed(false);
        }
      },
      {
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${
        isZoomed ? "scale-100 animate-zoom" : "scale-50"
      } ${className}`}
    >
      <div>{children}</div>
    </div>
  );
};
