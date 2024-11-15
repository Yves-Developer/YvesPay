/** @format */

import { Button, buttonVariants } from "@/components/ui/button";
import Wrapper from "@/components/ui/Wrapper";
import Link from "next/link";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <main className="w-full h-auto mb-5">
      <Wrapper>
        <Hero />
      </Wrapper>
    </main>
  );
};

export default Home;
