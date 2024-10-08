import React from "react";
import Container from "../Container";
import Header from "../Header";

const Hero = () => {
  return (
    <div className="bg-[url('/Vectors/hero-sm.svg')] md:bg-[url('/Vectors/hero.svg')] h-[550px] md:h-[750px] bg-bottom bg-cover lg:bg-cover bg-no-repeat w-100 relative lg:h-[140vh] bg-[#FDB93C]">
      <Header />
      <Container className=" bg-main_gray rounded-xl  ">
        <div className="  flex gap-5 lg:px-10 py-10   flex-col ">
          <div className="text-txt_brown">
            <h1 className="title-font text-xl lg:text-5xl mb-2 font-extrabold">
              Welcome to <span className="text-[#23672D]">Crypto Camel</span>:
              <br /> The Desert’s Digital Gold
            </h1>
            <p className="font-bold">
              Embark on a journey through the Blockchain Desert and uncover the
              legendary Camel Coins.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
