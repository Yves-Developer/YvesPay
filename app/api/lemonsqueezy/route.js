/** @format */

import { NextResponse } from "next/server";
import axios from "axios";

// Fetch Lemon Squeezy data
export async function GET() {
  try {
    const apiKey = process.env.LEMON_SQUEEZY_API_KEY; // Use the API key from your .env file

    // Configure request headers
    const headers = {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${apiKey}`,
    };

    // Make a request to Lemon Squeezy API
    const response = await axios.get(
      "https://api.lemonsqueezy.com/v1/products",
      {
        headers,
      }
    );

    // Send back the response data
    return NextResponse.json(response.data.data[0]);
  } catch (error) {
    console.error("Error fetching Lemon Squeezy data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Lemon Squeezy." },
      { status: 500 }
    );
  }
}
