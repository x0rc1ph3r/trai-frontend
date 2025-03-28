import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Connection } from "@solana/web3.js";

export const network = WalletAdapterNetwork.Mainnet;
export const connection = new Connection("https://mainnet.helius-rpc.com/?api-key=6f17ef70-139f-463a-bfaa-85a120eee8d3", "confirmed");
export const host = 'https://liger.life';