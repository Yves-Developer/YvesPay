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

  // useEffect to load customer data and trigger product data fetching if user has paid
  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(window.location.search);
      const custId = searchParams.get("id");

      if (!custId) {
        setError("No customer ID provided.");
        setIsLoading(false);
        return; // Stop execution here if no customer ID is provided
      }

      try {
        setIsLoading(true); // Start loading

        // Fetch customer data
        const response = await fetch(`/api/check?id=${custId}`);
        const data = await response.json();

        if (response.ok && data) {
          setCustomerData(data); // Set customer data

          if (data.hasPaid) {
            // Only fetch product data if the user has paid
            const productData = await fetchProductData();
            setProductData(productData); // Set product data
          } else {
            setError("Payment not completed or not found.");
          }
        } else {
          setError("Error fetching customer data. Please check the ID.");
        }
      } catch (error) {
        setError("Error fetching customer data. Please try again.");
      } finally {
        setIsLoading(false); // Stop loading after data is fetched
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs only once when the component mounts

  // Fetch product data if the user has paid
  const fetchProductData = async () => {
    try {
      const data = await getData({ timestamp: Date.now() }); // Force fresh fetch with timestamp
      const zipFileUrl = data.zipFile?.asset
        ? await client.getDocument(data.zipFile.asset._ref)
        : null;
      const link = zipFileUrl ? zipFileUrl.url : null;
      return { ...data, zipFileUrl: link }; // Return data with download link
    } catch (error) {
      setError("Error fetching product data.");
      return null;
    }
  };

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // If there is an error, display it
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
        <div className="relative p-6 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
          <div className="absolute top-[-50px] right-[-50px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
          <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>
          <h2 className="text-lg text-red-500 font-semibold">
            {error}
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

  // Render content once customer data and product data are available
  if (customerData.hasPaid && productData) {
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
  } 
};

export default Download;
