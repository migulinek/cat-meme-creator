const API_KEY: string =
  "live_dg2gz2gqt9m3h8ZPMjCYQPT2rHfeibiK6wEG8BVAhQMcDZ3LHDgAcYs4e60rTEao";
const ENDPOINT_URL: string = "https://api.thecatapi.com/v1/images/search";

export const getCatUrl = async (): Promise<string> => {
  const getSomeCat = await fetch(`${ENDPOINT_URL}?limit=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });
  const someCat = await getSomeCat.json();
  return someCat[0].url;
};
