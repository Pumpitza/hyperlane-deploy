import { ChainMap, ModuleType, MultisigIsmConfig } from '@hyperlane-xyz/sdk';

export const multisigIsmConfig: ChainMap<MultisigIsmConfig> = {
  mantlet: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [
      '0x32a23fbb211db9aeec80195eb9e4f91e6636d288',
    ],
  }
};
