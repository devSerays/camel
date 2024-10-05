import React from "react";
import Container from "../Container";
import Image from "next/image";
import { TokenBox } from "./TokenBox";
import AOSWrapper from "../AOSWrapper/AOSWrapper";

export const Tokenomics = () => {
  return (
    <div className="bg-[url('/Vectors/Tokenomics.png')] bg-contain bg-no-repeat w-100   relative flex justify-center">
      <Container>
        <h1 className="text-txt_brown text-2xl lg:text-5xl font-bold mt-16 w-full">
          Tokenomics
        </h1>
        <div className="bg-[url('/Vectors/wood-sign.svg')] lg:bg-[url('/Vectors/wood-sign.png')] bg-contain bg-no-repeat lg:w-[60vw] mt-5 lg:mt-12 h-56 lg:h-80 mx-auto relative flex items-center justify-center">
          <div className="hidden">Total Supply: 1,000,000,000 Camel Coins</div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <AOSWrapper>
            <TokenBox percent="50%" title="Community Rewards">
              <Image
                alt="me"
                width={50}
                height={50}
                src={`/Vectors/stone_2.svg`}
                className="object-cover object-center w-16 lg:w-[130px] absolute -left-5 lg:-left-10 -bottom-2"
              />
            </TokenBox>
          </AOSWrapper>

          <TokenBox percent="20%" title="Community Rewards" />
          <TokenBox percent="15%" title="Community Rewards">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/stone.svg`}
              className="object-cover object-center lg:w-[100px] absolute lg:-right-10 -right-5 -bottom-2"
            />
          </TokenBox>
          <TokenBox percent="10%" title="Community Rewards" />
          <TokenBox percent="5%" title="Community Rewards">
            <Image
              alt="me"
              width={50}
              height={50}
              src={`/Vectors/vector.svg`}
              className="object-cover object-center lg:w-[80px] absolute lg:-right-10 -right-5 -bottom-2"
            />
          </TokenBox>
        </div>
        <p className="text-[#6B3200] mt-10">
          Camel Coin tokenomics is carefully designed to ensure long-term
          growth, stability, and sustainability within the ecosystem. By
          strategically allocating tokens across key sectors, Camel Coin aims to
          fuel innovation, incentivize community participation, and create a
          robust decentralized economy. Each allocation is tailored to meet the
          evolving needs of the ecosystem, fostering liquidity, development, and
          long-term value for holders.
        </p>
        <section className="relative my-10 lg:mt-[600px] mb-28">
          <h1 className="text-txt_brown text-2xl lg:text-4xl font-bold ">
            Who is Crypto Camel?
          </h1>
          <p className="text-[#6B3200] font-bold mt-5">
            Crypto Camel is more than just a traveler of the Blockchain Desert.
            He is a symbol of persistence, wisdom, and vision in the
            unpredictable world of cryptocurrency. With sharp intellect and
            unmatched determination, Crypto Camel represents those who dare to
            explore the unknown, navigate market volatility, and unlock the
            treasures hidden within blockchain technology. Having crossed the
            treacherous Mirage Markets and solved the riddles of ancient
            cryptographic puzzles, Crypto Camel discovered the legendary Camel
            Coins and decided to share them with the world. His mission is to
            empower all adventurers—traders, nomads, and merchants alike—by
            offering them the tools to succeed in the decentralized future. Are
            you ready to join Crypto Camel on his journey through the digital
            dunes?
          </p>
          <button className="rounded-full text-sm px-8 py-3 shadow-xl bg-[url('/Vectors/btn-bg.svg')] bg-cover bg-no-repeat text-white mt-3">
            Read the Whitepaper
          </button>
        </section>

        <Image
          alt="me"
          width={120}
          height={50}
          src={`/Vectors/arrow.svg`}
          className="object-cover object-center w-[35vw] md:w-[20vw]  absolute right-5 md:right-0 bottom-0 md:-bottom-32 animate-pulse"
        />
      </Container>
    </div>
  );
};
