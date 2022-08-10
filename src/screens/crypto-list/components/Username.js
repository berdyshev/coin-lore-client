import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useUser} from '../../../workflow/auth/useUser';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export function Username() {
  const {username} = useUser();
  return (
    <View style={styles.row}>
      <Text style={styles.text}>Hi, {username}</Text>
    </View>
  );
}
