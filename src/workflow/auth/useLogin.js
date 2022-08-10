import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback} from 'react';

export function useLogin() {
  return useCallback(
    username => AsyncStorage.setItem('username', username),
    [],
  );
}
