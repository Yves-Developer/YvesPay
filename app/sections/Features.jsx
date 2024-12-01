/** @format */

import React from "react";
import {
  Download,
  Code,
  Laptop,
  BookOpenCheck,
} from "lucide-react"; // import Lucide icons

const features = [
  {
    title: "Instant Access",
    icon: <Download />,
    description: "Get immediate access to the ebook and start mastering Next.js right away.",
  },
  {
    title: "Proven Techniques",
    icon: <Code />,
    description: "Learn powerful Next.js techniques to build fast, modern web apps.",
  },
  {
    title: "No Shipping Fees",
    icon: <Laptop />,
    description: "Enjoy digital delivery with no extra shipping costs, accessible on any device.",
  },
  {
    title: "Easy to Follow",
    icon: <BookOpenCheck />,
    description: "Clear, actionable steps that make mastering Next.js simple, even for beginners.",
  },
];



const Features = () => {
  return (
    <div className="mt-20 px-4 w-full pb-20">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {features.map((data) => (
          <div
            key={data.title}
            className="flex flex-col items-center justify-center w-[250px] p-6"
          >
            {/* Icon styling */}
            <div className="mb-6 p-4 bg-[#f5f5f5] rounded-sm hover:scale-110 transition-all duration-200 ease-in-out">
              <div className="text-5xl text-primary">{data.icon}</div>
            </div>
            {/* Title */}
            <h2 className="font-bold text-xl mb-2 text-center">{data.title}</h2>
            {/* Description */}
            <p className="text-center text-muted-foreground text-sm">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
