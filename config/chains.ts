import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  mantlet: {
    name: 'mantlet',
    protocol: ProtocolType.Ethereum,
    chainId: 5001,
    domainId: 5001,
    displayName: 'Mantle Testnet',
    displayNameShort: 'Mantle Testnet',
    nativeToken: {
      name: 'MNT',
      symbol: 'MNT',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: 'https://rpc.testnet.mantle.xyz',
      },
    ],
    blockExplorers: [
      {
        name: 'Mantle explorer',
        url: 'https://explorer.testnet.mantle.xyz',
        apiUrl: 'https://explorer.testnet.mantle.xyz/api',
      },
    ],
    blocks: { confirmations: 1, reorgPeriod: 0, estimateBlockTime: 0.4 },
    isTestnet: true
  }
};
