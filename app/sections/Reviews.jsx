/** @format */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // ShadCN Card components
import Wrapper from "@/components/ui/Wrapper";
import React from "react";

const Reviews = () => {
  return (
    <section className="bg-[#f5f5fc] py-12">
      <Wrapper>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "This ebook gave me the tools to build modern, fast web apps!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Alex P., Front-End Developer
              </p>
            </CardContent>
          </Card>

          {/* Review 2 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "The tutorials were so easy to follow, and I built my first Next.js app in no time."
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Rachel W., Aspiring Web Developer
              </p>
            </CardContent>
          </Card>

          {/* Review 3 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "A game-changer for anyone serious about mastering Next.js!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Daniel M., Experienced Developer
              </p>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
