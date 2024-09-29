import Image from "next/image";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
}
