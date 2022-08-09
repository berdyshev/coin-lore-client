import {useQuery, useQueryClient} from '@tanstack/react-query';

import {getTicker} from '../../services/CoinLoreService';

export function useTicker(tickerId) {
  const queryClient = useQueryClient();
  return useQuery(['ticker', tickerId], () => getTicker(tickerId), {
    placeholderData: () => {
      const placeholder = queryClient
        .getQueryData(['tickers'], {exact: false})
        ?.data.find(d => d.id === tickerId);
      return placeholder;
    },
  });
}
