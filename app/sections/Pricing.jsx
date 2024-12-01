/** @format */ 
// For the checkmark icon
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card"; // ShadCN imports
import { CheckCheck } from "lucide-react";
import Link from "next/link";

const ebookFeatures = [
  {
    icon: "🚀",
    title: "Master Next.js Features for Fast, Modern Web Apps",
  },
  {
    icon: "⚡",
    title: "Step-by-Step Tutorials for Real-World Projects",
  },
  {
    icon: "⚙️",
    title: "Performance Optimization Techniques for Speed",
  },
  {
    icon: "🌍",
    title: "Deployment Strategies for Scalability and Flexibility",
  },
];

const Pricing = () => {
  return (
    <section className="text-center py-12 bg-light">
      {/* Pricing Description */}
      <p className="text-lg mb-4 text-muted-foreground">
        A one-time purchase with lifetime access.
      </p>

      <div className="max-w-lg mx-auto">
        {/* Card component to display pricing information */}
        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader>
            {/* Card Title and Description */}
            <CardTitle className="text-2xl font-bold mb-2">
              What's Included:
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mb-4">
              A comprehensive guide to mastering Next.js with expert tips and techniques.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* List of Features */}
            <ul className="space-y-4">
              {ebookFeatures.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2 text-lg font-semibold text-gray-600"
                >
                  <CheckCheck />
                  {item.title}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            {/* Call to Action Button */}
            <button className="px-8 py-4 bg-primary text-white rounded-md text-lg mt-4 w-full">
              <Link href="/Product">Buy Now and Master Next.js</Link>
            </button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
