import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CryptoListScreen} from './crypto-list/CryptoListScreen';
import {LoginScreen} from './login/LoginScreen';
import {TickerChartScreen} from './ticker-chart/TickerChartScreen';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator initialRouteName="CryptoList">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="CryptoList"
        component={CryptoListScreen}
        options={{title: 'Currencies'}}
      />
      <Stack.Screen name="TickerChart" component={TickerChartScreen} />
    </Stack.Navigator>
  );
}
