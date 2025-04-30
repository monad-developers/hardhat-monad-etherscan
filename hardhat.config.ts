import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-viem";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const RPC_URL = process.env.RPC_URL || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const API_URL = process.env.API_URL || "";
const BROWSER_URL = process.env.BROWSER_URL || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
  },
  networks: {
    monadTestnet: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 10143,
    },
  },
  etherscan: {
    apiKey: {
      monadTestnet: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "monadTestnet",
        chainId: 10143,
        urls: {
          apiURL: API_URL,
          browserURL: BROWSER_URL,
        },
      },
    ],
  },
};

export default config;
