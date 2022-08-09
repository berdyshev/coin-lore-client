import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useTicker} from '../../workflow/tickers/useTicker';

export function TickerChartScreen({route}) {
  const {tickerId} = route.params;
  const {data: ticker, isLoading} = useTicker(tickerId);
  const navigation = useNavigation();

  useEffect(() => {
    if (ticker) {
      navigation.setOptions({
        headerTitle: ticker.name,
      });
    }
  }, [ticker, navigation]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Price: {ticker.price_usd} USD</Text>
    </View>
  );
}
