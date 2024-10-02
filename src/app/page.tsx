import Footer from "@/components/footer";
import Cta from "@/components/cta";
import HowItWorks from "@/components/howItWorks";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero  */}
        <Hero />

        {/* Features  */}
        <Features />

        {/* How It Works */}
        <HowItWorks />

        {/* CTA  */}
        <Cta />
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
}
