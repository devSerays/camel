"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ConnectWallet } from "../ConnectWallet";
import SideDrawer from "../Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const drawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="text-white body-font pt-4 mx-5 ">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Logos/header_logo.png"
            alt="header_logo"
            width={150}
            height={50}
            className="w-32 h-12"
          />
        </Link>
        <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center font-bold">
          <Link href="#token-price" className="mr-5 text-txt_brown">
            Token Price
          </Link>
          <Link href="#tokenomics" className="mr-5 text-[#CD6000]">
            Tokenomics
          </Link>
          <Link href="#who-is" className="mr-5 text-[#CD6000]">
            Who is
          </Link>
          <Link href="#future" className="mr-5 text-[#CD6000]">
            Future
          </Link>
          <Link href="#roadmap" className="mr-5 text-[#CD6000]">
            Roadmap
          </Link>
        </nav>
        <SideDrawer isDrawerOpen={isDrawerOpen} drawerToggle={drawerToggle} />
        <div className="flex gap-2">
          <ConnectWallet />
          <button
            onClick={drawerToggle}
            className=" lg:hidden py-1 px-2 w-fit rounded-lg border-2 border-main_border  bg-btn_green  "
          >
            <Image
              src="/Vectors/burger.svg"
              alt="wallet"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
