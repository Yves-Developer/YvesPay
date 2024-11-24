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
                "This ebook transformed how I think and make decisions!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – John D., Aspiring Learner
              </p>
            </CardContent>
          </Card>

          {/* Review 2 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "The techniques are simple and effective right from the start."
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Sarah T., Professional
              </p>
            </CardContent>
          </Card>

          {/* Review 3 */}
          <Card className="text-center p-6 bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                "I saw a noticeable improvement in my mental clarity and focus!"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                – Mike S., Busy Executive
              </p>
            </CardContent>
          </Card>
        </div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
