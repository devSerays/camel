import React from "react";
import Container from "../Container";
import Image from "next/image";
import { TokenBox } from "./TokenBox";

export const Tokenomics = () => {
  return (
    <div className="bg-[url('/Vectors/Tokenomics.png')] bg-cover bg-no-repeat w-100 min-h-[200vh]  h-full relative flex justify-center">
      <Container>
        <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold mt-16 w-full">
          Tokenomics
        </h1>
        <div className="bg-[url('/Vectors/wood-sign.png')] bg-contain bg-no-repeat lg:w-[60vw] mt-12 h-80 mx-auto relative flex items-center justify-center">
          <div className="hidden">Total Supply: 1,000,000,000 Camel Coins</div>
        </div>
        <div className="flex gap-5 justify-center">
          <TokenBox percent="50%" title="Community Rewards">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/stone_2.svg`}
              className="object-cover object-center w-[130px] absolute -left-10 -bottom-2"
            />
          </TokenBox>
          <TokenBox percent="50%" title="Community Rewards" />
          <TokenBox percent="50%" title="Community Rewards" />
          <TokenBox percent="50%" title="Community Rewards" />
          <TokenBox percent="50%" title="Community Rewards" />
        </div>
      </Container>
    </div>
  );
};
