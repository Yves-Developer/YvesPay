/** @format */
"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Loading from "@/components/ui/Loading";

const Download = () => {
  const [custId, setCustId] = useState(null);
  const [customerData, setCustomerData] = useState(null); // Store customer data fetched from API
  const [loadingData, setLoadingData] = useState(true); // To track data loading state
  const [error, setError] = useState(null); // To store any error during the fetch process

  // Use `useEffect` to run the client-side logic once the component is mounted
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramCustId = searchParams.get("id");
    setCustId(paramCustId); // Set the custId value

    // If there's a custId, fetch customer data from API
    if (paramCustId) {
      fetchCustomerData(paramCustId);
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // Fetch customer data using the provided custId
  const fetchCustomerData = async (custId) => {
    setLoadingData(true);
    try {
      const response = await fetch(`/api/check?id=${custId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error fetching customer data.");
      }

      setCustomerData(data); // Set the customer data fetched from the API
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      setLoadingData(false);
    }
  };

  // Show loading until custId and data are available
  if (loadingData) {
    return <Loading />;
  }

  // Handle error if customer data couldn't be fetched
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Check if customerData exists before accessing properties
  if (!customerData) {
    return <div>Error: No customer data available.</div>;
  }

  // Conditional rendering based on payment status
  if (customerData.hasPaid) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
        <div className="relative p-6 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
          {/* Decorative elements */}
          <div className="absolute top-[-50px] right-[-50px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>

          <div className="text-center">
            {/* Success Message */}
            <h2 className="text-4xl font-semibold text-green-500 mb-4 flex justify-center items-center">
              <CheckCircle className="mr-3 text-green-500" size={30} /> Payment
              Successful!
            </h2>
            <p className="mt-12 text-lg text-muted-foreground mb-6">
              Thank you for your purchase! Your ebook is ready to download.
              Click the button below to get your copy.
            </p>

            {/* Download Button */}
            <a
              href={customerData?.downloadLink || "/path/to/your/ebook.pdf"} // Use download link from customer data
              className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-md shadow-lg transform transition-all hover:scale-105"
            >
              Download Your Ebook
            </a>
          </div>

          {/* Decorative Accents */}
          <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-r from-white to-[#f3f3f3] opacity-50 rounded-t-xl"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
        <div className="relative p-6 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
          {/* Decorative elements */}
          <div className="absolute top-[-50px] right-[-50px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>
          <h2 className="text-lg text-red-500 font-semibold">
            Unfortunately, You have not paid yet.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Please complete your payment to access the download link.
          </p>
        </div>
      </div>
    );
  }
};

export default Download;
