/** @format */

import Wrapper from "@/components/ui/Wrapper";
import "./globals.css";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Head from 'next/head';

export const metadata = {
  title: "Master Next.js: Build Fast, Modern Web Apps",
  description:
    "Unlock the Secrets to Mastering Next.js and Building Fast, Scalable Web Apps with Our Expert eBook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '993633715938534');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=993633715938534&ev=PageView&noscript=1"
          />
        </noscript>
        <Navbar />
        {children}
        <Wrapper>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
