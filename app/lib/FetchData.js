/** @format */

// Import the Sanity client and the image URL builder from your sanity.js file
import { client } from "./sanity";

// Fetch the data from Sanity (e.g., for the first product)
export async function getData() {
  const query = "*[_type == 'product'][0]"; // Querying the first product
  const data = await client.fetch(query); // Fetch the data
  return data;
}
