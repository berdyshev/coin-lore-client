import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient, onlineManager} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';

import {Router} from './src/screens';

const queryClient = new QueryClient({
  refetchOnReconnect: true,
  refetchOnMount: true,
  refetchOnWindowFocus: false,
});
const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

NetInfo.addEventListener(state => {
  if (!state.isConnected) {
    Alert.alert('You are offline');
  }
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
