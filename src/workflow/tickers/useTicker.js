import {useEffect} from 'react';
import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';

import {getTicker} from '../../services/CoinLoreService';

async function fetchTickerSlice(tickerId) {
  const data = await getTicker(tickerId);
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}`;
  return {...data, time};
}

function transformPages(data) {
  const {id, name, symbol} = data.pages[0];
  const prices = data.pages.map(({price_usd, time}) => ({
    price_usd: parseFloat(price_usd) || 0,
    time,
  }));
  return {id, name, symbol, prices};
}

export function useTicker(tickerId, {maxSlices = 5, interval = 30}) {
  const queryClient = useQueryClient();
  const query = useInfiniteQuery(
    ['ticker', tickerId],
    () => fetchTickerSlice(tickerId),
    {
      placeholderData: () => {
        const placeholder = queryClient
          .getQueryData(['tickers'], {exact: false})
          ?.data.find(d => d.id === tickerId);
        return {pages: [{...placeholder, time: '00:00'}]};
      },
      getNextPageParam: (_, pages) =>
        pages.length < maxSlices ? pages.length : undefined,
      select: transformPages,
      cacheTime: 5 * 60 * 1000,
    },
  );

  const {hasNextPage, fetchNextPage} = query;

  useEffect(() => {
    const int = setInterval(() => {
      if (hasNextPage) {
        fetchNextPage();
      }
    }, interval * 1000);
    return () => clearInterval(int);
  }, [hasNextPage, fetchNextPage, interval]);

  return query;
}
