import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CryptoListScreen} from './CryptoList/CryptoListScreen';
import {LoginScreen} from './login/LoginScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CryptoList" component={CryptoListScreen} />
    </Stack.Navigator>
  );
}
