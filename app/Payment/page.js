/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { getData } from "../lib/FetchData";
import Loading from "@/components/ui/Loading";

const Payment = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkoutInitialized, setCheckoutInitialized] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [successUrl, setSuccessUrl] = useState(""); // Add state for successUrl

  // Fetch data on component mount using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(); // Fetch data (e.g., from Sanity)
        setData(result); // Set data once fetched
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // End loading once data is fetched
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Only run this once when component mounts

  // State to store product details and totals for Paddle
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    total: 0,
  });
  const [totals, setTotals] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
  });

  // Dynamically create the priceData once data is available
  const priceData = data
    ? [
        {
          priceId: data.priceId, // Use priceId from the fetched data
          quantity: 1,
        },
      ]
    : [];

  // Load Paddle script dynamically once the data is available
  useEffect(() => {
    if (data && !checkoutInitialized) {
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
      script.async = true;

      script.onload = () => {
        if (window.Paddle) {
          window.Paddle.Environment.set("sandbox"); // Use "live" for production
          window.Paddle.Initialize({
            token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN, // Replace with your actual token
            eventCallback: sendData, // Event callback function
          });

          openCheckout(priceData); // Open the checkout once the SDK is ready
          setCheckoutInitialized(true); // Set checkoutInitialized to true
        } else {
          console.error("Paddle SDK is not available.");
        }
      };

      script.onerror = () => {
        console.error("Failed to load Paddle SDK script.");
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script); // Cleanup the script on unmount
      };
    }
  }, [data, checkoutInitialized]); // Run only when data is available and checkout is not initialized

  // Event callback function to update product details and totals from Paddle
  const sendData = (event) => {
    if (!event.name) return;

    let items = event.data.items;
    let transaction = event.data;
    let totals = event.data.totals; // Paddle totals data

    if (items.length > 0) {
      const item = items[0]; // Assuming the first item is what you want
      setProduct({
        name: item.product.name,
        price: item.price,
        total: item.totals.total,
      });

      setTotals({
        subtotal: totals.subtotal,
        tax: totals.tax,
        total: totals.total,
      });

      const transactionId = transaction.transaction_id;
      setTransactionId(transactionId); // Save the transaction ID in state

      // Once the transactionId is set, create the successUrl
      const successUrl = `${window.location.origin}/payment-success?transactionId=${transactionId}`;
      setSuccessUrl(successUrl); // Set successUrl in state

      setLoading(false); // Stop loading once product details and totals are available
    }
  };
  console.log("transactionId: ", transactionId);
  console.log("successUrl: ", successUrl);
  // Function to open the Paddle checkout
  const openCheckout = (productData) => {
    if (window.Paddle && successUrl) {
      // Check if successUrl is available before passing to Paddle
      window.Paddle.Checkout.open({
        settings: {
          displayMode: "inline", // Use inline checkout
          frameTarget: "checkout-container", // Target div for iframe
          frameInitialHeight: "450", // Set initial height for iframe
          frameStyle:
            "width: 100%; min-width: 312px; background-color: transparent; border: none;", // Use dynamically created successUrl
        },
        items: productData, // Pass the items list
      });
    } else {
      console.error("Paddle SDK is not available or successUrl is missing.");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-[#f5f5fc] py-12">
      <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section - Order Summary */}
        <div className="space-y-6">
          <Card className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-4 space-y-4">
              {/* Product Name and Price */}
              <div className="flex justify-between">
                <span className="text-md text-muted-foreground">
                  <h3>{product.name}</h3>
                </span>
                <span className="text-sm font-semibold">
                  ${product.total.toFixed(2)}
                </span>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>${totals.subtotal.toFixed(2)}</span>
              </div>

              {/* Tax */}
              <div className="flex justify-between text-lg">
                <span>Tax</span>
                <span>${totals.tax.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div className="mt-4 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="text-primary">${totals.total.toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Section - Payment Options */}
        <div className="space-y-6">
          <Card className="p-0 w-full sm:p-6 bg-white shadow-md rounded-lg">
            <h2 className="mt-1 text-xl text-center font-bold">
              Payment Method
            </h2>

            {/* Paddle Checkout Integration */}
            <div className="mt-6 checkout-container w-full h-auto bg-white p-4 rounded-md"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Payment;
