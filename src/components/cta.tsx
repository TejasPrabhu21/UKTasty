import { Download, ArrowDown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section
      id="download"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary"
    >
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center ">
        <ArrowDown className="h-6 w-6 text-primary-foreground animate-bounce mt-4" />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground mb-4">
          Ready to order?
        </h2>
        <p className="mx-auto max-w-2xl text-primary-foreground md:text-xl mb-8">
          Download our Android app now and get 50% off your first order!
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download our Android app from Google Play Store (opens in a new window)"
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white w-64"
            >
              Download for Android
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-primary-foreground">
            Available on Google Play Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
