import { ConfigInterface } from "swr";

const globalFetcher = async (endpoint: string) => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const url = baseUrl + endpoint;
  const res = await fetch(url);
  return await res.json();
};

const swrConfig: ConfigInterface = {
  fetcher: globalFetcher,
};

export default swrConfig;
