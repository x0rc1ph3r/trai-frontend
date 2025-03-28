import { WalletError } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import React, { useCallback, useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { network } from '../utils/constants';

import '@solana/wallet-adapter-react-ui/styles.css';


export default function SolanaWallet({ children }: { children: React.ReactNode }) {

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);

  const wallets = useMemo(() => [], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
