/** @format */

import { NextResponse } from "next/server";
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
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    // Extract the first product as a sample
    const product = response.data.data[0];

    // Return product data in the response
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error(
      "Error fetching Lemon Squeezy data:",
      error.message,
      error.response?.data || error
    );

    return NextResponse.json(
      { error: "Failed to fetch product data. Please try again later." },
      { status: 500 }
    );
  }
}
