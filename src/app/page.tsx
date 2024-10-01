import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import { TokenIncrease } from "./components/TokenIncrease";

export default function Home() {
  return (
    <>
      <Hero />
      <TokenIncrease />
      <Roadmap />
      <Team />
    </>
  );
}
