/** @format */

import { NextResponse } from "next/server";
import { buffer } from "micro";
import * as crypto from "crypto";

// Retrieve your Paddle webhook secret from environment variables
const paddleWebhookSecret =
  "pdl_ntfset_01jd4rznp76krkkdw97j6ewra4_u4bFrrcFE/HftI7TDUBD1AuqOMAS7KNX";

const verifyPaddleWebhook = (payload, signature) => {
  // Create an HMAC SHA256 hash of the payload with your secret key
  const hmac = crypto.createHmac("sha256", paddleWebhookSecret);
  hmac.update(payload);
  const computedSignature = hmac.digest("hex");

  // Compare the computed signature with the signature sent by Paddle
  return computedSignature === signature;
};

export async function POST(req) {
  try {
    // Get the signature sent by Paddle in the header
    const signature = req.headers.get("paddle-signature");

    // Get the raw payload (body) of the request
    const rawPayload = await buffer(req);
    const payload = rawPayload.toString(); // Convert buffer to string for HMAC verification

    // Verify the webhook signature
    if (!verifyPaddleWebhook(payload, signature)) {
      // If the signature is invalid, return an error response
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Parse the JSON data sent by Paddle
    const data = JSON.parse(payload);

    // Example: Log the received Webhook ID for debugging purposes
    console.log("Received Webhook ID:", data.webhook_id);

    // Check for specific event types (like payment_received)
    if (data.alert_name === "payment_received") {
      console.log("Payment received for transaction:", data.transaction.id);

      // You can add additional processing logic here (e.g., send product, mark order as paid, etc.)

      // Respond with a success message
      return NextResponse.json(
        { message: "Webhook processed successfully" },
        { status: 200 }
      );
    } else {
      // If the event doesn't match, respond with a message
      return NextResponse.json(
        { message: "Event not relevant" },
        { status: 200 }
      );
    }
  } catch (error) {
    // If an error occurs, log the error and return a 500 response
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
