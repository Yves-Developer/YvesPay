/** @format */

import React from "react";
import { Mail } from "lucide-react"; // Lucide Mail icon
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Assuming you have ShadCN Card components

const ContactPage = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-200 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Got questions? We’re here to help! Reach out to us via email anytime.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid sm:grid-cols-1 gap-8">
          {/* Contact Card: Email */}
          <Card className="text-center p-6 bg-white shadow-xl rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-indigo-50 duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                <Mail className="text-5xl mb-4 text-blue-500 transition-all transform hover:scale-110 hover:text-blue-600 duration-200" />
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
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            We’re excited to hear from you! Don’t hesitate to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
