const baseUrl = 'https://api.coinlore.net/api';

export async function getTickers({start = 0, limit = 50}) {
  const response = await fetch(
    `${baseUrl}/tickers?start=${start}&limit=${limit}`,
    {
      headers: {'Content-Type': 'application/json'},
    },
  );
  return response.json();
}

export async function getTicker(tickerId) {
  const response = await fetch(`${baseUrl}/ticker?id=${tickerId}`, {
    headers: {'Content-Type': 'application/json'},
  });
  const data = response.json();
  return data?.[0];
}
