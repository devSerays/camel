"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import toast from "react-hot-toast";

export const TokenIncrease = () => {
  const [address, setAddress] = useState(
    "0xd0657EB6E73768738cF7982bE7564d53d6092f4c"
  );
  const handleCopy = () => {
    navigator.clipboard.writeText(address);

    toast.success("Copied to clipboard!", {
      duration: 4000,
      style: {
        background: "#e9a449",
        color: "#fff",
      },
    });
  };

  return (
    <div className="bg-[url('/Vectors/desert.png')] bg-cover bg-no-repeat w-100 pb-10 min-h-screen h-full relative flex justify-center">
      <Container>
        <h1 className="text-txt_brown text-2xl lg:text-4xl font-bold mt-12 ">
          Token Price Increase In:
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-12">
          <div className="flex flex-col-reverse">
            <div className="flex gap-5 justify-center ">
              {/* Days */}
              <div className="text-center">
                <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
                  <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
                    08
                  </span>
                </div>
                <p className="md:text-xl font-semibold mt-2 text-dark_brown">
                  Days
                </p>
              </div>
              {/* Hours */}
              <div className="text-center">
                <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
                  <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
                    40
                  </span>
                </div>
                <p className="md:text-xl font-semibold mt-2 text-dark_brown">
                  Hours
                </p>
              </div>
              {/* Minutes */}
              <div className="text-center">
                <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
                  <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
                    05
                  </span>
                </div>
                <p className="md:text-xl font-semibold mt-2 text-dark_brown">
                  Minutes
                </p>
              </div>
              {/* Seconds */}
              <div className="text-center">
                <div className="bg-[#CF5F1D] w-16 h-16 border-[3px] border-clock_border text-2xl md:text-4xl font-bold md:w-28 md:h-28 flex items-center justify-center rounded-2xl">
                  <span className="bg-white p-2 md:p-5 rounded-xl text-brown_34">
                    11
                  </span>
                </div>
                <p className="md:text-xl font-semibold mt-2 text-dark_brown">
                  Seconds
                </p>
              </div>
            </div>
            <div className="flex gap-5 my-9">
              <div className="flex">
                <Image
                  width={25}
                  height={25}
                  className="w-6 h-6 object-contain"
                  alt="camel-coins"
                  src="/icons/money.svg"
                />
                <div className="block text-[#6B3200] mb-1 text-xl w-32 font-bold text-brown_34">
                  USD raised: $0 / $
                </div>
              </div>
              <div className="bg-white w-56 md:w-80 h-6 rounded-full">
                <div className="bg-[#6B3200] w-28 md:w-36 h-6 rounded-full  text-white text-end pr-10 text-xs py-1">
                  34%
                </div>
              </div>
            </div>
            <Image
              width={400}
              height={400}
              className="w-[250px] md:w-[500px] mx-auto mt-auto "
              alt="camel-coins"
              src="/Vectors/camel-coins.png"
            />
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-7">
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1  text-sm md:text-lg font-bold text-brown_34"
                >
                  Selet currency to spend:
                </label>
                <div className="relative  ">
                  <select
                    value="1"
                    className="appearance-none text-brown_34 w-full text-xl font-bold px-4 py-3 md:py-5 pl-14 bg-[#FBDBA4] border-[3px] border-[#964512] rounded-xl shadow-sm outline-none cursor-pointer"
                  >
                    <option value="1">USDT </option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/USDT.svg"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.32593 0.247437H10.619V1.68816L5.67938 6.01035L0.739746 1.68816V0.247437H4.03284H7.32593Z"
                        fill="#341800"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1  text-sm md:text-lg font-bold text-brown_34"
                >
                  Selet payment method:
                </label>
                <div className="relative  ">
                  <select
                    value="1"
                    className="appearance-none text-brown_34 w-full text-xl font-bold px-4 py-3 md:py-5 pl-14 bg-[#FBDBA4] border-[3px] border-[#964512] rounded-xl shadow-sm outline-none cursor-pointer"
                  >
                    <option value="1">ETH</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/ETH.svg"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.32593 0.247437H10.619V1.68816L5.67938 6.01035L0.739746 1.68816V0.247437H4.03284H7.32593Z"
                        fill="#341800"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-7 mt-3">
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1  text-sm md:text-lg font-bold text-brown_34"
                >
                  USDT you pay:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/icons/USDT.svg"
                    />
                  </div>
                  <input
                    type="text"
                    id="zip-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-white text-gray-400 outline-none text-xl rounded-xl  block w-full ps-16 py-3 md:py-5"
                    placeholder="0"
                    pattern="^\d{5}(-\d{4})?$"
                    required
                    readOnly
                  />
                  <div className="text-[#627D2B] font-bold absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 text-sm pointer-events-none">
                    Max
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="zip-input"
                  className="block mb-1  text-sm md:text-lg font-bold text-brown_34"
                >
                  $CAMEL you get:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <Image
                      width={20}
                      height={20}
                      className="w-10"
                      alt="plus"
                      src="/Vectors/Camel_Coin.png"
                    />
                  </div>
                  <input
                    type="text"
                    id="zip-input"
                    aria-describedby="helper-text-explanation"
                    className="bg-white text-gray-400 outline-none text-xl rounded-xl  block w-full ps-16 py-3 md:py-5"
                    placeholder="0"
                    pattern="^\d{5}(-\d{4})?$"
                    required
                    readOnly
                  />
                  <div className="text-[#627D2B] font-bold absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 text-sm pointer-events-none">
                    Max
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[#6F3400] my-3 font-bold md:text-xl">
              Buy $CAMEL tokens now:
            </div>
            <button className="  gap-x-1 p-3 text-center  md:text-xl font-bold rounded-lg border-2 border-main_border  bg-btn_green text-white w-1/2 ">
              Buy Now
            </button>
            <div className="text-[#6F3400] my-3 font-bold md:text-xl">
              ...or send desired amount of crypto to this address:
            </div>
            <div className="flex items-center bg-[#BB6410]/30 text-white rounded-xl px-2 w-full max-w-lg">
              {/* Address Input */}
              <input
                type="text"
                value={address}
                className="bg-transparent text-brown_34 px-4 py-2 w-full outline-none truncate"
              />
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="rounded-full flex items-center justify-center ml-2"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 40 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.1135 3.16541H18.9081C16.0969 3.16539 13.8701 3.16536 12.1274 3.38312C10.3339 3.60722 8.8822 4.07939 7.73739 5.14336C6.59259 6.20732 6.08452 7.55645 5.84339 9.22331C5.60908 10.8429 5.60912 12.9124 5.60913 15.5251V24.1358C5.60913 26.3603 7.07507 28.2666 9.15812 29.0658C9.05091 27.7244 9.05099 25.8421 9.05108 24.2761V17.0272V16.8867C9.05097 14.9962 9.05086 13.3674 9.23956 12.063C9.44179 10.665 9.89785 9.32502 11.0673 8.23813C12.2368 7.15122 13.6787 6.72738 15.1828 6.53944C16.5864 6.36407 18.3391 6.36416 20.3732 6.36426L20.5242 6.36428H25.1135L25.2646 6.36426C27.2987 6.36416 29.0475 6.36407 30.4511 6.53944C29.6115 4.56343 27.5382 3.16541 25.1135 3.16541Z"
                    fill="#341800"
                  />
                  <path
                    d="M11.3457 17.0269C11.3457 13.0056 11.3457 10.995 12.6899 9.74582C14.034 8.49658 16.1974 8.49658 20.5242 8.49658H25.1135C29.4403 8.49658 31.6037 8.49658 32.9479 9.74582C34.292 10.995 34.292 13.0057 34.292 17.0269V24.1355C34.292 28.1567 34.292 30.1674 32.9479 31.4166C31.6037 32.6658 29.4403 32.6658 25.1135 32.6658H20.5242C16.1974 32.6658 14.034 32.6658 12.6899 31.4166C11.3457 30.1674 11.3457 28.1567 11.3457 24.1355V17.0269Z"
                    fill="#341800"
                  />
                </svg>
              </button>
            </div>
            <div className="text-[#6F3400] my-3 underline underline-offset-2 font-bold text-sm md:text-xl">
              Not enough crypto? Buy with card now!
            </div>
            <p className="text-[#444444] text-sm">
              I have done my own research and understand that investing in
              cryptocurrency involves risk and may result in loss of investment.
              By participating in the presale, I fully agree to the terms of the
              presale.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
