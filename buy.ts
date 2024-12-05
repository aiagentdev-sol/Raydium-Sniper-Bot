import {
  BigNumberish,
  Liquidity,
  LIQUIDITY_STATE_LAYOUT_V4,
  LiquidityPoolKeys,
  LiquidityPoolKeysV4,
  LiquidityStateV4,
  MARKET_STATE_LAYOUT_V3,
  MarketStateV3,
  Percent,
  Token,
  TokenAmount,
} from '@raydium-io/raydium-sdk'
import {
  AccountLayout,
  createAssociatedTokenAccountIdempotentInstruction,
  createAssociatedTokenAccountInstruction,
  createCloseAccountInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddress,
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token'
import {
  Keypair,
  Connection,
  PublicKey,
  KeyedAccountInfo,
  TransactionMessage,
  VersionedTransaction,
  TransactionInstruction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import { getTokenAccounts, RAYDIUM_LIQUIDITY_PROGRAM_ID_V4, OPENBOOK_PROGRAM_ID, createPoolKeys } from './liquidity'
import { deleteConsoleLines, logger } from './utils'
import { getMinimalMarketV3, MinimalMarketLayoutV3 } from './market'
import { MintLayout } from './types'
import bs58 from 'bs58'
import * as fs from 'fs'
import * as path from 'path'
import readline from 'readline'
import {
  CHECK_IF_MINT_IS_RENOUNCED,
  COMMITMENT_LEVEL,
  LOG_LEVEL,
  MAX_SELL_RETRIES,
  PRIVATE_KEY,
  QUOTE_AMOUNT,
  QUOTE_MINT,
  RPC_ENDPOINT,
  RPC_WEBSOCKET_ENDPOINT,
  SNIPE_LIST_REFRESH_INTERVAL,
  USE_SNIPE_LIST,
  MIN_POOL_SIZE,
  MAX_POOL_SIZE,
  ONE_TOKEN_AT_A_TIME,
  PRICE_CHECK_DURATION,
  PRICE_CHECK_INTERVAL,
  TAKE_PROFIT1,
  TAKE_PROFIT2,
  STOP_LOSS,
  SELL_SLIPPAGE,
  CHECK_IF_MINT_IS_MUTABLE,
  CHECK_IF_MINT_IS_BURNED,
  JITO_MODE,
  JITO_ALL,
  SELL_AT_TP1,
  JITO_FEE,
  CHECK_SOCIAL,
  WAIT_UNTIL_LP_IS_BURNT,
  LP_BURN_WAIT_TIME,
} from './constants'
import { clearMonitor, monitor } from './monitor'
import { BN } from 'bn.js'
import { checkBurn, checkMutable, checkSocial } from './tokenFilter'
import { bundle } from './executor/jito'
import { execute } from './executor/legacy'
import { jitoWithAxios } from './executor/jitoWithAxios'
import { PoolKeys } from './utils/getPoolKeys'

const solanaConnection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
})

// Private code

runListener()


