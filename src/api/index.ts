import axios from 'axios';

export type ApiData = {
  Country: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
};

export const api = axios.create({
  baseURL: 'https://api.covid19api.com'
});

export async function useApiData(endpoint: string) {
  const { data } = await api.get<ApiData[]>(endpoint);
  return data;
}
