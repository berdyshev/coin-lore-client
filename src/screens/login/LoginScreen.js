import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    marginVertical: 10,
  },

  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export function LoginScreen() {
  const [username, setName] = useState();
  const navigate = useNavigation();

  const onSubmit = useCallback(() => {
    if (username) {
      navigate.navigate('CryptoList', {username});
    }
  }, [username, navigate]);

  return (
    <View>
      <Text>Username</Text>
      <TextInput
        value={username}
        onChangeText={setName}
        style={styles.textInput}
        textContentType="username"
        autoCapitalize={false}
        onSubmitEditing={onSubmit}
      />
      <Pressable disabled={!username} onPress={onSubmit} style={styles.button}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}
