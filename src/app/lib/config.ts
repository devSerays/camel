"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import { sepolia, bscTestnet, blastSepolia } from "wagmi/chains";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "fc7a1e3470ae8000ded8d8cd0e286e4b";

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});
