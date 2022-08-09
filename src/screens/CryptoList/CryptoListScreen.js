import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useTickers} from '../../workflow/tickers/useTickers';

export function CryptoListScreen() {
  const {data, isLoading} = useTickers();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data.data}
      renderItem={({item}) => <Text>{item.name}</Text>}
      keyExtractor={item => item.id}
    />
  );
}
