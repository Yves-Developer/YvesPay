/** @format */
"use client";
import React, { useEffect, useState } from "react";
// Import the check icon from lucide-react
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

const Download = () => {
  const router = useRouter();
  const [custId, setCustId] = useState(null);

  // Only access router.query when the router is ready (client-side)
  useEffect(() => {
    if (router.isReady) {
      const { custId } = router.query;
      setCustId(custId); // Set the custId after the router is ready
    }
  }, [router.isReady, router.query]);

  // If custId is not available (either during SSR or waiting for client-side data)
  if (!custId) {
    return <Loading />;
  }

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
            Thank you for your purchase! Your ebook is ready to download. Click
            the button below to get your copy. {custId}
          </p>

          {/* Download Button */}
          <a
            href="/path/to/your/ebook.pdf" // Replace with your ebook's URL
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
};

export default Download;
