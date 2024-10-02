import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: 1,
              title: "Download the App",
              description: "Get our Android app from the Google Play Store.",
            },
            {
              step: 2,
              title: "Browse the Menu",
              description:
                "Select your favorite dishes from our extensive menu.",
            },
            {
              step: 3,
              title: "Enjoy Your Meal",
              description: "Receive your order and savor the delicious food!",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center p-4 rounded-lg"
            >
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
