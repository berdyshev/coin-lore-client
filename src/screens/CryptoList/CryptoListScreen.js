import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTickerFiltering, useTickers} from '../../workflow/tickers';
import {FilterForm} from './components/FilterForm';

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
      ListHeaderComponent={<FilterForm onFilter={onPct24Change} />}
      renderItem={({item}) => (
        <Text>
          {item.name} ({item.percent_change_24h}%)
        </Text>
      )}
      keyExtractor={item => item.id}
    />
  );
}
