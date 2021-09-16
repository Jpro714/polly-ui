import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  uniswapFactoryV2: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  SUSHI: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
  GRT: '0x5fe2b58c013d7601147dcdd68c143a77499f5531',
  wBTC: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  LINK: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
  USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  AAVE: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
  SNX: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
  CRV: '0x172370d5cd63279efa6d502dab29171933a610af',
  MATIC: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  BAO: '0xc81278a52ad0e1485b7c3cdf79079220ddd68b7d',
  POLLY: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
  nDEFI: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
  nSTBL: '0x0078AdADFF70E22EDABb0150eE54824133EBe713', //test nSTBL
  RAI: '0x00e5646f60ac6fb446f621d146b6e1886f002905',
  DAI: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  FRAX: '0x104592a158490a9228070e0a8e5343b499e125d0',
  DEAD: '0x000000000000000000000000000000000000dead',
}

export const contractAddresses = {
  polly: {
    137: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
  },
  masterChef: {
    137: '0x850161bF73944a8359Bd995976a34Bb9fe30d398',
  },
  weth: {
    137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  },
  recipe: {
    137: '0x2E62EE5005c4069e82d37479f42D1a7Aa2C1B8ba',
  },
  recipev2: {
    137: '0x654ceF120F3064Fb5c2f5CA778b73d361e4bFd1d'
  },
  wethPrice: {
    137: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
  },
}
//
/*
Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export interface SupportedPool {
  pid: number
  lpAddresses: {
    137: string
  }
  tokenAddresses: {
    137: string
  }
  tokenDecimals: number
  name: string
  symbol: string
  tokenSymbol: string
  icon: string
  refUrl: string
  pairUrl: string
}

export const supportedPools: SupportedPool[] = [
  {
    pid: 17,
    lpAddresses: {
      137: '0xf27c14aedad4c1cfa7207f826c64ade3d5c741c3',
    },
    tokenAddresses: {
      137: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    },
    tokenDecimals: 18,
    name: 'POLLY-ETH',
    symbol: 'POLLY-ETH SUSHI LP',
    tokenSymbol: 'POLLY',
    icon: '/POLLY.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    pairUrl:
      'https://app.sushi.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x4C392822D4bE8494B798cEA17B43d48B2308109C',
  },
  {
    pid: 18,
    lpAddresses: {
      137: '0x095fc71521668d5bcc0fc3e3a9848e8911af21d9',
    },
    tokenAddresses: {
      137: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    },
    tokenDecimals: 18,
    name: 'POLLY-nDEFI',
    symbol: 'POLLY-nDEFI SUSHI LP',
    tokenSymbol: 'POLLY',
    icon: '/POLLY.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    pairUrl:
      'https://app.sushi.com/add/0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B/0x4C392822D4bE8494B798cEA17B43d48B2308109C',
  },
  {
    pid: 19,
    lpAddresses: {
      137: '0xf70b37a372befe8c274a84375c233a787d0d4dfa',
    },
    tokenAddresses: {
      137: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    },
    tokenDecimals: 18,
    name: 'POLLY-RAI',
    symbol: 'POLLY-RAI SUSHI LP',
    tokenSymbol: 'POLLY',
    icon: '/POLLY.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x4C392822D4bE8494B798cEA17B43d48B2308109C',
    pairUrl:
      'https://app.sushi.com/add/0x00e5646f60ac6fb446f621d146b6e1886f002905/0x4C392822D4bE8494B798cEA17B43d48B2308109C',
  },
  {
    pid: 14,
    lpAddresses: {
      137: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    },
    tokenAddresses: {
      137: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    },
    tokenDecimals: 18,
    name: 'nDEFI',
    symbol: 'nDEFI',
    tokenSymbol: 'nDEFI',
    icon: '/nDEFI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    pairUrl:
      'https://app.sushi.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
  },
  {
    pid: 16,
    lpAddresses: {
      137: '0x1534d7c91bd77eb447acb7fb92ea042b918f58bb',
    },
    tokenAddresses: {
      137: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    },
    tokenDecimals: 18,
    name: 'nDEFI-ETH',
    symbol: 'nDEFI-ETH SUSHI LP',
    tokenSymbol: 'nDEFI',
    icon: '/nDEFI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    pairUrl:
      'https://app.sushi.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
  },
  {
    pid: 15,
    lpAddresses: {
      137: '0xd0fa2eaa5d854f184394e93f7b75624084600685',
    },
    tokenAddresses: {
      137: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    },
    tokenDecimals: 18,
    name: 'nDEFI-RAI',
    symbol: 'nDEFI-RAI SUSHI LP',
    tokenSymbol: 'nDEFI',
    icon: '/nDEFI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    pairUrl:
      'https://app.sushi.com/add/0x00e5646f60ac6fb446f621d146b6e1886f002905/0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
  },
  {
    pid: 0,
    lpAddresses: {
      137: '0xdfa3ddd1807db8e4b4851d2e5421374e433a2983',
    },
    tokenAddresses: {
      137: '0xda537104d6a5edd53c6fbba9a898708e465260b6',
    },
    tokenDecimals: 18,
    name: 'YFI-ETH',
    symbol: 'YFI-ETH SUSHI LP',
    tokenSymbol: 'YFI',
    icon: '/YFI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xda537104d6a5edd53c6fbba9a898708e465260b6',
    pairUrl:
      'https://app.sushi.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0xDA537104D6A5edd53c6fBba9A898708E465260b6',
  },
  {
    pid: 1,
    lpAddresses: {
      137: '0xce5b8977f5021f1ef1232b1d4a0cfd03e8bcba9b',
    },
    tokenAddresses: {
      137: '0x4257EA7637c355F81616050CbB6a9b709fd72683',
    },
    tokenDecimals: 18,
    name: 'CVX-ETH',
    symbol: 'CVX-ETH SUSHI LP',
    tokenSymbol: 'CVX',
    icon: '/CVX.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x4257EA7637c355F81616050CbB6a9b709fd72683',
    pairUrl:
      'https://app.sushi.com/add/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/0x4257EA7637c355F81616050CbB6a9b709fd72683',
  },
  {
    pid: 2,
    lpAddresses: {
      137: '0x5e5c517ec55d6393d91d6a1379e5ae393a01a423',
    },
    tokenAddresses: {
      137: '0x3AE490db48d74B1bC626400135d4616377D0109f',
    },
    tokenDecimals: 18,
    name: 'ALPHA-ETH',
    symbol: 'ALPHA-ETH SUSHI LP',
    tokenSymbol: 'ALPHA',
    icon: '/ALPHA.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x3AE490db48d74B1bC626400135d4616377D0109f',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x3AE490db48d74B1bC626400135d4616377D0109f',
  },
  {
    pid: 3,
    lpAddresses: {
      137: '0xc56060af39152c614fa67e169c0dd1809a886e4f',
    },
    tokenAddresses: {
      137: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
    },
    tokenDecimals: 18,
    name: 'UNI-ETH',
    symbol: 'UNI-ETH SUSHI LP',
    tokenSymbol: 'UNI',
    icon: '/UNI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xb33eaad8d922b1083446dc23f610c2567fb5180f',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xb33eaad8d922b1083446dc23f610c2567fb5180f',
  },
  {
    pid: 4,
    lpAddresses: {
      137: '0xb5846453b67d0b4b4ce655930cf6e4129f4416d7',
    },
    tokenAddresses: {
      137: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
    },
    tokenDecimals: 18,
    name: 'SUSHI-ETH',
    symbol: 'SUSHI-ETH SUSHI LP',
    tokenSymbol: 'SUSHI',
    icon: '/SUSHI.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
  },
  {
    pid: 5,
    lpAddresses: {
      137: '0x396e655c309676caf0acf4607a868e0cded876db',
    },
    tokenAddresses: {
      137: '0x172370d5cd63279efa6d502dab29171933a610af',
    },
    tokenDecimals: 18,
    name: 'CRV-ETH',
    symbol: 'CRV-ETH SUSHI LP',
    tokenSymbol: 'CRV',
    icon: '/CRV.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x172370d5cd63279efa6d502dab29171933a610af',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x172370d5cd63279efa6d502dab29171933a610af',
  },
  {
    pid: 6,
    lpAddresses: {
      137: '0xc67136e235785727a0d3b5cfd08325327b81d373',
    },
    tokenAddresses: {
      137: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
    },
    tokenDecimals: 18,
    name: 'BAL-ETH',
    symbol: 'BAL-ETH SUSHI LP',
    tokenSymbol: 'BAL',
    icon: '/BAL.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
  },
  {
    pid: 7,
    lpAddresses: {
      137: '0x9021a31062a1d9c9c35d632ed54a9d923e46809f',
    },
    tokenAddresses: {
      137: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
    },
    tokenDecimals: 18,
    name: 'COMP-ETH',
    symbol: 'COMP-ETH SUSHI LP',
    tokenSymbol: 'COMP',
    icon: '/COMP.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
  },
  {
    pid: 8,
    lpAddresses: {
      137: '0xbf61e1d82bd440cb9da11d325c046f029a663890',
    },
    tokenAddresses: {
      137: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
    },
    tokenDecimals: 18,
    name: 'MKR-ETH',
    symbol: 'MKR-ETH SUSHI LP',
    tokenSymbol: 'MKR',
    icon: '/MKR.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x6f7C932e7684666C9fd1d44527765433e01fF61d',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x6f7C932e7684666C9fd1d44527765433e01fF61d',
  },
  {
    pid: 9,
    lpAddresses: {
      137: '0x14dbe3e6814fd532ef87e4be9b4192c018752823',
    },
    tokenAddresses: {
      137: '0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89',
    },
    tokenDecimals: 18,
    name: 'ALCX-ETH',
    symbol: 'ALCX-ETH SUSHI LP',
    tokenSymbol: 'ALCX',
    icon: '/ALCX.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89',
  },
  {
    pid: 10,
    lpAddresses: {
      137: '0x74d23f21f780ca26b47db16b0504f2e3832b9321',
    },
    tokenAddresses: {
      137: '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
    },
    tokenDecimals: 18,
    name: 'LINK-ETH',
    symbol: 'LINK-ETH SUSHI LP',
    tokenSymbol: 'LINK',
    icon: '/LINK.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39',
  },
  {
    pid: 11,
    lpAddresses: {
      137: '0x116ff0d1caa91a6b94276b3471f33dbeb52073e7',
    },
    tokenAddresses: {
      137: '0x50b728d8d964fd00c2d0aad81718b71311fef68a',
    },
    tokenDecimals: 18,
    name: `SNX-ETH`,
    symbol: 'SNX-ETH SUSHI LP',
    tokenSymbol: 'SNX',
    icon: '/SNX.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x50b728d8d964fd00c2d0aad81718b71311fef68a',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x50b728d8d964fd00c2d0aad81718b71311fef68a',
  },
  {
    pid: 12,
    lpAddresses: {
      137: '0x6be10c5c7178af8c49997d07d6a5444c15e58170',
    },
    tokenAddresses: {
      137: '0x3066818837c5e6ed6601bd5a91b0762877a6b731',
    },
    tokenDecimals: 18,
    name: `UMA-ETH`,
    symbol: 'UMA-ETH SUSHI LP',
    tokenSymbol: 'UMA',
    icon: '/UMA.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x3066818837c5e6ed6601bd5a91b0762877a6b731',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x3066818837c5e6ed6601bd5a91b0762877a6b731',
  },
  {
    pid: 13,
    lpAddresses: {
      137: '0x2481cbe674fb72cf8cd3031ff4747078d168c9b3',
    },
    tokenAddresses: {
      137: '0xc81278a52AD0e1485B7C3cDF79079220Ddd68b7D',
    },
    tokenDecimals: 18,
    name: `BAO-ETH`,
    symbol: 'BAO-ETH SUSHI LP',
    tokenSymbol: 'BAO',
    icon: '/BAO.png',
    refUrl:
      'https://app.sushi.com/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xc81278a52AD0e1485B7C3cDF79079220Ddd68b7D',
    pairUrl:
      'https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xc81278a52AD0e1485B7C3cDF79079220Ddd68b7D',
  },
]

export interface SupportedNest {
  nid: number
  nestAddresses: {
    137: string
  }
  inputToken: string
  outputToken: string
  symbol: string
  name: string
  icon: string
  pieColors: {
    [asset: string]: string
  }
}

export const supportedNests: SupportedNest[] = [
  {
    nid: 1,
    nestAddresses: {
      137: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    },
    inputToken: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    outputToken: '0xd3f07EA86DDf7BAebEfd49731D7Bbd207FedC53B',
    symbol: 'nDEFI',
    name: 'nDEFI',
    icon: '/ndefi.svg',
    pieColors: {
      SUSHI: '#DB5FA9',
      GRT: '#353993',
      LINK: '#2A5AD9',
      WETH: '#d05555',
      CVX: '#3d3939',
      CRV: '#F2E308',
      SNX: '#00D1FF',
      MKR: '#51AC9E',
      AAVE: '#9965A6',
      COMP: '#00D395',
      BAO: '#5D2B22',
      YFI: '#006AE3',
      ALCX: '#C59D7E',
      UNI: '#FF017A',
      WMATIC: '#8247E5',
      UMA: '#FF494A',
      ALPHA: '#27B2FE',
      BAL: '#b9b9b9',
    },
  },
  {
    nid: 2,
    nestAddresses: {
      137: '0x0078AdADFF70E22EDABb0150eE54824133EBe713',
    },
    inputToken: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    outputToken: '0x0078AdADFF70E22EDABb0150eE54824133EBe713',
    symbol: 'nSTBL',
    name: 'nSTBL',
    icon: '/nstbl.svg',
    pieColors: {
      FRAX: '#b9b9b9',
      DAI: '#fbde77',
      USDC: '#2775CA',
      USDT: '#12946c',
      RAI: '#42f9d1',
    },
  },
]
