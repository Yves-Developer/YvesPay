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
const api_key =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJlZDBjYTAxZWM0NTBiMDM0OTE3MmJiMTBiMjI1OWJhMzE2ZWJiODNmYmI1MDRjMmY1YjIxN2FhYjdlNTIyZThjODdmOTM0OGVlMmJkYTk3MSIsImlhdCI6MTczMzQ4ODQ0My4yMjI0NzQsIm5iZiI6MTczMzQ4ODQ0My4yMjI0NzcsImV4cCI6MjA0OTAyMTI0My4xNzQyNjQsInN1YiI6IjM4NTIzMzciLCJzY29wZXMiOltdfQ.fV45xhawpM7-DQwqrsHdIBN9SJAZJI_AWvapMxdePdUfuOS7YyAQ6w-LXAGpXpCfdDxQK2Mk3MJNt6bsT4tqmzlFgEcV9PCz5JvYvzLF6unYsv7Z1GqQa7tdwfX_YDHqP8xTdD3TfLPdCoxwe2sFi8vyBkhgpm-cTWmbKxoijFP2saRoEn8VIlnTcEjZ3aJzigJVaJea161AUkHV9aRUyXW7bq4OTGxx0XONb1vnzLEMHuemIn3ONxI86VlBk2-vI6iuRPtJ4hxtwkjr1cZlLCRebczkCAgnsdhDHCtOHfyNPa-1WEnjpYTGWNS3N4kVsA8X7Fkt2l2S3jqQUs-xXRzXEzUpaAL35jbRqL3ea4Lz8p_yaS5vUx9MTMqZDPyAIjK0lzrOSr-3sW0DkoW4wBD6u04IUj4zNjdz7jyZ0vQTC6TGjwHbRNL1N-Z3HIj5R-9PB6KnJtrm8507gh29-3u1TzUnxJrQWjmyEEBOdmdpu227y560SGnNzVP3m7Ld";
const Header = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
  Authorization: `Bearer {api_key}`,
};
const Product = async () => {
  //Lemon squeezy
  const response = await axios.get("https://api.lemonsqueezy.com/v1/products", {
    Header,
  });
  console.log(response);
  const product = {
    reviews: 4.6,
    reviewCount: 800,
    isBestSeller: true, // Best seller badge if needed
    isOnSale: true, // Sale flag
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
                src={urlFor(data.image[0]).url()}
                alt={data.name}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-primary">{data.name}</h1>
              <p className="text-lg text-muted-foreground">
                {data.description}
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
                    <span className="line-through text-gray-500">$20.00</span>
                    <span className="ml-2 text-red-600">${data.price}</span>
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
                <Link href="/Payment">
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
          keytext={`$${data.price}`}
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
