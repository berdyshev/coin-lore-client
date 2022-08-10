import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export function useUser() {
  const [state, setState] = useState({username: '', isLoading: true});

  useEffect(() => {
    AsyncStorage.getItem('username').then(username =>
      setState({username, isLoading: false}),
    );
  }, [setState]);

  return state;
}
