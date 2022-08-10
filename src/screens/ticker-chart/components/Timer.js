import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

export const Timer = ({time}) => {
  const [timeLeft, setTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTime(timeLeft - 1);
      } else {
        clearTimeout(timer);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, time, setTime]);

  return <Text>{timeLeft} sec</Text>;
};
