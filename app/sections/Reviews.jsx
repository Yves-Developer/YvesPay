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
                "This ebook helped me understand chart patterns like never
                before!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – John D., Beginner Trader
              </p>
            </CardContent>
          </Card>

          {/* Review 2 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "The strategies are easy to follow and work right away!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Sarah T., Experienced Investor
              </p>
            </CardContent>
          </Card>

          {/* Review 3 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "Incredible value for the price. Highly recommend!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Mike S., Professional Trader
              </p>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
