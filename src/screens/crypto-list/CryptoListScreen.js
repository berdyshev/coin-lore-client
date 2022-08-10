import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useTickerFiltering, useTickers} from '../../workflow/tickers';
import {FilterForm} from './components/FilterForm';
import {TickerItem} from './components/TickerItem';
import {Username} from './components/Username';

const styles = StyleSheet.create({
  header: {
    padding: 15,
    marginBottom: 15,
  },
});

export function CryptoListScreen() {
  const {data, isLoading} = useTickers();
  const {data: tickers, onPct24Change} = useTickerFiltering(data?.data);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tickers}
      ListHeaderComponent={
        <View style={styles.header}>
          <Username />
          <FilterForm onFilter={onPct24Change} />
        </View>
      }
      renderItem={({item}) => <TickerItem ticker={item} />}
      keyExtractor={item => item.id}
    />
  );
}
