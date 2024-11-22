/** @format */

import { client } from "@/app/lib/sanity";
import { validateSignature } from "@/utils/paddle";
// Import your sanity client

const paddleWebhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

export async function POST(req) {
  const signature = req.headers.get("Paddle-Signature");
  const body = await req.text();

  // Validate the signature to ensure it's coming from Paddle
  const isValid = await validateSignature(signature, body, paddleWebhookSecret);

  if (!isValid) {
    return new Response(
      JSON.stringify({ message: "Invalid webhook signature!" }),
      { status: 401 }
    );
  }

  const parsedBody = JSON.parse(body);

  switch (parsedBody.event_type) {
    case "transaction.paid":
      // Handle transaction paid event and save data to Sanity
      await handleTransactionPaid(parsedBody);
      break;
    // Other event types can be handled here
    default:
      break;
  }

  return new Response(JSON.stringify({ message: "done" }), { status: 200 });
}

// Function to handle the "transaction.paid" event and save data to Sanity
async function handleTransactionPaid(data) {
  try {
    const transactionData = data.data;
    const balance = (
      Number(transactionData.details.adjusted_totals.grand_total) / 100
    ).toFixed(2);
    // Save transaction data to Sanity
    await client.create({
      _type: "transaction",
      transactionId: transactionData.id, // You can use customer email from here
      amount: Number(balance),
      currency: transactionData.items[0].currency_code,
      status: transactionData.status, // status = 'paid'
      productName: transactionData.items[0].price.name, // Store raw data if needed
    });

    console.log("Transaction data saved to Sanity.");
  } catch (error) {
    console.error("Error saving transaction data to Sanity:", error);
  }
}
