import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <Team />
    </>
  );
}
