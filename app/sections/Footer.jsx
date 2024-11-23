/** @format */
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // ShadCN Card components
import { Button } from "@/components/ui/button"; // ShadCN Button component // Social Media Icons
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <Card className="bg-transparent border-none">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/Privacy-policy" className=" hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/Terms" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/Refund-policy" className="hover:text-primary">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/Cookie-policy" className="hover:text-primary">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card className="border-none">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f3f3f3] rounded-sm w-45 h-45 flex item-center justify-center"
                >
                  <Button
                    variant="link"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Twitter className="w-6 h-6" />
                  </Button>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f3f3f3] rounded-sm w-45 h-45 flex item-center justify-center"
                >
                  <Button
                    variant="link"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Facebook className="w-6 h-6" />
                  </Button>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f3f3f3] rounded-sm w-45 h-45 flex item-center justify-center"
                >
                  <Button
                    variant="link"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Instagram className="w-6 h-6" />
                  </Button>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f3f3f3] rounded-sm w-45 h-45 flex item-center justify-center"
                >
                  <Button
                    variant="link"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Copyright Section */}
          <Card className="border-none">
            <CardFooter className="text-center">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Company Name. All Rights
                Reserved.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
