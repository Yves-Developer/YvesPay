/** @format */

import { validateSignature } from "@/utils/paddle";
import { client } from "@/lib/sanity"; // Import your sanity client

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

    // Save transaction data to Sanity
    await client.create({
      _type: "transaction",
      transactionId: transactionData.id,
      userEmail: transactionData.customer_id, // You can use customer email from here
      amount: transactionData.details.adjusted_totals.grand_total,
      currency: transactionData.details.currency_code,
      status: transactionData.status, // status = 'paid'
      productName: transactionData.items[0].price.name,
      transactionDetails: JSON.stringify(transactionData), // Store raw data if needed
    });

    console.log("Transaction data saved to Sanity.");
  } catch (error) {
    console.error("Error saving transaction data to Sanity:", error);
  }
}
