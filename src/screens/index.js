import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CryptoListScreen} from './crypto-list/CryptoListScreen';
import {LoginScreen} from './login/LoginScreen';
import {TickerChartScreen} from './ticker-chart/TickerChartScreen';
import {useUser} from '../workflow/auth/useUser';

const Stack = createNativeStackNavigator();

export function Router() {
  const {username, isLoading} = useUser();

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={username ? 'CryptoList' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CryptoList"
        component={CryptoListScreen}
        options={{title: 'Currencies'}}
      />
      <Stack.Screen name="TickerChart" component={TickerChartScreen} />
    </Stack.Navigator>
  );
}
