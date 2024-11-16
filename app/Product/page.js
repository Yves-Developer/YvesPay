/** @format */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react"; // Icons for cart
import Wrapper from "@/components/ui/Wrapper";
import Features from "../sections/Features";
import Link from "next/link";
import Header from "@/components/ui/Header";

const Product = () => {
  const product = {
    title: "2024 Trading Chart Patterns Ebook",
    description:
      "Unlock proven strategies and learn to read the markets like a pro with this comprehensive trading ebook. Perfect for beginners and experienced traders.",
    price: "$15.00",
    image: "https://via.placeholder.com/400x400?text=Product+Image", // Replace with actual product image
    reviews: 4.6,
    reviewCount: 800,
    isBestSeller: true, // Best seller badge if needed
    isOnSale: true, // Sale flag
  };

  return (
    <Wrapper>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 mb-10">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <img
                src="/lastbook.jpg"
                alt={product.title}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-primary">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

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
                    <span className="line-through text-gray-500">20.00$</span>
                    <span className="ml-2 text-red-600">{product.price}</span>
                  </>
                ) : (
                  product.price
                )}
              </div>

              {/* Call to Action Button */}
              <Button
                className="bg-primary text-white w-full md:w-auto flex items-center justify-center gap-2 mt-6"
                asChild
              >
                <Link href="/Payment">
                  Buy Now <ShoppingCart size={18} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <Header title="Why Choose Our" keytext="&nbsp;Ebook?" />
          <Features />
        </div>
      </section>
    </Wrapper>
  );
};

export default Product;
