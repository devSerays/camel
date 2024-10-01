import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <div>
      <h1 className="text-txt_brown text-4xl font-bold">Roadmap</h1>
      <p className="text-dark_brown font-bold">
        Our journey with Camel Coins is just beginning. Here's a look at what's
        coming next:
      </p>
      <Image
        alt="me"
        width={900}
        height={700}
        src="/Vectors/Roadmap.png"
        className="object-cover object-center w-[50vw] my-10 mx-auto
        "
      />
    </div>
  );
};

export default Roadmap;
