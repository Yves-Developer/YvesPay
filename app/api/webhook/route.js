/** @format */

import { NextResponse } from "next/server";
import { buffer } from "micro";
import * as crypto from "crypto";

// Retrieve your Paddle webhook secret from environment variables
const paddleWebhookSecret =
  "pdl_ntfset_01jd4rznp76krkkdw97j6ewra4_u4bFrrcFE/HftI7TDUBD1AuqOMAS7KNX";

const verifyPaddleWebhook = (payload, signature) => {
  const hmac = crypto.createHmac("sha256", paddleWebhookSecret);
  hmac.update(payload);
  const computedSignature = hmac.digest("hex");
  return computedSignature === signature;
};

export async function POST(req) {
  try {
    const signature = req.headers.get("paddle-signature");
    const rawPayload = await buffer(req);
    const payload = rawPayload.toString(); // Convert buffer to string for verification

    // Verify the webhook signature
    if (!verifyPaddleWebhook(payload, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const data = JSON.parse(payload);

    // Log webhook ID and event type for debugging
    console.log("Received Webhook ID:", data.notification_id);
    console.log("Event Type:", data.event_type);

    // Handle the transaction.paid event
    if (data.event_type === "transaction.paid") {
      console.log("Transaction Paid:", data.data.id);
      // Additional logic for handling a paid transaction
    }

    return NextResponse.json(
      { message: "Webhook processed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
