import Image from "next/image";
import React from "react";
import Container from "../Container";

const FutureListing = () => {
  return (
    <Container>
      <div className="pb-10">
        <h1 className="text-txt_brown text-4xl font-bold ">
          Future Listings
        </h1>
        <p className="text-[#6B3200] font-bold">
          Ready to become part of the Camel Coin adventure?
        </p>
        <div className="flex flex-wrap justify-between  gap-16 mt-10 mx-auto">
          <Image
            width={270}
            height={250}
            className="  "
            alt="plus"
            src="/Vectors/BYB.svg"
          />
          <Image
            width={270}
            height={250}
            className="  "
            alt="plus"
            src="/Vectors/Gate.io.svg"
          />
          <Image
            width={270}
            height={250}
            className="  "
            alt="plus"
            src="/Vectors/kucoin.svg"
          />
          <Image
            width={270}
            height={250}
            className="  "
            alt="plus"
            src="/Vectors/MEXC.svg"
          />
        </div>
      </div>
    </Container>
  );
};

export default FutureListing;
