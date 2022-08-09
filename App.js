import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './src/screens';

const queryClient = new QueryClient({
  refetchOnReconnect: true,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
