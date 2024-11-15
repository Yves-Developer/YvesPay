/** @format */

import React from "react";
import { Download, BarChart, Truck, Book } from "lucide-react"; // import Lucide icons

const features = [
  {
    title: "Instant Access",
    icon: <Download />,
    description: "Start learning right away with immediate digital delivery.",
  },
  {
    title: "Proven Techniques",
    icon: <BarChart />,
    description: "Master chart patterns with strategies that work.",
  },
  {
    title: "No Shipping Fees",
    icon: <Truck />,
    description: "Get your ebook instantly with no extra costs.",
  },
  {
    title: "Easy to Follow",
    icon: <Book />,
    description: "Actionable, beginner-friendly steps to enhance your trading.",
  },
];

const Features = () => {
  return (
    <div className="mt-20 flex flex-wrap justify-center w-full px-4">
      {features.map((data) => {
        return (
          <div
            key={data.title}
            className="flex flex-col items-center justify-center w-[250px] p-6 m-6"
          >
            {/* Icon styling */}
            <div className="mb-6 p-4 bg-[#f3f3f3] rounded-sm  hover:scale-110 transition-all duration-200 ease-in-out">
              <div className="text-5xl text-primary">{data.icon}</div>
            </div>
            {/* Title */}
            <h2 className="font-bold text-xl mb-2">{data.title}</h2>
            {/* Description */}
            <p className="text-center text-muted-foreground text-sm">
              {data.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
