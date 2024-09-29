import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" bg-main_gray rounded-xl h-screen ">
      <div className="  flex gap-5 px-10 py-10   flex-col ">
        <div className="text-txt_brown">
          <h1 className="title-font  text-3xl mb-2 font-extrabold">
            Welcome to <span className="text-[#23672D]">Crypto Camel</span>:
            <br /> The Desert’s Digital Gold
          </h1>
          <p className="font-bold">
            Embark on a journey through the Blockchain Desert and uncover the
            legendary Camel Coins.
          </p>
        </div>
        <Image
          alt="me"
          width={270}
          height={270}
          src="/Vectors/tree.png"
          className="object-cover object-center absolute right-3 top-[84px]"
        />
        <div className="flex gap-2">
          <div className="flex shadow-orange_shadow">
            <button className="inline-flex text-white bg-main_orange rounded-r-none  py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg border-2 border-background">
              Hire me
            </button>
            <button className="inline-flex text-white bg-main_orange rounded-l-none border-l-0 items-center px-1 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg border-2 border-background">
              <Image
                width={25}
                height={25}
                className="  "
                alt="plus"
                src="/icons/plus.svg"
              />
            </button>
          </div>
          <div className="flex">
            <button className="inline-flex text-white bg-background rounded-r-none  py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg  border-2 border-background">
              Copy Email
            </button>
            <button className="inline-flex text-white bg-background rounded-l-none border-l-0 items-center px-1 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg  border-2 border-background">
              <Image
                width={20}
                height={20}
                className="w-5"
                alt="plus"
                src="/icons/copy.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
