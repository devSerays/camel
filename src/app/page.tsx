import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import { TokenIncrease } from "./components/TokenIncrease";
import { Tokenomics } from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <TokenIncrease />
      <Tokenomics />
      <Roadmap />
      <Team />
    </>
  );
}
