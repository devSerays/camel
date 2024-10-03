import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import FutureListing from "./components/FutureListing";

export default function Home() {
  return (
    <>
      <Hero />
      <FutureListing />
      <Roadmap />
      <Team />
    </>
  );
}
