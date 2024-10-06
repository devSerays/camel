"use client";

import Image from "next/image";
import React from "react";

const Team = () => {
  const images = [
    {
      label: "Ali Al-Sahra",
      role: "Founder & CEO",
      url: "Al-Sahra",
    },
    {
      label: "Layla Ahmed",
      role: "Lead Developer",
      url: "Layla",
    },
    {
      label: "Omar Khalid",
      role: "Blockchain Engineer",
      url: "Khalid",
    },
    {
      label: "Fatima Zayed",
      role: "Community Manager",
      url: "Fatima",
    },
    {
      label: "Yusuf Khan",
      role: "Marketing & Partnerships",
      url: "Yusuf",
    },
  ];
  return (
    <div className="my-5">
      <h1 className="text-txt_brown text-4xl font-bold">Meet the Team</h1>
      <p className="text-dark_brown font-bold">
        The team behind Camel Coin consists of passionate developers,
        experienced traders, and visionary leaders, all working together to
        bring you a decentralized future powered by the Blockchain Desert's
        finest currency.
      </p>
      <div className="flex flex-wrap justify-center gap-16 w-2/3 mx-auto">
        {images.map((img, index) => {
          return (
            <div key={index + 1} className="text-center">
              <Image
                alt="me"
                width={200}
                height={200}
                src={`/Team/${img.url}.png`}
                className="object-contain object-center"
              />
              <h1 className="text-brown_34 font-bold text-xl mt-1">
                {img.label}
              </h1>
              <h3 className="text-dark_brown text-xs font-bold ">{img.role}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
