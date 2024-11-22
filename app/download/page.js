/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Loading from "@/components/ui/Loading";
import { getData } from "../lib/FetchData";
import { client } from "../lib/sanity";

const Download = () => {
  const [customerData, setCustomerData] = useState(null); // Store customer data fetched from API
  const [productData, setProductData] = useState(null); // Store product data
  const [isLoading, setIsLoading] = useState(true); // Track loading state for data
  const [error, setError] = useState(null); // Store any error during the fetch process

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const custId = searchParams.get("id");

    if (custId) {
      fetchCustomerData(custId); // Fetch customer data on load
    } else {
      setError("No customer ID provided.");
      setIsLoading(false); // If no ID, stop loading and show error
    }
  }, []); // Empty array ensures this runs once when the component is mounted

  const fetchCustomerData = async (custId) => {
    setIsLoading(true); // Start loading when fetching data
    try {
      const response = await fetch(`/api/check?id=${custId}`);
      const data = await response.json();

      if (response.ok && data) {
        setCustomerData(data);
        // Fetch product data if user has paid
        if (data.hasPaid) {
          fetchProductData();
        }
      } else {
        setCustomerData({ hasPaid: false });
        setError("Payment status not found.");
      }
    } catch (error) {
      setError("Error fetching customer data.");
    } finally {
      setIsLoading(false); // Stop loading after fetching data
    }
  };

  const fetchProductData = async () => {
    try {
      const data = await getData();
      const zipFileUrl = data.zipFile?.asset
        ? await client.getDocument(data.zipFile.asset._ref)
        : null;
      const link = zipFileUrl ? zipFileUrl.url : null;
      setProductData({ ...data, zipFileUrl: link });
    } catch (error) {
      setError("Error fetching product data.");
    }
  };

  // Display a loading screen if data is still being fetched
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Once data is loaded, render the correct content based on payment status
  if (customerData && customerData.hasPaid && productData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
        <div className="relative p-6 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
          <div className="absolute top-[-50px] right-[-50px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>

          <div className="text-center">
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
              href={productData.zipFileUrl} // Use the resolved zipFile URL
              className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-md shadow-lg transform transition-all hover:scale-105"
              download={`${productData.name}-${productData.keyword}.zip`}
            >
              Download Your Ebook
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
        <div className="relative p-6 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
          <div className="absolute top-[-50px] right-[-50px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>
          <h2 className="text-lg text-red-500 font-semibold">
            Unfortunately, You have not paid yet.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Please complete your payment to access the download link.
          </p>
          <a
            href="/Product" // Link to purchase page
            className="inline-block px-4 py-3 bg-blue-500 text-white text-lg font-medium rounded-md shadow-lg transform transition-all hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    );
  }
};

export default Download;
