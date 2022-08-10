import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useTicker} from '../../workflow/tickers/useTicker';
import {Chart} from './components/Chart';
import {Timer} from './components/Timer';

const MAX_TICKS = 5;
const TICK_SEC = 30;

const styles = StyleSheet.create({
  timerRow: {
    padding: 10,
    maringVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export function TickerChartScreen({route}) {
  const {tickerId} = route.params;
  const {
    data: ticker,
    isFetching,
    hasNextPage,
  } = useTicker(tickerId, {maxSlices: MAX_TICKS, interval: TICK_SEC});
  const navigation = useNavigation();

  useEffect(() => {
    if (ticker) {
      navigation.setOptions({
        headerTitle: ticker.name,
      });
    }
  }, [ticker, navigation]);

  return (
    <View>
      <View style={styles.timerRow}>
        <Text>Time to next update: </Text>
        <Timer
          key={ticker?.prices.length}
          time={isFetching || hasNextPage ? TICK_SEC : 0}
        />
      </View>
      {ticker?.prices.length ? <Chart data={ticker.prices} /> : null}
    </View>
  );
}
