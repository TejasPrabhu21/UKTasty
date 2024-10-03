import { Download } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full  bg-primary flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col justify-center space-y-4 max-w-2xl text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
              Get your favorite meals delivered!
            </h1>
            <p className="text-primary-foreground md:text-xl">
              Download our Android app now and enjoy delicious food from our
              restaurant, delivered right to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>
          </div>
          <div className="w-full flex justify-end max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="aspect-w-9 aspect-h-16 rounded-xl overflow-hidden">
              <video
                className="m-10 rounded-xl w-auto max-h-[600px] object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Demo video for our UK Tasty app"
              >
                <source src={"/demo.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <div className="aspect-w-9 aspect-h-16 rounded-xl overflow-hidden my-3 flex justify-center items-center">
              <iframe
                width="361"
                height="642"
                src="https://www.youtube.com/embed/mJSJcOYIdYA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
