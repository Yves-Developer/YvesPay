/** @format */
"use client";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [transactionId, setTransactionId] = useState(null);
  const [email, setEmail] = useState(null);
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    // Get the transactionId and email from the URL
    const params = new URLSearchParams(window.location.search);
    const transactionId = params.get("transactionId");
    const email = params.get("email");

    setTransactionId(transactionId);
    setEmail(email);

    // Here you can customize the download link based on the transactionId or email
    if (transactionId) {
      // Assume you have a function that generates a download link based on the transactionId
      setDownloadLink(`/download/${transactionId}`);
    }
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Thank you for your purchase, {email}!</p>
      <p>Your payment has been successfully processed.</p>

      {downloadLink && (
        <div>
          <p>Click below to download your file:</p>
          <a href={downloadLink} download>
            Download Your File
          </a>
        </div>
      )}
    </div>
  );
}
