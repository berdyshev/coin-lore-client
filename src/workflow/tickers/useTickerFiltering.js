import {useCallback, useMemo, useState} from 'react';

export function useTickerFiltering(data) {
  const [pct24Ch, setPct24Ch] = useState();

  const filteredData = useMemo(
    () =>
      (data || []).filter(
        item => !pct24Ch || parseFloat(item.percent_change_24h) >= pct24Ch,
      ),
    [data, pct24Ch],
  );

  const onPct24Change = useCallback(
    value => {
      setPct24Ch(parseFloat(value));
    },
    [setPct24Ch],
  );

  return {data: filteredData, onPct24Change};
}
