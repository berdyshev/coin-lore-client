const baseUrl = 'https://api.coinlore.net/api';

export async function getTickers({start = 0, limit = 50}) {
  return await fetch(`${baseUrl}/tickers?start=${start}&limit=${limit}`, {
    headers: {'Content-Type': 'application/json'},
  }).then(response => response.json());
}

export async function getTicker(tickerId) {
  return await fetch(`${baseUrl}/ticker?id=${tickerId}`, {
    headers: {'Content-Type': 'application/json'},
  })
    .then(response => response.json())
    .then(data => data?.[0]);
}
