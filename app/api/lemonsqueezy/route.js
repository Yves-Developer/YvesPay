/** @format */

import axios from "axios";

export async function GET(req) {
  try {
    // Set up headers with Lemon Squeezy API key
    const headers = {
      Accept: "application/vnd.api+json",
      Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
    };

    // Fetch product data from Lemon Squeezy
    const response = await axios.get(
      "https://api.lemonsqueezy.com/v1/products",
      { headers }
    );

    if (
      !response.data ||
      !response.data.data ||
      response.data.data.length === 0
    ) {
      return new Response(JSON.stringify({ error: "No products found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Extract the first product as a sample (or modify according to your needs)
    const product = response.data.data[0];

    // Return product data in the response
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "Error fetching Lemon Squeezy data:",
      error.message,
      error.response?.data || error
    );

    return new Response(
      JSON.stringify({
        error: "Failed to fetch product data. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
