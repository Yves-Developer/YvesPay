/** @format */

// Retrieve your Paddle webhook secret from environment variables
const paddleWebhookSecret = process.env.PADDLE_WEBHOOK_SECRET;
// app/api/paddle/route.js
import { validateSignature } from "@/utils/paddle";

export async function POST(req) {
  const signature = req.headers.get("Paddle-Signature");
  const body = await req.text();

  // Validate the signature
  const isValid = await validateSignature(signature, body, paddleWebhookSecret);

  if (!isValid) {
    return new Response(
      JSON.stringify({ message: "Invalid webhook signature!" }),
      { status: 401 }
    );
  }

  // Parse the body
  const parsedBody = JSON.parse(body);

  // Handle different events
  switch (parsedBody.event_type) {
    case "transaction.paid":
      // Handle transaction paid event
      await handleTransactionPaid(parsedBody);
      break;
    case "transaction.created":
      // Handle transaction created event
      break;
    case "subscription.created":
      // Handle subscription created event
      break;
    case "subscription.updated":
      // Handle subscription updated event
      break;
    case "subscription.cancelled":
      // Handle subscription cancelled event
      break;
    default:
      break;
  }

  return new Response(JSON.stringify({ message: "done" }), { status: 200 });
}

// Function to handle transaction.paid event
async function handleTransactionPaid(data) {
  console.log("Transaction paid:", data);
  // Process payment (e.g., send the product or update the database)
  // Example: Update customer status, deliver product, etc.
}
