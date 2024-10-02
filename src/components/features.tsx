import { Smartphone, Clock, Wallet } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          App Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "Easy to Use",
              description: "Intuitive interface for quick and easy ordering.",
            },
            {
              icon: Clock,
              title: "Fast Delivery",
              description: "Get your food delivered in 30 minutes or less.",
            },
            {
              icon: Wallet,
              title: "Easy to pay.",
              description:
                "App Supports UPI, Net Banking and many more paying options.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center p-4 rounded-lg"
            >
              <feature.icon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
