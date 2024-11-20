/** @format */
"use client";
import Loading from "@/components/ui/Loading";
import React, { useState, useEffect } from "react";

const Download = () => {
  const [hasPaid, setHasPaid] = useState(false);
  const [loading, setLoading] = useState(true);
  const userEmail = "user@example.com"; // You can fetch this from session, cookie, etc.

  useEffect(() => {
    // Call the API to check the payment status
    fetch(`/api/check?email=${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        setHasPaid(data.hasPaid);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching payment status:", error);
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) {
    return <Loading />;
  }

  if (!hasPaid) {
    return (
      <p>You need to complete your payment before accessing the download.</p>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p>
          Your ebook is ready to download. Click the button below to get your
          copy.
        </p>
        <a
          href="/path/to/your/ebook.pdf"
          className="mt-4 inline-block px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-md"
        >
          Download Your Ebook
        </a>
      </div>
    </div>
  );
};

export default Download;
