import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-red-500 h-full">
      <div className="bg-[url('/Vectors/footer.png')] bg-cover bg-no-repeat w-100 min-h-[120vh] h-full relative flex justify-center">
        <div className=" mt-[470px] text-center">
          <h1 className="text-white text-5xl font-bold">
            Follow Us on Social Media
          </h1>
          <p className="text-[#FFB566] font-bold w-[30vw] mx-auto text-lg">
            Stay updated with the latest news, developments, and announcements
            by following us on social media:
          </p>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 mt-10 gap-3">
            <div className="bg-[url('/Vectors/X.png')] hover:scale-90 duration-300 cursor-pointer w-80 h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/X_logo.png"
                className="object-cover object-center "
              />
              <div className="">CryptoCamelCoin</div>
            </div>
            <div className="bg-[url('/Vectors/Youtube.png')] hover:scale-90 duration-300 cursor-pointer w-80 h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/youtube_logo.png"
                className="object-cover object-center "
              />
              <div>CryptoCamelCoin</div>
            </div>
            <div className="bg-[url('/Vectors/facebook.png')] hover:scale-90 duration-300 cursor-pointer w-80 h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/facebook_logo.png"
                className="object-cover object-center "
              />
              <div>CryptoCamel</div>
            </div>
            <div className="bg-[url('/Vectors/skype.png')] hover:scale-90 duration-300 cursor-pointer w-80 h-20 bg-contain bg-no-repeat flex gap-x-2 justify-center items-center text-[#7C3B1D] font-bold">
              <Image
                alt="me"
                width={30}
                height={30}
                src="/Vectors/skype_logo.png"
                className="object-cover object-center "
              />
              <div>CryptoCamelCoin</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
