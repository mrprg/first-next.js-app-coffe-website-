import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});
const fetchCoffeeStoresUrls = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };
  const response = await fetch(
    fetchCoffeeStoresUrls(
      "43.653833032607096%2C-79.37896808855945",
      "coffee",
      6
    ),
    options
  );
  const data = await response.json();
  return data.results;
};
