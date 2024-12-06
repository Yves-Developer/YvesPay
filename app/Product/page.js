/** @format */
/** @format */
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react"; // Icons for cart
import Wrapper from "@/components/ui/Wrapper";
import Features from "../sections/Features";
import Faq from "../sections/Faq";
import Pricing from "../sections/Pricing";
import Reviews from "../sections/Reviews";
import Link from "next/link";
import Header from "@/components/ui/Header";
import { getData } from "../lib/FetchData";
import { urlFor } from "../lib/sanity";
import Disclaimer from "@/components/ui/Disclaimer";

const Product = async () => {
  let lemonData;

  try {
    const response = await fetch("/api/lemonsqueezy");

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Attempt to parse the response as JSON
    lemonData = await response.json();

    // Check if the data is in the expected format
    if (!lemonData || !lemonData.attributes) {
      throw new Error("Invalid data format received");
    }
  } catch (error) {
    console.error("Failed to fetch Lemon Squeezy data:", error);
    lemonData = null; // Provide fallback data if the API request fails
  }

  const product = {
    reviews: 4.6,
    reviewCount: 800,
    isBestSeller: true,
    isOnSale: true,
  };

  const data = await getData();

  return (
    <section className="py-12">
      <div>
        <Wrapper>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto px-4 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 mb-10">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <img
                src={lemonData.attributes.large_thumb_url}
                alt={data.name}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-primary">
                {lemonData.attributes.name}
              </h1>
              <p
                className="text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{
                  __html: lemonData.attributes.description,
                }}
              ></p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-4">
                <div className="flex items-center text-yellow-400">
                  {[...Array(Math.floor(product.reviews))].map((_, index) => (
                    <span key={index} className="material-icons text-amber-500">
                      ★
                    </span>
                  ))}
                  {product.reviews % 1 > 0 && (
                    <span className="material-icons text-amber-500">★</span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Pricing */}
              <div className="mt-4 text-2xl font-semibold text-primary">
                {product.isOnSale ? (
                  <>
                    <span className="line-through text-gray-500">$20.00</span>
                    <span className="ml-2 text-red-600">
                      {lemonData.attributes.price_formatted}
                    </span>
                  </>
                ) : (
                  data.price
                )}
              </div>

              {/* Call to Action Button */}
              <Button
                className="bg-primary text-white w-full md:w-auto flex items-center justify-center gap-2 mt-6"
                asChild
              >
                <Link href={lemonData.attributes.buy_now_url}>
                  Buy Now <ShoppingCart size={18} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <Header title="Why Choose Our" keytext="&nbsp;Ebook?" />
          <Features />
          <Header title="What Our Users Are " keytext="Saying!" />
        </Wrapper>
        <Reviews />
        <Header
          title="Get Instant Access for Just "
          keytext={`${lemonData.attributes.price_formatted}`}
        />
        <Wrapper>
          <Pricing />
        </Wrapper>
        <Header title="Frequently Asked  " keytext="Questions." />
        <Wrapper>
          <Faq />
        </Wrapper>
      </div>
    </section>
  );
};

export const revalidate = 10;
export default Product;
