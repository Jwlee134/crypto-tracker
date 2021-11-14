const baseUrl = "https://api.coinpaprika.com/v1";

export const fetchCoins = () =>
  fetch(`${baseUrl}/coins`).then((res) => res.json());

export const fetchCoinInfo = (id: string) =>
  fetch(`${baseUrl}/coins/${id}`).then((res) => res.json());

export const fetchCoinTickers = (id: string) =>
  fetch(`${baseUrl}/tickers/${id}`).then((res) => res.json());
