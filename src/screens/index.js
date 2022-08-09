import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CryptoListScreen} from './crypto-list/CryptoListScreen';
import {LoginScreen} from './login/LoginScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator initialRouteName="CryptoList">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CryptoList" component={CryptoListScreen} />
    </Stack.Navigator>
  );
}
