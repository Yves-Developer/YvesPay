/** @format */

// priceId.js

import getData from "../lib/FetchData"; // Default import from FetchData.js

const priceId = async () => {
  const data = await getData(); // Get the data from Sanity
  return data; // Return the fetched data
};

export default priceId; // Export the function as default
