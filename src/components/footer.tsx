import Link from "next/link";
import Image from "next/image";
import React from "react";
import icon from "@/assets/icon.png";

const Footer = () => {
  return (
    <footer className="py-6 w-full shrink-0 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link className="flex items-center" href="#">
              <Image src={icon} width={50} height={50} alt={"Kinara Icon"} />
              <span className="ml-2 text-xl font-bold">UK Tasty</span>
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-2">
            <nav className="flex gap-4">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="/termsOfService"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="/privacyPolicy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="/paymentAndShippingPolicy"
              >
                Delivery And Shipping Policy
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              © 2024 UKTasty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
