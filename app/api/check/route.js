/** @format */

import { client } from "@/app/lib/sanity";

export async function GET(req) {
  const url = new URL(req.url); // Get the full URL from the request
  const transactionId = url.searchParams.get("id"); // Get the `id` parameter from the URL

  try {
    // Query Sanity to check if the user has a completed transaction
    const query = `*[_type == "transaction" && transactionId == $transactionId && status == "paid"]`;
    const transaction = await client.fetch(query, { transactionId });

    if (transaction.length > 0) {
      return new Response(JSON.stringify({ hasPaid: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ hasPaid: false }), { status: 200 });
    }
  } catch (error) {
    console.error("Error checking payment status:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
