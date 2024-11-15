/** @format */

import { Button, buttonVariants } from "@/components/ui/button";
import Wrapper from "@/components/ui/Wrapper";
import Link from "next/link";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

const Home = () => {
  return (
    <main className="w-full h-auto mb-5">
      <Wrapper>
        <Hero />
        <Features />
      </Wrapper>
    </main>
  );
};

export default Home;
