/** @format */

import Wrapper from "@/components/ui/Wrapper";
import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
export const metadata = {
  title: "Sharpening Your Brain Ebook",
  description:
    "Unlock the Secrets to Sharpening Your Mind for Success with Our Expert eBook",
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
