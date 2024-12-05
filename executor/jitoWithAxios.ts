import { Connection, Keypair, PublicKey, SystemProgram, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { logger } from "../utils";
import { Currency, CurrencyAmount } from "@raydium-io/raydium-sdk";
import { COMMITMENT_LEVEL, JITO_FEE, RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT } from "../constants";
import base58 from "bs58";
import axios, { AxiosError } from "axios";


interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}

const solanaConnection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
})


// Private code




