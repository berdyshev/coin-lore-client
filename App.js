import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';

import {QueryClient} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './src/screens';

const queryClient = new QueryClient({
  refetchOnReconnect: true,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
});
const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister}}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </PersistQueryClientProvider>
  );
}
