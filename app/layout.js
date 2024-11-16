/** @format */

import Wrapper from "@/components/ui/Wrapper";
import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
export const metadata = {
  title: "2024 Trading Chart Patterns Ebook",
  description:
    "Unlock the Secrets to Smart, Profitable Trading with Our Expert Guide",
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
