import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CryptoListScreen} from './CryptoListScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CryptoList" component={CryptoListScreen} />
    </Stack.Navigator>
  );
}
