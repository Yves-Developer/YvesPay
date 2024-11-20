/** @format */

// app/api/paddle/route.js
import { validateSignature } from "@/utils/paddle";

// Retrieve your Paddle webhook secret from environment variables
const paddleWebhookSecret = process.env.PADDLE_WEBHOOK_SECRET;

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

  // Extract necessary data (you can extract more as needed)
  const transactionId = data.data.id;
  const userEmail = data.data.email;

  // Build the redirect URL for the download page
  const downloadPageUrl = `/download?transactionId=${transactionId}&email=${encodeURIComponent(userEmail)}`;

  // Send the user to the download page
  // You may replace `window.location.href` or similar in client-side code if this logic is applied client-side
  // For server-side response in Next.js, we can send a redirect response:
  return Response.redirect(downloadPageUrl, 302);
}
