/** @format */

import { Button } from "@/components/ui/button";
// import { urlFor } from "../lib/FetchData";
import { getData } from "../lib/FetchData";
import { urlFor } from "../lib/sanity"; // Correct import for urlFor
import { CheckCheck, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ebookFeatures = [
  {
    title: "Proven Techniques to Boost Your Brainpower",
  },
  {
    title: "Expert Tips for Enhancing Focus, Memory, and Clarity",
  },
  {
    title: "Learn to Think Faster and Make Smarter Decisions",
  },
  {
    title: "Perfect for Anyone Looking to Improve Their Mental Edge",
  },
];


const Hero = async () => {
  const data = await getData(); // Fetch data using the getData function

  if (!data.name) {
    return <div>No product name available.</div>; // Show error message if 'name' is missing
  }

  // Safely generate the image URL (handle the case when there might be no image)
  const imageUrl =
    data.image && data.image[0]?.asset?._ref
      ? urlFor(data.image[0]).width(414).height(736).url()
      : "/lastbook.jpg"; // Use a fallback image if no image is available

  return (
    <div className="relative h-auto flex flex-col-reverse custom:flex-row custom:py-10 custom:space-x-8 space-y-8 custom:space-y-0">
      <div className="w-full h-auto custom:w-1/2 flex flex-col justify-center items-center custom:items-start p-10 space-y-6">
        <h1 className="text-4xl custom:text-5xl font-bold leading-tight tracking-wide">
          {data.name}
          <span className="text-primary"> {data.keyword}</span>{" "}
          {/* Dynamic content */}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
        Unlock the Secrets to Sharpening Your Mind for Success with Our Expert eBook
        </p>

        <ol className="space-y-4 ml-5">
          {ebookFeatures.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-2 text-lg font-semibold text-gray-600"
            >
              <span className="text-green-400">
                <CheckCheck />
              </span>
              {item.title}
            </li>
          ))}
        </ol>

        <Button className="mt-6 px-8 py-7 text-lg" asChild>
          <Link href="/Product">Get Instant Access & Boost Your Brainpower</Link>
        </Button>

        <div className="flex">
          <Star className="text-yellow-400 text-sm" />
          <Star className="text-yellow-400 text-sm" />
          <Star className="text-yellow-400 text-sm" />
          <p className="ml-2">
            Excellent <b>4.6</b> | 800+ Trusted Users
          </p>
        </div>
      </div>

      <div className="w-full custom:w-1/2 flex justify-center items-center relative">
        <div className="absolute z-10 bg-white p-6 rounded-lg shadow-xl transform translate-y-16 mx-auto left-0 right-0 md:mx-0 md:left-auto md:right-auto md:-translate-x-2/3 md:translate-y-[200px]">
          <h2 className="text-xl font-semibold">
          Sharpen Your Mind Today!
          </h2>
          <p className="mt-2 text-muted-foreground">
          Boost your brainpower with proven techniques.
          </p>
        </div>

        <div className="hidden least:block absolute z-10 bg-white p-6 rounded-lg shadow-md transform translate-y-[305px] translate-x-[10px] md:-translate-y-[160px] md:translate-x-[205px]">
          <ShieldCheck className="text-green-600 font-bold" />
        </div>

        {/* Image with hover effect */}
        <Image
          src={imageUrl} // Use dynamically generated image URL
          width={414}
          height={736}
          alt="Trading Ebook"
          className="transform transition duration-500 ease-in-out hover:scale-105 shadow-xl rounded-2xl"
        />
      </div>
    </div>
  );
};
export default Hero;
