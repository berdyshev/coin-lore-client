import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {useLogin} from '../../workflow/auth/useLogin';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  form: {
    width: '100%',
    paddingHorizontal: 32,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#888',
  },
  buttonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#888',
  },
});

export function LoginScreen() {
  const [username, setName] = useState();
  const navigate = useNavigation();
  const signIn = useLogin();

  const onSubmit = useCallback(async () => {
    if (username) {
      try {
        await signIn(username);
        navigate.navigate('CryptoList');
      } catch (e) {
        console.log(e.message);
      }
    }
  }, [username, signIn, navigate]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.form}>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChangeText={setName}
          style={styles.textInput}
          textContentType="username"
          autoCapitalize={false}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            disabled={!username}
            onPress={onSubmit}
            style={styles.button}>
            <Text>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
