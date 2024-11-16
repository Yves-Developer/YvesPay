/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react"; // Icons for payment options

const Payment = () => {
  // State to store product details and loading state for Paddle
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
  const [loading, setLoading] = useState(true);

  // Sample items list for Paddle (replace with actual data if needed)
  const monthItemsList = [
    { priceId: "pri_01jcv0ykrfafvz6mp6m5bhedw7", quantity: 1 },
  ];

  // Load Paddle script dynamically on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;

    script.onload = () => {
      if (window.Paddle) {
        window.Paddle.Environment.set("sandbox"); // Set to "live" for production
        window.Paddle.Initialize({
          token: "test_159cde5d551ea937bae3bb7c49a", // Replace with your actual token
          eventCallback: updateTable, // Event callback function to update the table
        });

        // Open the checkout with predefined items
        openCheckout(monthItemsList); // Using your monthItemsList
      }
    };

    script.onerror = () => {
      console.error("Failed to load Paddle SDK script.");
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Event callback function to update product details and totals from Paddle
  const updateTable = (event) => {
    if (!event.name) return;

    let items = event.data.items;
    let totals = event.data.totals; // Paddle totals data

    if (items.length > 0) {
      const item = items[0]; // Assuming the first item is what you want
      setProduct({
        name: item.product.name,
        price: item.price,
        total: item.totals.total,
      });

      // Set the totals (tax, subtotal, total)
      setTotals({
        subtotal: totals.subtotal,
        tax: totals.tax,
        total: totals.total,
      });

      setLoading(false); // Stop loading once product details and totals are available
    }
  };

  // Function to open the Paddle checkout
  const openCheckout = (items) => {
    if (window.Paddle) {
      window.Paddle.Checkout.open({
        settings: {
          displayMode: "inline", // Use inline checkout
          frameTarget: "checkout-container", // Target div to embed the checkout iframe
          frameInitialHeight: "450", // Set initial height for iframe
          frameStyle:
            "width: 100%; min-width: 312px; background-color: transparent; border: none;", // Styling
        },
        items: items, // Pass the items list here
      });
    }
  };

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
                <span>Tax (8%)</span>
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
          <Card className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold">Payment Method</h2>

            {/* Paddle Checkout Integration */}
            <div className="mt-6 checkout-container w-full h-auto bg-white p-4 rounded-md"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Payment;
