const baseUrl = "https://api.coinpaprika.com/v1";

export const fetchCoins = () =>
  fetch(`${baseUrl}/coins`).then((res) => res.json());

export const fetchCoinInfo = (id: string) =>
  fetch(`${baseUrl}/coins/${id}`).then((res) => res.json());

export const fetchCoinTickers = (id: string) =>
  fetch(`${baseUrl}/tickers/${id}`).then((res) => res.json());

export const fetchCoinHistory = (id: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${baseUrl}/coins/${id}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
};
