import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  line: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontSize: 18,
  },
  pct: {
    fontSize: 14,
    marginHorizontal: 2,
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 2,
  },
});

export function TickerItem({ticker}) {
  return (
    <Pressable onPress={() => console.log(ticker)} style={styles.line}>
      <Text style={styles.name}>{ticker.name}</Text>
      <Text style={styles.pct}>{ticker.percent_change_24h}%</Text>
      <Text style={styles.icon}>{'>'}</Text>
    </Pressable>
  );
}