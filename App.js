import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {CryptoListScreen} from './src/screens/CryptoListScreen';

const queryClient = new QueryClient({
  refetchOnReconnect: true,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoListScreen />
    </QueryClientProvider>
  );
}
