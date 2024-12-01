/** @format */

import Wrapper from "@/components/ui/Wrapper";
import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
export const metadata = {
  title: "Master Next.js: Build Fast, Modern Web Apps",
  description:
    "Unlock the Secrets to Mastering Next.js and Building Fast, Scalable Web Apps with Our Expert eBook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Wrapper>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
