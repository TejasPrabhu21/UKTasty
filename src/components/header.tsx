"use client";
import Link from "next/link";
import React from "react";
import icon from "@/assets/icon.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-4 lg:px-6 py-4 bg-white shadow-sm sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src={icon}
            width={80}
            height={80}
            alt="Kinara Icon"
            className="w-12 h-12"
          />
          <span className="ml-2 text-xl md:text-2xl font-bold text-primary font-sans">
            UK Tasty
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {["Features", "How It Works", "Download"].map((item) => (
            <Link
              key={item}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          {["Features", "How It Works", "Download"].map((item) => (
            <Link
              key={item}
              className="block py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
