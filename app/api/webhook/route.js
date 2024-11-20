/** @format */

import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/paddle"; // Utility to validate Paddle signature

export async function POST(req) {
  const signature = req.headers.get("Paddle-Signature");
  const body = await req.text();

  // Validate the Paddle webhook signature
  const isValid = await validateSignature(
    signature,
    body,
    process.env.PADDLE_WEBHOOK_SECRET
  );

  if (!isValid) {
    return NextResponse.json(
      { message: "Invalid webhook signature!" },
      { status: 401 }
    );
  }

  const parsedBody = JSON.parse(body);

  // Check if the event is a successful payment
  if (parsedBody.event_type === "transaction.paid") {
    const transactionId = parsedBody.data.id;
    const userEmail = parsedBody.data.email; // You can use the user's email to personalize the welcome page

    // You can store the transaction details or set up a session for the user
    // Example: store in your database or cache if needed
    // await saveTransactionDetails(transactionId, userEmail);

    // Now redirect the user to a "welcome" page or the page where they can download the file
    const welcomePageUrl = `/download?transactionId=${transactionId}&email=${encodeURIComponent(userEmail)}`;

    // Respond with the redirect URL
    return NextResponse.redirect(welcomePageUrl, 302);
  }

  // If it's any other event, just acknowledge the webhook
  return NextResponse.json({ message: "Event not handled" }, { status: 200 });
}
