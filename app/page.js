/** @format */
import Wrapper from "@/components/ui/Wrapper";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Header from "@/components/ui/Header";
import Reviews from "./sections/Reviews";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";

const Home = () => {
  return (
    <main className="w-full h-auto mb-5">
      <Wrapper>
        <Hero />
        <Header title="Why Choose Our" keytext="&nbsp;Ebook?" />
        <Features />

        <Header title="What Our Users Are " keytext="Saying!" />
      </Wrapper>
      <Reviews />
      <Header title="Get Instant Access for Just " keytext="$20" />
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

export default Home;
