import React from "react";
import Container from "../Container";
import Image from "next/image";

const HowToBuy = () => {
  return (
    <div className="bg-[url('/Vectors/camel-bg.svg')] bg-contain lg:bg-cover bg-no-repeat w-100  relative flex justify-center">
      <Container className="relative mt-40">
        <h1 className="text-txt_brown text-2xl lg:text-4xl font-bold">
          How to Buy Camel Coins
        </h1>
        <p className="text-[#6B3200] font-bold">
          Buying Camel Coins is easy! Follow these steps to become part of the
          adventure:
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/1.svg"
            className="object-contain object-center md:w-[20vw]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/2.svg"
            className="object-contain object-center md:w-[20vw]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/3.svg"
            className="object-contain object-center md:w-[20vw]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/4.svg"
            className="object-contain object-center md:w-[20vw]"
          />
          <Image
            alt="me"
            width={500}
            height={500}
            src="/Vectors/5.svg"
            className="object-contain object-center md:w-[20vw]"
          />
        </div>
      </Container>
    </div>
  );
};

export default HowToBuy;
