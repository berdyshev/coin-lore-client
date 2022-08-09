import React, {useCallback, useState} from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});

export function FilterForm({onFilter}) {
  const [value, setValue] = useState();

  const onSubmit = useCallback(() => {
    onFilter(value);
  }, [value, onFilter]);

  return (
    <View style={styles.view}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        keyboardType={
          Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'decimal-pad'
        }
        onSubmitEditing={onSubmit}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text>Filter</Text>
      </Pressable>
    </View>
  );
}
