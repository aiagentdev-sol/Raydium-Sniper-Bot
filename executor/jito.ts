
// Jito Bundling part

import { Connection, Keypair, PublicKey, VersionedTransaction } from "@solana/web3.js"
import { BLOCKENGINE_URL, JITO_AUTH_KEYPAIR, JITO_FEE, RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT, USE_SNIPE_LIST } from "../constants"
import { logger } from "../utils"
import base58 from "bs58"
import { SearcherClient, searcherClient } from "jito-ts/dist/sdk/block-engine/searcher"
import { Bundle } from "jito-ts/dist/sdk/block-engine/types"
import { isError } from "jito-ts/dist/sdk/block-engine/utils"

const solanaConnection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
})

export async function bundle(txs: VersionedTransaction[], keypair: Keypair) {
 // Private code
}


export async function bull_dozer(txs: VersionedTransaction[], keypair: Keypair) {
  // Private code
}























