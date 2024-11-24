/** @format */
"use client";
import React, { useState } from "react";
import { ShoppingCart, User } from "lucide-react"; // Optional: icons for cart and user
import Wrapper from "@/components/ui/Wrapper";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <Wrapper>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-primary">
              <a href="/">
                <span className="text-foreground">Sharp</span>Book
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a href="/Product" className="text-gray-600 hover:text-primary">
                Product
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary">
                Contact
              </a>
            </div>

            {/* Cart & User (Desktop) */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/cart" className="relative">
                <ShoppingCart
                  size={24}
                  className="text-gray-600 hover:text-primary"
                />
                {/* Add cart item count here if necessary */}
              </a>
              <a href="https://sharpbook.sanity.studio" className="text-gray-600 hover:text-primary">
                <User size={24} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-primary focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 py-2 space-y-4">
              <a href="/" className="block text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/product"
                className="block text-gray-600 hover:text-primary"
              >
                Product
              </a>
              <a
                href="/contact"
                className="block text-gray-600 hover:text-primary"
              >
                Contact
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-primary"
              >
                <ShoppingCart size={24} />
              </a>
              <a
                href="https://sharpbook.sanity.studio"
                className="block text-gray-600 hover:text-primary"
              >
                <User size={24} />
              </a>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

export default Navbar;
