/** @format */

// Loading.jsx
import React from "react";
import { Card } from "@/components/ui/card";

const Loading = () => {
  return (
    <section className="bg-[#f5f5fc] py-12 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-center items-center h-32">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-blue-200 rounded-full"
            role="status"
          >
            <div className="w-full h-full border-t-4 border-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
