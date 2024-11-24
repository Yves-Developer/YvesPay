import React from "react";
import { Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assuming you have ShadCN Card components

const ContactPage = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-[#f3f3f3]">
      <div className="relative p-8 md:p-12 max-w-lg bg-white rounded-xl shadow-xl overflow-hidden w-full">
        <div className="absolute top-[-60px] right-[-60px] w-44 h-44 rounded-full bg-blue-300 opacity-30"></div>
        <div className="absolute bottom-[-60px] left-[-60px] w-32 h-32 rounded-lg bg-blue-300 opacity-30"></div>

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Got questions? We’re here to help! Reach out to us via email anytime.
          </p>

          {/* Contact Card: Email */}
          <Card className="text-center p-6 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-indigo-50 duration-300 ease-in-out mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800 flex justify-center items-center">
                <Mail className="text-5xl mr-4 text-blue-500 transition-all transform hover:scale-110 hover:text-blue-600 duration-200" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-4">
                For any inquiries, reach us at:
              </p>
              <a
                href="mailto:info@sharpbook.store"
                className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
              >
                info@sharpbook.store
              </a>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600">
              We’re excited to hear from you! Don’t hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
