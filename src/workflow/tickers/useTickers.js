import {useQuery} from '@tanstack/react-query';
import {getTickers} from '../../services/CoinLoreService';

export function useTickers(start = 0, limit = 50) {
  return useQuery(['tickers', {start, limit}], () =>
    getTickers({start, limit}),
  );
}
