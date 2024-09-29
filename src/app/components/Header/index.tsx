import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-white body-font my-3">
      <div className="grid grid-cols-3 justify-center items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/Logos/header_logo.png"
            alt="header_logo"
            width={150}
            height={150}
          />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
          <a className="mr-5 text-txt_brown">Token Price</a>
          <a className="mr-5 text-[#CD6000]">Tokenomics</a>
          <a className="mr-5 text-[#CD6000]">Who is</a>
          <a className="mr-5 text-[#CD6000]">Future</a>
          <a className="mr-5 text-[#CD6000]">Roadmap</a>
        </nav>
        <button className="flex gap-x-1 p-3 w-fit place-self-end rounded-lg border-2 border-main_border  bg-btn_green  ">
          <Image
            src="/Vectors/wallet.png"
            alt="wallet"
            width={25}
            height={25}
          />
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
