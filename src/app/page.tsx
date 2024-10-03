import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import FutureListing from "./components/FutureListing";
import { TokenIncrease } from "./components/TokenIncrease";
import { Tokenomics } from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <FutureListing />
      <TokenIncrease />
      <Tokenomics />
      <Roadmap />
      <Team />
    </>
  );
}
