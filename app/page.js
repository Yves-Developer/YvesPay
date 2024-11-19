/** @format */

// Import your components
import Wrapper from "@/components/ui/Wrapper";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Header from "@/components/ui/Header";
import Reviews from "./sections/Reviews";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import { getData } from "./lib/FetchData"; // Import the data-fetching function

// Async function inside the component to fetch data
const Home = async () => {
  const data = await getData(); // Fetch data from Sanity on every request

  return (
    <main className="w-full h-auto mb-5">
      <Wrapper>
        <Hero />
        <Header title="Why Choose Our" keytext="&nbsp;Ebook?" />
        <Features />
        <Header title="What Our Users Are " keytext="Saying!" />
      </Wrapper>
      <Reviews />
      <Header title="Get Instant Access for Just " keytext={`$${data.price}`} />
      <Wrapper>
        <Pricing />
      </Wrapper>
      <Header title="Frequently Asked  " keytext="Questions." />
      <Wrapper>
        <Faq />
      </Wrapper>
    </main>
  );
};

// Revalidate setting in Next.js 15
export const revalidate = 10; // Revalidate every 10 seconds

export default Home;
